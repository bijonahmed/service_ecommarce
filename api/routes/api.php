<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\blogController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Gig\GigController;
use App\Http\Controllers\Setting\SettingController;
use App\Http\Controllers\UnauthenticatedController;
use App\Http\Controllers\Brands\BrandsController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Cart\CartController;
use App\Http\Controllers\Order\OrderController;
use App\Http\Controllers\Chat\ChatController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('messages', [ChatController::class, 'message']);
Route::post('customerSendMessages', [ChatController::class, 'customerSendMessages']); 
Route::post('sellerSendMessages', [ChatController::class, 'sellerSendMessages']); 
Route::get('/messages/{community_slug}', [ChatController::class, 'getMessages']);
Route::get('/getSellerMessages/{seller_id}', [ChatController::class, 'getSellerMessages']);
Route::get('/getBuyListForSeller', [ChatController::class, 'getBuyerList']);
Route::get('/getSellerList', [ChatController::class, 'getSellerList']);



Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('registerSeller', [AuthController::class, 'registerSeller']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('profile', [AuthController::class, 'profile']);
    Route::post('updateLogo', [AuthController::class, 'updateLogo']);
    Route::post('updateprofile', [AuthController::class, 'updateprofile']);
    Route::post('updateprofileFrontend', [AuthController::class, 'updateprofileFrontend']);
    Route::post('updateBusinessprofile', [AuthController::class, 'updateBusinessprofile']);
    Route::post('updatePassword', [AuthController::class, 'changesPassword']);

    Route::get('showProfileData', [AuthController::class, 'showProfileData']);

    Route::post('password/email', [ForgotPasswordController::class, 'sendPasswordResetEmail']);
    Route::post('password/reset', [ResetPasswordController::class, 'updatePassword']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'customer'
], function () {

    Route::get('getmlmReport', [CustomerController::class, 'getmlmReport']);
    Route::get('cateCommissionHistReport', [CustomerController::class, 'cateCommissionHistReport']);
    Route::get('getCustomerLevel', [CustomerController::class, 'getCustomerLevel']);
    Route::post('getCustomerAllLevel', [CustomerController::class, 'getCustomerAllLevel']);
    Route::post('getCustomerCalculateLev', [CustomerController::class, 'getCustomerCalculateLev']);
    Route::post('getCustomerCalculateLevAd', [CustomerController::class, 'getCustomerCalculateLevAd']);
    Route::post('saveLead', [CustomerController::class, 'saveLead']);
    Route::post('saveCustomer', [CustomerController::class, 'saveCustomer']);
    Route::get('allCustomers', [CustomerController::class, 'allCustomers']);
    Route::get('allleadList', [CustomerController::class, 'allleadList']);
    Route::get('getCustomerRow/{id}', [CustomerController::class, 'checkCustomer']);
    Route::get('getLeadRow/{id}', [CustomerController::class, 'checkLead']);
});




Route::group(['prefix' => 'gig' ], function () {
    Route::post('createGig', [GigController::class, 'createGig']);
    Route::get('deleteGig', [GigController::class, 'deleteGig']);
    Route::get('getGigHistory', [GigController::class, 'getGigHistory']);

});



Route::group([
    'middleware' => 'api',
    'prefix' => 'user'
], function () {
    Route::get('allUsers', [UserController::class, 'AllUsersList']);
    Route::get('allprofession', [UserController::class, 'allProfessionList']);
    Route::get('allemployeeType', [UserController::class, 'allemployeeType']);
    Route::get('employeeRow/{id}', [UserController::class, 'employeeRow']);
    Route::get('getEmployeeList', [UserController::class, 'getEmployeeList']);
    Route::post('saveEmployee', [UserController::class, 'saveEmployee']);
    Route::get('getDesignationList', [UserController::class, 'getDesignationList']);
    Route::post('saveDesignation', [UserController::class, 'saveDesignation']);
    Route::get('departmentCheck/{id}', [UserController::class, 'departmentCheck']);
    Route::get('designationCheck/{id}', [UserController::class, 'designationCheck']);
    Route::get('getDepartmentList', [UserController::class, 'getDepartmentList']);
   // Route::get('typeofdoucments', [UserController::class, 'typeofdoucments']);
    Route::post('saveDepartment', [UserController::class, 'saveDepartment']);
    Route::post('changePassword', [UserController::class, 'changePassword']);
    Route::post('saveUser', [UserController::class, 'saveUser']);
    Route::post('assignToUser', [UserController::class, 'assignToUser']);
    Route::post('saveRole', [UserController::class, 'saveRole']);
    Route::get('getRoleList', [UserController::class, 'getRoleList']);
    Route::get('roleCheck/{id}', [UserController::class, 'roleCheck']);
    Route::get('getUserRow/{id}', [UserController::class, 'editUserId']);
    Route::get('getCountry', [UserController::class, 'getCountry']);
    Route::get('getTime', [UserController::class, 'getTime']);
    Route::get('cardlist/{id}', [UserController::class, 'getCard']);
    Route::get('blogs', [UserController::class,'getblogs']);
});
Route::group([
   // 'middleware' => 'api',
    'prefix' => 'category'
], function () {
    Route::post('save', [CategoryController::class, 'save']);
    Route::post('categoryProSlidersave', [CategoryController::class, 'categoryProSlidersave']);
    Route::post('saveAttribute', [CategoryController::class, 'saveAttribute']);
    Route::post('saveAttributeVal', [CategoryController::class, 'saveAttributeVal']);
    Route::get('getCategoryList', [CategoryController::class, 'allCategory']);
    Route::get('getSpeacialCategoryList', [CategoryController::class, 'getSpeacialCategoryList']);
   
    Route::get('getInacCategoryList', [CategoryController::class, 'allInacCategory']);
    Route::get('getProductCategoryList', [CategoryController::class, 'getProductCategoryList']);
    Route::get('removeProctCategory', [CategoryController::class, 'removeProctCategory']);
    Route::get('categoryRow/{id}', [CategoryController::class, 'findCategoryRow']);
    Route::get('getCategoryListParent', [CategoryController::class, 'getCategoryListParent']);
    Route::get('getSubCategoryChild/{id}', [CategoryController::class, 'getSubCategoryChild']);
    Route::get('attributeRow/{id}', [CategoryController::class, 'attributeRow']);
    Route::get('attributeValRow/{id}', [CategoryController::class, 'attributeValRow']);
    Route::get('attributeValRows/{attributes_id}', [ProductController::class, 'attributeValRows']);
    Route::get('search', [CategoryController::class, 'searchCategory']);
    Route::get('attributes', [CategoryController::class, 'getAttribute']);
    Route::get('attributes-list', [CategoryController::class, 'getAttributeList']);
    Route::get('attributes-val-list', [CategoryController::class, 'getAttributeValList']);    
    Route::post('speacialCatSave', [CategoryController::class, 'speacialCatSave']); 
});




