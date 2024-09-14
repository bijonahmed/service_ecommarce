<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Categorys;
use Illuminate\Http\Request;
use App\Models\Product;
//use Darryldecode\Cart\Cart;
use Illuminate\Support\Facades\Session;
use App\Models\Order;
use Validator;
use App\Models\OrderStatus;
use App\Models\OrderHistory;
use App\Models\ProductCategory;
use App\Models\CategoryCommissionHistory;
use App\Models\couponUseHistory;
use App\Models\ordersProduct;
use App\Models\productwarrantyhistory;
use App\Models\trackingModel;
use App\Models\WishList;
use App\Models\User;
use Illuminate\Support\Facades\Validator as FacadesValidator;

class OrderController extends Controller
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

    public function orderStatusRow($id)
    {
        try {
            $row = OrderStatus::find($id);
            $response = [
                'data' => $row,
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

    public function save_order(Request $request)
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'        => $request->name,
            'description' => $request->description,
        );
        if (empty($request->id)) {
            OrderStatus::insertGetId($data);
        } else {
            OrderStatus::where('id', $request->id)->update($data);
        }

        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    public function orderStatus()
    {

        try {
            $rows = OrderStatus::all();
            $response = [
                'data' => $rows,
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

    function addtowish($slug)
    {
        $findproduct = Product::where('slug', $slug)->select('id')->first();
        $row                  = new WishList();
        $row->customer_id     = $this->userid;
        $row->product_id      = $findproduct->id;
        $row->save();
        return response()->json("Item successfully added to your wishlist!", 200);
    }

    function allWishList()
    {



        $rows = WishList::join('product', 'product.id', '=', 'wishlist.product_id')->where('wishlist.customer_id', $this->userid)
            ->select(
                'wishlist.id as wishid',
                'product.thumnail_img',
                'product.slug',
                'product.name',
                'price',
                'product.discount',
                'product.id',
                'product.discount_status',
                'product.vat',
                'product.vat_status',
                'product.free_shopping',
                'product.flat_rate_price',
                'product.shipping_days',
                'product.brand',
                'product.stock_qty',
                'product.seller_id',
                'brands.name as brand_name',
                'brands.slug as brand_slug',
                'users.business_name as seller_name',
                'users.business_name_slug as seller_slug'
            )
            ->leftJoin('users', 'users.id', '=', 'product.seller_id')
            ->leftJoin('brands', 'product.brand', '=', 'brands.id')
            ->get();


        $products = [];
        foreach ($rows as $key => $v) {
            $last_price = 0;

            $vat = $v->vat ? $v->vat : '0';
            $price = $v->price + ($v->price * $vat / 100);

            $percent_discount = $price - ($price * $v->discount / 100);
            $fixed_discount = $price - $v->discount;

            if ($v->discount_status == 1) {
                $last_price = $percent_discount;
            } elseif ($v->discount_status == 2) {
                $last_price = $fixed_discount;
            } else {
                $last_price = $price;
            }

            $products[] = [
                'id'                => $v->id,
                'product_name'      => $v->name,
                'name'      => $v->name,
                'wishid'            => $v->wishid,
                'price'             => $v->price,
                'discount'          => $v->discount,
                'discount_status'   => $v->discount_status,
                'thumnail_img'      => url($v->thumnail_img),
                'slug'              => $v->slug,
                'last_price'        => $last_price,
                'pro_slug'              => $v->slug,


                'free_shopping'         => $v->free_shopping,
                'flat_rate_price'       => $v->flat_rate_price,
                'shipping_days'         => $v->shipping_days,
                'brand_name'            => $v->brand_name,
                'brand_slug'            => $v->brand_slug,
                'stock_qty'             => $v->stock_qty,
                'seller_name'             => $v->seller_name,
                'seller_slug'             => $v->seller_slug,


            ];
        }

        return response()->json($products, 200);
    }

    function removeWishList($id)
    {

        $wishlistItem = WishList::find($id);
        if (!$wishlistItem) {
            return response()->json(['error' => 'WishList item not found'], 404);
        }
        $wishlistItem->delete();
        return response()->json(['message' => 'WishList item deleted successfully']);
    }

    function generateUniqueRandomNumber($length = 5)
    {
        do {
            $randomNumber = mt_rand(pow(10, $length - 1), pow(10, $length) - 1);
        } while (Order::where('id', $randomNumber)->exists());

        return $randomNumber;
    }

    public function getOrder()
    {

        $orders = [];

        $data['orders']  = Order::where('customer_id', $this->userid)->where('order_status', 1)->limit(2)->get();
        foreach ($data['orders'] as $v) {
            $orders[] = [
                'orderId'      => $v->orderId,
                'placeOn'      => date_format(date_create($v->created_at), "Y-m-d"),
                'total'        => number_format($v->total, 2),
            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }


    public function update_order_status(Request $request)
    {
        $data['order_status'] = $request->orderstatus;
        Order::where('orderId', $request->orderId)->update($data);
        return response()->json("update successfully", 200);
    }


    public function updateOrderStatus(Request $request)
    {
        $orderId = $request->orderId;
        $status_id = (int) $request->selectedOrderStatus;
        $data['order_status'] = $status_id;
        Order::where('orderId', $orderId)->update($data);
        return response()->json("update successfully", 200);
    }

    public function orderDetails($order_id)
    {

        $orderStatus     = orderStatus::all();
        $findorder       = Order::join('order_status', 'order_status.id', '=', 'orders.order_status')
            ->select('orders.*', 'order_status.name as orderstatus', 'order_status.id as orderstatus_id')
            ->where('orderId', $order_id)->first();

        $data['orders']  = OrderHistory::join('product', 'product.id', '=', 'order_history.product_id')
            ->select('product.name as product_name', 'product.thumnail_img', 'product.discount_status', 'product.discount', 'product.vat_status', 'product.vat', 'order_history.*')
            ->where('order_id', $findorder->id)->get();

        $findOrderedProduct = ordersProduct::where('order_id', $order_id)
            ->join('product', 'product.id', '=', 'orders_product.product_id')
            ->select('product.name as pro_name', 'product.slug as pro_slug', 'product.thumnail_img as pro_image', 'orders_product.*')
            ->get();

        foreach ($findOrderedProduct as $item) {
            $item->pro_img = url($item->pro_image);
        }



        // dd($findOrderedProduct);
        // return false;


        foreach ($data['orders'] as $v) {

            $last_price = 0;
            $vat = $v->vat ? $v->vat : '0';
            $price = $v->price + ($v->price * $vat / 100);

            $percent_discount = $price - ($price * $v->discount / 100);
            $fixed_discount = $price - $v->discount;

            if ($v->discount_status == 1) {
                $last_price = $percent_discount;
            } elseif ($v->discount_status == 2) {
                $last_price = $fixed_discount;
            } else {
                $last_price = $v->price;
            }

            $orders[] = [
                'product_name'      => $v->product_name,
                'thumbnail_img'     => url($v->thumnail_img),
                'quantity'          => $v->quantity,
                'price'             => $v->price,
                'discount_status'   => $v->discount_status,
                'discount'          => $v->discount,
                'vat_status'        => $v->vat_status,
                'vat'               => $v->vat,
                'last_price'        => $last_price,

                'price'           => $v->price,
                'total'           => $v->quantity * $v->price,
            ];
        }


        $devlDate = OrderHistory::join('product', 'product.id', '=', 'order_history.product_id')
        ->select('product.delivery_days','product.name as product_name', 'product.thumnail_img', 'product.discount_status', 'product.discount', 'product.vat_status', 'product.vat', 'order_history.*')
        ->where('order_id', $findorder->id)->first();
        $delivery_days =  (!empty($devlDate) && isset($devlDate->delivery_days)) ? $devlDate->delivery_days : "";
        $order['devliveryDate'] = $delivery_days;

        $findCustomer = User::where('id', $findorder->customer_id)->first();
        $order['customername']  = !empty($findCustomer->name) ? $findCustomer->name : "";
        $order['customeremail'] = !empty($findCustomer->email) ? $findCustomer->email : "";
        $order['orderdata']     = $orders;
        $order['orderrow']      = !empty($findorder->orderstatus) ? $findorder->orderstatus : "";
        $order['order_status']  = !empty($findorder->order_status) ? $findorder->order_status : "";
        $order['orderstatus_id'] = !empty($findorder->orderstatus_id) ? $findorder->orderstatus_id : "";
        $order['orderData']     = !empty($findorder) ? $findorder : "";
        $order['OrderStatus']   = $orderStatus;

        $order['packed_status'] = !empty($findorder->packed_status) ? $findorder->packed_status : "";
        $order['dispatched_status'] = !empty($findorder->dispatched_status) ? $findorder->dispatched_status : "";
        $order['outForDelivery_status'] = !empty($findorder->outForDelivery_status) ? $findorder->outForDelivery_status : "";
        $order['delivered_status'] = !empty($findorder->delivered_status) ? $findorder->delivered_status : "";
        $order['cancel_status'] = !empty($findorder->cancel_status) ? $findorder->cancel_status : "";
        $order['return_status'] = !empty($findorder->return_status) ? $findorder->return_status : "";
        $order['products'] = !empty($findOrderedProduct) ? $findOrderedProduct : '';

        $timestamp = strtotime($findorder->created_at);
        $formattedDate = date("jS F, Y", $timestamp);
        $order['create_at'] = !empty($findorder->created_at) ? $formattedDate : "";

        return response()->json($order, 200);
    }
    public function allOrders()
    {

        // $data['orders'] = Order::join('order_status', 'orders.order_status', '=', 'order_status.id')
        //     ->select('orders.*', 'order_status.name as order_status_name', 'orders_product.*')
        //     ->join('orders_product', 'orders_product.order_id', '=', 'orders.orderId')
        //     ->join('product', 'product.id', '=', 'orders_product.product_id')
        //     ->get();

        // dd($data);
        // return false;

        $data['orders'] = Order::join('order_status', 'orders.order_status', '=', 'order_status.id')
            ->select('orders.*', 'order_status.name', 
            'order_history.id as order_history_id', 
            'order_history.product_id as order_history_product_id', 
            'order_history.seller_id as order_history_seller_id', 
            'order_history.quantity as order_history_quantity', 
            'order_history.price as order_history_price', 
            'order_history.total as order_history_total', 
            'order_history.quantity as qty', 'product.name as product_name', 
            'product.slug as product_slug', 
            'product.thumnail_img as thumbnail_img'
            )
            ->Leftjoin('order_history', 'order_history.order_id', '=', 'orders.id')
            ->Leftjoin('product', 'product.id', '=', 'order_history.product_id') // Join with product table
            ->where('orders.customer_id', $this->userid)
            ->orderBy('orders.created_at', 'desc')
            ->get();

        //             dd($data);
        // return false;

        foreach ($data['orders'] as $v) {
            $orders[] = [
                'name'          => $v->name,
                'orderId'       => $v->orderId,
                'qty'       => $v->qty,
                'placeOn'       => date_format(date_create($v->created_at), "Y-m-d H:i"),
                'total'         => number_format($v->total, 2),
                'pro_name'      => $v->product_name,
                'pro_slug'       => $v->product_slug,
                'pro_img'       => url($v->thumbnail_img)

            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }


    public function allOrdersAdmin()
    {

        $data['orders']  = Order::join('order_status', 'orders.order_status', '=', 'order_status.id')
            ->select('orders.*', 'order_status.name')
            ->get(); //Order::where('customer_id', $this->userid)->get();
        foreach ($data['orders'] as $v) {
            $orders[] = [
                'id'           => $v->id,
                'name'         => $v->name,
                'orderId'      => $v->orderId,
                'placeOn' => date('d M Y', strtotime($v->created_at)),
                'total'        => number_format($v->total, 2),
            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }

    public function submitOrder(Request $request)
    {

        $validator = FacadesValidator::make(
            $request->all(),
            [
                'subTotal'              => 'required',
                'item_total'            => 'required',
                'shipp_address'         => 'required',
                'billAddress'           => 'required',
                'Cutomer_name'          => 'required',
                'Cutomer_email'         => 'required',
                'Cutomer_phone_number'  => 'required',
                'payment_staus'         => 'required',
            ],
            [
                'item_total'            => 'Errors in Total amount',
                'shipp_address'         => 'Please add your address',
                'billAddress'           => 'Please add your billing address',
                'payment_staus'         => 'Please select payment method',

            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


        $subTotal               = $request->subTotal;
        $item_total               = $request->item_total;
        $shipp_address          = $request->shipp_address;
        $billAddress            = $request->billAddress;
        $Cutomer_name           = $request->Cutomer_name;
        $Cutomer_email          = $request->Cutomer_email;
        $Cutomer_phone_number   = $request->Cutomer_phone_number;
        $payment_staus          = $request->payment_staus;

        $randomNum = $this->userid . $this->generateUniqueRandomNumber() . "-" . date("y");

        $cartData = json_decode($request->input('cart'));
        if (is_object($cartData)) {
            // Convert the stdClass object to an array
            $cartData = [$cartData];
        }
        // dd($cartData);
        // return false;
        $total = 0;
        foreach ($cartData as $cartItem) {
            $productid = $cartItem->product->id; //$cartItem['product']['id'];
            $quantity  = $cartItem->quantity; //$cartItem['quantity'];
            $price     = str_replace(',', '', $cartItem->product->price); //$cartItem['product']['price']); // Remove commas
            $price     = floatval($price); // Convert to float

            if (!is_numeric($quantity) || !is_numeric($price)) {
                continue;
            }
            // Calculate the subtotal for the current item
            $subtotal = $quantity * $price;
            $total += $subtotal;
        }

        $order                  = new Order();
        $order->orderId         = $randomNum;
        $order->total           = $item_total;
        $order->subtotal        = $subTotal;

        $order->shipper_name          = $Cutomer_name;
        $order->shipper_email         = $Cutomer_email;
        $order->shipper_phone_number  = $Cutomer_phone_number;
        $order->shipper_address       = $shipp_address;
        $order->billing_name          = $Cutomer_name;
        $order->billing_email         = $Cutomer_email;
        $order->billing_phone_number  = $Cutomer_phone_number;
        $order->billing_address       = $billAddress;
        $order->payment_type        = $payment_staus;

        $order->customer_id     = $this->userid;
        $order->order_status    = 1; // Order Placed 
        $order->save();

        $lastOrderId = $order->id;
        
        $formattedItems = [];
        foreach ($cartData as $item) {
            $formattedItem = [
                'order_id' => $order->orderId,
                'product_id' => $item->product->id,
                'price' => $item->product->price,
                'discount' => $item->product->discount,
                'discount_status' => $item->product->discount_status,
                'last_price' => $item->product->last_price,
                'qty' => $item->quantity,
                'color' => $item->product->color ? $item->product->color : '',
                'size' => $item->product->size ? $item->product->size : '',
                'vat' => $item->product->vat,
                'vat_status' => $item->product->vat_status,

            ];
            // dd($item->product->warranty_id);
            // return false;
            if (!empty($item->product->warranty_id)) {
                productwarrantyhistory::create([
                    'warranty_id'   => $item->product->warranty_id,
                    'product_id'    => $item->product->id,
                    'order_id'      => $order->orderId,
                ]);
            } 

            $formattedItems[] = $formattedItem;
            ordersProduct::create($formattedItem);
        }


        $itemtotal = 0;
        foreach ($cartData as $cartItem) {
            $pid = $cartItem->product->id; //$cartItem['product']['id'];
            $chkpost = Product::where('id', $pid)->select('seller_id')->first();
            $seller_id = !empty($chkpost) ? $chkpost->seller_id : 1;
            $productid = $pid;
            $quantity  = $cartItem->quantity; //$cartItem['quantity'];
            $price     = str_replace(',', '', $cartItem->product->price); //$cartItem['product']['price']); // Remove commas
            $price     = floatval($price); // Convert to float
            $chkCat    = ProductCategory::where('product_id', $productid)->first();
            $categories = !empty($chkCat->parent_id) ? explode(',', $chkCat->parent_id) : "";
            $parentCategoryId = isset($categories[0]) ? $categories[0] : null;
            $catrow     = Categorys::where('id', $categories)->first();
            $commission = !empty($catrow->commission) ? $catrow->commission : 0;
            //Insert into CategoryCommissionHistory
            $categoryHistory = new CategoryCommissionHistory();
            $categoryHistory->customer_id         = $this->userid;
            $categoryHistory->seller_id           = $seller_id;
            $categoryHistory->product_qty         = $quantity;
            $categoryHistory->product_price       = $price;
            $categoryHistory->product_id          = $productid;
            $categoryHistory->category_id         = $parentCategoryId;
            $categoryHistory->category_percetage  = $commission;
            $categoryHistory->admin_get_amount    = ($price * $commission) / 100;
            $categoryHistory->save();
            //End 
            $subtotal = $quantity * $price;
            // Add the subtotal to the total
            $itemtotal += $subtotal;
            $order_history                  = new OrderHistory();
            $order_history->order_id        = $lastOrderId;
            $order_history->seller_id       = $seller_id;
            $order_history->product_id      = $productid;
            $order_history->quantity        = $quantity;
            $order_history->price           = $price;
            $order_history->total           = $itemtotal;
            $order_history->save();
        }

        $couponUse = $request->coupon_id ?? '';
        if ($couponUse !== '') {
            // dd($request->coupon_id,$request->user_id);
            $couponUseadd = couponUseHistory::create([
                'user_id' => $request->user_id,
                'coupon_id' => $request->coupon_id,
            ]);

            return response()->json("Your order successfully done!", 200);
        }

        return response()->json("Your order successfully done!", 200);
    }
    public function orderTrackadd(request $request)
    {

        $id = $request->order_id;

        $order = Order::where('orderId', $id)->first();

        if ($order) {
            $order->update([
                'packed_status' => $request->packed ? 1 : 0,
                'dispatched_status' => $request->dispatched ? 1 : 0,
                'outForDelivery_status' => $request->outForDelivery ? 1 : 0,
                'delivered_status' => $request->deliverd ? 1 : 0,
                'cancel_status' => $request->canceled ? 1 : 0,
                'return_status' => $request->returned ? 1 : 0,
            ]);

            return response()->json(['message' => 'Order status updated successfully'], 200);
        } else {
            return response()->json(['error' => 'Order not found'], 404);
        }
    }
}
