<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Helper;
use Validator;
use App\Models\User;
use App\Models\Categorys;
use App\Models\GigImagesHistory;

use function Ramsey\Uuid\v1;
use Illuminate\Http\Request;
use App\Models\AttributeValues;
use App\Models\Category;
use App\Models\Country;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use App\Models\Gig;
use PhpParser\Node\Stmt\TryCatch;

class UnauthenticatedController extends Controller
{
    protected $frontend_url;
    protected $userid;

    public function allCategorys(Request $request)
    {
        $categories = Categorys::with('children.children.children.children.children')->where('status', 1)->get();
        return response()->json($categories);
    }

    public function getCountry()
    {

        try {
            $countrys = Country::where('status', 1)->get();
            return response()->json([
                'status' => 'success',
                'message' => 'Countries retrieved successfully',
                'data' => $countrys
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to retrieve countries',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function allCategory(Request $request)
    {
        $searchtxt = $request->searchtxt;
        $categories = Categorys::where('status', 1)
            ->where(function ($query) use ($searchtxt) {
                $query->where('name', 'LIKE', '%' . $searchtxt . '%'); // Add more fields as necessary
            })
            ->get();
        return response()->json($categories);
    }

    public function userSearch(Request $request)
    {

        $search = $request->slug;
        $page = $request->page;

        $filterData = Gig::where(function ($query) use ($search) {
            $query->where('gig.name', 'LIKE', '%' . $search . '%')
                ->orWhere('gig.gig_description', 'LIKE', '%' . $search . '%')
                ->orWhere('gig.basic_description', 'LIKE', '%' . $search . '%')
                ->orWhere('gig.stn_descrition', 'LIKE', '%' . $search . '%')
                ->orWhere('gig.premium_description', 'LIKE', '%' . $search . '%');
        })
            ->join('users', 'gig.user_id', '=', 'users.id')
            ->join('categorys', 'gig.category_id', '=', 'categorys.id')
            ->join('country', 'users.country_1', '=', 'country.id')
            ->select(
                'gig.*',
                'users.name as user_name',
                'users.email as user_email',
                'users.image as freelancer_images',
                'users.created_at as join_date',
                'users.profession_name',
                'categorys.id as category_id',
                'categorys.name as category_name',
                'country.id as country_id',
                'country.countryname as countryname'
            )
            ->paginate(12);

        $data = [];
        foreach ($filterData as $v) {
            $data[] = [
                'id'                => $v->id,
                'user_id'           => $v->user_id,
                'name'              => $v->name,
                'gig_slug'          => $v->gig_slug,
                'user_name'         => $v->user_name,
                'price'             => $v->price,
                'thumbnail_images'  => !empty($v->thumbnail_images) ? url($v->thumbnail_images) : "",
                'freelancer_images' => !empty($v->freelancer_images) ? url($v->freelancer_images) : "",

            ];
        }

        try {
            return response()->json([
                'data' => $data,
                'pagination' => [
                    'total' => $filterData->total(),
                    'per_page' => $filterData->perPage(),
                    'current_page' => $filterData->currentPage(),
                    'last_page' => $filterData->lastPage(),
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function filterCategoryesSlug(Request $request)
    {

        $categories              = Categorys::select('id', 'name', 'slug')->where('slug', $request->slug)->where('status', 1)->first();
        $categoryID              = isset($categories->id) ? $categories->id : '';

        try {
            $rows                = Gig::where('category_id', $categoryID)
                ->where('gig.status', 1)
                ->join('users', 'gig.user_id', '=', 'users.id')
                ->select('gig.*', 'users.name as user_name', 'users.email as user_email', 'users.image as freelancer_images')
                ->orderBy('gig.id', 'desc') 
                ->paginate(20);

            $data = [];
            foreach ($rows as $v) {
                $data[] = [
                    'id'                => $v->id,
                    'user_id'           => $v->user_id,
                    'name'              => $v->name,
                    'gig_slug'          => $v->gig_slug,
                    'price'             => $v->price,
                    'thumbnail_images'  => !empty($v->thumbnail_images) ? url($v->thumbnail_images) : "",
                    'freelancer_images' => !empty($v->freelancer_images) ? url($v->freelancer_images) : "",

                ];
            }
            return response()->json([
                'data' => $data,
                'pagination' => [
                    'total' => $rows->total(),
                    'per_page' => $rows->perPage(),
                    'current_page' => $rows->currentPage(),
                    'last_page' => $rows->lastPage(),
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function getSubCategoryList(Request $request)
    {

        $categoryId = $request->categoryId;
        try {
            // Fetch subcategories where parent_id matches the categoryId and status is active (1)
            $chk = Categorys::where('parent_id', $categoryId)
                ->where('status', 1)
                ->get();
                
        return response()->json([
                'status' => 'success',
                'data' => $chk
            ], 200);
        } catch (\Exception $e) {
            // Handle any exceptions or errors
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong: ' . $e->getMessage()
            ], 500);
        }
    }
    public function getFindCategorys()
    {

        $categories = Categorys::where('status', 1)->limit(10)->get();
        return response()->json($categories);
    }
    public function findgig(Request $request)
    {

        $userRecords = Gig::where('gig_slug', $request->slug)
            ->where('gig.status', 1)
            ->join('users', 'gig.user_id', '=', 'users.id')
            ->join('categorys', 'gig.category_id', '=', 'categorys.id')
            ->join('country', 'users.country_1', '=', 'country.id')
            ->select(
                'gig.*',
                'users.name as user_name',
                'users.email as user_email',
                'users.image as freelancer_images',
                'users.created_at as join_date',
                'users.profession_name',
                'categorys.id as category_id',
                'categorys.name as category_name',
                'country.id as country_id',
                'country.countryname as countryname'
            )
            ->first();

        $imagesgrows   = GigImagesHistory::where('gig_id', $userRecords->id)->get();

        $imgrows = [];
        foreach ($imagesgrows as $v) {
            $imgrows[] = [
                'id'                => $v->id,
                'image_path'  => !empty($v->image_path) ? url($v->image_path) : "",
            ];
        }

        $data = [
            'user_id'               => $userRecords->user_id ?? "",
            'category_id'           => $userRecords->category_id ?? "",
            'subcategory_id'        => $userRecords->subcategory_id ?? "",
            'insubcategory_id'      => $userRecords->insubcategory_Id ?? "",
            'name'                  => $userRecords->name ?? "",
            'gig_slug'              => $userRecords->gig_slug ?? "",
            'thumbnail_images'      => isset($userRecords->thumbnail_images) ? url($userRecords->thumbnail_images) : "",
            'types'                 => $userRecords->types ?? "",
            'gig_description'       => $userRecords->gig_description ?? "",
            'price'                 => $userRecords->price ?? 0,
            'delivery_day'          => $userRecords->delivery_day ?? 0,
            'basic_price'           => $userRecords->basic_price ?? 0,
            'basic_description'     => $userRecords->basic_description ?? "",
            'basic_delivery_days'   => $userRecords->basic_delivery_days ?? 0,
            'source_file'           => $userRecords->source_file ?? "",
            'standard_price'        => $userRecords->standard_price ?? 0,
            'stn_description'       => $userRecords->stn_descrition ?? "",
            'stn_delivery_days'     => $userRecords->stn_delivery_days ?? 0,
            'stn_source_file'       => $userRecords->stn_source_file ?? "",
            'premium_price'         => $userRecords->premium_price ?? 0,
            'premium_description'   => $userRecords->premium_description ?? "",
            'premium_delivery_days' => $userRecords->premium_delivery_days ?? 0,
            'premium_source_file'   => $userRecords->premium_source_file ?? "",
            'status'                => $userRecords->status ?? 0,
            'created_at'            => $userRecords->created_at ?? null,
            'updated_at'            => $userRecords->updated_at ?? null,
            'user_name'             => $userRecords->user_name ?? "",
            'user_email'            => $userRecords->user_email ?? "",
            'countryname'           => $userRecords->countryname ?? "",
            'freelancer_images'     => isset($userRecords->freelancer_images) ? url($userRecords->freelancer_images) : "",
            'category_name'         => $userRecords->category_name ?? "",
            'language_name'         => $userRecords->language_name ?? "",
            'language_type'         => $userRecords->language_type ?? "",
            'profession_name'       => $userRecords->profession_name ?? "",
            'join_date'             => date("d-M-Y", strtotime($userRecords->join_date)) ?? "",
        ];

        try {
            return response()->json([
                'data'        => $data,
                'galleryImgs' => $imgrows,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
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
