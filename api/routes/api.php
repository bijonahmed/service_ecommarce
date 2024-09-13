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
use App\Http\Controllers\Documents\DocumentsController;
use App\Http\Controllers\Circumstances\CircumstancesController;
use App\Http\Controllers\Recruitment\RecruitmentController;
use App\Http\Controllers\Organogram\OrganogramController;
use App\Http\Controllers\Setting\SettingController;
use App\Http\Controllers\UnauthenticatedController;
use App\Http\Controllers\Leave\LeaveController;
use App\Http\Controllers\Manufacturer\ManufacturesController;
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
Route::group([
    'middleware' => 'api',
    'prefix' => 'user'
], function () {
    Route::get('allUsers', [UserController::class, 'AllUsersList']);
    Route::get('allemployeeType', [UserController::class, 'allemployeeType']);
    Route::get('employeeRow/{id}', [UserController::class, 'employeeRow']);
    Route::get('getEmployeeList', [UserController::class, 'getEmployeeList']);
    Route::post('saveEmployee', [UserController::class, 'saveEmployee']);
    Route::get('getDesignationList', [UserController::class, 'getDesignationList']);
    Route::post('saveDesignation', [UserController::class, 'saveDesignation']);
    Route::get('departmentCheck/{id}', [UserController::class, 'departmentCheck']);
    Route::get('designationCheck/{id}', [UserController::class, 'designationCheck']);
    Route::get('getDepartmentList', [UserController::class, 'getDepartmentList']);
    Route::get('typeofdoucments', [UserController::class, 'typeofdoucments']);
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
    Route::get('inactiveEmployee', [UserController::class, 'inactiveEmployee']);
    Route::post('saveCircumstances', [CircumstancesController::class, 'saveCircumstances']);
    Route::get('getCircumstancesList', [CircumstancesController::class, 'getCircumstancesList']);
    Route::get('circumstancesRow/{id}', [CircumstancesController::class, 'circumstancesRow']);
    Route::get('getEmpType/{id}', [CircumstancesController::class, 'getEmpType']);
    Route::get('chkContractAggData', [CircumstancesController::class, 'chkContractAggData']);
    Route::get('selectOrganisationProfile', [UserController::class, 'selectOrganisationProfile']);
    Route::post('organisationUpdateprofile', [UserController::class, 'organisationUpdateprofile']);
    Route::post('updateTopbanner', [UserController::class, 'updateTopbanner']);
    Route::post('updatebannerOne', [UserController::class, 'updatebannerOne']);
    Route::post('updatebannerTwo', [UserController::class, 'updatebannerTwo']);
    Route::post('updatebannerThree', [UserController::class, 'updatebannerThree']);
    Route::post('updatebannerFour', [UserController::class, 'updatebannerFour']);
    Route::post('updatebannerFive', [UserController::class, 'updatebannerFive']);
    Route::post('updateYAds', [UserController::class, 'updateYAds']);
    Route::post('getSellerAds', [UserController::class, 'getSellerAds']);
    Route::post('saveCard', [UserController::class, 'saveCard']);
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
    'middleware' => 'api',
    'prefix' => 'product'
], function () {

    Route::post('save', [ProductController::class, 'save']);
    Route::post('product-update', [ProductController::class, 'productUpdate']);
    Route::post('insertVarient', [ProductController::class, 'insertVarient']);
    Route::post('insertVarientGroup', [ProductController::class, 'insertVarientGroup']);
    Route::get('getProductList', [ProductController::class, 'getProductList']);
    Route::get('sellerProductList', [ProductController::class, 'sellerProductList']);
    Route::get('sellerOrderProductList', [ProductController::class, 'sellerOrderProductList']);
    Route::get('insertProductAttrAndValues', [ProductController::class, 'insertProductAttrAndValues']);
    Route::get('insertProductVarient', [ProductController::class, 'insertProductVarient']);
    Route::get('deleteValrient', [ProductController::class, 'deleteValrient']);
    Route::get('getAttrHistory/{id}', [ProductController::class, 'getAttrHistory']);
    Route::get('productrow/{id}', [ProductController::class, 'productrow']);
    Route::get('additionaIMagesDelete', [ProductController::class, 'additionaIMagesDelete']);
    Route::get('deleteCategory', [ProductController::class, 'deleteCategory']);
    Route::get('getVarientHistory', [ProductController::class, 'getVarientHistory']);
    Route::get('removeProducts/{id}', [ProductController::class, 'removeProducts']);
    Route::post('generate-combinations', [ProductController::class, 'generatecombinations']);
    Route::post('deleteVarient', [ProductController::class, 'deleteVarient']);
    Route::get('varient-list/{id}', [ProductController::class, 'varientList']);
    Route::get('checkAttribue', [ProductController::class, 'checkAttribue']);
    Route::post('addWarranty', [ProductController::class, 'addWarranty']);
    Route::get('addWarranty/{product_id}', [ProductController::class, 'getaddWarranty']);
    Route::get('deletewarranty/{id}', [ProductController::class, 'deletewarranty']);
});

