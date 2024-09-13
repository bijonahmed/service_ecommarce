<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Attribute as ModelsAttribute;
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
use App\Models\OrderStatus;
use App\Models\Product;
use App\Models\ProductAdditionalImg;
use App\Models\ProductVarrient;
use App\Models\AttributeValues;
use App\Models\Attribute as Attr;
use App\Models\OrderHistory;
use App\Models\product_warranty;
use Illuminate\Support\Str;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Rules\MatchOldPassword;
use Attribute;
use Illuminate\Support\Facades\Hash;
use Session;
use DB;
use PhpParser\Node\Stmt\TryCatch;

class ProductController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }

    public function productUpdate(Request $request)
    {

        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
            //  'category'       => 'required',
            'price'          => 'required',
            'stock_qty'      => 'required|integer',
            'stock_mini_qty' => 'required|integer',
            'shipping_days'  => 'required',
            'status'         => 'required',
            'sku'            => 'required',
            // 'files' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // max:2048 is the maximum file size in kilobytes (2MB)
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $product_id =  (int)$request->id;
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = array(
            'name'                       => $request->name,
            'slug'                       => "$slug-$product_id",
            'description'                => !empty($request->description) ? $request->description : "",
            'meta_title'                 => !empty($request->meta_title) ? $request->meta_title : "",
            'meta_description'           => !empty($request->meta_description) ? $request->meta_description : "",
            'meta_keyword'               => !empty($request->meta_keyword) ? $request->meta_keyword : "",
            'product_tag'                => !empty($request->product_tag) ? $request->product_tag : "",
            'brand'                      => !empty($request->brand) ? $request->brand : "",
            'sku'                        => !empty($request->sku) ? $request->sku : "",
            'external_link'              => !empty($request->external_link) ? $request->external_link : "",
            'cash_dev_status'            => !empty($request->cash_dev_status) ? $request->cash_dev_status : "",
            'price'                      => !empty($request->price) ? $request->price : 0,
            'unit'                       => !empty($request->unit) ? $request->unit : "",
            'stock_qty'                  => !empty($request->stock_qty) ? $request->stock_qty : "",
            'stock_mini_qty'             => !empty($request->stock_mini_qty) ? $request->stock_mini_qty : 0,
            'stock_status'               => !empty($request->stock_status) ? $request->stock_status : "",
            'manufacturer'               => !empty($request->manufacturer) ? $request->manufacturer : "",
            'manufacturer'               => !empty($request->manufacturer) ? $request->manufacturer : "",
            'download_link'              => !empty($request->download_link) ? $request->download_link : "",
            'discount'                   => !empty($request->discount) ? $request->discount : "",
            'discount_status'            => !empty($request->discount_status) ? $request->discount_status : "",
            'shipping_days'              => !empty($request->shipping_days) ? $request->shipping_days : "",
            'free_shopping'              => !empty($request->free_shopping) ? $request->free_shopping : "",
            'flat_rate_status'           => !empty($request->flat_rate_status) ? $request->flat_rate_status : "",
            'flat_rate_price'            => !empty($request->flat_rate_price) ? $request->flat_rate_price : "",
            'vat'                        => !empty($request->vat) ? $request->vat : 0,
            'vat_status'                 => !empty($request->vat_status) ? $request->vat_status : "",
            'tax'                        => !empty($request->tax) ? $request->tax : 0,
            'tax_status'                 => !empty($request->tax_status) ? $request->tax_status : "",
            'status'                     => !empty($request->status) ? $request->status : "",
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
        //INSERT MULTIPLE CATEGORY
        $category     = $request->category;
        $dynamicArray = explode(',', $category); // Convert the string to an array
        $results      = Categorys::whereIn('id', $dynamicArray)->get();
        $formattedResults = [];
        foreach ($results as $result) {
            $path = [];
            $category = $result;
            while ($category) {
                array_unshift($path, $category->id);
                $category = $category->parent;
            }
            $formattedResults[] = [
                'product_id'   => $product_id,
                'category_id'  => $result->id,
                'parent_id'    => implode(',', $path)
            ];
        }
        DB::table('produc_categories')->insert($formattedResults);
        $resdata['product_id'] = $product_id;
        return response()->json($resdata);
        ///return response()->json(['message' => 'Product updated successfully'], 200);
    }

    public function save(Request $request)
    {

        // dd($formattedData);
        // return false;
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
            'category'       => 'required',
            'price'          => 'required',
            'sku'            => 'required',
            'stock_qty'      => 'required|integer',
            'stock_mini_qty' => 'required|integer',
            'shipping_days'  => 'required',
            'status'         => 'required',
            'files' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // max:2048 is the maximum file size in kilobytes (2MB)
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));

        $data = array(
            'seller_id'                  => $this->userid,
            'name'                       => $request->name,
            'slug'                       => $slug,
            'description'                => !empty($request->description) ? $request->description : "",
            'short_description'          => !empty($request->short_description) ? $request->short_description : "",
            'meta_title'                 => !empty($request->meta_title) ? $request->meta_title : "",
            'meta_description'           => !empty($request->meta_description) ? $request->meta_description : "",
            'meta_keyword'               => !empty($request->meta_keyword) ? $request->meta_keyword : "",
            'product_tag'                => !empty($request->product_tag) ? $request->product_tag : "",
            'brand'                      => !empty($request->brand) ? $request->brand : "",
            'sku'                        => !empty($request->sku) ? $request->sku : "",
            'external_link'              => !empty($request->external_link) ? $request->external_link : "",
            'cash_dev_status'            => !empty($request->cash_dev_status) ? $request->cash_dev_status : "",
            'price'                      => !empty($request->price) ? $request->price : 0,
            'unit'                       => !empty($request->unit) ? $request->unit : "",
            'stock_qty'                  => !empty($request->stock_qty) ? $request->stock_qty : "",
            'stock_mini_qty'             => !empty($request->stock_mini_qty) ? $request->stock_mini_qty : 0,
            'stock_status'               => !empty($request->stock_status) ? $request->stock_status : "",
            'manufacturer'               => !empty($request->manufacturer) ? (int) $request->manufacturer : "",
            'download_link'              => !empty($request->download_link) ? $request->download_link : "",
            'discount'                   => !empty($request->discount) ? $request->discount : "",
            'discount_status'            => !empty($request->discount_status) ? $request->discount_status : "",
            'shipping_days'              => !empty($request->shipping_days) ? $request->shipping_days : "",
            'free_shopping'              => !empty($request->free_shopping) ? $request->free_shopping : "",
            'flat_rate_status'           => !empty($request->flat_rate_status) ? $request->flat_rate_status : "",
            'flat_rate_price'            => !empty($request->flat_rate_price) ? $request->flat_rate_price : "",
            'vat'                        => !empty($request->vat) ? $request->vat : 0,
            'vat_status'                 => !empty($request->vat_status) ? $request->vat_status : "",
            'tax'                        => !empty($request->tax) ? $request->tax : 0,
            'tax_status'                 => !empty($request->tax_status) ? $request->tax_status : "",
            'status'                     => !empty($request->status) ? $request->status : "",
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
        if (empty($request->id)) {
            //INSERT PRODUCT
            $product_id = Product::insertGetId($data);

            if (!empty($product_id)) {
                $slug                  = "$slug-$product_id";
                DB::table('product')->where('id', $product_id)->update(['slug' => $slug]);
            }
            //INSERT MULTIPLE IMAGE
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
            //INSERT MULTIPLE CATEGORY
            $category     = $request->category;
            $dynamicArray = explode(',', $category); // Convert the string to an array
            $results      = Categorys::whereIn('id', $dynamicArray)->get();
            $formattedResults = [];
            foreach ($results as $result) {
                $path = [];
                $category = $result;
                while ($category) {
                    array_unshift($path, $category->id);
                    $category = $category->parent;
                }
                $formattedResults[] = [
                    'product_id'   => $product_id,
                    'category_id'  => $result->id,
                    'parent_id'    => implode(',', $path)
                ];
            }
            DB::table('produc_categories')->insert($formattedResults);
            $resdata['product_id'] = $product_id;
            return response()->json($resdata);
        } else {
            //update
        }
    }

    function generateUnique4DigitNumber($existingNumbers = [])
    {
        do {
            $uniqueNumber = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
        } while (in_array($uniqueNumber, $existingNumbers));

        return $uniqueNumber;
    }


    public function getVarientHistory(Request $request)
    {
        $product_id         = $request->product_id;
        $arrData            = ProductVarrientHistory::where('product_id', $product_id)->get();
        $groupData          = ProductVarrientHistory::where('product_id', $product_id)->select('id', 'color')->groupBy('color')->get();
        $formatedData = [];
        foreach ($arrData as $Key => $value) {
            $formatedData[] = [
                'id'               => $value->id,
                'color'            => $value->color,
                'size'             => $value->size,
                'sku'              => $value->sku,
                'qty'              => $value->qty,
                'price'            => $value->price,
                'image'            => !empty($value->image) ? url($value->image) : "",
                'product_id'       => $value->product_id,
            ];
        }
        $gdata = [];
        foreach ($groupData as $Key => $value) {
            $gdata[] = [
                'id'               => $value->id,
                'color'            => $value->color,
            ];
        }

        $pdata['varient']    = $formatedData;
        $pdata['colorGroup'] = $gdata;
        return response()->json($pdata);
    }
    public function deleteValrient(Request $request)
    {

        $data = ProductVarrient::find($request->varient_id);
        $data->delete();

        ProductVarrientHistory::where('pro_varient_id', $request->varient_id)->delete();
        return response()->json("Delete Varient");
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

        $produCategory = ProductCategory::where('product_id', $id)->get();
        $prodimages    = ProductAdditionalImg::where('product_id', $id)->select('images', 'id')->get();
        $prodImages    = Product::find($id);
        $addiImg = [];
        foreach ($prodimages as $v) {
            $addiImg[] = [
                'images'       => url($v->images),
                'id'           => $v->id,
            ];
        }
        $returnData = [];
        foreach ($produCategory as $key => $val) {
            $returnData[] = DB::select("SELECT GROUP_CONCAT(name SEPARATOR ', ') AS name,id FROM categorys WHERE id IN ($val->parent_id)");
        }
        $concatenated_names = [];
        foreach ($returnData as $inner_array) {
            foreach ($inner_array as $obj) {
                $concatenated_names[] = $obj->name;
            }
        }
        $resulting_string = implode("<br/>", $concatenated_names);
        $show_edit_cat = $concatenated_names; //implode("<br/>", $concatenated_names);
        //dd($resulting_string);
        $responseData['productImg']        = !empty($prodImages) ? url($prodImages->thumnail_img) : "";
        $responseData['product']           = Product::leftjoin('brands', 'brands.id', '=', 'product.brand')
            ->leftjoin('manufacturers', 'manufacturers.id', '=', 'product.manufacturer')
            ->select('product.*', 'brands.name as brand_name', 'manufacturers.name as manufac_name')
            ->where('product.id', $id)->first();
        //dd($responseData['product']);
        $responseData['product_cat']       = $resulting_string;
        $responseData['product_edit_cat']  = $show_edit_cat;
        $responseData['product_imgs']      = $addiImg;
        // dd($responseData);
        return response()->json($responseData);
    }

    public function getProductList()
    {
        $data = Product::orderBy('product.id', 'desc')
            ->leftJoin('brands', 'brands.id', '=', 'product.brand')  // Corrected foreign key assumption
            ->select('product.*', 'brands.name AS brand_name')  // Select all product columns and brand name with alias
            ->get();


        $collection = collect($data);
        $modifiedCollection = $collection->map(function ($item) {
            return [
                'id'            => $item['id'],
                'name'          => substr($item['name'], 0, 20),
                'stock_qty'     => $item['stock_qty'],
                'status'        => $item['status'],
                'sku'           => $item['sku'],
                'thumnail_img'  => url($item['thumnail_img']),
                'brand'         => $item['brand'],
                'brand_name'    => $item['brand_name'],

            ];
        });
        //dd($modifiedCollection);
        return response()->json($modifiedCollection, 200);
    }

    public function sellerOrderProductList(Request $request)
    {

        $seller_id = $this->userid;
        $query = OrderHistory::leftJoin('orders', 'orders.id', '=', 'order_history.order_id')
            ->select('order_id', 'orderId', 'seller_id', 'orders.total', 'order_status')
            ->where('seller_id', $seller_id);

        // Apply filters
        if ($request->has('orderId')) {
            $query->where('orderId', $request->input('orderId'));
        }

        if ($request->has('productName')) {
            $productName = $request->input('productName');
            $query->whereHas('product', function ($subQuery) use ($productName) {
                $subQuery->where('name', 'like', '%' . $productName . '%');
            });
        }

        if ($request->has('sku')) {
            $sku = $request->input('sku');
            $query->whereHas('product', function ($subQuery) use ($sku) {
                $subQuery->where('sku', 'like', '%' . $sku . '%');
            });
        }

        $query->groupBy('orders.orderId');

        $perPage = 12;
        $page = $request->input('page', 1);
        $orders = $query->paginate($perPage, ['*'], 'page', $page);

        $modifiedCollection = $orders->getCollection()->map(function ($item) {
            $statusCheck =  OrderStatus::where('id', $item->order_status)->first();

            return [
                'order_id'    => $item->order_id,
                'orderId'     => $item->orderId,
                'product_id'  => $item->product_id,
                'seller_id'   => $item->seller_id,
                'total'       => $item->total,
                'order_status' => !empty($statusCheck->name) ? $statusCheck->name : "",
            ];
        });

        $response = new LengthAwarePaginator(
            $modifiedCollection,
            $orders->total(),
            $orders->perPage(),
            $page,
            ['path' => url()->current()]
        );

        return response()->json($response, 200);
    }

    public function sellerProductList(Request $request)
    {
        $seller_id = $this->userid;
        $query = Product::query();
        // Apply filters
        if ($request->has('productId')) {
            $query->where('id', $request->input('productId'));
        }

        if ($request->has('productName')) {
            $productName = $request->input('productName');
            $query->where('name', 'like', '%' . $productName . '%');
        }

        if ($request->has('sku')) {
            $sku = $request->input('sku');
            $query->where('sku', 'like', '%' . $sku . '%');
        }

        $query->where('seller_id', $seller_id);

        $perPage = 12;
        $page = $request->input('page', 1);
        $products = $query->paginate($perPage, ['*'], 'page', $page);

        $modifiedCollection = $products->getCollection()->map(function ($item) {
            return [
                'id'        => $item->id,
                'name'      => substr($item->name, 0, 20),
                'stock_qty' => $item->stock_qty,
                'slug'      => $item->slug,
                'sku'       => $item->sku,
                'price'     => $item->price,
                'status'    => $item->status == 1 ? "Active" : "Inactive",
                'image'     => url($item->thumnail_img),
            ];
        });

        $response = new LengthAwarePaginator(
            $modifiedCollection,
            $products->total(),
            $products->perPage(),
            $page,
            ['path' => url()->current()]
        );

        return response()->json($response, 200);
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

    public function insertVarient(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|array',
            'id.*' => 'required',
            'sku' => 'required|array',
            'sku.*' => 'required',
            'qty' => 'required|array',
            'qty.*' => 'required|numeric',
            'price' => 'required|array',
            'price.*' => 'required|numeric',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust file validation as needed
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = [
            'id' => $request->id,
            'sku' => $request->sku,
            'qty' => $request->qty,
            'price' => $request->price,
            'id' => $request->id,
            'id' => $request->id,
        ];
        // dd($data);
        // return false;

        if (
            isset($request->id) && is_array($request->id) &&
            isset($request->sku) && is_array($request->sku) &&
            isset($request->qty) && is_array($request->qty) &&
            isset($request->price) && is_array($request->price) &&
            count($request->id) === count($request->sku) &&
            count($request->id) === count($request->qty) &&
            count($request->id) === count($request->price)

        ) {

            //  dd($request->all());
            // Loop through the arrays and update records
            foreach ($request->id as $index => $id) {
                // Check if SKU, Qty, and Price are not null or empty
                if (
                    !empty($request->sku[$index]) && !empty($request->qty[$index]) && !empty($request->price[$index]) &&
                    $request->hasFile('images.' . $index)
                ) {
                    // Update records based on $id

                    $image = $request->file('images.' . $index); // Retrieve the image file
                    $imageName = time() . '_' . $image->getClientOriginalName(); // Generate unique image name
                    $image->move(public_path('/backend/files/'), $imageName); // Move image to storage

                    ProductVarrientHistory::where('id', $id)->update([
                        'sku'   => !empty($request->sku[$index]) ? $request->sku[$index] : "",
                        'qty'   => !empty($request->qty[$index]) ? $request->qty[$index] : "", //$request->qty[$index],
                        'price' => !empty($request->price[$index]) ? $request->price[$index] : "", //$request->qty[$index],//$request->price[$index]
                        'image' => '/backend/files/' . $imageName // Store image path
                    ]);
                } else if (
                    !empty($request->sku[$index]) && !empty($request->qty[$index]) && !empty($request->price[$index])
                ) {

                    ProductVarrientHistory::where('id', $id)->update([
                        'sku'   => !empty($request->sku[$index]) ? $request->sku[$index] : "",
                        'qty'   => !empty($request->qty[$index]) ? $request->qty[$index] : "", //$request->qty[$index],
                        'price' => !empty($request->price[$index]) ? $request->price[$index] : "",
                    ]);
                }
            }
        }

        return response()->json(['message' => 'Data updated successfully'], 200);
    }


    public function checkAttribue(Request $request)
    {

        try {
            $data['attribute'] = ProductVarrientHistory::where('color', $request->color)
                ->where('product_id', $request->product_id)
                ->get();
            return response()->json($data);
        } catch (QueryException $e) {
            // Handle query exception
            return response()->json(['error' => 'Query exception occurred'], 500);
        }
    }

    public function varientList($product_id)
    {
        $pdata['varient'] = ProductVarrientHistory::where('product_id', $product_id)->get();
        return response()->json($pdata);
    }
    public function deleteVarient(Request $request)
    {

        $id         = $request->input('id');
        $product_id = $request->input('product_id');
        //echo "ID: $id----ProductID: $product_id";

        try {
            ProductVarrientHistory::where('product_id', $product_id)
                ->where('id', $id)
                ->delete();

            $pdata['varient'] = ProductVarrientHistory::where('product_id', $product_id)->get();
            return response()->json($pdata);
        } catch (QueryException $e) {
            // Log the error
            \Log::error('Error deleting product variant history: ' . $e->getMessage());

            // Return an error response
            return response()->json(['error' => 'Failed to delete product variant history'], 500);
        }
        return response()->json(['message' => 'successfully delete'], 200);
    }
    public function generateCombinations(Request $request)
    {
        $product_id = $request->input('product_id');
        $colors     = $request->input('colors'); //['Red', 'Green', 'Black'];//$request->input('colors');
        $sizes      = $request->input('sizes'); //['10', '12', '14', '16'];//$request->input('sizes');
        //$warranties = ['1 Y', '2 Y'];//$request->input('warranties');
        $combinations = [];
        // Iterate over colors
        foreach ($colors as $color) {
            // Iterate over sizes
            foreach ($sizes as $size) {
                // Iterate over warranties
                // Create combination
                $combination = "$color-$size";
                $combinations[] = $combination;
            }
        }
        ProductVarrientHistory::where('product_id', $product_id)->delete();
        $product = Product::where('id', $product_id)->first();
        //dd($product->price);
        foreach ($combinations as $combination) {
            // Split the combination into color and size
            [$color, $size] = explode('-', $combination);
            // Create an array to store the data for insertion
            $data = [
                'color'         => $color,
                'size'          => $size,
                'product_id'    => $product_id,
                'price'         => !empty($product) ? $product->price : "",
            ];

            // Insert the data into the database
            ProductVarrientHistory::create($data);
        }

        $pdata['varient'] = ProductVarrientHistory::where('product_id', $product_id)->get();
        // Return combinations as JSON response
        return response()->json($pdata);
    }
    public function addWarranty(Request $request)
    {
        // dd($request->all());
        // return false;

        $product_id = $request->product_id;

        $warrantyData = $request->input('warranty');

        // $formattedData = [];

        foreach ($warrantyData as $item) {
            $formattedItem = [
                'product_id' => $product_id,
                'warranty_name' => $item['warranty'],
                'days' => $item['days'],
                'price' => $item['price']
            ];
            product_warranty::create($formattedItem);
        }

        return response()->json(['msg' => 'add succfully', 200]);
    }
    public function getaddWarranty(Request $request, int $id)
    {
        // dd($id);

        $getData = product_warranty::where('product_id', $id)->get();
        // dd($getData);
        return response()->json($getData);
    }
    public function deletewarranty(Request $request, $id)
    {
        try {
            
            $warranty = product_warranty::find($id);
            if ($warranty) {                
                $warranty->delete();
                
                return response()->json(['message' => 'Warranty deleted successfully'], 200);
            } else {
                
                return response()->json(['message' => 'Warranty not found'], 404);
            }
        } catch (\Exception $e) {
            
            return response()->json(['message' => 'Failed to delete warranty', 'error' => $e->getMessage()], 500);
        }
    }
}
