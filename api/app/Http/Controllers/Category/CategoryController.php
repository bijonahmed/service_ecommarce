<?php

namespace App\Http\Controllers\Category;

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

class CategoryController extends Controller
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
    public function index()
    {
        $categories = Categorys::with('children.children.children.children.children')->select('name')->where('parent_id', 0)->get();
        return response()->json($categories);
    }

    public function removeProctCategory(Request $request)
    {
        // dd($request->all());
        HomeAroductSliderCategory::where('id', $request->id)->delete();
        $response = [
            'message' => 'Successfully remove.',
        ];
        return response()->json($response);
    }

    public function categoryProSlidersave(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'category_id' => 'required',
                'status' => 'required',
            ],
            [
                'category_id' => 'Name is required',
                'status' => 'Status is required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $existingRecord = HomeAroductSliderCategory::where('category_id', $request->category_id)->first();

        if (!empty($existingRecord)) {
            HomeAroductSliderCategory::where('category_id', $request->category_id)->delete();
        }
        $data = [
            'category_id' => $request->category_id,
            'status' => $request->status,
            // Add other fields as needed
        ];

        if (empty($request->id)) {
            // Insert new record
            HomeAroductSliderCategory::create($data);
        } else {
            // Update existing record if ID is provided
            $existingRecord = HomeAroductSliderCategory::find($request->id);

            if ($existingRecord) {
                $existingRecord->update($data);
            } else {
                return response()->json(['error' => 'Record not found'], 404);
            }
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }

    public function saveAttribute(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name'      => 'required',
                'status'    => 'required',
            ],
            [
                // 'name'   => 'Attribute name is required',
                'status' => 'Status is required',
            ]
        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'arr_value'                  => $request->arr_value,
            'name'                       => $request->name,
            'status'                     => $request->status,
            'entry_by'                   => $this->userid
        );
        //dd($data);
        if (empty($request->id)) {
            //Attribute::insertGetId($data);
            $chk = Attribute::where('name', strtolower($request->name))->first();
            $newRecord = new Attribute();
            if (empty($chk)) {
                $newRecord->name        =  strtolower($request->name);
                $newRecord->status      = $request->status;
                $newRecord->entry_by    = $this->userid;
                $newRecord->save();
                $lastInsertedId = $newRecord->id;
            } else {
                $lastInsertedId = $chk->id;
            }
            if (!empty($request->arr_value)) {
                $arr_val = $request->arr_value;
                $arrexplode = explode(",", $arr_val);
                $arrCount = count($arrexplode);
                for ($i = 0; $i < $arrCount; $i++) {
                    $newRecord                  = new AttributeValues();
                    $newRecord->name            = $arrexplode[$i];
                    $newRecord->attributes_id   = $lastInsertedId;
                    $newRecord->status          = $request->status;
                    $newRecord->entry_by        = $this->userid;
                    $newRecord->save();
                }
            }
        } else {
            $data = Attribute::find($request->id);
            $data->name              =  $request->input('name');
            $data->status            =  $request->input('status');
            $data->save();
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }

    public function save(Request $request)
    {
        //dd($request->all());
        ///exit; 
        $validator = Validator::make(
            $request->all(),
            [
                'name'      => 'required',
                'status'    => 'required',
            ],
            [
                //'name'   => 'Category name is required',
                'status' => 'Status is required',
            ]
        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }




        if (empty($request->id)) {
            $validator = Validator::make(
                $request->all(),
                [
                    'name'      => 'required',
                    'status'    => 'required',
                ],
                [
                    //'name'   => 'Category name is required',
                    'status' => 'Status is required',
                ]
            );
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
        }
        // Upload image
        if (!empty($request->file('file'))) {
            $files = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $imagePath = $file_url;
            //$data['file'] = $file_url;
        } else {
            $imagePath = "";
        }
        $slug     = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        if (empty($request->id)) {
            // Save to database
            Categorys::create([
                'name'              => $request->input('name'),
                'slug'              => $slug,
                'description'       => $request->input('description'),
                'meta_title'        => $request->input('meta_title'),
                'meta_description'  => $request->input('meta_description'),
                'meta_keyword'      => $request->input('meta_keyword'),
                'parent_id'         => $request->input('parent_id') ? $request->input('parent_id') : 0,
                'status'            => $request->input('status'),
                //'home_status'       => $request->home_status,
                'commission'        => $request->input('commission'),
                'fixcommission'        => $request->input('fixcommission'),
                'fixcommission'     => $request->input('fixcommission'),
                'keyword'           => $request->input('keyword'),
                'mobile_view_class' => $request->input('mobile_view_class'),
                'file'              => $imagePath,
            ]);
        } else {
            $data = Categorys::find($request->id);
            if (!empty($request->file('file'))) {
                $files = $request->file('file');
                $fileName = Str::random(20);
                $ext = strtolower($files->getClientOriginalExtension());
                $path = $fileName . '.' . $ext;
                $uploadPath = '/backend/files/';
                $upload_url = $uploadPath . $path;
                $files->move(public_path('/backend/files/'), $upload_url);
                $file_url = $uploadPath . $path;
                $imagePath = $file_url;
            } else {
                $imagePath =  $data->file;
            }
            $data->name              =  $request->input('name');
            $data->slug              =  $slug;
            $data->description       =  $request->input('description');
            $data->meta_title        =  $request->input('meta_title');
            $data->meta_description  =  $request->input('meta_description');
            $data->meta_keyword      =  $request->input('meta_keyword');
            $data->parent_id         =  $request->input('parent_id');
            $data->status            =  $request->input('status');
          //  $data->home_status       =  $request->home_status;
            $data->commission        =  $request->input('commission');
            $data->fixcommission     =  $request->input('fixcommission');
            $data->keyword           =  $request->input('keyword');
            $data->mobile_view_class =  $request->input('mobile_view_class');
            $data->save();
        }

        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function allCategory(Request $request)
    {
        try {
            $categories = Categorys::with('children.children.children.children.children')->where('parent_id', 0)->get();
            // dd($categories);
            return response()->json(
                $categories
            );
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function getSpeacialCategoryList(Request $request)
    {
        try {
            $categories = Categorys::with('children.children.children.children.children')->where('parent_id', 0)->get();
            // $categoriesList = Categorys::with('children.children.children.children.children')->where('parent_id', 0)->where('speacial_status', 1)->get();
            $count = Categorys::where('speacial_status', 1)->count();

            $products = [];
            foreach ($categories as $v) {
                $products[] = [

                    'id'                => $v->id,
                    'name'              => $v->name,
                    'image'             => url($v->file),
                    'speacial_status'   => $v->speacial_status,

                ];
            }

            return response()->json([
                'data'  => $products,
                'count' => $count,
                // 'catList' => $categoriesList,

            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    } 


    public function allInacCategory(Request $request)
    {
        try {
            $categories = Categorys::where('status', 0)->get();
            return response()->json($categories);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getProductCategoryList(Request $request)
    {
        try {
            $categories = HomeAroductSliderCategory::join('categorys', 'home_product_slider_category.category_id', '=', 'categorys.id')
                ->select('categorys.name', 'categorys.status', 'home_product_slider_category.id', 'home_product_slider_category.category_id')
                ->get();

            //dd($categories);

            $subcategories = Categorys::select('name', 'id')->where('parent_id', '!=', 0)->get();

            $data['category'] = $categories;
            $data['subcategories'] = $subcategories;

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getAttribute(Request $request)
    {
        $attribute = Attribute::where('status', 1)->get();
        return response()->json($attribute);
    }
    public function getAttributeList(Request $request)
    {
        $attribute = Attribute::orderBy('name', 'asc')->get();
        $collection = collect($attribute);
        $modifiedArr = $collection->map(function ($item) {
            return [
                'id'     => $item['id'],
                'name'   => ucfirst($item['name']),
                'status' => $item['status'],
            ];
        });
        //dd($modifiedArr);
        return response()->json($modifiedArr);
    }
    public function getAttributeValList(Request $request)
    {
        $searchTerm = $request->terms;
        $attrWithsubAtt = Attribute::join('attributes_values', 'attributes_values.attributes_id', '=', 'attributes.id')
            ->select('attributes_values.*', 'attributes.name as att_name')
            ->where('attributes_values.name', 'like', '%' . $searchTerm . '%')
            ->orderBy('attributes.name', 'asc')
            ->get();
        $collection = collect($attrWithsubAtt);
        $modifiedArr = $collection->map(function ($item) {
            return [
                'id'         => $item['id'],
                'att_name'   => ucfirst($item['att_name']),
                'name'       => ucfirst($item['name']),
                'status'     => $item['status'],
            ];
        });
        return response()->json($modifiedArr, 200);
    }
    public function getCategoryListParent(Request $request)
    {
        $categories = Categorys::where('status', 1)->get();
        return response()->json($categories);
    }
    public function findCategoryRow($id)
    {
        $data = Categorys::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function attributeRow($id)
    {
        $data = Attribute::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function attributeValRow($id)
    {
        ///122555
        $data = AttributeValues::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function attributeValRows($attributes_id)
    {
//dd($attributes_id);

        $attrValues = AttributeValues::where('attributes_id', $attributes_id)->select('id', 'attributes_id', 'name')->get();
        $collection = collect($attrValues);
        $modifiedCollection = $collection->map(function ($item) {
            return [
                'id' => $item['id'],
                'name' => $item['name'],
            ];
        });

        return response()->json($modifiedCollection, 200);
    }
    public function getSubCategoryChild($id)
    {
        $data = Categorys::where('parent_id', $id)->get();
        $collection = collect($data);
        $modifiedCollection = $collection->map(function ($item) {
            return [
                'value' => $item['id'],
                'label' => $item['name'],
            ];
        });
        return response()->json($modifiedCollection, 200);
    }
    public function getInSubCategoryChild($data)
    {
        $selectedValues = trim($data);
        $queries = DB::select("SELECT id,name,parent_id FROM `categorys` WHERE `parent_id` IN ($selectedValues)");
        $result = [];
        foreach ($queries as $key => $v) {
            $result[] = [
                'value' => $v->id,
                'label' => $v->name
            ];
        }
        return response()->json($result);
    }
    public function searchCategory(Request $request)
    {
        $term = $request->input('term');
        $results = Categorys::where('name', 'like', '%' . $term . '%')
            ->where('status', 1)
            // ->orWhere('category', 'like', '%' . $term . '%')

            ->get();
        $formattedResults = [];
        foreach ($results as $result) {
            $path = [];
            $category = $result;
            while ($category) {
                array_unshift($path, $category->name);
                $category = $category->parent;
            }
            $formattedResults[] = [
                'name' => $result->name,
                'id' => $result->id,
                'category' => implode(' > ', $path)
            ];
        }
        return response()->json($formattedResults);
    }

    public function speacialCatSave(request $request)
    {
        $id = $request->category_id;
        $category = Categorys::find($id);

        if ($request->hasFile("image")) {

            $validator =  Validator::make(
                $request->all(),
                [
                    'image'      => 'mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=300,min_height=240,max_width=300,max_height=240',
                ]
            );
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $image = $request->image;
            $imageName = "/upload/" . time() . "." . $image->getClientOriginalExtension();
            $image->move(public_path("upload"), $imageName);

            if (!empty($category->file) && File::exists(public_path($category->file))) {
                File::delete(public_path($category->file));
            }

            $category->update([
                'file' => $imageName,
                'speacial_status' => $request->speacial_status,
            ]);

            if ($category) {

                $images = url($imageName);

                return response()->json([
                    "status" => 200,
                    "images" => $images,

                ], 200);
            } else {
                return response()->json([
                    "status" => 500,
                    "errors" => "Something went wrong"
                ], 500);
            }
        } else{

            $validator =  Validator::make(
                $request->all(),
                [
                    'speacial_status'    => 'required',
                ]
            );
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            
            $category->update([
                'speacial_status' => $request->speacial_status,
            ]);

            if ($category) {

                return response()->json([
                    "status" => 200,
                    "message" => "success",

                ], 200);
            } else {
                return response()->json([
                    "status" => 500,
                    "errors" => "Something went wrong"
                ], 500);
            }
        }
    }
}