Route::group([
    //'middleware' => 'api',
    'prefix' => 'manufacturers'
], function () {
    Route::post('save', [ManufacturesController::class, 'save']);
    Route::get('allmanufacturers', [ManufacturesController::class, 'allmanufacturers']);
    Route::get('manufacturersrow/{id}', [ManufacturesController::class, 'manufacturersrow']);
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
    'middleware' => 'api',
    'prefix' => 'documents'
], function () {
    Route::post('saveDocuments', [DocumentsController::class, 'saveDocuments']);
    Route::get('getAllDocuments', [DocumentsController::class, 'getAllDocuments']);
    Route::get('documents-row/{id}', [DocumentsController::class, 'editId']);
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

Route::group([
    //'middleware' => 'api',
    'prefix' => 'unauthenticate'
], function () {
    //Add to cart 
    Route::get('cart', [CartController::class, 'index']);
    Route::get('getCartData', [CartController::class, 'getCartData']);
    Route::post('addToCart', [CartController::class, 'addToCart']);
    Route::get('searchProductCategory', [UnauthenticatedController::class, 'productCategory']);
    Route::get('showCategoryTwo', [UnauthenticatedController::class, 'showCategoryTwo']);
    Route::get('showCategoryThree', [UnauthenticatedController::class, 'showCategoryThree']);
    Route::get('slidersImages', [UnauthenticatedController::class, 'slidersImages']);
    Route::get('topSellingProducts', [UnauthenticatedController::class, 'topSellProducts']);
    Route::get('limitedProducts', [UnauthenticatedController::class, 'limitedProducts']);
    Route::get('pagniatedProducts', [UnauthenticatedController::class, 'pagniatedProducts']);
    Route::get('filterCategorys', [UnauthenticatedController::class, 'filterCategory']);
    Route::get('getCategoryList', [UnauthenticatedController::class, 'allCategory']);
    Route::get('findCategorys/{slug}', [UnauthenticatedController::class, 'findCategorys']);
    Route::get('productSlug/{slug}', [UnauthenticatedController::class, 'findProductSlug']);
    Route::get('getSeller/{slug}', [UnauthenticatedController::class, 'getSeller']);
    Route::get('getSellerCategoryFilter/{id}', [UnauthenticatedController::class, 'getSellerCategoryFilter']);
    Route::post('forgetpassword', [UnauthenticatedController::class, 'forgetpassword']);
    Route::post('getresetPasswords', [UnauthenticatedController::class, 'getresetPasswords']);
    Route::post('updatePassword', [UnauthenticatedController::class, 'updatePassword']);
    Route::get('allsellers', [UnauthenticatedController::class, 'allsellers']);
    Route::get('countrylist', [UnauthenticatedController::class, 'countrylist']);
    Route::get('allbrandsList', [UnauthenticatedController::class, 'allbrandlist']);
    
    Route::get('allsellerList', [UnauthenticatedController::class, 'getallsellerList']);
    Route::get('allsellerListadmin', [UnauthenticatedController::class, 'allsellerListadmin']);

    Route::get('readcoupons', [UnauthenticatedController::class, 'featchcoupon']);
    Route::get('readcoupons/{code}', [UnauthenticatedController::class, 'getCoupon']);
    Route::post('couponDiscount', [UnauthenticatedController::class, 'getcouponDiscount']);
    Route::get('alldealsads', [UnauthenticatedController::class, 'getdealsbannersads']);
    Route::get('headerbanner', [UnauthenticatedController::class, 'getbanner']);  
    
    Route::get('getAdsbanner', [UnauthenticatedController::class, 'topadsbanner']);
    Route::get('brandproductList/{slug}', [UnauthenticatedController::class, 'getbrandproductList']);
    Route::get('speacialCategory', [UnauthenticatedController::class, 'getSpeacialCatList']);
    Route::get('checkAttribueDetails', [UnauthenticatedController::class, 'checkAttribueDetails']);
    Route::get('products/search', [UnauthenticatedController::class, 'search']);

    //blogs
    Route::get('blogs', [UnauthenticatedController::class, 'getblogs']);
    Route::get('blogCat', [UnauthenticatedController::class, 'blogCat']);
    Route::get('blogdetails', [UnauthenticatedController::class, 'blogdetails']);
    
    Route::get('getsalaryuser', [UnauthenticatedController::class, 'getsalaryuser']);
    Route::get('getsPackUser', [UnauthenticatedController::class, 'getsPackUser']);
});



Route::group([
    'middleware' => 'api',
    'prefix' => 'setting'
], function () {
    //emp type
    Route::post('insertEmployeeType', [SettingController::class, 'insertEmployeeType']);
    Route::get('getEmployeeTypeList', [SettingController::class, 'getEmployeeTypeList']);
    Route::get('checkrowEmpleeType/{id}', [SettingController::class, 'checkrowEmpleeType']);
    //pay group
    Route::post('insertPayGroup', [SettingController::class, 'insertPayGroup']);
    Route::get('getPayGroupList', [SettingController::class, 'getPayGroupList']);
    Route::get('checkrowPayGroup/{id}', [SettingController::class, 'checkrowPayGroup']);
   //salary
   Route::post('insertSalary', [SettingController::class, 'insertSalary']);
   Route::post('insertPack', [SettingController::class, 'insertPack']);
   Route::get('checkrowsallary/{id}', [SettingController::class, 'checkrowsallary']);
   Route::get('checkrowPack/{id}', [SettingController::class, 'checkrowPack']);
   Route::get('getsalary', [SettingController::class, 'getsalary']);
   Route::get('getPack', [SettingController::class, 'getPack']);

    //Annual Pay 
    Route::post('insertAnnualPay', [SettingController::class, 'insertAnnualPay']);
    Route::get('getAnnualPayist', [SettingController::class, 'getAnnualPayist']);
    Route::get('checkrowAnnualPay/{id}', [SettingController::class, 'checkrowAnnualPay']);
    //Bank Master
    Route::post('insertBankMaster', [SettingController::class, 'insertBankMaster']);
    Route::get('getBankMasterlist', [SettingController::class, 'getBankMasterlist']);
    Route::get('checkrowBankMaster/{id}', [SettingController::class, 'checkrowBankMaster']);
    //Bank Short Code 
    Route::post('insertBankCode', [SettingController::class, 'insertBankCode']);
    Route::get('getBankShortCodelist', [SettingController::class, 'getBankShortCodelist']);
    Route::get('checkrowBankShortCode/{id}', [SettingController::class, 'checkrowBankShortCode']);
    //Tax Master
    Route::post('insertTaxMaster', [SettingController::class, 'insertTaxMaster']);
    Route::get('gettxtMastlist', [SettingController::class, 'gettxtMastlist']);
    Route::get('checkrowtxtmaster/{id}', [SettingController::class, 'checkrowtxtmaster']);
    //Payment type
    Route::post('insertPaymentType', [SettingController::class, 'insertPaymentType']);
    Route::get('getPaymentType', [SettingController::class, 'getPaymentType']);
    Route::get('checkrowPaymenttype/{id}', [SettingController::class, 'checkrowPaymenttype']);
    //Wedges pay mode
    Route::post('insertWedges', [SettingController::class, 'insertWedges']);
    Route::get('getWdges', [SettingController::class, 'getWdges']);
    Route::get('checkrowWedges/{id}', [SettingController::class, 'checkrowWedges']);
    //Pay Item List 
    Route::post('insertPayItem', [SettingController::class, 'insertPayItem']);
    Route::get('getPayItemList', [SettingController::class, 'getPayItemList']);
    Route::get('checkPayItemRow/{id}', [SettingController::class, 'checkPayItemRow']);
    //Ads management  
    Route::get('bannerTopget', [SettingController::class, 'getbannerTop']);
    Route::post('bannerTop', [SettingController::class, 'updatebannerTop']);
    Route::post('dealsbannner', [SettingController::class, 'updatedealsbannner']);    
    Route::get('getdealsbanner', [SettingController::class, 'getdealsbanners']);
    Route::post('sliderLeftads', [SettingController::class, 'updatesliderLeftads']);  
    Route::get('getadsbannerreq', [SettingController::class , 'getadsbanner']);

    // coupons 
    Route::post('addcoupons', [SettingController::class, 'savecoupons']);
    Route::get('couponsList', [SettingController::class, 'couponsList']);
    Route::post('updatecoupon', [SettingController::class, 'updatecoupon']);
    Route::get('getcoupons/{id}', [SettingController::class, 'getcoupons']);

    // seller status 
    Route::get('editseller/{id}', [SettingController::class, 'editseller']);
    Route::post('updateSeller', [SettingController::class, 'updateSeller']);
    // sliders     
    Route::post('addslidersImages', [SettingController::class, 'saveslidersImages']);
    Route::post('deleteSlider', [SettingController::class, 'deleteSliderimage']);

    Route::post('companyProfile', [SettingController::class, 'updateCompanyProfile']);
    Route::get('getCompanyData', [SettingController::class, 'getProfileData']);
    Route::get('getcoupons', [SettingController::class, 'getcoupos']);

    
});






Route::group([
    'middleware' => 'api',
    'prefix' => 'holiday'
], function () {
    Route::get('getholidaylist', [LeaveController::class, 'getholidaylist']);
    Route::get('chkholidayrow/{id}', [LeaveController::class, 'chkholiDayRow']);
    Route::post('createEditHoliday', [LeaveController::class, 'createEditHoliday']);
    Route::post('createEditHolidayList', [LeaveController::class, 'createEditHolidayList']);
    Route::get('getHolidayAllList', [LeaveController::class, 'getHolidayAllList']);
    Route::get('chkleadlistId/{id}', [LeaveController::class, 'chkleadlistId']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'leave'
], function () {
    Route::post('createEditLeaveAllocation', [LeaveController::class, 'createEditLeaveAllocation']);
    Route::post('createEditLeavType', [LeaveController::class, 'createEditLeavType']);
    Route::get('getLeaveTypeList', [LeaveController::class, 'getLeaveTypeList']);
    Route::get('getLeaveRequestList', [LeaveController::class, 'getLeaveRequestList']);
    Route::get('leaveTyperow/{id}', [LeaveController::class, 'leaveTyperow']);
    Route::get('requestRowCheck/{id}', [LeaveController::class, 'requestRowCheck']);
    Route::post('createEditLeaveRule', [LeaveController::class, 'createEditLeaveRule']);
    Route::post('leaveRequestUpdate', [LeaveController::class, 'leaveRequestUpdate']);
    Route::get('getLeaveRuleList', [LeaveController::class, 'getLeaveRuleList']);
    Route::get('leaveRulerow/{id}', [LeaveController::class, 'leaveRulerow']);
    Route::get('leaveAllocationRow/{id}', [LeaveController::class, 'leaveAllocationRow']);
    Route::get('getLeaveRulesCheck', [LeaveController::class, 'getLeaveRulesCheck']);
    Route::get('getLeaveAllocatedList', [LeaveController::class, 'getLeaveAllocationList']);
    Route::get('getLeaveBalanceReport', [LeaveController::class, 'getLeaveBalanceReport']);
    Route::get('getLeaveReport', [LeaveController::class, 'getLeaveReport']);
    Route::get('getleaveApprovalList', [LeaveController::class, 'getleaveApprovalList']);
    Route::post('createEditLeaveRequest', [LeaveController::class, 'createEditLeaveRequest']);
    Route::get('leaveApprovalRequestRow/{id}', [LeaveController::class, 'leaveApprovalRequestRow']);
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
Route::group([
    'middleware' => 'api',
    'prefix' => 'salary'
], function () {  //
    Route::post('addSalary', [blogController::class, 'addSalary']);
    Route::get('salarylist', [blogController::class, 'salarylist']);
    Route::get('salarydetails/{id}', [blogController::class, 'salarydata']);
    Route::post('update', [blogController::class, 'updates']);
});