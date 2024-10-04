<?php

namespace App\Http\Controllers\Deposits;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Holiday;
use App\Models\User;
use App\Models\ManualAdjustment;
use App\Models\ProductAttributeValue;
use App\Models\ProductVarrientHistory;
use App\Models\Categorys;
use App\Models\ProductAttributes;
use App\Models\ProductCategory;
use App\Models\Product;
use App\Models\ProductAdditionalImg;
use App\Models\ProductVarrient;
use App\Models\AttributeValues;
use App\Models\CurrencyType;
use App\Models\Deposit;
use App\Models\ExpenseHistory;
use App\Models\MakeBank;
use App\Models\Order;
use App\Models\Withdraw;
use App\Models\Setting;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Carbon\Carbon;
use App\Models\MystoreHistory;
use App\Models\OrderStatus;
use App\Models\WalletAddress;
use Session;
use DB;
use Curl\Curl;

class DropUserController extends Controller
{
    protected $userid;
    protected $email;
    protected $role_id;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        if (!empty($id)) {
            $user = User::find($id->id);
            $this->userid = $user->id;
            $this->email = $user->email;
            $this->role_id = $user->role_id;
        }
    }

    public function filterOrders(Request $request)
    {

        $categoryId         =  (int) $request->categoryId;
        $pay_confirm_date   =  $request->pay_confirm_date;
        $selectedStatus     =  (int) $request->selectedStatus;

        $proCategory = ProductCategory::where('category_id', $categoryId)->select('product_id')->get();
        $productIds  = $proCategory->pluck('product_id')->toArray();
        //dd($productIds);
        // Search for products with those IDs using whereIn

        $query = Order::whereIn('product_id', $productIds);

        if (!empty($pay_confirm_date)) {
            $query->whereDate('pay_confirm_time', $pay_confirm_date);
        }

        if (!empty($selectedStatus)) {
            $query->where('orders.order_status', $selectedStatus);
        } else {
            $query->whereIn('orders.order_status', [1, 2, 3, 4, 5, 6]);
        }
        //$query        = $query->get();

        $page               = $request->input('page', 1);
        $pageSize           = $request->input('pageSize', 300); //default:10
        $paginator          = $query->paginate($pageSize, ['*'], 'page', $page);
        $modifiedCollection = $paginator->getCollection()->map(function ($item) {
            $orderStatus = OrderStatus::where('id', $item->order_status)->first();
            return [
                'product_name'     => mb_substr($item->product_name, 0, 25, 'UTF-8') . '...',
                'buying_price'     => $item->buying_price,
                'product_id'       => $item->product_id,
                'orderId'          => $item->orderId,
                'id'               => $item->id,
                'order_status'     => $orderStatus->name,
                'pay_confirm_time' => date("Y-m-d H:i:s", strtotime($item->pay_confirm_time)),
            ];
        });

        //dd($modifiedCollection);
        return response()->json([
            'data'              => $modifiedCollection,
            'current_page'      => $paginator->currentPage(),
            'total_pages'       => $paginator->lastPage(),
            'total_records'     => $paginator->total(),
            'ordersCount'       => $totalRows = $query->count(),
        ], 200);
    }

    public function filterUsersProducts(Request $request)
    {

        $current_date   = date("Y-m-d");
        $categoryId     = $request->categoryId;
        $productsArry   = ProductCategory::join('product', 'produc_categories.product_id', '=', 'product.id')
            ->select('product.id', 'product.name', 'product.buying_price') // Select the columns you need from the products table
            ->where('produc_categories.category_id', $categoryId)
            ->get();

        $result = [];
        foreach ($productsArry as $v) {
            $result[] = [
                'id'            => $v->id,
                'name'          => mb_substr($v->name, 0, 25, 'UTF-8') . '...',
                'buying_price'  => number_format($v->buying_price, 2),
            ];
        }

        $active_stores = MystoreHistory::join('users', 'mystore_history.user_id', '=', 'users.id')
            ->select('mystore_history.*', 'users.id', 'users.email')
            ->where('mystore_history.end_date', '>=', $current_date)
            ->where('mystore_history.category_id', $categoryId)
            ->get();

        // where('end_date', '>=', $current_date)->where('category_id', $categoryId)->get();

        $data['productArray'] = $result;
        $data['usersArray']   = $active_stores;
        $data['usersCount']   = count($active_stores);
        return response()->json($data, 200);
    }

    public function getTransactionReport(Request $request)
    {

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        // Get search query from the request
        $searchQuery    = $request->searchQuery;
        $selectedFilter = (int)$request->selectedFilter;
        // dd($selectedFilter);
        $query = ExpenseHistory::orderBy('expense_history.id', 'desc') // Base query
            ->join('users', 'expense_history.user_id', '=', 'users.id') // Join on user_id
            ->select( // Select the relevant columns
                'expense_history.*', // Select all columns from ManualAdjustment
                'users.name', // Additional user data
                'users.email',
                'users.id'
            );

        if (!empty($searchQuery)) {
            // $query->where('depositID', 'like', '%' . $searchQuery . '%');
            $query->where('users.email', $searchQuery);
        }

        if (!empty($selectedFilter)) {

            $query->where('manual_adjustment.adjustment_type', $selectedFilter);
        }

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);

        $modifiedCollection = $paginator->getCollection()->map(function ($item) {

            $userrow = User::find($item->user_id);
            return [
                'id'                  => $item->id,
                'name'                => !empty($userrow->name) ?  $userrow->name : "N/A",
                'email'               => !empty($userrow->email) ?  $userrow->email : "N/A",
                'phone'               => !empty($userrow->phone_number) ?  $userrow->phone_number : "N/A",
                'operation_amount'    => number_format($item->operation_amount, 2),
                'charge_description'  => $item->charge_description,
                'operation_date'      => date("Y-m-d", strtotime($item->operation_date)),
                'operation_type'      => $item->operation_type,
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

    public function getManualAdjustmentReport(Request $request)
    {

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        // Get search query from the request
        $searchQuery    = $request->searchQuery;
        $selectedFilter = (int)$request->selectedFilter;
        // dd($selectedFilter);
        $query = ManualAdjustment::orderBy('manual_adjustment.id', 'desc') // Base query
            ->join('users', 'manual_adjustment.user_id', '=', 'users.id') // Join on user_id
            ->select( // Select the relevant columns
                'manual_adjustment.*', // Select all columns from ManualAdjustment
                'users.name', // Additional user data
                'users.email',
                'users.id  as userid'
            );

        if (!empty($searchQuery)) {
            // $query->where('depositID', 'like', '%' . $searchQuery . '%');
            $query->where('users.email', $searchQuery);
        }

        if ($selectedFilter == 5) {
            $query->whereIn('manual_adjustment.adjustment_type', [1, 2]);
        } else {
            $query->where('manual_adjustment.adjustment_type', $selectedFilter);
        }

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);

        $modifiedCollection = $paginator->getCollection()->map(function ($item) {

            if ($item->adjustment_type == 1) {
                $status = "Debited";
            } else if ($item->adjustment_type == 2) {
                $status = "Credited";
            }
            $userrow = User::find($item->user_id);
            return [
                'id'                  => $item->id,
                'name'                => !empty($userrow->name) ?  $userrow->name : "N/A",
                'email'               => !empty($userrow->email) ?  $userrow->email : "N/A",
                'phone'               => !empty($userrow->phone_number) ?  $userrow->phone_number : "N/A",
                'adjustment_amount'   => $item->adjustment_amount,
                'detailed_remarks'    => $item->detailed_remarks,
                'created_at'          => date("Y-m-d", strtotime($item->created_at)),
                'status'              => $status,
                'adjustment_type'     => $item->adjustment_type,
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

    public function getwalletAddress(Request $request)
    {

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        // Get search query from the request
        $searchQuery    = $request->searchQuery;
        $selectedFilter = (int)$request->selectedFilter;
        // dd($selectedFilter);
        $query = WalletAddress::orderBy('withdrawal_method.id', 'desc') // Base query
            ->join('users', 'withdrawal_method.user_id', '=', 'users.id') // Join on user_id
            ->select( // Select the relevant columns
                'withdrawal_method.*', // Select all columns from ManualAdjustment
                'users.name', // Additional user data
                'users.email',
                'users.id as userid'
            );

        if (!empty($searchQuery)) {
            // $query->where('depositID', 'like', '%' . $searchQuery . '%');
            $query->where('users.email', $searchQuery);
        }

        // if (!empty($selectedFilter)) {

        //     $query->where('manual_adjustment.adjustment_type', $selectedFilter);
        // }

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);

        $modifiedCollection = $paginator->getCollection()->map(function ($item) {
            $userrow = User::find($item->user_id);
            return [
                'id'                  => $item->id,
                'user_id'             => $item->userid,
                'name'                => !empty($userrow->name) ?  $userrow->name : "N/A",
                'email'               => !empty($userrow->email) ?  $userrow->email : "N/A",
                'phone'               => !empty($userrow->phone_number) ?  $userrow->phone_number : "N/A",
                'wallet_address'      => $item->wallet_address,
                'created_at'          => date("Y-m-d", strtotime($item->created_at)),
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

    public function getComissionReportToday()
    {

        $current_date = date("Y-m-d");
        $userId  = $this->userid;
        $checkL1 = User::where('ref_id', $userId)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        //Level 1
        $level1_ids = $checkL1->pluck('id')->toArray();
        $lev_1totalOrderProfit = 0;
        foreach ($level1_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->where('order_date', $current_date)->sum('profit');
            $lev_1totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level1Profit = $lev_1totalOrderProfit * 0.05;
        $data['level_1_profit'] = number_format($level1Profit, 2);
        //Level 2
        $checkL2    = User::whereIn('ref_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level2_ids = $checkL2->pluck('id')->toArray();

        $lev_2totalOrderProfit = 0;
        foreach ($level2_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->where('order_date', $current_date)->sum('profit');
            $lev_2totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level2Profit = $lev_2totalOrderProfit * 0.04;
        $data['level_2_profit'] = number_format($level2Profit, 2);
        //Level 3
        $checkL3    = User::whereIn('ref_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level3_ids = $checkL3->pluck('id')->toArray();

        $lev_3totalOrderProfit = 0;
        foreach ($level3_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->where('order_date', $current_date)->sum('profit');
            $lev_3totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level3Profit = $lev_3totalOrderProfit * 0.03;
        $data['level_3_profit'] = number_format($level3Profit, 2);
        //Level 4
        $checkL4    = User::whereIn('ref_id', $level3_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level4_ids = $checkL4->pluck('id')->toArray();
        $lev_4totalOrderProfit = 0;
        foreach ($level4_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->where('order_date', $current_date)->sum('profit');
            $lev_4totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level4Profit = $lev_4totalOrderProfit * 0.02;
        $data['level_4_profit'] = number_format($level4Profit, 2);
        //Level 5
        $checkL5    = User::whereIn('ref_id', $level4_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level5_ids = $checkL5->pluck('id')->toArray();
        $lev_5totalOrderProfit = 0;
        foreach ($level5_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->where('order_date', $current_date)->sum('profit');
            $lev_5totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level5Profit = $lev_5totalOrderProfit * 0.01;
        $data['level_5_profit'] = number_format($level5Profit, 2);

        $allsum = $level1Profit + $level2Profit + $level3Profit + $level4Profit + $level5Profit;

        $data['today_commission_sum'] = number_format($allsum, 2);
        return response()->json($data, 200);
    }

    public function report()
    {

        $currentMonthStart = Carbon::now()->startOfMonth();  // First day of the current month
        $currentMonthEnd   = Carbon::now()->endOfMonth();  // Last day of the current month

        $lastMonthStart    = Carbon::now()->subMonth()->startOfMonth(); // First day of last month
        $lastMonthEnd      = Carbon::now()->subMonth()->endOfMonth(); // Last day of last month

        $chkPendingOrderStatus    = Order::where('user_id', $this->userid)->whereIn('order_status', [2, 3, 4, 5])->count();
        $availableBalatransection = Order::where('user_id', $this->userid)->whereIn('order_status', [2, 3, 4, 5])->sum('buying_price');
        $numberOfComplatation     = Order::where('user_id', $this->userid)->whereIn('order_status', [6])->count();

        $currentMonth             = Order::where('user_id', $this->userid)
            ->whereBetween('order_date', [$currentMonthStart, $currentMonthEnd]) // Orders within current month
            ->whereIn('order_status', [2, 3, 4, 5, 6]) // Specific statuses
            ->count();  // Get the total count of such orders 

        $lastMonthOrders          = Order::where('user_id', $this->userid)
            ->whereBetween('order_date', [$lastMonthStart, $lastMonthEnd]) // Orders from last month
            ->whereIn('order_status', [2, 3, 4, 5, 6]) // Specific statuses
            ->count(); // Get all matching orders

        $totalSale               = Order::where('user_id', $this->userid)
            ->whereIn('order_status', [2, 3, 4, 5, 6]) // Specific statuses
            ->sum('selling_price'); // Get all matching orders

        //Proft 

        $totalProfit            = Order::where('user_id', $this->userid)
            ->whereIn('order_status', [2, 3, 4, 5, 6]) // Specific statuses
            ->sum('profit'); // Get all matching orders

        $currentMonthProfit      = Order::where('user_id', $this->userid)
            ->whereBetween('order_date', [$currentMonthStart, $currentMonthEnd]) // Orders within current month
            ->whereIn('order_status', [2, 3, 4, 5, 6]) // Specific statuses
            ->sum('profit'); // Get the total count of such orders 

        $lastMonthProfit       = Order::where('user_id', $this->userid)
            ->whereBetween('order_date', [$lastMonthStart, $lastMonthEnd]) // Orders from last month
            ->whereIn('order_status', [2, 3, 4, 5, 6]) // Specific statuses
            ->sum('profit'); // Get all matching orders

        //Total Seles 
        $toalSalescurrentMonth  = Order::where('user_id', $this->userid)
            ->whereBetween('order_date', [$currentMonthStart, $currentMonthEnd]) // Orders within current month
            ->whereIn('order_status', [2, 3, 4, 5, 6]) // Specific statuses
            ->sum('selling_price');  // Get the total count of such orders 

        $toalSaleslastMonth       = Order::where('user_id', $this->userid)
            ->whereBetween('order_date', [$lastMonthStart, $lastMonthEnd]) // Orders from last month
            ->whereIn('order_status', [2, 3, 4, 5, 6]) // Specific statuses
            ->sum('selling_price');  // Get all matching orders

        $data['pendingOrders']  = $chkPendingOrderStatus;
        $data['currentMonth']   = $currentMonth;
        $data['lastMonthOrders'] = $lastMonthOrders;
        $data['totalSale']      = number_format($totalSale, 2);
        $data['totalProfit']    = number_format($totalProfit, 2);

        $data['toalSalescurrentMonth']     = number_format($toalSalescurrentMonth, 2);
        $data['toalSaleslastMonth']        = number_format($toalSaleslastMonth, 2);
        $data['availableBalatransection']  = number_format($availableBalatransection, 2);
        $data['numberOfComplatation']      = number_format($numberOfComplatation, 2);
        $data['currentMonthProfit']        = number_format($currentMonthProfit, 2);
        $data['lastMonthProfit']           = number_format($lastMonthProfit, 2);

        return response()->json($data, 200);
    }

    public function checkWithdrawalMethod()
    {
        try {
            // $data = MakeBank::where('user_id',$this->userid)->first();
            // return response()->json(
            //     ['data'=> $data], 200);
            $data = MakeBank::join('users', 'withdrawal_method.user_id', '=', 'users.id')
                ->where('users.id', $this->userid)
                ->select('withdrawal_method.*', 'users.name') // Select columns from both tables
                ->get();

            return response()->json(['data' => $data], 200);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }

    public function chkfindWithdraInfo()
    {

        $data = MakeBank::where('user_id', $this->userid)->get();
        return response()->json(['data' => $data], 200);
    }

    public function getCurrencyType()
    {

        try {
            $query = CurrencyType::orderBy('id', 'desc')->get();
            $chkBank = MakeBank::where('user_id', $this->userid)->first();
            return response()->json(
                [
                    'data'          => $query,
                    'chkWallet'     => !empty($chkBank->wallet_address) ? $chkBank->wallet_address : "",
                ],
                200
            );
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }

    public function depositRequest(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'depsoitAmount'  => 'required|numeric',
                'payment_method' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $generateID = "D" . date("Y") . $this->generateUnique4DigitNumber();

            $data = array(
                'depositID'      => $generateID,
                'depscription'   => $generateID,
                'deposit_amount' => $request->depsoitAmount,
                'payment_method' => $request->payment_method,
                'status'         => 0,
                'user_id'        => $this->userid
            );
            $insert_id = Deposit::insertGetId($data);

            $merchant_no       = "3190005"; // old: 3090032 //new: 3190005
            $merchant_key      = "408c94deb5b3de6012d5bdc6be677c65";

            $amount = $request->depsoitAmount; ///"10";
            $product = "USDT-TRC20Deposit";
            $params = array(
                'merchant_ref'      => $generateID,
                'product'           => $product,
                'amount'            => $amount,
            );
            $params_json = json_encode($params, 320);
            $data = array(
                'merchant_no'       => $merchant_no,
                'timestamp'         => time(),
                'sign_type'         => 'MD5',
                'params'            => $params_json,
            );
            //strtotime("Day")
            $data['sign'] = $this->get_sign($data, $merchant_key); //MD5签名 不区分大小写 //https://api.dppay.cc/api/gateway/pay
            $payurl = "";
            $response = $this->http("https://api.dppay.cc/api/gateway/pay", 'POST', $data);
            $result = json_decode($response, true);
            $code = isset($result['code']) ? $result['code'] : 404;
            $message = isset($result['message']) ? $result['message'] : 'errorMsg:' . (string)$response;
            if ($code == 200) {
                $params = json_decode($result['params'], true);
                $payurl = isset($params['payurl']) ? $params['payurl'] : '';

                return response()->json($params);
            } else {
                exit('下单失败，返回错误信息：' . $message);
            }

            return response()->json("Last insert ID: $insert_id");
        } catch (QueryException $e) {
            // Log the error or handle it as needed
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            // Handle other exceptions
            print_R($e);
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }

    //签名 signature
    public function get_sign($data = array(), $key = '')
    {
        $merchant_no = isset($data['merchant_no']) ? $data['merchant_no'] : '';
        $params = isset($data['params']) ? $data['params'] : '';
        $sign_type = isset($data['sign_type']) ? $data['sign_type'] : '';
        $timestamp = isset($data['timestamp']) ? $data['timestamp'] : '';
        $sign_str = $merchant_no . $params . $sign_type . $timestamp . $key;
        $sign = md5($sign_str);
        return $sign;
    }
    public function http($url = '', $method = 'POST', $postData = array(), $header = array())
    {
        //echo $url; exit; 
        $data = '';
        if (!empty($url)) {
            try {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                //curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_HEADER, false);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_TIMEOUT, 30); //30秒超时
                curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // 信任任何证书  
                curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2); // 检查证书中是否设置域名
                if ($header) {
                    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
                }
                if (strtoupper($method) == 'POST') {
                    $curlPost = is_array($postData) ? http_build_query($postData) : $postData;
                    curl_setopt($ch, CURLOPT_POST, 1);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
                }
                $data = curl_exec($ch);
                curl_close($ch);
            } catch (Exception $e) {
                $data = '';
            }
        }
        return $data;
    }

    public function updateMakeBank(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'id'  => 'required|numeric',
                'currency_type_id'  => 'required|numeric',
                'wallet_address' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $existingRecord = MakeBank::where('id', $request->id)->where('user_id', $this->userid)->first();

            if ($existingRecord) {
                // Update existing record
                $existingRecord->update([
                    'currency_type_id' => $request->currency_type_id,
                    'wallet_address'   => $request->wallet_address
                ]);
                $response = $existingRecord->id; // Assuming you need to return the ID
                return response()->json($response);
            }
        } catch (QueryException $e) {
            // Log the error or handle it as needed
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            // Handle other exceptions
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }

    public function makeBank(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'currency_type_id'  => 'required|numeric',
            'wallet_address' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = array(
            'currency_type_id' => $request->currency_type_id,
            'wallet_address'   => $request->wallet_address,
            'user_id'          => $this->userid
        );
        $resonse = MakeBank::insertGetId($data);
        return response()->json($resonse);
    }

    public function sendWithdrawRequestToMerchant(Request $request)
    {

        //  dd($request->all());

        try {
            //dd($request->all());
            //echo "ID: $id, payable amount: $payable_amount";
            //exit;
            $user_id        = $request->id;
            $payable_amount = $request->payable_amount;
            $chkPoint       = Withdraw::where('id', $user_id)->first();
            $checkWalletAddress = WalletAddress::where('user_id', $chkPoint->user_id)->first();
            $wallet_address     = !empty($checkWalletAddress->wallet_address) ? $checkWalletAddress->wallet_address : "";

            $merchant_no       = "3190005"; // old: 3090032 //new: 3190005
            $merchant_key      = "408c94deb5b3de6012d5bdc6be677c65";

            $walletAddress     = $wallet_address;
            $generateID        = $chkPoint->withdrawID; //"W" . date("Y") . $this->generateUnique4DigitNumber();

            $amount = $payable_amount; ///"10";
            $product = "USDT-TRC20Payout";
            $params = array(
                'merchant_ref'      => $generateID,
                'product'           => $product,
                'amount'            => $amount,
                'extra'             => ['address' => $walletAddress]
            );
            $params_json = json_encode($params, 320);
            $data = array(
                'merchant_no'       => $merchant_no,
                'timestamp'         => time(),
                'sign_type'         => 'MD5',
                'params'            => $params_json,
            );
            //strtotime("Day")
            $data['sign'] = $this->get_sign($data, $merchant_key); //MD5签名 不区分大小写 https://api.dppay.cc/api/gateway/withdraw
            $payurl = "";
            $response = $this->http("https://api.dppay.cc/api/gateway/withdraw", 'POST', $data);
            $result = json_decode($response, true);
            // dd($result);

            $code = isset($result['code']) ? $result['code'] : 404;
            $message = isset($result['message']) ? $result['message'] : 'errorMsg:' . (string)$response;
            if ($code == 200) {
                $params = json_decode($result['params'], true);
                //$payurl = isset($params['payurl']) ? $params['payurl'] : '';
                return response()->json($params);
            } else {
                //exit('Error：' . $message);
                return response()->json(['errors' => ['api_error' => $message]], 422); // Modified structure
                // exit;
            }

            return response()->json(['last id' => $user_id], 200);
            //dd($data['wallet_address']);
            return response()->json($data);
        } catch (\Exception $e) {
            echo "Error: " . $e->getMessage();
            $error = $e->getMessage();
            return response()->json($error);
        }
    }

    public function approvedWithdrawRequest($id)
    {

        $data['status'] = 1;
        Withdraw::where('id', $id)->update($data);
        return response()->json($data);
    }

    public function withdrawRequest(Request $request)
    {
        //dd($request->all());
        $currentpassword =  $request->password;
        $checkUser       =  User::find($this->userid);
        //echo $checkUser->password;exit;
        // Compare the hashed input password with the hashed password stored in the database

        $response       = app('App\Http\Controllers\Dropshipping\DropUserController')->getCurrentBalance();
        $currentBalance = $response instanceof JsonResponse ? $response->getData(true)['currentbalance'] : 0;
        // dd($currentBalance);
        try {
            $validator = Validator::make($request->all(), [
                'withdraw_amount'  => 'required|numeric',
                'bank_card'        => 'required',
                'payable_amount'   => 'required',
                'password'         => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $chkDeposit         = Deposit::where('id', $this->userid)->first();
            $checkWalletAddress = WalletAddress::where('user_id', $this->userid)->first();
            $wallet_address     = !empty($checkWalletAddress->wallet_address) ? $checkWalletAddress->wallet_address : "";

            //$depositAmt = !empty($chkDeposit) ? $chkDeposit->deposit_amount : 0;
            $chkSetting = Setting::find(1);
            $generateID = "W" . date("Y") . $this->generateUnique4DigitNumber();
            $withAmt    = !empty($chkSetting->withdraw_minimum_amount) ? $chkSetting->withdraw_minimum_amount : 0; // The allowed limit for withdrawal
            $withMethod = MakeBank::where('user_id', $this->userid)->first();
            $withdraw_amount = (int) $request->withdraw_amount;

            if (!Hash::check($currentpassword, $checkUser->with_password)) { // fixed condition
                return response()->json(['errors' => ['password' => 'Invalid password']], 422); // Modified structure
            }

            if ($withdraw_amount < $withAmt) {
                $msg = "Please increase your amount. Minimum withdrawal Amount $$withAmt";
                //return response()->json(['withdrawal_mini_error' => $msg], 422);
                return response()->json(['errors' => ['withdrawal_error' => $msg]], 422); // Modified structure
            }
            $currtBalance = (int) $currentBalance;

            if ($withdraw_amount > $currtBalance) {
                $convertAmount  =  number_format($currentBalance, 2);
                $msg = "Your current balance is $$convertAmount Please valid request";
                return response()->json(['errors' => ['deposit_error' => $msg]], 422); // Modified structure

            }

            $data = array(
                'withdrawID'      => $generateID,
                'depscription'    => $generateID,
                'withdraw_amount' => $request->withdraw_amount,
                'withdrawal_method_id' => !empty($withMethod->id) ? $withMethod->id : "",
                'transection_fee' => !empty($chkSetting) ? $chkSetting->withdraw_service_charge : 0,
                'payable_amount'  => $request->payable_amount,
                'password'        => $request->password,
                'status'          => 0,
                'user_id'         => $this->userid
            );
            $resonse = Withdraw::insertGetId($data);
            /*API 
            $merchant_no     = "3090032";
            $merchant_key    = "f82b830d09bc92f726b71066be300c50";
            $walletAddress   = $wallet_address;

            $amount = $request->payable_amount; ///"10";
            $product = "USDT-TRC20Payout";
            $params = array(
                'merchant_ref'      => $generateID,
                'product'           => $product,
                'amount'            => $amount,
                'extra'             => ['address' => $walletAddress]
            );
            $params_json = json_encode($params, 320);
            $data = array(
                'merchant_no'       => $merchant_no,
                'timestamp'         => time(),
                'sign_type'         => 'MD5',
                'params'            => $params_json,
            );
            //strtotime("Day")
            $data['sign'] = $this->get_sign($data, $merchant_key); //MD5签名 不区分大小写
            $payurl = "";
            $response = $this->http("https://api.dppay.vip/api/gateway/withdraw", 'POST', $data);
            $result = json_decode($response, true);
            $code = isset($result['code']) ? $result['code'] : 404;
            $message = isset($result['message']) ? $result['message'] : 'errorMsg:' . (string)$response;
            if ($code == 200) {
                $params = json_decode($result['params'], true);
                //$payurl = isset($params['payurl']) ? $params['payurl'] : '';
                //$file = dirname(__FILE__).'/withdraw.txt';
                //file_put_contents($file, json_encode($params));
                return response()->json($params);
            } else {
                exit('Error：' . $message);
                // return response()->json(['errors' => ['api_error' => $message]], 422); // Modified structure
                // exit;
            }
            */
            return response()->json($resonse, 200);
        } catch (QueryException $e) {
            // Log the error or handle it as needed
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            // Handle other exceptions
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }

    function generateUnique4DigitNumber($existingNumbers = [])
    {
        do {
            $uniqueNumber = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
        } while (in_array($uniqueNumber, $existingNumbers));

        return $uniqueNumber;
    }

    public function getMyDepositAmount()
    {

        $response           = $this->getCurrentBalance();
        $responseContent    = json_decode($response->getContent(), true);
        $currentBalance     = $responseContent['current_balance'];
        $checkOrder         = Order::where('user_id', $this->userid)->where('order_status', 6)->select('id', 'user_id')->first();
        try {

            $setting        = Setting::find(1);
            return response()->json(
                [
                    'data'          => $currentBalance,
                    'orderStatus'   => !empty($checkOrder) ? 1 : 0,
                    'setting' => $setting,

                ],
                200
            );
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }

    public function withDrawalRequestList(Request $request)
    {

        try {

            //Withdraw::where('user_id', $this->userid)->orderBy('id', 'desc');
            $query = Withdraw::select('withdraw.*', 'currency_type.name as currency_type_name', 'withdrawal_method.wallet_address as wallet_address')
                ->Leftjoin('withdrawal_method', 'withdraw.withdrawal_method_id', '=', 'withdrawal_method.id')
                ->Leftjoin('currency_type', 'withdrawal_method.currency_type_id', '=', 'currency_type.id')
                ->where('withdraw.user_id', $this->userid)
                ->orderBy('withdraw.id', 'desc');

            if ($request->has('orderId')) {
                $query->where('withdrawID', $request->orderId);
            }

            $depositArr = $query->get();

            return response()->json(['data' => $depositArr], 200);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }
    public function accountDetailsList(Request $request)
    {

        try {

            $accDetails = ExpenseHistory::where('user_id', $this->userid)->orderBy('id', 'desc')->get();
            return response()->json(['data' => $accDetails], 200);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }

    public function depositRequestList(Request $request)
    {
        try {
            $query = Deposit::where('user_id', $this->userid)->orderBy('id', 'desc');

            if ($request->has('orderId')) {
                $query->where('depositID', $request->orderId);
            }
            $depositArr = $query->get();
            return response()->json(['data' => $depositArr], 200);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database error occurred.'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
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

    public function getCurrentBalance()
    {
        // WORNING MESSAGES IF YOU CHANGE INSIDE METHOD PLEAE INSITANT CHANGE THIS METHOD: getCurrentBalanceCheckAdminIndivUser
        $customTimeZone = 'Asia/Dhaka';
        $currentTime = Carbon::now($customTimeZone);
        // Add 8 hours to the current datetime
        $currentTime->addHours(10);
        // Format the datetime as needed
        $current_date   = date("Y-m-d");
        $activeStore    = MystoreHistory::where('user_id', $this->userid)->sum('service_price');

        $response = $this->getComissionReport();
        $allLevelCommission = $response->original['commission_sum'] ?? null;  // 'true' for associative array

        $user_id           = $this->userid;
        $manAdjstSum       = ManualAdjustment::where('user_id', $user_id)->where('adjustment_type', 1)->sum('adjustment_amount');
        $manAdjstMinus     = ManualAdjustment::where('user_id', $user_id)->where('adjustment_type', 2)->sum('adjustment_amount');
        $depositAmt        = Deposit::where('user_id', $user_id)->where('status', 1)->sum('receivable_amount');
        $withdrawAmt       = Withdraw::where('user_id', $user_id)->where('status', 1)->sum('withdraw_amount');
        $totalWithdraw_processing   =  Withdraw::where('user_id', $user_id)->where('status', 0)->sum('withdraw_amount');

        $chkPendingOrder   = Order::where('user_id', $user_id)->whereIn('order_status', [2, 3, 4, 5])->sum('buying_price');
        $completeOrders    = Order::where('user_id', $user_id)->whereIn('order_status', [6])->sum('profit');

        //echo "depositAmt: $depositAmt , manAdjstSum: $manAdjstSum , completeOrders: $completeOrders ,allLevelCommission: $allLevelCommission";
        //echo "<br>----";
        //echo "activeStore: $depositAmt, chkPendingOrder: $chkPendingOrder , manAdjstMinus: $manAdjstMinus , withdrawAmt:  $withdrawAmt;";
        // exit; 
        $allCredit         = $depositAmt + $manAdjstSum + $completeOrders + $allLevelCommission;
        $allDebit          = $activeStore  + $chkPendingOrder + $manAdjstMinus +  $withdrawAmt + $totalWithdraw_processing;
        $result            = $allCredit - $allDebit;
        //echo $result; exit; 
        $data['current_balance'] = number_format($result, 2); // Formated Balance 
        $data['currentbalance']  = $result; //Without Format balance 
        $data['chkPendingOrderStatus'] = number_format($chkPendingOrder, 2);
        //available_balance
        $udata['available_balance'] = $data['current_balance'];
        User::where('id', $this->userid)->update($udata);

        return response()->json($data, 200);
    }

    public function getCurrentBalanceCheckAdminIndivUser($user_id)
    {

        //echo $user_id;
        $customTimeZone = 'Asia/Dhaka';
        $currentTime = Carbon::now($customTimeZone);
        // Add 8 hours to the current datetime
        $currentTime->addHours(10);
        // Format the datetime as needed
        $current_date   = date("Y-m-d");
        $activeStore  = MystoreHistory::where('user_id', $user_id)->sum('service_price');

        $response = $this->getComissionReportAdmin($user_id);
        $allLevelCommission = $response->original['commission_sum'] ?? null;  // 'true' for associative array
        //dd($allLevelCommission);
        //$user_id           = $this->userid;
        $manAdjstSum       = ManualAdjustment::where('user_id', $user_id)->where('adjustment_type', 1)->sum('adjustment_amount');
        $manAdjstMinus     = ManualAdjustment::where('user_id', $user_id)->where('adjustment_type', 2)->sum('adjustment_amount');
        $depositAmt        = Deposit::where('user_id', $user_id)->where('status', 1)->sum('receivable_amount');

        $withdrawAmt       = Withdraw::where('user_id', $user_id)->whereIn('status', [1])->sum('withdraw_amount');
        $totalWithdraw_processing   =  Withdraw::where('user_id', $user_id)->where('status', 0)->sum('withdraw_amount');
        //dd($depositAmt);
        $chkPendingOrder   = Order::where('user_id', $user_id)->whereIn('order_status', [2, 3, 4, 5])->sum('buying_price');
        $completeOrders    = Order::where('user_id', $user_id)->whereIn('order_status', [6])->sum('profit');

        // echo "depositAmt: $depositAmt , manAdjstSum: $manAdjstSum , completeOrders: $completeOrders ,allLevelCommission: $allLevelCommission<br>";
        // echo "<br>----";
        // echo "activeStore: $activeStore, chkPendingOrder: $chkPendingOrder , manAdjstMinus: $manAdjstMinus , withdrawAmt:  $withdrawAmt;";
        // exit; 

        $allCredit         = $depositAmt + $manAdjstSum + $completeOrders + $allLevelCommission;

        $allDebit          = $activeStore  + $chkPendingOrder + $manAdjstMinus +  $withdrawAmt + $totalWithdraw_processing;
        $result            = $allCredit - $allDebit;
        // echo $result;exit;
        $data['current_balance'] = number_format($result, 2); // Formated Balance 
        $data['currentbalance']  = $result; //Without Format balance 
        $data['chkPendingOrderStatus'] = number_format($chkPendingOrder, 2);
        //available_balance
        $udata['available_balance'] = $data['current_balance'];
        User::where('id', $user_id)->update($udata);
        return response()->json($data, 200);
    }

    public function getComissionReport()
    {

        $userId  = $this->userid;
        $checkL1 = User::where('ref_id', $userId)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();

        //Level 1
        $level1_ids = $checkL1->pluck('id')->toArray();
        $lev_1totalOrderProfit = 0;
        foreach ($level1_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_1totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level1Profit = $lev_1totalOrderProfit * 0.05;
        $data['level_1_profit'] = number_format($level1Profit, 2);
        //Level 2
        $checkL2    = User::whereIn('ref_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level2_ids = $checkL2->pluck('id')->toArray();

        $lev_2totalOrderProfit = 0;
        foreach ($level2_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_2totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level2Profit = $lev_2totalOrderProfit * 0.04;
        $data['level_2_profit'] = number_format($level2Profit, 2);
        //Level 3
        $checkL3    = User::whereIn('ref_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level3_ids = $checkL3->pluck('id')->toArray();

        $lev_3totalOrderProfit = 0;
        foreach ($level3_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_3totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level3Profit = $lev_3totalOrderProfit * 0.03;
        $data['level_3_profit'] = number_format($level3Profit, 2);
        //Level 4

        $checkL4    = User::whereIn('ref_id', $level3_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level4_ids = $checkL4->pluck('id')->toArray();
        $lev_4totalOrderProfit = 0;
        foreach ($level4_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_4totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level4Profit = $lev_4totalOrderProfit * 0.02;
        $data['level_4_profit'] = number_format($level4Profit, 2);
        //Level 5
        $checkL5    = User::whereIn('ref_id', $level4_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level5_ids = $checkL5->pluck('id')->toArray();
        $lev_5totalOrderProfit = 0;
        foreach ($level5_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_5totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level5Profit = $lev_5totalOrderProfit * 0.01;
        $data['level_5_profit'] = number_format($level5Profit, 2);

        $allsum = $level1Profit + $level2Profit + $level3Profit + $level4Profit + $level5Profit;

        $data['commission_sum'] = number_format($allsum, 2);
        // dd($data);
        return response()->json($data, 200);
        //dd($data);
    }

    public function getComissionReportAdmin($userId)
    {
        $checkL1 = User::where('ref_id', $userId)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        //Level 1
        $level1_ids = $checkL1->pluck('id')->toArray();
        $lev_1totalOrderProfit = 0;
        foreach ($level1_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_1totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level1Profit = $lev_1totalOrderProfit * 0.05;
        $data['level_1_profit'] = number_format($level1Profit, 2);
        //Level 2
        $checkL2    = User::whereIn('ref_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level2_ids = $checkL2->pluck('id')->toArray();

        $lev_2totalOrderProfit = 0;
        foreach ($level2_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_2totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level2Profit = $lev_2totalOrderProfit * 0.04;
        $data['level_2_profit'] = number_format($level2Profit, 2);
        //Level 3
        $checkL3    = User::whereIn('ref_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level3_ids = $checkL3->pluck('id')->toArray();

        $lev_3totalOrderProfit = 0;
        foreach ($level3_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_3totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level3Profit = $lev_3totalOrderProfit * 0.03;
        $data['level_3_profit'] = number_format($level3Profit, 2);
        //Level 4
        $checkL4    = User::whereIn('ref_id', $level3_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level4_ids = $checkL4->pluck('id')->toArray();
        $lev_4totalOrderProfit = 0;
        foreach ($level4_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_4totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level4Profit = $lev_4totalOrderProfit * 0.02;
        $data['level_4_profit'] = number_format($level4Profit, 2);
        //Level 5
        $checkL5    = User::whereIn('ref_id', $level4_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level5_ids = $checkL5->pluck('id')->toArray();
        $lev_5totalOrderProfit = 0;
        foreach ($level5_ids as $id) {
            // Perform operations with each ID
            //echo "Processing User ID: " . $id . "<br>";
            $orderProfit = Order::where('user_id', $id)->where('order_status', 6)->sum('profit');
            $lev_5totalOrderProfit += $orderProfit; // Accumulate the profit
        }
        $level5Profit = $lev_5totalOrderProfit * 0.01;
        $data['level_5_profit'] = number_format($level5Profit, 2);

        $allsum = $level1Profit + $level2Profit + $level3Profit + $level4Profit + $level5Profit;

        $data['commission_sum'] = number_format($allsum, 2);
        return response()->json($data, 200);
        //dd($data);
    }

    public function getDownlineDepositSum($userId)
    {
        // ================================================ Level 1 ===========================================================
        $checkL1                = User::where('ref_id', $userId)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level1_ids             = $checkL1->pluck('id')->toArray(); //implode(',', $checkL1->pluck('id')->toArray());
        $imploe_1               = implode(',', $level1_ids);
        // echo $imploe_1;exit;
        $level1_sum             = explode(',', $imploe_1);
        $deposits_sum_1         = Deposit::whereIn('user_id', $level1_sum)->where('status', 1)->sum('deposit_amount');
        //dd($deposits_sum_1);
        // ================================================ Level 2 ===========================================================
        $checkL2                = User::whereIn('ref_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level2_ids             = $checkL2->pluck('id')->toArray();
        $imploe_2               = implode(',', $level2_ids);
        // echo $imploe_2;exit;
        $level2_sum             = explode(',', $imploe_2);
        $deposits_sum_2         = Deposit::whereIn('user_id', $level2_sum)->where('status', 1)->sum('deposit_amount');
        //dd($deposits_sum_2);
        // ================================================ Level 3 ===========================================================
        //Level 3
        $checkL3                = User::whereIn('ref_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level3_ids             = $checkL3->pluck('id')->toArray();
        $imploe_3               = implode(',', $level3_ids);
        //echo $imploe_3;exit;
        $level3_sum             = explode(',', $imploe_3);
        $deposits_sum_3         = Deposit::whereIn('user_id', $level3_sum)->where('status', 1)->sum('deposit_amount');
        //dd($deposits_sum_3);
        // ================================================ Level 4 ===========================================================
        //Level 4
        $checkL4                = User::whereIn('ref_id', $level3_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level4_ids             = $checkL4->pluck('id')->toArray();
        $imploe_4               = implode(',', $level4_ids);
        //echo $imploe_4;exit;
        $level4_sum             = explode(',', $imploe_4);
        $deposits_sum_4         = Deposit::whereIn('user_id', $level4_sum)->where('status', 1)->sum('deposit_amount');
        //dd($deposits_sum_3);
        // ================================================ Level 5 ===========================================================
        $checkL5                = User::whereIn('ref_id', $level4_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level5_ids             = $checkL5->pluck('id')->toArray();
        $imploe_5               = implode(',', $level5_ids);
        //echo $imploe_5;exit;
        $level5_sum             = explode(',', $imploe_5);
        $deposits_sum_5         = Deposit::whereIn('user_id', $level5_sum)->where('status', 1)->sum('deposit_amount');
        //dd($deposits_sum_5);
        $result                 = $deposits_sum_1 + $deposits_sum_2 + $deposits_sum_3 + $deposits_sum_4 + $deposits_sum_5;
        $data['downline_sum']   = number_format($result, 2);

        $data['downline_leve_1sum'] = number_format($deposits_sum_1, 2);
        $data['downline_leve_2sum'] = number_format($deposits_sum_2, 2);
        $data['downline_leve_3sum'] = number_format($deposits_sum_3, 2);
        $data['downline_leve_4sum'] = number_format($deposits_sum_4, 2);
        $data['downline_leve_5sum'] = number_format($deposits_sum_5, 2);
        return response()->json($data, 200);
        //dd($data);
    }
}
