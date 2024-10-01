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

        try {
            $data['orders'] = Order::where('buyerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name') // Select desired fields
            ->get();

            return response()->json($data, 200);
        } catch (\Exception $e) {
            // Handle the exception and return an error message with a 500 status code
            return response()->json(['message' => 'Failed to retrieve orders, please try again later.'], 500);
        }
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
            ->select('product.delivery_days', 'product.name as product_name', 'product.thumnail_img', 'product.discount_status', 'product.discount', 'product.vat_status', 'product.vat', 'order_history.*')
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
            ->select(
                'orders.*',
                'order_status.name',
                'order_history.id as order_history_id',
                'order_history.product_id as order_history_product_id',
                'order_history.seller_id as order_history_seller_id',
                'order_history.quantity as order_history_quantity',
                'order_history.price as order_history_price',
                'order_history.total as order_history_total',
                'order_history.quantity as qty',
                'product.name as product_name',
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
        //  dd($request->all());

        $validator = FacadesValidator::make(
            $request->all(),
            [
                'gig_id'                 => 'required',
                'fullname'               => 'required',
                'email_address'          => 'required',
                'billing_address'        => 'required',
                'card_number'            => 'required',
                'expiration_date'        => 'required',
                'cvc'                    => 'required',
                'SelectedPackages'       => 'required',
                'SelectedPrice'          => 'required',

            ],
            [
                'gig_id'                => 'Gig is required',
                'fullname'              => 'Fullname is required',
                'email_address'         => 'Email address is required',
                'billing_address'       => 'Billing address Address is required',
                'card_number'           => 'Card is required',
                'expiration_date'       => 'Expire date is required',
                'cvc'                   => 'CVC is required',

            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $gig_id                 = $request->gig_id;
        $fullname               = $request->fullname;
        $email_address          = $request->email_address;
        $billing_address        = $request->billing_address;
        $card_number            = $request->card_number;
        $expiration_date        = $request->expiration_date;
        $cvc                    = $request->cvc;
        $SelectedPackages       = $request->SelectedPackages;
        $SelectedPrice          = $request->SelectedPrice;

        $randomNum = $this->userid . $this->generateUniqueRandomNumber() . "-" . date("y");

        // Create an array with the necessary fields
        $orderData = [
            'gig_id'              => $gig_id,
            'fullname'            => $fullname,
            'email_address'       => $email_address,
            'buyerId'             => $this->userid,
            'billing_address'     => $billing_address,
            'card_number'         => $card_number,
            'expiration_date'     => $expiration_date,
            'cvc'                 => $cvc,
            'selected_packages'   => $SelectedPackages, // Assuming this is an array and needs to be stored as JSON
            'selected_price'      => $SelectedPrice,
            'orderId'             => $randomNum,
            'order_status'        => 1, // Order Placed
        ];

        Order::create($orderData);
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