Route::group([
    //'middleware' => 'api',
    'prefix' => 'brands'
], function () {
    Route::post('save', [BrandsController::class, 'save']);
    Route::post('update', [BrandsController::class, 'update']);
    Route::get('allbrandlist', [BrandsController::class, 'allbrandlist']);
    Route::get('brandrow/{id}', [BrandsController::class, 'brandrow']);
    // Route::get('searchmodels', [BrandsController::class, 'searchmodels']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'project'
], function () {
    Route::post('saveTask', [ProjectController::class, 'saveTask']);
    Route::post('saveProject', [ProjectController::class, 'save']);
    Route::get('allProject', [ProjectController::class, 'allProject']);
    Route::get('geTaskList', [ProjectController::class, 'geTaskList']);
    Route::get('checkProjectId/{id}', [ProjectController::class, 'editId']);
    Route::get('taskRow/{id}', [ProjectController::class, 'editTaskId']);
});
 
Route::group([
    'prefix' => 'order'
], function () {
    //Add to cart 
    Route::post('submitOrder', [OrderController::class, 'submitOrder']);
    Route::get('getOrder', [OrderController::class, 'getOrder']);
    Route::get('allOrders', [OrderController::class, 'allOrders']);
    Route::get('orderDetails/{orderid}', [OrderController::class, 'orderDetails']);
    Route::post('updateOrderStatus', [OrderController::class, 'updateOrderStatus']);
    Route::get('addtowish/{slug}', [OrderController::class, 'addtowish']);
    Route::get('allWishList/', [OrderController::class, 'allWishList']);
    Route::get('removeWishList/{productid}', [OrderController::class, 'removeWishList']);
    Route::get('orderStatus', [OrderController::class, 'orderStatus']);
    Route::get('orderStatusRow/{id}', [OrderController::class, 'orderStatusRow']);
    Route::post('save_order', [OrderController::class, 'save_order']);
    Route::get('allOrdersAdmin', [OrderController::class, 'allOrdersAdmin']);
    Route::post('update_order_status', [OrderController::class, 'update_order_status']);
    Route::post('orderTrack', [OrderController::class, 'orderTrackadd']);
    Route::get('orderTrackList/{orderid}', [OrderController::class, 'orderTrackaddList']);
});

Route::group([ 'prefix' => 'unauthenticate' ], function () {
    Route::get('getFindCategorys', [UnauthenticatedController::class, 'getFindCategorys']);
    Route::get('getSubCategoryList', [UnauthenticatedController::class, 'getSubCategoryList']);
    Route::get('getCategoryList', [UnauthenticatedController::class, 'allCategorys']);
    Route::get('filterCategoryesSlug', [UnauthenticatedController::class, 'filterCategoryesSlug']);
    Route::get('findCategorys', [UnauthenticatedController::class, 'findCategorys']);
    Route::get('findgig', [UnauthenticatedController::class, 'findgig']);
    Route::get('userSearch', [UnauthenticatedController::class, 'userSearch']);
     Route::get('getAllcountrys', [UnauthenticatedController::class, 'getCountry']);
});



Route::group([
    'middleware' => 'api',
    'prefix' => 'setting'
], function () {
    // sliders     
    Route::post('addslidersImages', [SettingController::class, 'saveslidersImages']);
    Route::post('deleteSlider', [SettingController::class, 'deleteSliderimage']);

    Route::post('companyProfile', [SettingController::class, 'updateCompanyProfile']);
    Route::get('getCompanyData', [SettingController::class, 'getProfileData']);
    Route::get('getcoupons', [SettingController::class, 'getcoupos']);

    
});


 
Route::group([
    'middleware' => 'api',
    'prefix' => 'blog'
], function () {  //blog-details
    Route::post('newblogcat', [blogController::class, 'newblogcat']);
    Route::get('blogcatlist', [blogController::class, 'blogcatlist']);
    Route::get('adminblogcatlist', [blogController::class, 'adminblogcatlist']);
    Route::get('blogCatdetails/{slug}', [blogController::class, 'blogCatdetails']);
    Route::post('updateBlogCat', [blogController::class, 'updateBlogCat']);

    //updateBlog
    Route::post('add-newblog', [blogController::class, 'addblog']);
    Route::get('bloglist', [blogController::class, 'bloglist']);
    Route::get('blog-details/{slug}', [blogController::class, 'blogDetails']);
    Route::post('updateBlog', [blogController::class, 'updateBlog']);
});
 