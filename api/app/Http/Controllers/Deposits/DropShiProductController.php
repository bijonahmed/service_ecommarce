<?php

namespace App\Http\Controllers\Deposits;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Holiday;
use App\Models\User;
use App\Models\ProductAttributeValue;
use App\Models\ProductVarrientHistory;
use App\Models\Categorys;
use App\Models\ProductAttributes;
use App\Models\ProductCategory;
use App\Models\Product;
use App\Models\ProductAdditionalImg;
use App\Models\ProductVarrient;
use App\Models\AttributeValues;
use App\Models\MystoreHistory;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Session;
use DB;

class DropShiProductController extends Controller
{
    protected $userid;
    protected $email;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();

        if (!empty($id)) {
            $user = User::find($id->id);
            $this->userid = $user->id;
            $this->email  = $user->email;
        }
    }

    public function productUpdate(Request $request)
    {

        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
            'category_id'    => 'required',
            // 'files' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // max:2048 is the maximum file size in kilobytes (2MB)
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $product_id =  (int)$request->id;
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = array(
            'name'                       => $request->name,
            'slug'                       => $slug,
            'description_short'          => !empty($request->description_short) ? $request->description_short : "",
            'description_full'           => !empty($request->description_full) ? $request->description_full : "",
            'selling_price'              => !empty($request->selling_price) ? $request->selling_price : "",
            'profit'                     => !empty($request->profit) ? $request->profit : "",
            'buying_price'               => !empty($request->buying_price) ? $request->buying_price : "",
            'status'                     => 1, //!empty($request->status) ? $request->status : "",
            'entry_by'                   => $this->userid
        );
        if (!empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['thumnail_img'] = $file_url;
        }
        Product::where('id', $product_id)->update($data);
        // echo "update====$product_id";
        if (!empty($request->file('images'))) {
            foreach ($request->file('images') as $file) {
                $name = $file->getClientOriginalName();
                $dic_name = uniqid() . $name;
                $uploadPath = '/backend/files/';
                $file->move(public_path() . '/backend/files/', $dic_name);
                // $docs[] = $name;  
                $img_data['images']       = $uploadPath . $dic_name;
                $img_data['product_id']   = $product_id;
                DB::table('produc_img_history')->insert($img_data);
            }
        }

        //Category Insert 
        $catData['category_id']        = (int)$request->category_id;
        $catData['parent_id']          =  implode(',', [$request->category_id, $request->subcategory_id]);
        $catData['product_id']         = $product_id;
        DB::table('produc_categories')->where('product_id', $product_id)->update($catData);
        $resdata['product_id'] = $product_id;
        return response()->json($resdata);
    }

    public function save(Request $request)
    {
        //  dd($request->all());
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
            'category_id'    => 'required',
            'subcategory_id' => 'required',
            // 'category'       => 'required',
            'selling_price'  => 'required',
            'profit'         => 'required',
            'buying_price'   => 'required',
            'files' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // max:2048 is the maximum file size in kilobytes (2MB)
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = array(
            'name'                       => $request->name,
            'slug'                       => $slug,
            'description_short'          => !empty($request->description_short) ? $request->description_short : "",
            'description_full'           => !empty($request->description_full) ? $request->description_full : "",
            'selling_price'              => !empty($request->selling_price) ? $request->selling_price : "",
            'profit'                     => !empty($request->profit) ? $request->profit : "",
            'buying_price'               => !empty($request->buying_price) ? $request->buying_price : "",
            'status'                     => 1, //!empty($request->status) ? $request->status : "",
            'entry_by'                   => $this->userid
        );
        // dd($data);
        if (!empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['thumnail_img'] = $file_url;
        }

        //INSERT PRODUCT
        $product_id = Product::insertGetId($data);
        //INSERT MULTIPLE IMAGE
        if (!empty($request->file('images'))) {
            foreach ($request->file('images') as $file) {

                $name = $file->getClientOriginalName();
                if (!empty($name)) {
                    $dic_name = uniqid() . $name;
                    $uploadPath = '/backend/files/';
                    $file->move(public_path() . '/backend/files/', $dic_name);
                    // $docs[] = $name;  
                    $img_data['images']       = $uploadPath . $dic_name;
                    $img_data['product_id']   = $product_id;
                    DB::table('produc_img_history')->insert($img_data);
                }
            }
        }

        //Category Insert 
        $catData['category_id']        = (int)$request->category_id;
        $catData['parent_id']          =  implode(',', [$request->category_id, $request->subcategory_id]);
        $catData['product_id']         = $product_id;
        DB::table('produc_categories')->insert($catData);
        $resdata['product_id'] = $product_id;
        return response()->json($resdata);
    }

    function generateUnique4DigitNumber($existingNumbers = [])
    {
        do {
            $uniqueNumber = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
        } while (in_array($uniqueNumber, $existingNumbers));

        return $uniqueNumber;
    }

    public function additionaIMagesDelete(Request $request)
    {
        $images_id =  $request->images_id;
        ProductAdditionalImg::where('id', $images_id)->delete();
        return response()->json("Delete Images");
    }

    public function deleteCategory(Request $request)
    {

        // dd($request->all());
        $dynamicArray = explode(',', $request->item); // Convert the string to an array
        $lastElement  = trim(end($dynamicArray));

        $category_id  = Categorys::where('name', $lastElement)->select('id')->first();
        $row          = ProductCategory::where('category_id', $category_id->id)->where('product_id', $request->product_id)->first();
        if (!empty($row->category_id)) {
            ProductCategory::where('category_id', $row->category_id)->delete();
        }
        return response()->json("Delete Category Category ID: $row->category_id ");
    }

    public function productrow($id)
    {

        $produCategory = ProductCategory::where('product_id', $id)->first();
        $prodimages    = ProductAdditionalImg::where('product_id', $id)->select('images', 'id')->get();
        $prodImages    = Product::find($id);
        $addiImg = [];
        foreach ($prodimages as $v) {
            $addiImg[] = [
                'images'       => url($v->images),
                'id'           => $v->id,
            ];
        }

        $cat_id         = $produCategory->category_id;
        $findSubcat     = $produCategory->parent_id;
        $categories     = explode(',', $findSubcat);
        $lastCategory   = end($categories);
        $responseData['productImg']             = !empty($prodImages) ? url($prodImages->thumnail_img) : "";
        $responseData['product']                = Product::where('product.id', $id)->first();
        $responseData['product_category_id']    = $cat_id;
        $responseData['product_subcategory_id'] = (int)$lastCategory;
        $responseData['product_imgs']           = $addiImg;
        $categoryName = Categorys::where('id', $produCategory->category_id)->select('name')->first();
        $scategoryName = Categorys::where('id', (int) $lastCategory)->select('name')->first();
        $responseData['categoryName']           = !empty($categoryName->name) ? $categoryName->name : "";
        $responseData['scategoryName']           = !empty($scategoryName->name) ? $scategoryName->name : "";
        return response()->json($responseData);
    }

    public function getProductList(Request $request)
    {
        //dd($request->all());
        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);

        // Get search query from the request
        $searchQuery    = $request->searchQuery;
        $selectedFilter = (int)$request->selectedFilter;
        // dd($selectedFilter);
        $query = Product::orderBy('id', 'desc');

        if ($searchQuery !== null) {
            $query->where('name', 'like', '%' . $searchQuery . '%');
        }

        if ($selectedFilter !== null) {

            $query->where('status', $selectedFilter);
        }

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);

        $modifiedCollection = $paginator->getCollection()->map(function ($item) {
            return [
                'id'         => $item->id,
                'name'       => substr($item->name, 0, 250),
                'stock_qty'  => $item->stock_qty,
                'status'     => $item->status,
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

    public function removeProducts($id)
    {
        //echo $id;exit; 
        if (!empty($id)) {
            Product::where('id', $id)->delete();
            ProductAttributes::where('product_id', $id)->delete();
            ProductAttributeValue::where('product_id', $id)->delete();
            ProductVarrient::where('product_id', $id)->delete();
            ProductVarrientHistory::where('product_id', $id)->delete();
            ProductCategory::where('product_id', $id)->delete();
            ProductAdditionalImg::where('product_id', $id)->delete();
        }
        return response()->json("successfully delete product", 200);
    }

    public function checkActiveStoreInfo(Request $request)
    {

        $user_id = $request->userid;
        $current_date   = date("Y-m-d");
        $activeStore  = MystoreHistory::where('end_date', '>=', $current_date)->where('user_id', $user_id)->select('id','category_id')->get();
        if ($activeStore->isNotEmpty()) {

            $categoryData  = [];
            foreach ($activeStore as $store) {
                $category_id   = $store->category_id; // Get the category ID from the store
                $findCaterow   = Categorys::where('id', $category_id)->first(); // Find the category by ID
                if ($findCaterow) { // If the category is found
                    $categoryData[] = [
                        'id'    => $findCaterow->id,
                        'name'  => $findCaterow->name
                    ];
                }
            }
        }

        $data['feachStoreNames']   = !empty($categoryData) ? $categoryData : "";
        return response()->json($data, 200);
    }
}
