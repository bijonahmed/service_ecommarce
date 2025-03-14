<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Helper;
use Validator;
use App\Models\Gig;
use App\Models\Post;
use App\Models\User;
use App\Models\Order;
use App\Models\Skills;
use App\Models\Country;
use App\Models\Setting;
use App\Models\Category;
use App\Models\Categorys;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Profession;
use App\Models\BuyerReview;
use App\Models\Certificate;
use App\Models\SellerReview;
use function Ramsey\Uuid\v1;
use Illuminate\Http\Request;
use App\Models\AttributeValues;
use App\Models\GigImagesHistory;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Stripe\Stripe;
use Stripe\Webhook;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\Log;


class UnauthenticatedController extends Controller
{
    protected $frontend_url;
    protected $userid;


    public function handleWebhook(Request $request)
    {
        Log::info('handleWebhook method calling.');

        // Set Stripe API key
        Stripe::setApiKey(config('services.stripe.secret'));

        // Get raw payload and signature from the request
        $payload = $request->getContent();
        $sigHeader = $request->header('Stripe-Signature');
        $endpointSecret = config('services.stripe.webhook_secret');

        try {
            // Verify the webhook signature
            $event = Webhook::constructEvent($payload, $sigHeader, $endpointSecret);

            if ($event->type === 'checkout.session.completed') {
                $session = $event->data->object;
                $paymentIntent = PaymentIntent::retrieve($session->payment_intent);

                Log::info('Payment successful. Payment Intent ID: ' . $paymentIntent->id);
            }

            return response()->json(['message' => 'Webhook received'], 200);
        } catch (\Exception $e) {
            Log::error('Webhook error: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }




    public function allCategorys(Request $request)
    {
        // $categories = Categorys::with('children.children.children')->where('status', 1)->get();
        // return response()->json($categories);
        try {
            $categories = Categorys::with('children.children.children')
                ->where('status', 1)
                ->where('parent_id', 0) // Fetch only top-level categories
                ->get();
            return response()->json($categories);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function allCategoryActiveStatus(Request $request)
    {
        try {
            $categories = Categorys::where('status', 1)->orderBy('id', 'desc')->get();
            // dd($categories);
            return response()->json(
                $categories
            );
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function allActiveCategory(Request $request)
    {
        try {
            $categories = Categorys::where('status', 1)->limit(50)->orderBy('id', 'desc')->get();
            // dd($categories);
            return response()->json(
                $categories
            );
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function checkContent(Request $request)
    {

        //dd($request->all());
        $post_id        = $request->post_id;
        $category_id    = $request->category_id;
        $records        = Post::where('id', $post_id)->where('categoryId', $category_id)->get();


        $serviceList = [];
        foreach ($records as $v) {
            $serviceList[] = [
                'name' => !empty($v->name) ? $v->name : "",
                'description_full' => !empty($v->description_full) ? $v->description_full  : "",
            ];
        }


        return response()->json($serviceList);
    }

    public function checkGetList(Request $request)
    {
        //dd($request->all());
        $chk        = Gig::where('gig_slug', $request->gig_slug)->first();
        $seller_id  = !empty($chk->user_id) ? $chk->user_id : "";
        $result     = SellerReview::where('seller_id', $seller_id)
            ->select('seller_review.*', 'users.name', 'users.image')
            ->join('users', 'seller_review.buyer_id', '=', 'users.id')->get();

        $reviewList = [];
        foreach ($result as $v) {
            $reviewList[] = [
                'id'                => $v->id,
                'user_id'           => $v->user_id,
                'name'              => $v->name,
                'rating'            => $v->rating,
                'rev'               => $v->review,
                'created_at'        => date("d-M-Y", strtotime($v->created_at)),
                'image'             => !empty($v->image) ? url($v->image) : "",
            ];
        }
        return response()->json($reviewList);
    }

    public function getPublic(Request $request)
    {
        $row            =  User::where('slug', $request->slug)->select('name', 'id', 'slug', 'email', 'image', 'created_at', 'country_1', 'introduce_yourself', 'profession_name')->first();
        $professionId   =  !empty($row->profession_name) ? (int)$row->profession_name : "";
        $professionRow  =  Profession::where('id', $professionId)->first();
        $professionName =  $professionRow->name ?? "";

        $filterData = Gig::where('user_id', $row->id)
            ->where('gig.status', 1)
            ->join('users', 'gig.user_id', '=', 'users.id')
            ->join('categorys', 'gig.category_id', '=', 'categorys.id')
            ->join('country', 'users.country_1', '=', 'country.id')
            ->select(
                'gig.*',
                'users.name as user_name',
                'users.email as user_email',
                'users.slug as sellerSlug',
                'users.image as freelancer_images',
                'users.created_at as join_date',
                'users.profession_name',
                'categorys.id as category_id',
                'categorys.name as category_name',
                'country.id as country_id',
                'country.countryname as countryname'
            )
            ->get();

        $gigList = [];
        foreach ($filterData as $v) {
            $gigList[] = [
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

        $row                = User::where('slug', $request->slug)->select('name', 'id', 'slug', 'email', 'image', 'created_at', 'country_1', 'introduce_yourself')->first();
        $chkCountry         = Country::where('id', $row->country_1)->first();


        $review             = BuyerReview::where('buyer_id', $row->id)->get();
        $result             = BuyerReview::where('buyer_id', $row->id)
            ->select('buyer_review.*', 'users.name', 'users.image', 'users.slug')
            ->join('users', 'buyer_review.seller_id', '=', 'users.id')->get();

        $reviewList = [];
        foreach ($result as $v) {
            $reviewList[] = [
                'id'                => $v->id,
                'user_id'           => $v->user_id,
                'name'              => $v->name,
                'slug'              => $v->slug,
                'rating'            => $v->rating,
                'rev'               => $v->review,
                'created_at'        => date("d-M-Y", strtotime($v->created_at)),
                'image'             => !empty($v->image) ? url($v->image) : "",
            ];
        }
        //return response()->json($reviewList);
        $response = [
            'gigList'             => $gigList,
            'review'              => $reviewList,
            'name'                => $row->name,
            'email'               => $row->email,
            'joindate'            => date("d-M-Y", strtotime($row->created_at)),
            'countryName'         => $chkCountry->countryname,
            'image'               => !empty($row->image) ? url($row->image) : "",
            'introduce_yourself'  => $row->introduce_yourself,
            'profName'            => $professionName,
            'message' => 'success'
        ];

        return response()->json($response, 200);
    }

    public function getExperience(Request $request)
    {
        $slugData = User::where('slug', $request->slug)->first();
        try {
            $data['expdata'] = Experience::where('user_id', $slugData->id)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve skills. Please try again later.'], 500);
        }
    }

    public function geteducation(Request $request)
    {
        $slugData = User::where('slug', $request->slug)->first();
        try {
            $data['euddata'] = Education::where('user_id', $slugData->id)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve skills. Please try again later.'], 500);
        }
    }

    public function getCertificate(Request $request)
    {
        $slugData = User::where('slug', $request->slug)->first();
        try {
            $data['certificatedata'] = Certificate::where('user_id', $slugData->id)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve skills. Please try again later.'], 500);
        }
    }

    public function skillsData(Request $request)
    {

        $slugData = User::where('slug', $request->slug)->first();
        try {
            $data['skillsdata'] = Skills::where('user_id', $slugData->id)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve skills. Please try again later.'], 500);
        }
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

    public function filterallCategory(Request $request)
    {
        $searchtxt = $request->searchtxt;
        $categories = Categorys::where('status', 1)
            ->where(function ($query) use ($searchtxt) {
                $query->where('name', 'LIKE', '%' . $searchtxt . '%'); // Add more fields as necessary
            })
            ->get();
        return response()->json($categories);
    }





    public function userSearch($slug)
    {
        //  dd($slug);

        $search = $slug;
        // $page = $request->page;
        $keywords = explode(' ', $search); // Split search input into keywords

        $filterData = Gig::where(function ($query) use ($keywords) {
            foreach ($keywords as $keyword) {
                $query->orWhere('gig.name', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('gig.gig_description', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('gig.basic_description', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('gig.stn_descrition', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('gig.premium_description', 'LIKE', '%' . $keyword . '%');
            }
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
            $rows = Gig::where('gig.status', 1)
                ->join('users', 'gig.user_id', '=', 'users.id')
                ->select(
                    'gig.*',
                    'users.name as user_name',
                    'users.email as user_email',
                    'types',
                    'users.image as freelancer_images',
                    'users.slug as sellerSlug'
                )
                ->where(function ($query) use ($categoryID) {
                    $query->where('category_id', $categoryID)
                        ->orWhere('subcategory_id', $categoryID)
                        ->orWhere('insubcategory_id', $categoryID);
                })
                ->inRandomOrder() // ✅ Ensure this is before paginate()
                ->paginate(20);

            $data = [];
            foreach ($rows as $v) {
                $completeOrder =  Order::where('sellerId', $v->user_id)->where('order_status', 5)->count('order_status');
                $seller_review =  SellerReview::where('seller_id', $v->user_id)->count('id');
                $totaStar      =  SellerReview::where('seller_id', $v->user_id)->sum('rating');

                $calculatedReview = ($seller_review > 0) ? ($totaStar / $seller_review) : 0;

                $data[] = [
                    'id'                => $v->id,
                    'user_id'           => $v->user_id,
                    'name'              => $v->name,
                    'user_name'         => $v->user_name,
                    'gig_slug'          => $v->gig_slug,
                    'basic_price'       => $v->basic_price,
                    'types'             => $v->types,
                    'price'             => $v->price,
                    'sellerSlug'        => $v->sellerSlug,
                    'completeOrder'     => $completeOrder,
                    'calculatedReview'  => $calculatedReview,
                    'thumbnail_images'  => !empty($v->thumbnail_images) ? url($v->thumbnail_images) : "",
                    'freelancer_images' => !empty($v->freelancer_images) ? url($v->freelancer_images) : "",
                ];
            }


            // dd($data);

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
                'users.slug as sellerSlug',
                'users.image as freelancer_images',
                'users.created_at as join_date',
                'users.profession_name',
                'categorys.id as category_id',
                'categorys.name as category_name',
                'country.id as country_id',
                'country.countryname as countryname'
            )
            ->first();

        $findProfession = Profession::where('id', $userRecords->profession_name)->first();
        $proName        = !empty($findProfession) ? $findProfession->name : "";

        $imagesgrows   = GigImagesHistory::where('gig_id', $userRecords->id)->get();

        $imgrows = [];
        foreach ($imagesgrows as $v) {
            $imgrows[] = [
                'id'                => $v->id,
                'image_path'  => !empty($v->image_path) ? url($v->image_path) : "",
            ];
        }

        $data = [
            'gig_id'                => $userRecords->id ?? "",
            'user_id'               => $userRecords->user_id ?? "",
            'sellerSlug'            => $userRecords->sellerSlug ?? "",
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
            'profession_name'       => $proName ?? "",
            'join_date'             => date("d-M-Y", strtotime($userRecords->join_date)) ?? "",
        ];

        try {
            return response()->json([
                'data'        => $data,
                'galleryImgs' => $imgrows,
                'gig_id'      => $userRecords->id,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function getSettingData()
    {

        $data              = Setting::where('id', 1)->first();
        return response()->json($data);
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

    public function activeAccount(Request $request)
    {

        $token          = $request->query('token'); // Get the token parameter
        $email          = $request->query('email'); // Get the email parameter
        $current_domain = $request->query('current_domain'); // Get the current domain

        //echo "$current_domain";exit;
        // Find the user with the given email and status = 0
        $chkUser = User::where('email', $email)->where('status', 0)->first();

        $data = []; // Initialize an empty array

        if ($chkUser) {
            $chkUser->update(['status' => 1]); // Update user status to 1
            $data['status'] = 1;
            $data['message'] = 'Account activated successfully.';
        } else {
            $data['status'] = 0;
            $data['message'] = 'Invalid or already activated account.';
        }

        // Redirect back to the original domain with response data as query parameters
        $queryParams = http_build_query($data);
        return redirect()->to($current_domain);
    }
}
