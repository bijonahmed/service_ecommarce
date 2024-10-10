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
use App\Models\Withdraw;
use App\Models\ProductCategory;
use App\Models\CategoryCommissionHistory;
use App\Models\couponUseHistory;
use App\Models\Gig;
use App\Models\ordersProduct;
use App\Models\MyMessage;
use App\Models\GigImagesHistory;
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


    public function updateDeliveryGig(Request $request)
    {

        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'messages'       => 'required',
            'buyerId'        => 'required',
            'images'         => 'required',
        ]);




        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $orderId = $request->orderId;
        $order   = Order::where('orderId', $orderId)->first();
        $order->order_status = 4; // Update the status as needed
        $order->save();

        return response()->json(['message' => 'Order rejected successfully.']);

        $imagePath = null;
        if ($request->hasFile('images')) {
            $file = $request->file('images'); // Use the 'file' method for individual files
            $fileName = "/backend/files/" . time() . "." . $file->getClientOriginalExtension();
            // Move the uploaded file to the specified directory
            $file->move(public_path("backend/files"), $fileName);
            $imagePath = $fileName;
        }

        $rdata['user_id']        = $this->userid;
        $rdata['to_id']          = $request->buyerId;
        $rdata['sender_id']      = $this->userid;
        $rdata['message']        = "Congratulations successfully your order delivered"; //$request->message;
        $rdata['files']          = $imagePath;

        //  dd($rdata);
        $message = MyMessage::insertGetId($rdata);
        return response()->json(['message' => 'Order delivered successfully.']);
    }

    public function checkOrder(Request $request)
    {

        $orderId =  $request->orderId;

        $order   = Order::where('orders.orderId', $orderId)
            ->join('gig', 'orders.gig_id', '=', 'gig.id')  // Join orders with gigs table
            ->select('gig.id', 'orders.sellerId', 'orders.buyerId', 'orders.orderId', 'orders.order_status', 'gig.premium_price', 'gig.premium_description', 'gig.premium_delivery_days', 'gig.premium_source_file', 'gig.standard_price', 'gig.stn_descrition', 'gig.stn_delivery_days', 'gig.stn_source_file', 'gig.basic_price', 'gig.basic_description', 'gig.basic_delivery_days', 'gig.source_file', 'gig.name as gig_name', 'gig.gig_slug', 'gig.category_id', 'gig.types', 'orders.selected_packages', 'orders.selected_price', 'gig.gig_description', 'gig.order_rules', 'gig.delivery_day') // Select fields from all tables
            ->first();

        $imgHistory = GigImagesHistory::where('gig_id', $order->id)->get();

        $imgdata = [];
        foreach ($imgHistory as $v) {
            $imgdata[] = [
                'image_path'  => !empty($v->image_path) ? url($v->image_path) : "",
            ];
        }

        $findCategory       =  Categorys::where('id', $order->category_id)->first();
        $findSubCategory    =  Categorys::where('id', $order->subcategory_id)->first();
        $findinSubCategory  =  Categorys::where('id', $order->insubcategory_Id)->first();
        $buyerInfo          =  User::where('id', $order->buyerId)->first();

        $data['orderId']            = $order->orderId;
        $data['name']               = $order->gig_name;
        $data['categoryName']       = $findCategory->name ? $findCategory->name : "";
        $data['subCategoryName']    = !empty($findSubCategory->name) ? $findCategory->name : "";
        $data['inSubCategoryName']  = !empty($findinSubCategory->name) ? $findCategory->name : "";


        $data['buyerId']            = $order->buyerId;
        $data['buyerName']          = !empty($buyerInfo->name) ? $buyerInfo->name : "";
        $data['types']              = $order->types;
        $data['selected_packages']  = $order->selected_packages;
        $data['selected_price']     = $order->selected_price;
        $data['gig_description']    = $order->gig_description;
        $data['order_rules']        = $order->order_rules;
        $data['delivery_day']       = $order->delivery_day;
        //Basic
        $data['basic_price']        = !empty($order->basic_price) ?  $order->basic_price : "";
        $data['basic_description']  = !empty($order->basic_description) ?  $order->basic_description : "";
        $data['basic_delivery_days'] = !empty($order->basic_delivery_days) ?  $order->basic_delivery_days : "";
        $data['source_file']        = !empty($order->source_file) ?  $order->source_file : "";
        //Standard
        $data['standard_price']     = !empty($order->standard_price) ?  $order->standard_price : "";
        $data['stn_descrition']     = !empty($order->stn_descrition) ?  $order->stn_descrition : "";
        $data['stn_delivery_days']  = !empty($order->stn_delivery_days) ?  $order->stn_delivery_days : "";
        $data['stn_source_file']    = !empty($order->stn_source_file) ?  $order->stn_source_file : "";
        //Premimum
        $data['premium_price']         = !empty($order->premium_price) ?  $order->premium_price : "";
        $data['premium_description']   = !empty($order->premium_description) ?  $order->premium_description : "";
        $data['premium_delivery_days'] = !empty($order->premium_delivery_days) ?  $order->premium_delivery_days : "";
        $data['premium_source_file']   = !empty($order->premium_source_file) ?  $order->premium_source_file : "";
        $orderStatusName               = OrderStatus::where('id', $order->order_status)->first();
        $data['order_status']          = !empty($orderStatusName) ?  $orderStatusName->name : "";
        $data['ordsts']                = !empty($order->order_status) ?  $order->order_status : "";
        $data['imgdata']               = $imgdata;

        $data['buyerId']               = $order->buyerId;
        $data['sellerId']              = $order->sellerId;
        //  dd($data);

        return response()->json(['data' => $data]);
    }

    public function aceptOder(Request $request)
    {

        $orderId = $request->orderId;

        if (empty($orderId)) {
            return response()->json(['error' => 'Order ID is required.'], 400);
        }

        $order = Order::where('orderId', $orderId)->first();
        if (!$order) {
            return response()->json(['error' => 'Order not found.'], 404);
        }

        $order->order_status = 2; // Update the status as needed
        $order->save();

        return response()->json(['message' => 'Order rejected successfully.']);
    }


    public function rejectOrder(Request $request)
    {

        $orderId = $request->orderId;

        if (empty($orderId)) {
            return response()->json(['error' => 'Order ID is required.'], 400);
        }

        $order = Order::where('orderId', $orderId)->first();
        if (!$order) {
            return response()->json(['error' => 'Order not found.'], 404);
        }

        $order->order_status = 3; // Update the status as needed
        $order->save();

        return response()->json(['message' => 'Order rejected successfully.']);
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
            ->where('orders.order_status', 5)
            ->get();

       
        $earning = 0;
        foreach ($data as $v) {
            $row             = DB::table('tbl_setting')->where('id', 1)->first();
            $percentage      = $row->forSellerCommission; // Convert to float
            $selectedPrice   = $v->selected_price; // Convert to float
            $perResult       = ($percentage / 100) * $selectedPrice; // Calculate result amount
            $originalPrice   = $v->selected_price; // Ensure selected_packages is also a float
            $perResult       = floatval($perResult); // Ensure $perResult is a float
            $result          =  $originalPrice - $perResult; // This will work without error
            $earning += $result;
            
        }
        $rdata['earning']  = $earning;
        return response()->json($rdata, 200);
    }



    public function getOrderCountBuyer(Request $request)
    {

        $data = Order::where('buyerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->get();

        // Group orders by order_status
        $groupedOrders = $data->groupBy('order_status');

        // Initialize order counts
        $ordata['placeOrdersCount']      = isset($groupedOrders[1]) ? count($groupedOrders[1]) : 0;
        $ordata['inprogressOrdersCount'] = isset($groupedOrders[2]) ? count($groupedOrders[2]) : 0;
        $ordata['cancelOrdersCount']     = isset($groupedOrders[3]) ? count($groupedOrders[3]) : 0;
        $ordata['deliveryOrdersCount']   = isset($groupedOrders[4]) ? count($groupedOrders[4]) : 0;
        $ordata['completeOrdersCount']   = isset($groupedOrders[5]) ? count($groupedOrders[5]) : 0;

        return response()->json($ordata, 200);
    }

    public function getOrderCounting(Request $request)
    {

        $data = Order::where('sellerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->get();

        // Group orders by order_status
        $groupedOrders = $data->groupBy('order_status');

        // Initialize order counts
        $ordata['placeOrdersCount']      = isset($groupedOrders[1]) ? count($groupedOrders[1]) : 0;  // Assuming 1 is for 'place orders'
        $ordata['inprogressOrdersCount'] = isset($groupedOrders[2]) ? count($groupedOrders[2]) : 0;  // Assuming 2 is for 'in-progress orders'
        $ordata['cancelOrdersCount']     = isset($groupedOrders[3]) ? count($groupedOrders[3]) : 0;  // Assuming 4 is for 'cancel orders'
        $ordata['deliveryOrdersCount']   = isset($groupedOrders[4]) ? count($groupedOrders[4]) : 0;  // Assuming 3 is for 'delivery orders'
        $ordata['completeOrdersCount']   = isset($groupedOrders[5]) ? count($groupedOrders[5]) : 0;  // Assuming 3 is for 'delivery orders'
        // Process the orders if needed
        $orders = [];
        foreach ($data as $v) {
            $orders[] = [
                'id'      => $v->id,
                'orderId' => $v->orderId,
            ];
        }

        return response()->json($ordata, 200);
    }


    public function getOrderPlaceForSeller(Request $request)
    {
        $orderStatusId = $request->orderStatusId;
        $data          = Order::where('sellerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->where('orders.order_status', $orderStatusId)
            ->orderby('orders.id', 'desc')
            ->get();

        $orders = [];
        foreach ($data as $v) {

            $convDay = $v->delivery_day_convert_date;
            $currentDateTime = Carbon::now();
            $deliveryDateTime = Carbon::parse($convDay);

            if ($deliveryDateTime->isPast()) {
                $formattedTime = "<span style='color:black;'>Time Out<br/><small style='font-size: 10px;'>Request a time extension from the details page.</small></span>";
            } else {
                // Calculate the difference
                $remainingTime = $currentDateTime->diff($deliveryDateTime);

                //echo $remainingTime."<br>";

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
                'gig_name'          => substr($v->gig_name, 0, 30) . '...',
                'created_at'        => $v->created_at,
                'ddcovertDate'      => $v->delivery_day_convert_date,
                'selected_price'    => $v->selected_price,
                'selected_packages' => $v->selected_packages,
                'order_status'      => $v->order_status,
                'reamingitime'      => $formattedTime,

            ];
        }

        if ($orderStatusId == 1) {
            $ordata['placeOrders']   = $orders;
        }

        if ($orderStatusId == 2) {
            $ordata['inprogressOrders'] = $orders;
        }

        if ($orderStatusId == 3) {
            $ordata['cancelOrders']   = $orders;
        }

        if ($orderStatusId == 4) {
            $ordata['deliveryOrders'] = $orders;
        }
        if ($orderStatusId == 5) {
            $ordata['completeOrders'] = $orders;
        }
        $ordata['placeOrdersCount']      = count($orders);
        $ordata['inprogressOrdersCount'] = count($orders);
        $ordata['deliveryOrdersCount']   = count($orders);
        $ordata['cancelOrdersCount']     = count($orders);
        $ordata['completeOrdersCount']   = count($orders);
        return response()->json($ordata, 200);
    }

    public function updateStatus(Request $request)
    {
        $data['order_status'] = $request->status;
        Order::where('orderId', $request->oId)->update($data);
        return response()->json("update successfully", 200);
    }


    public function cancelOrderBuyer($orderId)
    {

        $orderId = $orderId;
        $status_id = 3;
        $data['order_status'] = $status_id;
        Order::where('orderId', $orderId)->update($data);
        return response()->json("update successfully", 200);
    }


    public function getOrderPlaceForByer(Request $request)
    {

        $orderStatusId = $request->orderStatusId;
        $data          = Order::where('buyerId', $this->userid)
            ->join('gig', 'orders.gig_id', '=', 'gig.id') // Join the gigs table
            ->select('orders.*', 'gig.name as gig_name', 'gig.gig_slug') // Select desired fields
            ->where('orders.order_status', $orderStatusId)
            ->get();

        $orders = [];
        foreach ($data as $v) {

            $convDay = $v->delivery_day_convert_date;
            $currentDateTime = Carbon::now();
            $deliveryDateTime = Carbon::parse($convDay);

            if ($deliveryDateTime->isPast()) {
                // $formattedTime = "<span style='color:black;'>Time Out<br/><small style='font-size: 10px;'>Request a time extension from the details page.</small></span>";
                $formattedTime = "<span style='color:black;'>Time Out</span>";
            } else {
                // Calculate the difference
                $remainingTime = $currentDateTime->diff($deliveryDateTime);

                //echo $remainingTime."<br>";

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
                'gig_name'          => substr($v->gig_name, 0, 30) . '...',
                'created_at'        => $v->created_at,
                'ddcovertDate'      => $v->delivery_day_convert_date,
                'selected_price'    => $v->selected_price,
                'selected_packages' => $v->selected_packages,
                'order_status'      => $v->order_status,
                'reamingitime'      => $formattedTime,

            ];
        }

        if ($orderStatusId == 1) {
            $ordata['placeOrders']   = $orders;
        }

        if ($orderStatusId == 2) {
            $ordata['inprogressOrders'] = $orders;
        }

        if ($orderStatusId == 3) {
            $ordata['cancelOrders']   = $orders;
        }

        if ($orderStatusId == 4) {
            $ordata['deliveryOrders'] = $orders;
        }
        if ($orderStatusId == 5) {
            $ordata['completeOrders'] = $orders;
        }

        return response()->json($ordata, 200);
    }


    public function allOrders()
    {


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

            $seller = User::where('id', $v->sellerId)->first();
            $buyer = User::where('id', $v->buyerId)->first();

            $orders[] = [
                'id'                => $v->id,
                'orderId'           => $v->orderId,
                'gig_slug'          => $v->gig_slug,
                'seller'            => !empty($seller) ? $seller->name : "",
                'buyer'             => !empty($buyer) ? $buyer->name : "---",
                'created_at'        => !empty($v->created_at) ? date("d-M-Y", strtotime($v->created_at)) : "",
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


            $ostatus = OrderStatus::where('id', $v->order_status)->first();

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
                'dayconvtDate'      => $v->delivery_day_convert_date,
                'ostatus'           => !empty($ostatus->name) ? $ostatus->name : "",
                'ostatusId'          => !empty($ostatus->id) ? $ostatus->id : "",

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
        //dd($request->all());
        $validator = FacadesValidator::make(
            $request->all(),
            [
                'gig_id'                 => 'required',
                'SelectedPackages'       => 'required',
                'SelectedPrice'          => 'required',

            ],
            [
                'gig_id'                => 'Gig is required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $chkSeller = Gig::where('id', $request->gig_id)->select('user_id')->first();


        $lev1_comm = 5;
        $lev2_comm = 4;
        $lev3_comm = 3;
        $lev4_comm = 2;
        $lev5_comm = 1;

        $serviceFee     = $request->service_fee;
        $lev1CommAmount = ($lev1_comm / 100) * $serviceFee;
        $lev2CommAmount = ($lev2_comm / 100) * $serviceFee;
        $lev3CommAmount = ($lev3_comm / 100) * $serviceFee;
        $lev4CommAmount = ($lev4_comm / 100) * $serviceFee;
        $lev5CommAmount = ($lev5_comm / 100) * $serviceFee;

        $subTotal = is_numeric($request->sub_total) ? (float) $request->sub_total : 0; // Cast to float or set to 0 if non-numeric
        $tips = is_numeric($request->tips) ? (float) $request->tips : 0; // Cast to float or set to 0 if non-numeric
        $total = $subTotal + $tips; 


        $gig_id                 = $request->gig_id;
        $seller_id              = $chkSeller->user_id ? $chkSeller->user_id : "";
        $service_fee            = $request->service_fee;
        $sub_total              = $total;
        $SelectedPackages       = $request->SelectedPackages;
        $SelectedPrice          = $request->SelectedPrice;
        $delivery_day           = $request->delivery_day;

        $randomNum = $this->userid . $this->generateUniqueRandomNumber() . "-" . date("y");

        // Create an array with the necessary fields
        $orderData = [
            'gig_id'              => $gig_id,
            'tips'                => $tips,
            'lev_1'               => $lev1CommAmount,
            'lev_2'               => $lev2CommAmount,
            'lev_3'               => $lev3CommAmount,
            'lev_4'               => $lev4CommAmount,
            'lev_5'               => $lev5CommAmount,
            'sellerId'            => $seller_id,
            'buyerId'             => $this->userid,
            'service_fee'         => $service_fee,
            'sub_total'           => $sub_total,
            'selected_packages'   => $SelectedPackages, // Assuming this is an array and needs to be stored as JSON
            'selected_price'      => $SelectedPrice,
            'delivery_day'        => $delivery_day,
            'delivery_day_convert_date' => Carbon::now()->addDays($delivery_day),
            'orderId'             => $randomNum,
            'order_status'        => 1, // Order Placed
        ];

        Order::create($orderData);
        return response()->json("Your order successfully done!", 200);
    }
}
