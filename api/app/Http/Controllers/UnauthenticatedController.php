<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Helper;
use Validator;
use App\Models\User;
use App\Models\Brands;
use App\Models\Country;
use App\Models\coupons;
use App\Models\Product;
use App\Models\Setting;
use App\Models\Sliders;
use App\Models\Category;
use App\Models\Packages;
use App\Models\Categorys;
use App\Models\SellerAds;
use App\Mail\ExampleEmail;
use App\Models\dealsbanner;
use Illuminate\Support\Str;
use App\Models\OrderHistory;
use function Ramsey\Uuid\v1;
use Illuminate\Http\Request;
use App\Models\AttributeValues;
//use User;
use App\Models\ProductCategory;

use App\Models\topHeaderBanner;
use App\Rules\MatchOldPassword;
use App\Models\ProductAttributes;
use PhpParser\Node\Stmt\TryCatch;
use App\Models\sliderSideAdsModel;
use App\Models\User as ModelsUser;
use App\Http\Controllers\Controller;
use App\Models\couponUseHistory;
use App\Models\ProductAdditionalImg;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Models\ProductAttributeValue;
use App\Models\ProductVarrientHistory;
use Illuminate\Database\QueryException;
use App\Models\HomeAroductSliderCategory;
use App\Models\product_warranty;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Workbench\App\Models\User as AppModelsUser;
use App\Models\BlogModel;
use App\Models\blogCategory;
use App\Models\Salary;

class UnauthenticatedController extends Controller
{
    protected $frontend_url;
    protected $userid;

    public function allCategory(Request $request)
    {
        $categories = Categorys::with('children.children.children.children.children')->where('status', 1)->get();
        return response()->json($categories);
    }

    public function findCategorys(Request $request)
    {

        $categories              = Categorys::select('id', 'name', 'slug')->where('slug', $request->slug)->where('status', 1)->first();
        $data['category_parent'] = Categorys::where('status', 1)
            ->limit(10)
            ->get();

        $newCategorySlug = $request->slug;
        $data['category_parent'] = Categorys::where('status', 1)
        ->limit(10)
        ->get();

        $newCategorySlug = $request->slug;
        $data['category_slugs'] = [];

        foreach ($data['category_parent'] as $category) {
            if (!in_array($category->slug, $data['category_slugs'])) {
                $data['category_slugs'][] = $category->slug;
            }
        }

        if (!in_array($newCategorySlug, $data['category_slugs'])) {
            $data['category_slugs'][] = $newCategorySlug;
        }

        $data['category_details'] = [];
        $uniqueCategoryNames = []; // Array to track unique names
        
        foreach ($data['category_parent'] as $category) {
            if (!in_array($category->name, $uniqueCategoryNames)) {
                $data['category_details'][] = [
                    'id' => $category->id,
                    'name' => $category->name,
                    'slug' => $category->slug,
                ];
                $uniqueCategoryNames[] = $category->name; // Add name to unique names array
            }
        }
        
        if ($categories && !in_array($categories->name, $uniqueCategoryNames)) {
            $data['category_details'][] = [
                'id' => $categories->id,
                'name' => $categories->name,
                'slug' => $categories->slug,
            ];
        }
        $data['category_name']   = isset($categories->name) ? $categories->name : '';
        $data['category_id']     = isset($categories->id) ? $categories->id : '';
        $data['categoryData']    = $data['category_details'];
        return response()->json($data);
    }
}
