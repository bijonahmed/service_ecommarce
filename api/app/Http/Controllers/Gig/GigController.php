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


    public function createGig(Request $request){

    //dd($request->all());
      // First, validate the common fields
    $validator = Validator::make($request->all(), [
        'name'              => 'required|string|max:255',
        'category_id'       => 'required',
        'type'              => 'required|string',
        'thumbnail_images'  => 'nullable|image|mimes:jpeg,png,jpg,gif',
        'images.*'          => 'nullable|image|mimes:jpeg,png,jpg,gif',
        'language_name'     => 'required',
        'language_type'     => 'required',
     
        'status'            => 'required',
        'gig_description'   => 'required',
    ], [
        // Custom messages
        'name.required' => 'The name is required.',
        'name.string'   => 'The name must be a string.',
        'name.max'      => 'The name may not be greater than 255 characters.',
        'category_id.required' => 'The category is required.',
        'type.required' => 'The type field is required.',
        'thumbnail_images.image' => 'The thumbnail must be an image.',
        'thumbnail_images.mimes' => 'The thumbnail must be a file of type: jpeg, png, jpg, gif.',
        'images.*.image' => 'Each image must be an image.',
        'images.*.mimes' => 'Each image must be a file of type: jpeg, png, jpg, gif.',
        'language_name.required' => 'The language name field is required.',
        'language_type.required' => 'The language type field is required.',
        'delivery_day.required' => 'The delivery day field is required.',
        'delivery_day.integer'  => 'The delivery day must be an integer.',
        'status.required' => 'The status field is required.',
        'status.in'       => 'The selected status is invalid.',
    ]);


    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }
    // Now add conditional validation for the price field
    if ($request->type == '1') {
        $request->validate([
            'price'        => 'required',
            'delivery_day' => 'required|integer|min:0', // Ensure it's an integer and >= 0,

        ], [
            'price.required' => 'The price field is required.',
            'price.numeric' => 'The price must be a number.',
        ]);
    }


    if ($request->type == 2) {
        $request->validate([
            'basic_price'    => 'required|numeric',
            'standard_price' => 'required|numeric',
            'premium_price'  => 'required|numeric',
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
    $data['user_id']          = $this->userid;
    $data['name']             = $validatedData['name'];
    $data['category_id']      = $validatedData['category_id'];
    $data['subcategory_id']   = !empty($request->subcategory_id) ? $request->subcategory_id : null;
    $data['insubcategory_Id'] = !empty($request->insubcategory_Id) ? $request->insubcategory_Id : null;
    $data['types']            = $request->type;
    $data['status']           = $request->status;
    $data['gig_slug']         = Str::slug($validatedData['name']);
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

    $data['thumbnail_images']    = !empty($thumbnail_images) ? $thumbnail_images : null;
    $data['language_name']       = $request->language_name;
    $data['language_type']       = $request->language_type;
    $data['price']               = $request->price;
    $data['delivery_day']        = $request->delivery_day;
    $data['gig_description']     = $request->gig_description;
    //For Basic
    $data['basic_price']         = $request->basic_price;   
    $data['basic_description']   = $request->basic_description; 
    $data['basic_delivery_days'] = $request->basic_delivery_days;   
    $data['basic_source_file' ]  = $request->basic_source_file;
    //For Standard
    $data['standard_price']      = $request->standard_price;   
    $data['stn_description']     = $request->stn_description; 
    $data['stn_delivery_days']   = $request->stn_delivery_days;   
    $data['stn_source_file' ]    = $request->stn_source_file;
    //For Premimum
    $data['premium_price']        = $request->premium_price;   
    $data['premium_description']  = $request->premium_description; 
    $data['premium_delivery_days']= $request->premium_delivery_days;   
    $data['premium_source_file' ] = $request->premium_source_file;



    // Create and save the Gig instance
    $gig = new Gig($data);
    $gig->save();
 
    foreach ($imageUrls as $imageUrl) {
        GigImagesHistory::create([
            'gig_id' => $gig->id, // Associate the image with the newly created gig
            'image_path' => $imageUrl,
        ]);
    }

    return response()->json([
        'success' => true,
        'message' => 'Gig created successfully',
        'data' => $gig
    ]);



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

    public function getGigHistory()
    {

        try {
            $filterData = Gig::where('user_id', $this->userid)
                //->where('gig.status', 1)
                ->join('categorys', 'categorys.id', '=', 'gig.category_id')
                ->select('gig.*', 'gig.status as gig_status','categorys.name as category_name')
                ->orderBy('gig.id', 'desc') 
                ->get();;
            $data = [];
            foreach ($filterData as $v) {
                $data[] = [
                    'id'                => $v->id,
                    'user_id'           => $v->user_id,
                    'name'              => $v->name,
                    'gig_slug'          => $v->gig_slug,
                    'price'             => $v->price,
                    'status'            => $v->gig_status,
                    'category_name'     => $v->category_name,
                    'thumbnail_images'  => !empty($v->thumbnail_images) ? url($v->thumbnail_images) : "",

                ];
            }

            $response = [
                'data' => $data,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
}