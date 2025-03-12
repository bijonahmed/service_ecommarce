<?php

namespace App\Http\Controllers\Gig;

use DB;
use Auth;
use Helper;
use App\Category;
use App\Models\User;
use App\Models\Product;
use App\Models\Attribute;
use App\Models\Categorys;
use Illuminate\Support\Str;
use App\Models\SubAttribute;
use Illuminate\Http\Request;
use App\Models\AttributeValues;
use App\Rules\MatchOldPassword;
use App\Models\ProductAttributes;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use App\Models\ProductAttributeValue;
use App\Models\HomeAroductSliderCategory;
use Illuminate\Support\Facades\Validator;
use App\Models\Gig;
use App\Models\GigImagesHistory;
use App\Models\GigWishList;
use App\Models\Setting;
use Intervention\Image\Facades\Image; // Import Intervention Image

class GigController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        if (!empty($id)) {
            $user = User::find($id->id);
            $this->userid = $user->id;
        }
    }

    public function deleteMultipleImgId(Request $request)
    {
        $deletedCount = GigImagesHistory::where('id', $request->deleteId)->delete();
        if ($deletedCount > 0) {
            return response()->json(['message' => 'Images deleted successfully.']);
        } else {
            return response()->json(['message' => 'No images found for the provided gig ID.'], 404);
        }
    }





    public function getgitrowCheckAdmin(Request $request)
    {
        $slug = $request->slug;

        try {
            $row = Gig::where('gig_slug', $slug)
                //->where('user_id', $this->userid)
                ->firstOrFail();

            $data = [
                'id' => $row->id,
                'category_id' => $row->category_id,
                'subcategory_id' => $row->subcategory_id,
                'insubcategory_Id' => $row->insubcategory_Id,
                'name' => $row->name,
                'gig_slug' => $row->gig_slug,
                'thumbnail_images' => !empty($row->thumbnail_images) ? url($row->thumbnail_images) : '',
                'types' => (int) $row->types,
                'gig_description' => $row->gig_description, //strip_tags(str_replace(["\r", "\n"], ' ', $row->gig_description)),
                'price' => $row->price,
                'delivery_day' => $row->delivery_day,
                'basic_price' => $row->basic_price,
                'basic_description' => $row->basic_description,
                'basic_delivery_days' => $row->basic_delivery_days,
                'source_file' => $row->source_file,

                'order_rules' => $row->order_rules,

                'standard_price' => $row->standard_price,
                'stn_descrition' => $row->stn_descrition,
                'stn_delivery_days' => $row->stn_delivery_days,
                'stn_source_file' => $row->stn_source_file,
                'premium_price' => $row->premium_price,
                'premium_description' => $row->premium_description,
                'premium_delivery_days' => $row->premium_delivery_days,
                'premium_source_file' => $row->premium_source_file,
                'reason_descriptoin' => $row->reason_descriptoin ?? "",
                'status' => $row->status,
            ];

            $rdata['data'] = $data;
            $rdata['subcategory'] = Categorys::where('parent_id', $row->category_id)
                ->where('status', 1)
                ->get();
            $rdata['inSubcatData'] = Categorys::where('parent_id', $row->subcategory_id)
                ->where('status', 1)
                ->get();

            $imgHistory = GigImagesHistory::where('gig_id', $row->id)->get();

            $imgData = [];
            foreach ($imgHistory as $v) {
                $imgData[] = [
                    'id' => $v->id,
                    'url' => !empty($v->image_path) ? url($v->image_path) : '',
                ];
            }

            $rdata['imgHisttory'] = $imgData;
            // Proceed with other logic or return the data
            return response()->json($rdata);
        } catch (\Exception $e) {
            // Handle the exception and return an error message
            return response()->json(
                [
                    'error' => 'Gig not found or an error occurred',
                    'message' => $e->getMessage(),
                ],
                500,
            );
        }
    }



    public function getgitrow(Request $request)
    {
        $slug = $request->slug;

        try {
            $row = Gig::where('gig_slug', $slug)
                ->where('user_id', $this->userid)
                ->firstOrFail();

            $data = [
                'id' => $row->id,
                'category_id' => $row->category_id,
                'subcategory_id' => $row->subcategory_id,
                'insubcategory_Id' => $row->insubcategory_Id,
                'name' => $row->name,
                'gig_slug' => $row->gig_slug,
                'thumbnail_images' => !empty($row->thumbnail_images) ? url($row->thumbnail_images) : '',
                'types' => (int) $row->types,
                'gig_description' => $row->gig_description,
                'price' => $row->price,
                'delivery_day' => $row->delivery_day,
                'basic_price' => $row->basic_price,
                'basic_description' => $row->basic_description,
                'basic_delivery_days' => $row->basic_delivery_days,
                'source_file' => $row->source_file,

                'order_rules' => $row->order_rules,

                'standard_price' => $row->standard_price,
                'stn_descrition' => $row->stn_descrition,
                'stn_delivery_days' => $row->stn_delivery_days,
                'stn_source_file' => $row->stn_source_file,
                'premium_price' => $row->premium_price,
                'premium_description' => $row->premium_description,
                'premium_delivery_days' => $row->premium_delivery_days,
                'premium_source_file' => $row->premium_source_file,
                'status' => $row->status,
            ];

            $rdata['data'] = $data;
            $rdata['subcategory'] = Categorys::where('parent_id', $row->category_id)
                ->where('status', 1)
                ->get();
            $rdata['inSubcatData'] = Categorys::where('parent_id', $row->subcategory_id)
                ->where('status', 1)
                ->get();

            $imgHistory = GigImagesHistory::where('gig_id', $row->id)->get();

            $imgData = [];
            foreach ($imgHistory as $v) {
                $imgData[] = [
                    'id' => $v->id,
                    'url' => !empty($v->image_path) ? url($v->image_path) : '',
                ];
            }

            $rdata['imgHisttory'] = $imgData;
            // Proceed with other logic or return the data
            return response()->json($rdata);
        } catch (\Exception $e) {
            // Handle the exception and return an error message
            return response()->json(
                [
                    'error' => 'Gig not found or an error occurred',
                    'message' => $e->getMessage(),
                ],
                500,
            );
        }
    }


    public function adminCheckApproval(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'id' => 'required',
                'status' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data['status'] = $request->status;
        $data['reason_descriptoin'] = !empty($request->reason_descriptoin) ? $request->reason_descriptoin : "";


        $gigid          = (int) $request->id;
        $gig            = Gig::find($gigid);
        $gig->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Gig update successfully',
            'data' => $gig,
        ]);
    }


    public function updateGig(Request $request)
    {
        // dd($request->all());

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|max:80',
                'category_id' => 'required',
                'type' => 'required|string',
                'thumbnail_images' => 'nullable|image|mimes:jpeg,png,jpg,gif',
                'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif',
                //'status' => 'required',
                'order_rules' => 'required',
                'gig_description' => 'required|max:1200',
            ],
            [
                // Custom messages
                'name.required' => 'The name is required.',
                'name.string' => 'The name must be a string.',
                'name.max' => 'The name may not be greater than 255 characters.',
                'category_id.required' => 'The category is required.',
                'type.required' => 'The type field is required.',
                'thumbnail_images.image' => 'The thumbnail must be an image.',
                'thumbnail_images.mimes' => 'The thumbnail must be a file of type: jpeg, png, jpg, gif.',
                'images.*.image' => 'Each image must be an image.',
                'images.*.mimes' => 'Each image must be a file of type: jpeg, png, jpg, gif.',
                'delivery_day.integer' => 'The delivery day must be an integer.',
                'status.required' => 'The status field is required.',
                'status.in' => 'The selected status is invalid.',
            ],
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        // Now add conditional validation for the price field
        if ($request->type == '1') {
            $request->validate(
                [
                    'price' => 'required',
                    'delivery_day' => 'required|integer|min:0', // Ensure it's an integer and >= 0,
                ],
                [
                    'price.required' => 'The price field is required.',
                    'price.numeric' => 'The price must be a number.',
                ],
            );
        }

        if ($request->type == 2) {
            $request->validate([
                'basic_price' => 'required|numeric',
                'standard_price' => 'required|numeric',
                'premium_price' => 'required|numeric',
            ]);
        }

        // Handle thumbnail upload

        if (!empty($request->file('thumbnail_images'))) {
            $files = $request->file('thumbnail_images');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/gig/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/gig/'), $upload_url);
            $file_url = $uploadPath . $path;
            $thumbnail_images = $file_url;
        }

        // Handle multiple image uploads
        $imageUrls = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $fileName = Str::random(20);
                $ext = strtolower($file->getClientOriginalExtension());
                $path = $fileName . '.' . $ext;
                $uploadPath = '/backend/gig/';
                $file->move(public_path('/backend/gig/'), $path);
                $imageUrls[] = $uploadPath . $path;
            }
        }

        // Insert form data into the database
        // Initialize the data array
        $data = [];
        // Fill the data array
        $data['user_id'] = $this->userid;
        $data['name'] = $request->name;
        $data['category_id'] = $request->category_id;
        $data['subcategory_id'] = !empty($request->subcategory_id) ? $request->subcategory_id : null;
        $data['insubcategory_Id'] = !empty($request->insubcategory_Id) ? $request->insubcategory_Id : null;
        $data['types'] = $request->type;
        $data['status'] = 0;//$request->status;
        $data['gig_slug'] = Str::slug($request->name);
        // Ensure unique gig_slug
        $slugExists = Gig::where('gig_slug', $data['gig_slug'])->exists();
        if ($slugExists) {
            $counter = 1;
            while ($slugExists) {
                $newSlug = $data['gig_slug'] . '-' . $counter;
                $slugExists = Gig::where('gig_slug', $newSlug)->exists();
                $counter++;
            }
            $data['gig_slug'] = $newSlug;
        }

        $data['thumbnail_images'] = !empty($thumbnail_images) ? $thumbnail_images : null;
        $data['language_name'] = $request->language_name;
        $data['language_type'] = $request->language_type;
        $data['price'] = $request->price;
        $data['delivery_day'] = $request->delivery_day;
        $data['gig_description'] = $request->gig_description;
        //For Basic
        $data['basic_price'] = $request->basic_price;
        $data['basic_description'] = $request->basic_description;
        $data['basic_delivery_days'] = $request->basic_delivery_days;
        $data['basic_source_file'] = $request->basic_source_file;
        //For Standard
        $data['standard_price'] = $request->standard_price;
        $data['stn_description'] = $request->stn_description;
        $data['stn_delivery_days'] = $request->stn_delivery_days;
        $data['stn_source_file'] = $request->stn_source_file;
        //For Premimum
        $data['premium_price'] = $request->premium_price;
        $data['premium_description'] = $request->premium_description;
        $data['premium_delivery_days'] = $request->premium_delivery_days;
        $data['premium_source_file'] = $request->premium_source_file;

        $gigid = (int) $request->id;
        $gig = Gig::find($gigid);
        $data = $request->all();
        $gig->update($data);

        foreach ($imageUrls as $imageUrl) {
            GigImagesHistory::create([
                'gig_id' => $gigid, // Associate the image with the newly created gig
                'image_path' => $imageUrl,
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Gig update successfully',
            'data' => $gig,
        ]);
    }

    public function createGig(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|max:80',
                'category_id' => 'required',
                'type' => 'required|string',
                'thumbnail_images' => 'nullable|image|mimes:jpeg,png,jpg,gif',
                'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif',
              //  'status' => 'required',
                'order_rules' => 'required',
                'gig_description' => 'required',
                'thumbnail_images' => 'required',
            ],
            [
                // Custom messages
                'name.required' => 'The name is required.',
                'name.string' => 'The name must be a string.',
                'name.max' => 'The name may not be greater than 255 characters.',
                'category_id.required' => 'The category is required.',
                'type.required' => 'The type field is required.',
                'thumbnail_images.image' => 'The thumbnail must be an image.',
                'thumbnail_images.mimes' => 'The thumbnail must be a file of type: jpeg, png, jpg, gif.',
                'images.*.image' => 'Each image must be an image.',
                'images.*.mimes' => 'Each image must be a file of type: jpeg, png, jpg, gif.',
                'delivery_day.integer' => 'The delivery day must be an integer.',
                'status.required' => 'The status field is required.',
                'status.in' => 'The selected status is invalid.',
            ],
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


        $chkPoint = Gig::where('user_id', $this->userid)->count();

        $settingrow = Setting::find(1);
        //dd($settingrow->gig_limit);
        $giglimit = $settingrow->gig_limit ?? 0;


        if ($chkPoint >= $giglimit) {
            return response()->json(['errors' => ['gig_limit' => "Maximum gig allowed only {$giglimit}"]], 422);
        }


        // Now add conditional validation for the price field
        if ($request->type == '1') {
            $request->validate(
                [
                    'price' => 'required|numeric|min:1',
                    'delivery_day' => 'required|integer|min:0', // Ensure it's an integer and >= 0,
                ],
                [
                    'price.required' => 'The price required.',
                    'price.numeric' => 'The price must be a number.',
                ],
            );
        }

        if ($request->type == 2) {
            $request->validate([
                'basic_price' => 'required|numeric|min:1',
                'standard_price' => 'required|numeric|min:1',
                'premium_price' => 'required|numeric|min:1',
            ]);
        }



        if (!empty($request->file('thumbnail_images'))) {
            $files = $request->file('thumbnail_images');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/gig/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/gig/'), $upload_url);
            $file_url = $uploadPath . $path;
            $thumbnail_images = $file_url;
        }

        // Handle multiple image uploads
        $imageUrls = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $fileName = Str::random(20);
                $ext = strtolower($file->getClientOriginalExtension());
                $path = $fileName . '.' . $ext;
                $uploadPath = '/backend/gig/';
                $file->move(public_path('/backend/gig/'), $path);
                $imageUrls[] = $uploadPath . $path;
            }
        }

        // Insert form data into the database
        // Initialize the data array
        $data = [];
        // Fill the data array
        $data['user_id'] = $this->userid;
        $data['name'] = $request->name;
        $data['category_id'] = $request->category_id;
        $data['subcategory_id'] = !empty($request->subcategory_id) ? $request->subcategory_id : null;
        $data['insubcategory_Id'] = !empty($request->insubcategory_Id) ? $request->insubcategory_Id : null;
        $data['types'] = $request->type;
        $data['status'] = 0;//$request->status;
        $data['gig_slug'] = Str::slug($request->name);
        // Ensure unique gig_slug
        $slugExists = Gig::where('gig_slug', $data['gig_slug'])->exists();
        if ($slugExists) {
            $counter = 1;
            while ($slugExists) {
                $newSlug = $data['gig_slug'] . '-' . $counter;
                $slugExists = Gig::where('gig_slug', $newSlug)->exists();
                $counter++;
            }
            $data['gig_slug'] = $newSlug;
        }

        $data['thumbnail_images'] = !empty($thumbnail_images) ? $thumbnail_images : null;
        $data['language_name'] = $request->language_name;
        $data['language_type'] = $request->language_type;
        $data['price'] = $request->price;
        $data['delivery_day'] = $request->delivery_day;
        $data['gig_description'] = $request->gig_description;
        //For Basic
        $data['basic_price'] = $request->basic_price;
        $data['basic_description'] = $request->basic_description;
        $data['basic_delivery_days'] = $request->basic_delivery_days;
        $data['source_file'] = $request->source_file;
        //For Standard
        $data['standard_price'] = $request->standard_price;
        $data['stn_description'] = $request->stn_description;
        $data['stn_delivery_days'] = $request->stn_delivery_days;
        $data['stn_source_file'] = $request->stn_source_file;
        //For Premimum
        $data['premium_price'] = $request->premium_price;
        $data['premium_description'] = $request->premium_description;
        $data['premium_delivery_days'] = $request->premium_delivery_days;
        $data['premium_source_file'] = $request->premium_source_file;

        // Create and save the Gig instance
        $gig = new Gig($data);
        $gig->save();

        if (!empty($data['thumbnail_images'])) {
            GigImagesHistory::create([
                'gig_id' => $gig->id, // Associate the image with the newly created gig
                'image_path' => $data['thumbnail_images'],
            ]);
        }

        foreach ($imageUrls as $imageUrl) {
            GigImagesHistory::create([
                'gig_id' => $gig->id, // Associate the image with the newly created gig
                'image_path' => $imageUrl,
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Gig created successfully',
            'data' => $gig,
        ]);
    }



    public function deleteGigAdmin($gigid)
    {
        $updated = Gig::where('id', $gigid)->update(['status' => 2]);

        if ($updated) {
            return response()->json(['message' => 'Gig updated successfully.']);
        } else {
            return response()->json(['message' => 'Gig not found or you do not have permission to update this gig.'], 404);
        }
    }
    public function deleteGig(Request $request)
    {
        $updated = Gig::where('user_id', $this->userid)
            ->where('id', $request->id)
            ->update([
                'status' => 0,
            ]);

        if ($updated) {
            return response()->json(['message' => 'Gig updated successfully.']);
        } else {
            return response()->json(['message' => 'Gig not found or you do not have permission to update this gig.'], 404);
        }
    }

    public function deleteWishListGig(Request $request)
    {
        //  dd($request->id);
        $updated = GigWishList::where('user_id', $this->userid)
            ->where('gig_id', $request->id)
            ->delete();

        if ($updated) {
            return response()->json(['message' => 'Gig updated successfully.']);
        } else {
            return response()->json(['message' => 'Gig not found or you do not have permission to update this gig.'], 404);
        }
    }

    public function getwishListGig()
    {
        $filterData = GigWishList::where('user_id', $this->userid)->get();
        $data = [];
        foreach ($filterData as $v) {
            $gigrow = Gig::where('id', $v->gig_id)->first();
            $catrow = Categorys::where('id', $gigrow->category_id)->first();

            $data[] = [
                'id' => $v->gig_id,
                'user_id' => $v->user_id,
                'name' => $gigrow->name,
                'gig_slug' => $gigrow->gig_slug,
                'price' => $gigrow->price,
                'status' => $gigrow->gig_status,
                'category_name' => $catrow->category_name,
                'thumbnail_images' => !empty($gigrow->thumbnail_images) ? url($gigrow->thumbnail_images) : '',
            ];
        }
        return response()->json($data, 200);
    }

    public function getGigHistory()
    {
        try {
            $filterData = Gig::where('user_id', $this->userid)
                //->where('gig.status', 1)
                ->join('categorys', 'categorys.id', '=', 'gig.category_id')
                ->select('gig.*', 'gig.status as gig_status', 'categorys.name as category_name')
                ->orderBy('gig.id', 'desc')
                ->get();
            $data = [];
            foreach ($filterData as $v) {
                $data[] = [
                    'id'                => $v->id,
                    'user_id'           => $v->user_id,
                    'name'              => $v->name,
                    'gig_slug'          => $v->gig_slug,
                    'price'             => $v->price,
                    'types'             => $v->types,
                    'reason_descriptoin'=> $v->reason_descriptoin ?? "",
                    'basic_price'       => $v->basic_price ?? 0,
                    'standard_price'    => $v->standard_price ?? 0,
                    'premium_price'     => $v->premium_price ?? 0,
                    'status'            => $v->gig_status,
                    'category_name'     => $v->category_name,
                    'thumbnail_images'  => !empty($v->thumbnail_images) ? url($v->thumbnail_images) : '',
                ];
            }

            $response = [
                'data' => $data,
                'message' => 'success',
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed',
            ];
        }
        return response()->json($response, 200);
    }



    public function getAllGigForAdmin(Request $request)
    {
        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);

        // Get search query from the request
        $searchQuery       = $request->searchQuery;
        $selectedFilter    = $request->selectedFilter;
        // dd($selectedFilter);
        $query = Gig::orderBy('id', 'desc')
            ->leftJoin('users', 'gig.user_id', '=', 'users.id')
            ->leftJoin('categorys', 'categorys.id', '=', 'gig.category_id')
            ->select('gig.*', 'gig.thumbnail_images', 'gig.name as gigName', 'users.name as sellerName', 'categorys.name as categoryName');

        if ($searchQuery !== null) {
            $query->where('gig.name', 'like', '%' . $searchQuery . '%');
        }

        if ($selectedFilter !== null) {
            $query->where('gig.status', $selectedFilter);
        }

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);
        $modifiedCollection = $paginator->getCollection()->map(function ($item) {

            return [
                'id'            => $item->id,
                'sellerName'    => $item->sellerName,
                'categoryName'  => $item->categoryName,
                'slug'          => $item->gig_slug,
                'gigName'       => $item->gigName,
                'thumbnail_images' => !empty($item->thumbnail_images) ? url($item->thumbnail_images) : "",
                'status'           => $item->status,
            ];
        });

        // Return the modified collection along with pagination metadata
        return response()->json([
            'data' => $modifiedCollection,
            'current_page' => $paginator->currentPage(),
            'total_pages' => $paginator->lastPage(),
            'total_records' => $paginator->total(),
        ], 200);
    }
}
