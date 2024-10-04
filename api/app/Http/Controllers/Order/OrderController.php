<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Categorys;
use Illuminate\Http\Request;
use App\Models\Product;
//use Darryldecode\Cart\Cart;
use Illuminate\Support\Facades\Session;
use App\Models\Order;
use Carbon\Carbon;
use Validator;
use App\Models\OrderStatus;
use App\Models\OrderHistory;
use App\Models\ProductCategory;
use App\Models\CategoryCommissionHistory;
use App\Models\couponUseHistory;
use App\Models\Gig;
use App\Models\ordersProduct;
use App\Models\productwarrantyhistory;
use App\Models\trackingModel;
use App\Models\WishList;
use DB;
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

    function generateUniqueRandomNumber($length = 5)
    {
        do {
            $randomNumber = mt_rand(pow(10, $length - 1), pow(10, $length) - 1);
        } while (Order::where('id', $randomNumber)->exists());

        return $randomNumber;
    }

    public function getOrderPlace()
    {

        $data = Order::where('buyerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->where('orders.order_status', 1)
            ->get();

        $orders = [];
        foreach ($data as $v) {

            $convDay = $v->delivery_day_convert_date;
            $currentDateTime = Carbon::now();
            $deliveryDateTime = Carbon::parse($convDay);

            if ($deliveryDateTime->isPast()) {
                $formattedTime = "Time Over";
            } else {
                // Calculate the difference
                $remainingTime = $currentDateTime->diff($deliveryDateTime);

                // Format the remaining time
                $formattedTime = sprintf(
                    '%d days, %d hours, %d minutes, %d seconds',
                    $remainingTime->days,
                    $remainingTime->h,
                    $remainingTime->i,
                    $remainingTime->s // Include seconds if you want to show them
                );
            }

            $orders[] = [
                'id'                => $v->id,
                'orderId'           => $v->orderId,
                'gig_slug'          => $v->gig_slug,
                'user_id'           => $v->user_id,
                'gig_name'          => $v->gig_name,
                'created_at'        => $v->created_at,
                'selected_price'    => $v->selected_price,
                'selected_packages' => $v->selected_packages,
                'order_status'      => $v->order_status,
                'reamingitime'      => $formattedTime,

            ];
        }

        return response()->json($orders, 200);
    }

    public function getOrderForSellerEarning()
    {

        $data = Order::where('sellerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->where('orders.order_status', 3)
            ->get();

        $orders = [];
        $earning = 0;
        foreach ($data as $v) {

            $convDay = $v->delivery_day_convert_date;
            $currentDateTime = Carbon::now();
            $deliveryDateTime = Carbon::parse($convDay);

            if ($deliveryDateTime->isPast()) {
                $formattedTime = "Time Over";
            } else {
                // Calculate the difference
                $remainingTime = $currentDateTime->diff($deliveryDateTime);

                // Format the remaining time
                $formattedTime = sprintf(
                    '%d days, %d hours, %d minutes, %d seconds',
                    $remainingTime->days,
                    $remainingTime->h,
                    $remainingTime->i,
                    $remainingTime->s // Include seconds if you want to show them
                );
            }

            $row             = DB::table('tbl_setting')->where('id', 1)->first();
            $percentage      = $row->forSellerCommission; // Convert to float
            $selectedPrice   = $v->selected_price; // Convert to float
            $perResult       = ($percentage / 100) * $selectedPrice; // Calculate result amount
            $originalPrice   = $v->selected_price; // Ensure selected_packages is also a float
            $perResult       = floatval($perResult); // Ensure $perResult is a float
            $result          =  $originalPrice - $perResult; // This will work without error
            $earning += $result;

            $orders[] = [
                'id'                => $v->id,
                'orderId'           => $v->orderId,
                'gig_slug'          => $v->gig_slug,
                'user_id'           => $v->user_id,
                'gig_name'          => $v->gig_name,
                'created_at'        => $v->created_at,
                //'selected_price'    => "Orginal price: $originalPrice--Per.Amount :$perResult ----Final Amt: $result",
                'selected_price'    => "$result",
                'selected_packages' => $v->selected_packages,
                'order_status'      => $v->order_status,
                'reamingitime'      => $formattedTime,

            ];
        }

        $rdata['earning'] = $earning;
        $rdata['orders']  = $orders;

        return response()->json($rdata, 200);
    }

    public function getOrderPlaceForSeller()
    {

        $data = Order::where('sellerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->where('orders.order_status', 1)
            ->get();

        $orders = [];
        foreach ($data as $v) {

            $convDay = $v->delivery_day_convert_date;
            $currentDateTime = Carbon::now();
            $deliveryDateTime = Carbon::parse($convDay);

            if ($deliveryDateTime->isPast()) {
                $formattedTime = "Time Over";
            } else {
                // Calculate the difference
                $remainingTime = $currentDateTime->diff($deliveryDateTime);

                // Format the remaining time
                $formattedTime = sprintf(
                    '%d days, %d hours, %d minutes, %d seconds',
                    $remainingTime->days,
                    $remainingTime->h,
                    $remainingTime->i,
                    $remainingTime->s // Include seconds if you want to show them
                );
            }

            $orders[] = [
                'id'                => $v->id,
                'orderId'           => $v->orderId,
                'gig_slug'          => $v->gig_slug,
                'user_id'           => $v->user_id,
                'gig_name'          => $v->gig_name,
                'created_at'        => $v->created_at,
                'selected_price'    => $v->selected_price,
                'selected_packages' => $v->selected_packages,
                'order_status'      => $v->order_status,
                'reamingitime'      => $formattedTime,

            ];
        }

        return response()->json($orders, 200);
    }


    public function allOrders(){


        $data = Order::join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->get();

        $orders = [];
        foreach ($data as $v) {

            $convDay = $v->delivery_day_convert_date;
            $currentDateTime = Carbon::now();
            $deliveryDateTime = Carbon::parse($convDay);

            if ($deliveryDateTime->isPast()) {
                $formattedTime = "Time Over";
            } else {
                // Calculate the difference
                $remainingTime = $currentDateTime->diff($deliveryDateTime);
                $formattedTime = sprintf(
                    '%d days, %d hours, %d minutes, %d seconds',
                    $remainingTime->days,
                    $remainingTime->h,
                    $remainingTime->i,
                    $remainingTime->s // Include seconds if you want to show them
                );
            }

            $seller = User::where('id',$v->sellerId)->first();
            $buyer = User::where('id',$v->buyerId)->first();

            $orders[] = [
                'id'                => $v->id,
                'orderId'           => $v->orderId,
                'gig_slug'          => $v->gig_slug,
                'seller'            => !empty($seller) ? $seller->name : "",
                'buyer'             => !empty($buyer) ? $buyer->name : "---",
                'created_at'        => !empty($v->created_at) ? date("d-M-Y",strtotime($v->created_at)) : "",
                'selected_price'    => $v->selected_price,
                'selected_packages' => $v->selected_packages,
                'order_status'      => $v->order_status,
                'reamingitime'      => $formattedTime,

            ];
        }

        return response()->json($orders, 200);



    }

    public function getOrderForSeller()
    {

        $data = Order::where('sellerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->get();

        $orders = [];
        foreach ($data as $v) {

            $convDay = $v->delivery_day_convert_date;
            $currentDateTime = Carbon::now();
            $deliveryDateTime = Carbon::parse($convDay);

            if ($deliveryDateTime->isPast()) {
                $formattedTime = "Time Over";
            } else {
                // Calculate the difference
                $remainingTime = $currentDateTime->diff($deliveryDateTime);

                // Format the remaining time
                $formattedTime = sprintf(
                    '%d days, %d hours, %d minutes, %d seconds',
                    $remainingTime->days,
                    $remainingTime->h,
                    $remainingTime->i,
                    $remainingTime->s // Include seconds if you want to show them
                );
            }

            $orders[] = [
                'id'                => $v->id,
                'orderId'           => $v->orderId,
                'gig_slug'          => $v->gig_slug,
                'user_id'           => $v->user_id,
                'gig_name'          => $v->gig_name,
                'created_at'        => $v->created_at,
                'selected_price'    => $v->selected_price,
                'selected_packages' => $v->selected_packages,
                'order_status'      => $v->order_status,
                'reamingitime'      => $formattedTime,

            ];
        }

        return response()->json($orders, 200);
    }

    public function getOrder()
    {

        $data = Order::where('buyerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->get();

        $orders = [];
        $totalAmt = 0;
        foreach ($data as $v) {

            $convDay = $v->delivery_day_convert_date;
            $currentDateTime = Carbon::now();
            $deliveryDateTime = Carbon::parse($convDay);

            if ($deliveryDateTime->isPast()) {
                $formattedTime = "Time Over";
            } else {
                // Calculate the difference
                $remainingTime = $currentDateTime->diff($deliveryDateTime);

                // Format the remaining time
                $formattedTime = sprintf(
                    '%d days, %d hours, %d minutes, %d seconds',
                    $remainingTime->days,
                    $remainingTime->h,
                    $remainingTime->i,
                    $remainingTime->s // Include seconds if you want to show them
                );
            }
            $totalAmt += $v->selected_price;
            $orders[] = [
                'id'                => $v->id,
                'orderId'           => $v->orderId,
                'gig_slug'          => $v->gig_slug,
                'user_id'           => $v->user_id,
                'gig_name'          => $v->gig_name,
                'created_at'        => $v->created_at,
                'selected_price'    => $v->selected_price,
                'selected_packages' => $v->selected_packages,
                'order_status'      => $v->order_status,
                'reamingitime'      => $formattedTime,

            ];
        }

        $rdata['totalAmt']  = $totalAmt;
        $rdata['orders']    = $orders;

        return response()->json($rdata, 200);
    }

    public function updateOrder(Request $request)
    {
        $orderId = $request->orderId;
        $status_id = (int) $request->selectedStatus;
        $data['order_status'] = $status_id;
        Order::where('orderId', $orderId)->update($data);
        return response()->json("update successfully", 200);
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

        $chkSeller = Gig::where('id', $request->gig_id)->select('user_id')->first();

        $gig_id                 = $request->gig_id;
        $seller_id              = $chkSeller->user_id ? $chkSeller->user_id : "";
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
            'sellerId'            => $seller_id,
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
}
