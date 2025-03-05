<?php

namespace App\Http\Controllers\User;

use DB;
use Auth;
use File;
use Helper;
use Validator;
use App\Models\Gig;
use App\Models\User;
use App\Models\Order;
use App\Models\Skills;
use App\Models\Deposit;
use App\Models\Profile;
use App\Models\Setting;
use App\Models\BankList;
use App\Models\Withdraw;
use App\Models\BlogModel;
use App\Models\Education;
use App\Models\SellerAds;
use App\Models\BranchList;
use App\Models\Experience;
use App\Models\Profession;
use App\Models\Certificate;
use App\Models\GigWishList;
use App\Models\OrderStatus;
use App\Models\PaymentCard;
use Illuminate\Support\Str;
use App\Models\CancelOrders;
use App\Models\Notification;
use function Ramsey\Uuid\v1;
use Illuminate\Http\Request;
use App\Models\WithdrawMethod;
use App\Models\LevelCommission;
use App\Models\NotificationMsg;
use App\Rules\MatchOldPassword;
use Illuminate\Http\JsonResponse;
use PhpParser\Node\Stmt\TryCatch;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use App\Http\Controllers\Order\OrderController; // Import the AnotherController

class UserController extends Controller
{
    protected $frontend_url;
    protected $userid;
    protected $email;
    protected $role_id;
    public function __construct(Request $request)
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        if (!empty($id)) {
            $user = User::find($id->id);
            $this->userid  = $user->id;
            $this->email   = $user->email;
            $this->role_id = $user->role_id;
        }
    }

    public function markAsSeen(Request $request, $id)
    {
        $notification = Notification::find($id);

        if (!$notification) {
            return response()->json(['message' => 'Notification not found'], 404);
        }

        $notification->seen = true;
        $notification->save();

        return response()->json(['message' => 'Notification marked as seen']);
    }


    public function dashboardCounting()
    {
        $user_row = User::find($this->userid);
        $data['total_deposit']  = Deposit::where('status', 1)->sum('receivable_amount');
        $data['total_withdraw'] = Withdraw::where('status', 1)->count();
        $data['total_users']    = User::where('role_id', 2)->where('status', 1)->count();
        $data['total_products'] = 0;
        $data['user_name']      = !empty($user_row->name) ? $user_row->name : "";

        return response()->json($data);
    }

    public function allsellers()
    {
        $sellers = User::where('role_id', 2)->where('status', 1)->get();
        return response()->json($sellers);
    }

    public function allbuyers()
    {
        $buyers = User::where('role_id', 3)->where('status', 1)->get();
        return response()->json($buyers);
    }

    public function myheartTouch(Request $request)
    {

        //dd($request->all());
        $data['gig_id']  = !empty($request->gig_id) ? $request->gig_id : "";
        $data['user_id'] = $this->userid;
        GigWishList::create($data);
        return response()->json($data);
    }
    public function getMessagesNotification()
    {
        // $notificationMSg = NotificationMsg::where('type', $this->role_id)->where('status', 1)->get();
        // return response()->json($notificationMSg);
        $notificationMsg = NotificationMsg::where('type', $this->role_id)
            ->where('status', 1)
            ->orderBy('id', 'desc')
            ->first();
        $data['name']           = !empty($notificationMsg->name) ? $notificationMsg->name : "";
        $data['messages']       = !empty($notificationMsg->messages) ? $notificationMsg->messages : "";
        $data['created_at']     = date("Y-m-d", strtotime($notificationMsg->created_at));

        return response()->json($data);
    }

    public function getMessagesUserWisebuyer()
    {
        $notificationMsg = NotificationMsg::where('type', $this->role_id)
            ->where('buyer_id', $this->userid)
            ->where('status', 1)
            ->orderBy('id', 'desc')
            ->first();
        $data['name']           = !empty($notificationMsg->name) ? $notificationMsg->name : "";
        $data['messages']       = !empty($notificationMsg->messages) ? $notificationMsg->messages : "";
        $data['created_at']     = date("Y-m-d", strtotime($notificationMsg->created_at));

        return response()->json($data);
    }

    //For Seller Start Notification
    public function getMessagesUserWise()
    {
        $notificationMsg = NotificationMsg::where('type', $this->role_id)
            ->where('seller_id', $this->userid)
            ->where('status', 1)
            ->orderBy('id', 'desc')
            ->first();
        $data['name']           = !empty($notificationMsg->name) ? $notificationMsg->name : "";//$notificationMsg->name;
        $data['messages']       = !empty($notificationMsg->messages) ? $notificationMsg->messages : "";
        $data['created_at']     = date("Y-m-d", strtotime($notificationMsg->created_at));

        return response()->json($data);
    }
    public function getSellerAllMessages()
    {
        $notificationMsg = NotificationMsg::where('type', $this->role_id)
            //    ->where('seller_id', $this->userid)
            ->where('status', 1)
            ->orderBy('id', 'desc')
            ->get();

        return response()->json($notificationMsg);
    }

    public function getSellerAllMessagesSignle()
    {
        $notificationMsg = NotificationMsg::where('type', $this->role_id)
            ->where('seller_id', $this->userid)
            ->where('status', 1)
            ->orderBy('id', 'desc')
            ->get();

        return response()->json($notificationMsg);
    }
    //END For notification

    public function getBuyerAllMessagesSignle()
    {
        $notificationMsg = NotificationMsg::where('type', $this->role_id)
            ->where('buyer_id', $this->userid)
            ->where('status', 1)
            ->orderBy('id', 'desc')
            ->get();

        return response()->json($notificationMsg);
    }

    public function checkBalance()
    {

        $odController  = new OrderController();
        $response      = $odController->referralCommission();
        $commissionAmt = $response instanceof JsonResponse ? $response->getData(true)['sumAmount'] : 0;

        $settingrow   = Setting::find(1);

        $completeAmount = Order::where('buyerId', $this->userid)
            ->where('order_status', 5)
            ->sum(DB::raw('sub_total + tips'));

        $returnAmount = Order::where('buyerId', $this->userid)
            ->where('order_status', 3)
            ->sum('selected_price');

        $orderAmount = Order::where('buyerId', $this->userid)
            ->whereNotIn('order_status', [3])
            ->sum('sub_total');

        $result         = $orderAmount + $returnAmount + $commissionAmt;
        $orderAmount    = $result;
        $chkCanceOrders = CancelOrders::where('buyerId', $this->userid)->sum('selectedPrice');
        $depositAmt     = Deposit::where('user_id', $this->userid)
            ->where('status', 1)
            ->sum('deposit_amount');
        try {
            // Calculate the deposit amount
            $result = abs($depositAmt - $orderAmount) + $chkCanceOrders;

            $data['depositAmount']      = $result;
            $data['currentBalance']     = number_format($result, 2);
            $data['service_fee']        = $settingrow->service_fee;

            //$data['depositAmount'] = abs($depositAmt - $orderAmount);

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed Please try again later.'], 500);
        }
    }

    public function deleteNotification($id)
    {

        $manualAdjustment = Notification::find($id);
        if ($manualAdjustment) {
            // Delete the record
            $manualAdjustment->delete();
        }
        $response = [
            'message' => 'Successfully delete.',
        ];
        return response()->json($response);
    }

    public function pendingCountNotification()
    {
        $roleid = $this->role_id;

        if ($roleid == 3) {
            $countData = Notification::where('buyer_id', $this->userid)
                ->where(function ($query) {
                    $query->whereNull('seen')->orWhere('seen', '');
                })
                ->count();
        } else {
            $countData = Notification::where('seller_id', $this->userid)
                ->where(function ($query) {
                    $query->whereNull('seen')->orWhere('seen', '');
                })
                ->count();
        }

        return response()->json(['unseen_notifications' => $countData]);
    }


    public function getNotifications(Request $request)
    {

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);

        // Get search query from the request
        $searchQuery    = $request->searchQuery;
        $selectedFilter = (int)$request->selectedFilter;
        // dd($selectedFilter);
        $query = Notification::orderBy('id', 'desc');

        if ($searchQuery !== null) {
            //$query->where('users.email', 'like', '%' . $searchQuery . '%');
            $query->where('notification.name', $searchQuery);
        }

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);
        $modifiedCollection = $paginator->getCollection()->map(function ($item) {

            return [
                'id'            => $item->id,
                'name'          => substr($item->name, 0, 250),
                'created_at'  => date("Y-M-d H:i:s", strtotime($item->created_at)), //$item->created_at,
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

    public function getmlmlists()
    {

        $filterData = User::where('join_id', $this->userid)->where('status', 1)->get();
        $rdata = [];
        foreach ($filterData as $v) {
            $chkupline = User::where('id', $v->join_id)->first();
            $rdata[] = [
                'userId'            => $v->id,
                'registerDate'      => !empty($v->created_at) ? date("d-m-Y", strtotime($v->created_at)) : "",
                'upline'            => !empty($chkupline) ? $chkupline->name : "",
                'name'              => $v->name,
            ];
        }

        try {

            $response = [
                'data' => $rdata,
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

    public function allProfessionList()
    {

        try {
            $rows = Profession::where('status', 1)->get();
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

    public function saveRole(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = User::addEditRole($request->all());
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function getUsersList(Request $request)
    {
        $data = User::getUsersList($request->all());
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function getRoleList(Request $request)
    {
        try {
            $rows = User::getRoleList($request->all());
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
    public function getDepartmentList(Request $request)
    {
        try {
            $rows = User::allDepartment($request->all());
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
    public function typeofdoucments(Request $request)
    {
        try {
            $rows = User::alltypedocutms($request->all());
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
    public function getDesignationList(Request $request)
    {
        try {
            $rows = User::allDesignation($request->all());
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
    public function getEmployeeList(Request $request)
    {
        try {
            $rows = User::allEmployee($request->all());
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

    public function allemployeeType(Request $request)
    {
        try {
            $rows = User::allEmpType($request->all());
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

    function generateUnique4DigitNumber($existingNumbers = [])
    {
        do {
            $uniqueNumber = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
        } while (in_array($uniqueNumber, $existingNumbers));

        return md5($uniqueNumber);
    }

    public function saveWithdrawalSeller(Request $request)
    {

        $orderController = new OrderController();
        // Step 2: Call the getOrderForSellerEarning method
        $response = $orderController->getOrderForSellerEarning();

        // Step 3: Check if response is a JsonResponse and get the data
        if ($response instanceof JsonResponse) {
            $earningData = $response->getData(true); // Retrieve as an associative array
        } else {
            // Handle the case where the response is not as expected
            $earningData = ['message' => 'Failed to retrieve earnings'];
        }
        $currentBalance = (int) $earningData['earning'];
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'selected_type'     => 'required',
            'method_id'         => 'required',
            'withdrawal_amount' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::find($this->userid);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $userid        = $this->userid;
        $depositAmount = Order::where('sellerId', $userid)->select('selected_price')->where('order_status', 5)->sum('selected_price');
        $balanceAmount = 0;

        $setting       = Setting::find(1);

        if ($request->withdrawal_amount < $setting->minimum_withdrawal) {
            return response()->json(['errors' => ['error_minim_usdt' => ['Minimum USDT balance is ', $setting->minimum_withdrawal]]], 422);
        }

        if ($request->withdrawal_amount > $currentBalance) {
            return response()->json(['errors' => ['error_usdt' => ['You have no sufficiant USDT balance']]], 422);
        }

        $type = $request->selected_type == 1 ? 'crypto' : ($request->selected_type == 2 ? 'paypal' : ($request->selected_type == 3 ? 'payooner' : ($request->selected_type == 4 ? 'bank' : null)));

        $ckhwithdraw         = WithdrawMethod::where('type', $type)->where('id', $request->method_id)->where('user_id', $this->userid)->first();
        //For Crypto 
        $walletname          = !empty($ckhwithdraw->name) ? $ckhwithdraw->name : "";
        $wallet_address      = !empty($ckhwithdraw->wallet_address) ? $ckhwithdraw->wallet_address : "";
        //For Paypal or Payeenor
        $field_email         = !empty($ckhwithdraw->email) ? $ckhwithdraw->email : "";
        //For Bank
        $account_name        = !empty($ckhwithdraw->account_name) ? $ckhwithdraw->account_name : "";
        $account_num         = !empty($ckhwithdraw->account_num) ? $ckhwithdraw->account_num : "";
        $ibn_no              = !empty($ckhwithdraw->ibn_no) ? $ckhwithdraw->ibn_no : "";
        $bank_id             = !empty($ckhwithdraw->bank_id) ? $ckhwithdraw->bank_id : "";
        $branch_id           = !empty($ckhwithdraw->branch_id) ? $ckhwithdraw->branch_id : "";
        //dd($ckhwithdraw);

        $uniqueID = 'W.' . $this->generateUnique4DigitNumber();
        $data = array(
            'withdrawID'     => $uniqueID,
            'depscription'   => $uniqueID,
            'selected_type'  => $request->selected_type,
            'status'         => 0,
            'method_id'      => $request->method_id,
            'type'           => $type,
            'email'          => $field_email,
            'crypto_wallet_type'    => $walletname,
            'wallet_address'        => $wallet_address,
            'withdrawal_amount' => $request->withdrawal_amount,

            'account_name'      => $account_name,
            'account_num'       => $account_num,
            'ibn_no'            => $ibn_no,
            'bank_id'           => $bank_id,
            'branch_id'         => $branch_id,
            'user_id'           => $this->userid,

        );
        //  dd($data);
        $last_Id = Withdraw::insertGetId($data);

        return response()->json(['data' => 'Successfully send your request.'], 200);
    }

    public function saveWithdrawal(Request $request)
    {

        $balanceResponse = $this->checkBalance();
        if ($balanceResponse instanceof JsonResponse) {
            $balanceData = $balanceResponse->getData(true);
        } else {
            $balanceData = ['message' => 'Failed to retrieve balance data'];
        }
        $currentBalance = (int) $balanceData['currentBalance'];

        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'selected_type'     => 'required',
            'method_id'         => 'required',
            'withdrawal_amount' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::find($this->userid);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $userid        = $this->userid;
        $depositAmount = Order::where('sellerId', $userid)->select('selected_price')->where('order_status', 5)->sum('selected_price');
        $balanceAmount = 0;

        $setting       = Setting::find(1);

        if ($request->withdrawal_amount < $setting->minimum_withdrawal) {
            return response()->json(['errors' => ['error_minim_usdt' => ['Minimum USDT balance is ', $setting->minimum_withdrawal]]], 422);
        }

        if ($request->withdrawal_amount > $currentBalance) {
            return response()->json(['errors' => ['error_usdt' => ['You have no sufficiant USDT balance']]], 422);
        }

        $type = $request->selected_type == 1 ? 'crypto' : ($request->selected_type == 2 ? 'paypal' : ($request->selected_type == 3 ? 'payooner' : ($request->selected_type == 4 ? 'bank' : null)));

        $ckhwithdraw         = WithdrawMethod::where('type', $type)->where('id', $request->method_id)->where('user_id', $this->userid)->first();
        //For Crypto 
        $walletname          = !empty($ckhwithdraw->name) ? $ckhwithdraw->name : "";
        $wallet_address      = !empty($ckhwithdraw->wallet_address) ? $ckhwithdraw->wallet_address : "";
        //For Paypal or Payeenor
        $field_email         = !empty($ckhwithdraw->email) ? $ckhwithdraw->email : "";
        //For Bank
        $account_name        = !empty($ckhwithdraw->account_name) ? $ckhwithdraw->account_name : "";
        $account_num         = !empty($ckhwithdraw->account_num) ? $ckhwithdraw->account_num : "";
        $ibn_no              = !empty($ckhwithdraw->ibn_no) ? $ckhwithdraw->ibn_no : "";
        $bank_id             = !empty($ckhwithdraw->bank_id) ? $ckhwithdraw->bank_id : "";
        $branch_id           = !empty($ckhwithdraw->branch_id) ? $ckhwithdraw->branch_id : "";
        //dd($ckhwithdraw);

        $uniqueID = 'W.' . $this->generateUnique4DigitNumber();
        $data = array(
            'withdrawID'     => $uniqueID,
            'depscription'   => $uniqueID,
            'selected_type'  => $request->selected_type,
            'status'         => 0,
            'method_id'      => $request->method_id,
            'type'           => $type,
            'email'          => $field_email,
            'crypto_wallet_type'    => $walletname,
            'wallet_address'        => $wallet_address,
            'withdrawal_amount'     => $request->withdrawal_amount,

            'account_name'      => $account_name,
            'account_num'       => $account_num,
            'ibn_no'            => $ibn_no,
            'bank_id'           => $bank_id,
            'branch_id'         => $branch_id,
            'user_id'           => $this->userid,

        );
        //  dd($data);
        $last_Id = Withdraw::insertGetId($data);

        return response()->json(['data' => 'Successfully send your request.'], 200);
    }

    public function editUserId($id)
    {
        $data = User::checkUserRow($id);
        $response = [
            'data' => $data,
            'dataImg' => !empty($data->image) ? url($data->image) : "",
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function employeeRow($id)
    {
        $data = User::checkEmployeRow($id);
        $response = [
            'data'                   => $data,
            'image'                  => !empty($data->image) ? url($data->image) : "",
            'type_of_doc'            => !empty($data->type_of_doc) ? url($data->type_of_doc) : "",
            'passport_upload_docs'   => !empty($data->passport_upload_docs) ? url($data->passport_upload_docs) : "",
            'visa_upload_documents'  => !empty($data->visa_upload_documents) ? url($data->visa_upload_documents) : "",
            'euss_upload_documents'  => !empty($data->euss_upload_documents) ? url($data->euss_upload_documents) : "",
            'nid_upload_documents'   => !empty($data->nid_upload_documents) ? url($data->nid_upload_documents) : "",
            'other_upload_documents' => !empty($data->other_upload_documents) ? url($data->other_upload_documents) : "",
            'message' => 'success'
        ];

        return response()->json($response, 200);
    }

    public function roleCheck($id)
    {
        $data = User::checkRoleRow($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function departmentCheck($id)
    {
        $data = User::checkDepartmentRow($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function designationCheck($id)
    {
        $data = User::checkDesignationRow($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkUserDetails($id)
    {
        $data = User::checkRoleRow($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function getCountry()
    {
        $data = User::countryList();
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function updateUser(Request $request)
    {
        //dd($request->all());
        $user = User::find($this->userid);
        $data['status']          = $request->status;
        //  $data['name']            = $request->fname . ' ' . $request->lname;
        //  $data['phone_number']    = $request->phone_number;
        // $data['email']           = $request->email;

        if (!empty($request->file('file'))) {
            $files = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['image'] = $file_url;
        }
        //dd($data);

        User::where('id', $request->id)->update($data);
        $response = [
            'message' => 'User successfully update:',
        ];
        return response()->json($response);
    }

    public function allrolelist()
    {
        $data = User::getRoleList();
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($data, 200);
    }

    public function getTime()
    {
        $data = User::getTimes();
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    public function getwithdrawalMethod(Request $request)
    {

        $reqst = !empty($request->type) ? $request->type : 1;
        if ($reqst == 1) {
            $type = 'crypto';
        }

        if ($reqst == 2) {
            $type = 'paypal';
        }

        if ($reqst == 3) {
            $type = 'payooner';
        }

        if ($reqst == 4) {
            $type = 'bank';
        }

        $result = WithdrawMethod::where('type', $type)->where('user_id', $this->userid)->get();

        $data = [];
        foreach ($result as $v) {
            $bankrow = BankList::find($v->bank_id);
            $branchrow = BranchList::find($v->branch_id);

            $data[] = [
                'id'           => $v->id,
                'user_id'      => $v->user_id,
                'name'         => $v->name,
                'type'         => $v->type,
                'wallet_address' => $v->wallet_address,
                'email'          => $v->email,
                'account_name' => $v->account_name,
                'account_num'  => $v->account_num,
                'countryName'  => $v->countryName,
                'swift_bic'    => $v->swift_bic,
                'ibn_no'       => $v->ibn_no,
                'bankName'     => !empty($bankrow) ? $bankrow->name : "",
                'bank_name'    => !empty($v->bank_name) ? $v->bank_name : "",
                'branchName'   => !empty($branchrow) ? $branchrow->name : "",
            ];
        }
        // Return messages as a JSON response
        // return response()->json($data);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    public function addCryptoWalletAddress(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
            'wallet_address' => 'required|unique:withdrawal_method,wallet_address', // Add unique validation
        ], [
            'name.required'           => 'The withdrawal method field is required.',
            'wallet_address.required' => 'The wallet number field is required.',
            'wallet_address.unique'   => 'The wallet number has already been taken.', // Custom message for unique validation
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'             => !empty($request->name) ? $request->name : "",
            'user_id'          => $this->userid,
            'type'             => $request->type,
            'wallet_address'   => $request->wallet_address,
            'type'   => 'crypto',
        );
        if (empty($request->id)) {
            $id = WithdrawMethod::insertGetId($data);
        } else {
            $id = $request->id;
            WithdrawMethod::where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully insert UserID:' . $id
        ];
        return response()->json($response);
    }

    public function addCryptoWalletAddressBank(Request $request)
    {
        //dd($request->all());

        $validator = Validator::make($request->all(), [
            'countryName'      => 'required',
            'account_name'     => 'required',
            'account_num'      => 'required',
            'ibn_no'           => 'required',
            'bank_id'          => 'required',
            'swift_bic'        => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(

            'user_id'          => $this->userid,
            'type'             => $request->type,
            'countryName'      => $request->countryName,
            'account_name'     => $request->account_name,
            'account_num'      => $request->account_num,
            'ibn_no'           => $request->ibn_no,
            'bank_id'          => $request->bank_id,
            'swift_bic'        => $request->swift_bic,
            'bank_name'        => $request->bank_name,

        );
        if (empty($request->id)) {
            $id = WithdrawMethod::insertGetId($data);
        } else {
            $id = $request->id;
            WithdrawMethod::where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully insert UserID:' . $id
        ];
        return response()->json($response);
    }

    public function addCryptoWalletAddressPayooner(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'           => 'required',
        ], [
            'email.required'           => 'The field is required.',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'user_id'          => $this->userid,
            'type'             => $request->type,
            'email'            => !empty($request->email) ? $request->email : "",

        );
        if (empty($request->id)) {
            $id = WithdrawMethod::insertGetId($data);
        } else {
            $id = $request->id;
            WithdrawMethod::where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully insert UserID:' . $id
        ];
        return response()->json($response);
    }

    public function addCryptoWalletAddressPaypal(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'           => 'required|email',
        ], [
            'email.required'           => 'The Email field is required.',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'user_id'          => $this->userid,
            'type'             => $request->type,
            'email'            => !empty($request->email) ? $request->email : "",

        );
        if (empty($request->id)) {
            $id = WithdrawMethod::insertGetId($data);
        } else {
            $id = $request->id;
            WithdrawMethod::where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully insert UserID:' . $id
        ];
        return response()->json($response);
    }

    public function saveDepartment(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'     => !empty($request->name) ? $request->name : "",
            'entry_by' => $this->userid,
            'status'   => $request->status,
        );
        if (empty($request->id)) {
            $id = DB::table('department')->insertGetId($data);
        } else {
            $id = $request->id;
            DB::table('department')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'User register successfully insert UserID:' . $id
        ];
        return response()->json($response);
    }
    public function saveDesignation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name' => !empty($request->name) ? $request->name : "",
            'entry_by' => $this->userid,
            'status' => $request->status,
        );
        if (empty($request->id)) {
            $id = DB::table('designation')->insertGetId($data);
        } else {
            $id = $request->id;
            DB::table('designation')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull:' . $id,
        ];
        return response()->json($response);
    }
    public function saveUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'role_id'    => 'required',
            'name'       => 'required',
            'phone'      => 'required',
            'email'      => 'required|email',
            // 'email' => 'required|email|unique:users',
            'password' => 'min:2|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:2'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'role_id'       => !empty($request->role_id) ? $request->role_id : "",
            'name'          => !empty($request->name) ? $request->name : "",
            'address'       => !empty($request->address) ? $request->address : "",
            'phone_number'  => !empty($request->phone) ? $request->phone : "",
            'email'         => !empty($request->email) ? $request->email : "",
            'password'      => !empty($request->password) ? Hash::make($request->password) : "",
            'status'        => $request->status,
            'entry_by'      => $this->userid,
        );
        if (!empty($request->file('file'))) {
            $files = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['image'] = $file_url;
        }
        if (empty($request->id)) {
            $userId = DB::table('users')->insertGetId($data);
        } else {
            $userId = $request->id;
            DB::table('users')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'User register successfully insert UserID:' . $userId
        ];
        return response()->json($response);
    }
    public function assignToUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'role_id'    => 'required',
            'employee_id' => 'required',
            'name'       => 'required',
            'phone'      => 'required',
            'email'      => 'required|email',
            // 'email' => 'required|email|unique:users',
            'password' => 'min:2|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:2'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'role_id'       => !empty($request->role_id) ? $request->role_id : "",
            'employee_id'   => !empty($request->employee_id) ? $request->employee_id : "",
            'name'          => !empty($request->name) ? $request->name : "",
            'address'       => !empty($request->address) ? $request->address : "",
            'phone_number'  => !empty($request->phone) ? $request->phone : "",
            'email'         => !empty($request->email) ? $request->email : "",
            'password'      => !empty($request->password) ? Hash::make($request->password) : "",
            'show_password' => $request->password,
            'status'        => $request->status,
            'entry_by'      => $this->userid,
        );
        if (!empty($request->file('file'))) {
            $files = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['image'] = $file_url;
        }

        $userId = DB::table('users')->insertGetId($data);

        $response = [
            'message' => 'Successfully Assign to User. UserID:' . $userId
        ];
        return response()->json($response);
    }

    public function skillsData(Request $request)
    {

        try {
            $data['skillsdata'] = Skills::where('user_id', $this->userid)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve skills. Please try again later.'], 500);
        }
    }

    public function geteducation(Request $request)
    {

        try {
            $data['euddata'] = Education::where('user_id', $this->userid)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve skills. Please try again later.'], 500);
        }
    }

    public function getExperience(Request $request)
    {

        try {
            $data['expdata'] = Experience::where('user_id', $this->userid)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve skills. Please try again later.'], 500);
        }
    }

    public function getCertificate(Request $request)
    {

        try {
            $data['certificatedata'] = Certificate::where('user_id', $this->userid)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve skills. Please try again later.'], 500);
        }
    }

    public function getDeposit(Request $request)
    {

        try {
            $data['data'] = Deposit::where('user_id', $this->userid)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed Please try again later.'], 500);
        }
    }

    public function getWaypaymentConfirm(Request $request)
    {

        //  dd($request->all());
        $request->validate([
            'amount'                  => 'required',
            //  'frm_wallet_address'      => 'required',
        ]);
        $rdata = [
            'user_id'           => $this->userid, // Assuming you are using authentication
            'deposit_amount'    => $request->amount,
            'frm_wallet_address' => "", // $request->frm_wallet_address,
            'payment_method'    => $request->paymentMethod,
            'status'            => 0,
        ];
        $data =  Deposit::create($rdata);

        $uniqueDepositID = 'DEP' . str_pad($data->id, 6, '0', STR_PAD_LEFT); // E.g., "DEP000123"
        $data->update(['depositID' => $uniqueDepositID]);

        return response()->json([
            'message' => 'added successfully!',
            'data'    => $data
        ]);
    }

    public function saveDeposit(Request $request)
    {
        //dd($request->all());
        $request->validate([
            'amount'                  => 'required',
            //  'frm_wallet_address'      => 'required',
        ]);
        $rdata = [
            'user_id'           => $this->userid, // Assuming you are using authentication
            'deposit_amount'    => $request->amount,
            'frm_wallet_address' => "", // $request->frm_wallet_address,
            'payment_method'    => 'TRX(TRC20)',
            'status'            => 0,
        ];
        $data =  Deposit::create($rdata);

        $uniqueDepositID = 'DEP' . str_pad($data->id, 6, '0', STR_PAD_LEFT); // E.g., "DEP000123"
        $data->update(['depositID' => $uniqueDepositID]);

        return response()->json([
            'message' => 'added successfully!',
            'data'    => $data
        ]);
    }

    public function addcertificate(Request $request)
    {
        //dd($request->all());
        $request->validate([
            'year'                  => 'required',
            'course_name'           => 'required',
            'institute_name'        => 'required',

        ]);
        $certicateData = [
            'user_id'           => $this->userid, // Assuming you are using authentication
            'year'              => $request->year,
            'course_name'       => $request->course_name,
            'institute_name'    => $request->institute_name,
            'description'       => $request->description,
        ];

        $cerData =  Certificate::create($certicateData);

        return response()->json([
            'message' => 'Certificate added successfully!',
            'certicated' => $cerData
        ]);
    }

    public function addExperience(Request $request)
    {
        //dd($request->all());
        $request->validate([
            'year'          => 'required',
            'role'          => 'required',
            'company'       => 'required',

        ]);
        $educationData = [
            'user_id'           => $this->userid, // Assuming you are using authentication
            'year'              => $request->year,
            'role'              => $request->role,
            'company'           => $request->company,
            'description'       => $request->description,
        ];

        $education =  Experience::create($educationData);

        return response()->json([
            'message' => 'Experience added successfully!',
            'education' => $education
        ]);
    }

    public function addeducation(Request $request)
    {

        $request->validate([
            'year'          => 'required',
            'subject'       => 'required',
            'college'       => 'required',

        ]);
        $educationData = [
            'user_id'           => $this->userid, // Assuming you are using authentication
            'year'              => $request->year,
            'subject'           => $request->subject,
            'college'           => $request->college,
            'description'       => $request->description,
        ];

        $education =  Education::create($educationData);

        return response()->json([
            'message' => 'Education added successfully!',
            'education' => $education
        ]);
    }

    public function addskills(Request $request)
    {
        $request->validate([
            'skills' => 'required|array', // Ensure skills is an array
            'skills.*' => 'string|max:255', // Each skill must be a string and max length of 255
        ]);
        foreach ($request->skills as $skillName) {
            Skills::create([
                'user_id' => $this->userid, // Assuming $this->userid is set correctly
                'name' => $skillName,
            ]);
        }

        $data['skillsdata'] = Skills::where('user_id', $this->userid)->get();
        $data['message']    = "Skills added successfully!";

        // Return a success response
        return response()->json($data);
    }

    public function deleteEducation($id)
    {
        $skill = Education::find($id);
        if ($skill) {
            $skill->delete(); // Delete the skill
            return response()->json(['message' => 'Deleted successfully!']);
        } else {
            return response()->json(['message' => 'Not found!'], 404);
        }
    }

    public function deleteExperience($id)
    {
        $edu = Experience::find($id);
        if ($edu) {
            $edu->delete(); // Delete the skill
            return response()->json(['message' => 'Deleted successfully!']);
        } else {
            return response()->json(['message' => 'Not found!'], 404);
        }
    }

    public function deleteCertificate($id)
    {
        $edu = Certificate::find($id);
        if ($edu) {
            $edu->delete(); // Delete the skill
            return response()->json(['message' => 'Deleted successfully!']);
        } else {
            return response()->json(['message' => 'Not found!'], 404);
        }
    }

    function removeSkill(Request $request)
    {
        $id = $request->id;
        $skill = Skills::find($id);
        if ($skill) {
            $skill->delete(); // Delete the skill
            return response()->json(['message' => 'Deleted successfully!']);
        } else {
            return response()->json(['message' => 'Not found!'], 404);
        }
    }

    public function saveEmployee(Request $request)
    {
        ///dd($request->all());
        $validator = Validator::make($request->all(), [
            //'name'              => 'required',
            'phone'             => 'required',
            'age'               => 'required',
            'email'             => 'required|email',
            'gender'            => 'required',
            'joning_date'       => 'required',
            'date_of_birth'     => 'required',
            'department_id'     => 'required',
            'designation_id'    => 'required',
            'salary'            => 'required',
            'marital_status'    => 'required',
            'employee_code'     => 'required',
            'first_name'        => 'required',
            'middle_name'       => 'required',
            'last_name'         => 'required',
            'country_id'        => 'required',
            'employee_type'     => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'             => "$request->first_name $request->middle_name $request->last_name",
            'email'            => !empty($request->email) ? $request->email : "",
            'address'          => !empty($request->address) ? $request->address : "",
            'phone'            => !empty($request->phone) ? $request->phone : "",
            'department_id'    => !empty($request->department_id) ? $request->department_id : "",
            'designation_id'   => !empty($request->designation_id) ? $request->designation_id : "",
            'salary'           => !empty($request->salary) ? $request->salary : "",
            'employee_code'    => !empty($request->employee_code) ? $request->employee_code : "",
            'first_name'       => !empty($request->first_name) ? $request->first_name : "",
            'middle_name'      => !empty($request->middle_name) ? $request->middle_name : "",
            'last_name'        => !empty($request->last_name) ? $request->last_name : "",
            'ni_no'            => !empty($request->ni_no) ? $request->ni_no : "",
            'marital_status'   => !empty($request->marital_status) ? $request->marital_status : "",
            'country_id'           => !empty($request->country_id) ? $request->country_id : "",
            'employee_type'        => !empty($request->employee_type) ? $request->employee_type : "",
            'date_of_confirmation' => !empty($request->date_of_confirmation) ? $request->date_of_confirmation : "",
            'contact_start_date'   => !empty($request->contact_start_date) ? $request->contact_start_date : "",
            'contact_end_date'     => !empty($request->contact_end_date) ? $request->contact_end_date : "",
            'job_location'         => !empty($request->job_location) ? $request->job_location : "",
            'reporting_authority'  => !empty($request->reporting_authority) ? $request->reporting_authority : "",
            'leave_sanction_auth'  => !empty($request->leave_sanction_auth) ? $request->leave_sanction_auth : "",
            'education_details'    => !empty($request->education_details) ? $request->education_details : "",
            'job_details'          => !empty($request->job_details) ? $request->job_details : "",
            'key_respons'          => !empty($request->key_respons) ? $request->key_respons : "",
            'age'                  => !empty($request->age) ? $request->age : "",
            'joning_date'          => !empty($request->joning_date) ? date("Y-m-d", strtotime($request->joning_date)) : "",
            'date_of_birth'        => !empty($request->date_of_birth) ? date("Y-m-d", strtotime($request->date_of_birth)) : "",
            'gender'               => !empty($request->gender) ? $request->gender : "",
            'status'               => $request->status,
            'training_details'     => !empty($request->training_details) ? $request->training_details : "",
            //Emgergency
            'emger_contact_name'   => !empty($request->emger_contact_name) ? $request->emger_contact_name : "",
            'emger_email'          => !empty($request->emger_email) ? $request->emger_email : "",
            'emger_contact_no'     => !empty($request->emger_contact_no) ? $request->emger_contact_no : "",
            'emger_address'        => !empty($request->emger_address) ? $request->emger_address : "",
            //Certificate
            'certifi_title'        => !empty($request->certifi_title) ? $request->certifi_title : "",
            'certifi_license_number' => !empty($request->certifi_license_number) ? $request->certifi_license_number : "",
            'certifi_start_date'   => !empty($request->certifi_start_date) ? $request->certifi_start_date : "",
            'certifi_end_date'     => !empty($request->certifi_end_date) ? $request->certifi_end_date : "",
            //Contact
            'contact_info_post_code'   => !empty($request->contact_info_post_code) ? $request->contact_info_post_code : "",
            'contact_info_address'     => !empty($request->contact_info_address) ? $request->contact_info_address : "",
            'contact_info_address_1'   => !empty($request->contact_info_address_1) ? $request->contact_info_address_1 : "",
            'contact_info_address_2'   => !empty($request->contact_info_address_2) ? $request->contact_info_address_2 : "",
            'contact_info_address_3'   => !empty($request->contact_info_address_3) ? $request->contact_info_address_3 : "",
            'contact_info_city_country' => !empty($request->contact_info_city_country) ? $request->contact_info_city_country : "",
            'contact_info_country_id'  => !empty($request->contact_info_country_id) ? $request->contact_info_country_id : "",
            'certifi_title'            => !empty($request->certifi_title) ? $request->certifi_title : "",
            //Pass
            'pass_no'                 => !empty($request->pass_no) ? $request->pass_no : "",
            'pass_nationality'        => !empty($request->pass_nationality) ? $request->pass_nationality : "",
            'pass_place_birth'        => !empty($request->pass_place_birth) ? $request->pass_place_birth : "",
            'pass_issued_by'          => !empty($request->pass_issued_by) ? $request->pass_issued_by : "",
            'pass_date'               => !empty($request->pass_date) ? $request->pass_date : "",
            'pass_expire_date'        => !empty($request->pass_expire_date) ? $request->pass_expire_date : "",
            'pass_review_date'        => !empty($request->pass_review_date) ? $request->pass_review_date : "",
            'contact_info_post_code'  => !empty($request->contact_info_post_code) ? $request->contact_info_post_code : "",
            //VISA
            'visa_brp_np'              => !empty($request->visa_brp_np) ? $request->visa_brp_np : "",
            'visa_nationality'         => !empty($request->visa_nationality) ? $request->visa_nationality : "",
            'visa_country_residence'   => !empty($request->visa_country_residence) ? $request->visa_country_residence : "",
            'visa_issuedby'            => !empty($request->visa_issuedby) ? $request->visa_issuedby : "",
            'visa_issued_date'         => !empty($request->visa_issued_date) ? $request->visa_issued_date : "",
            'visa_expire_date'         => !empty($request->visa_expire_date) ? $request->visa_expire_date : "",
            'visa_eligbible_review_date' => !empty($request->visa_eligbible_review_date) ? $request->visa_eligbible_review_date : "",
            'visa_current_yesno'       => !empty($request->visa_current_yesno) ? $request->visa_current_yesno : "",
            'visa_remarks'             => !empty($request->visa_remarks) ? $request->visa_remarks : "",
            //ESS
            'ess_ref_no'               => !empty($request->ess_ref_no) ? $request->ess_ref_no : "",
            'ess_nationality'          => !empty($request->ess_nationality) ? $request->ess_nationality : "",
            'ess_issued_by'            => !empty($request->ess_issued_by) ? $request->ess_issued_by : "",
            'ess_issued_date'          => !empty($request->ess_issued_date) ? $request->ess_issued_date : "",
            'ess_expire_date'          => !empty($request->ess_expire_date) ? $request->ess_expire_date : "",
            'ess_eligible_review_date' => !empty($request->ess_eligible_review_date) ? $request->ess_eligible_review_date : "",
            'ess_current_visa'         => !empty($request->ess_current_visa) ? $request->ess_current_visa : "",
            'ess_remarks'              => !empty($request->ess_remarks) ? $request->ess_remarks : "",
            //NID
            'nid_number'               => !empty($request->nid_number) ? $request->nid_number : "",
            'nid_nationality'          => !empty($request->nid_nationality) ? $request->nid_nationality : "",
            'nid_country_residence'    => !empty($request->nid_country_residence) ? $request->nid_country_residence : "",
            'nid_issue_date'           => !empty($request->nid_issue_date) ? $request->nid_issue_date : "",
            'nid_expire_date'          => !empty($request->nid_expire_date) ? $request->nid_expire_date : "",
            'nid_eli_review_date'      => !empty($request->nid_eli_review_date) ? $request->nid_eli_review_date : "",
            'nid_current_visa'         => !empty($request->nid_current_visa) ? $request->nid_current_visa : "",
            'nid_remarks'              => !empty($request->nid_remarks) ? $request->nid_remarks : "",
            //Othres
            'others_doc_name'          => !empty($request->others_doc_name) ? $request->others_doc_name : "",
            'others_ref_name'          => !empty($request->others_ref_name) ? $request->others_ref_name : "",
            'others_nationality'       => !empty($request->others_nationality) ? $request->others_nationality : "",
            'others_issue_date'        => !empty($request->others_issue_date) ? $request->others_issue_date : "",
            'others_expire_date'       => !empty($request->others_expire_date) ? $request->others_expire_date : "",
            'others_eligb_review_date' => !empty($request->others_eligb_review_date) ? $request->others_eligb_review_date : "",
            'others_visa_sts'          => !empty($request->others_visa_sts) ? $request->others_visa_sts : "",
            'others_remarks'           => !empty($request->others_remarks) ? $request->others_remarks : "",
            //Pay
            'pay_group'                => !empty($request->pay_group) ? $request->pay_group : "",
            'pay_annual_pay'           => !empty($request->pay_annual_pay) ? $request->pay_annual_pay : "",
            'pay_wedges_pay_mode'      => !empty($request->pay_wedges_pay_mode) ? $request->pay_wedges_pay_mode : "",
            'pay_payment_type'         => !empty($request->pay_payment_type) ? $request->pay_payment_type : "",
            'pay_basic_daily_wedges'   => !empty($request->pay_basic_daily_wedges) ? $request->pay_basic_daily_wedges : "",
            'pay_min_working_hour'     => !empty($request->pay_min_working_hour) ? $request->pay_min_working_hour : "",
            'pay_tax_code'             => !empty($request->pay_tax_code) ? $request->pay_tax_code : "",
            'pay_tax_ref'              => !empty($request->pay_tax_ref) ? $request->pay_tax_ref : "",
            'pay_percentage'           => !empty($request->pay_percentage) ? $request->pay_percentage : "",
            'pay_payment_mode'         => !empty($request->pay_payment_mode) ? $request->pay_payment_mode : "",
            'pay_bank_name'            => !empty($request->pay_bank_name) ? $request->pay_bank_name : "",
            'pay_branch_name'          => !empty($request->pay_branch_name) ? $request->pay_branch_name : "",
            'pay_account_no'           => !empty($request->pay_account_no) ? $request->pay_account_no : "",
            'pay_sort_code'            => !empty($request->pay_sort_code) ? $request->pay_sort_code : "",
            'pay_remarks'              => !empty($request->pay_remarks) ? $request->pay_remarks : "",
            //Payment
            'payment_da'               => !empty($request->payment_da) ? $request->payment_da : "",
            'payment_hra'              => !empty($request->payment_hra) ? $request->payment_hra : "",
            'payment_conven_ta'        => !empty($request->payment_conven_ta) ? $request->payment_conven_ta : "",
            'payment_perfomance'       => !empty($request->payment_perfomance) ? $request->payment_perfomance : "",
            'payment_monthly_al'       => !empty($request->payment_monthly_al) ? $request->payment_monthly_al : "",
            //NI
            'ni_dedu_da'               => !empty($request->ni_dedu_da) ? $request->ni_dedu_da : "",
            'ni_dedu_hra'              => !empty($request->ni_dedu_hra) ? $request->ni_dedu_hra : "",
            'ni_dedu_conven_ta'        => !empty($request->ni_dedu_conven_ta) ? $request->ni_dedu_conven_ta : "",
            'ni_dedu_perfomance'       => !empty($request->ni_dedu_perfomance) ? $request->ni_dedu_perfomance : "",
            'ni_dedu_monthly_al'       => !empty($request->ni_dedu_monthly_al) ? $request->ni_dedu_monthly_al : "",
            'entry_by'                 => $this->userid,
        );
        // dd($data);
        if (!empty($request->file('file'))) {
            $files = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['image'] = $file_url;
        }
        if (!empty($request->file('type_of_doc'))) {
            $files = $request->file('type_of_doc');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['type_of_doc'] = $file_url;
        }
        if (!empty($request->file('passport_upload_docs'))) {
            $files = $request->file('passport_upload_docs');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['passport_upload_docs'] = $file_url;
        }
        if (!empty($request->file('visa_upload_documents'))) {
            $files = $request->file('visa_upload_documents');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['visa_upload_documents'] = $file_url;
        }
        if (!empty($request->file('euss_upload_documents'))) {
            $files = $request->file('euss_upload_documents');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['euss_upload_documents'] = $file_url;
        }
        if (!empty($request->file('nid_upload_documents'))) {
            $files = $request->file('nid_upload_documents');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['nid_upload_documents'] = $file_url;
        }
        if (!empty($request->file('other_upload_documents'))) {
            $files = $request->file('other_upload_documents');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['other_upload_documents'] = $file_url;
        }
        //type_of_doc
        // dd($data);
        if (empty($request->id)) {
            $id = DB::table('employee')->insertGetId($data);
        } else {
            $id = $request->id;
            DB::table('employee')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully:' . $id
        ];
        return response()->json($response);
    }

    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'min:2|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:2'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $user = User::find($this->userid);
        $user->password = Hash::make($request->password);
        $user->show_password = $request->password;
        $user->save();
        $response = "Password successfully changed!";
        return response()->json($response);
    }
    // MLM Query 

    public function checkmlmHistorys(Request $request)
    {

        $email    = $request->txtsearch; //$request->email;

        $chkUser  = User::where('email', $email)->first();
        $userId   = !empty($chkUser->id) ? $chkUser->id : "";
        $records  = LevelCommission::where('commission_recev_frm', $userId)->get();
        if (!$records) {
            return response()->json([
                'message' => 'No completed orders found for this user. Once an order is completed, the commission will be credited.',
                'data' => []
            ]);
        } else {
            return response()->json([
                'message' => 'Order found',
                'data' => $records
            ]);
        }
    }

    public function checkLevelHistorysAdmin(Request $request)
    {
        //dd($request->all());

        $email    = $request->email; //$request->email;
        $chkUser  = User::where('email', $email)->first();
        $userId   = $chkUser->id;

        $checkL1          = User::where('join_id', $userId)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level1_ids       = $checkL1->pluck('id')->toArray();
        // Fetch level 2 users based on level 1 IDs
        $checkL2          = User::whereIn('join_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level2_ids       = $checkL2->pluck('id')->toArray();

        $checkL3          = User::whereIn('join_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level3_ids       = $checkL3->pluck('id')->toArray();

        $checkL4          = User::whereIn('join_id', $level3_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level4_ids       = $checkL4->pluck('id')->toArray();

        $checkL5          = User::whereIn('join_id', $level4_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level5_ids       = $checkL5->pluck('id')->toArray();

        $data['level_1']  = $checkL1;
        $data['level_2']  = $checkL2;
        $data['level_3']  = $checkL3;
        $data['level_4']  = $checkL4;
        $data['level_5']  = $checkL5;

        $levels = [
            'level_1' => $checkL1,
            'level_2' => $checkL2,
            'level_3' => $checkL3,
            'level_4' => $checkL4,
            'level_5' => $checkL5,
        ];

        $response = [];
        //$amt = 0;
        foreach ($levels as $level => $users) {
            foreach ($users as $user) {
                $chkOrder = Order::where('buyerId', $user->id)->select(
                    'buyerId',
                    'orderId',
                    'l_one_buyer',
                    'l_two_buyer',
                    'l_three_buyer',
                    'l_four_buyer',
                    'l_five_buyer',
                    'lev_1',
                    'lev_2',
                    'lev_3',
                    'lev_4',
                    'lev_5'
                )->get();

                $amt = 0;
                // Iterate through each order
                foreach ($chkOrder as $chkOrder) {
                    // Check each level buyer against the logged-in user ID
                    if ($chkOrder->l_one_buyer == $userId) {
                        $amt += $chkOrder->lev_1; // Sum lev_1
                    }
                    if ($chkOrder->l_two_buyer == $userId) {
                        $amt += $chkOrder->lev_2; // Sum lev_2
                    }
                    if ($chkOrder->l_three_buyer == $userId) {
                        $amt += $chkOrder->lev_3; // Sum lev_3
                    }
                    if ($chkOrder->l_four_buyer == $userId) {
                        $amt += $chkOrder->lev_4; // Sum lev_4
                    }
                    if ($chkOrder->l_five_buyer == $userId) {
                        $amt += $chkOrder->lev_5; // Sum lev_5
                    }
                }

                // Prepare the response array
                $response[$level][] = [
                    'id'         => $user->id,
                    'name'       => $user->name,
                    'email'      => $user->email,
                    'join_id'    => $user->join_id,
                    'amount'     => $amt,
                    'created_at' => date("Y-M-d", strtotime($user->created_at))
                ];
            }
        }
        // dd($response);
        return response()->json($response);
    }

    public function checkLevelHistorys(Request $request)
    {
        ///dd($request->all());

        $email    = $this->email; //$request->email;
        $chkUser  = User::where('email', $email)->first();
        $userId   = $chkUser->id;

        $checkL1          = User::where('join_id', $userId)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level1_ids       = $checkL1->pluck('id')->toArray();
        // Fetch level 2 users based on level 1 IDs
        $checkL2          = User::whereIn('join_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level2_ids       = $checkL2->pluck('id')->toArray();

        $checkL3          = User::whereIn('join_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level3_ids       = $checkL3->pluck('id')->toArray();

        $checkL4          = User::whereIn('join_id', $level3_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level4_ids       = $checkL4->pluck('id')->toArray();

        $checkL5          = User::whereIn('join_id', $level4_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->where('role_id', 3)->get();
        $level5_ids       = $checkL5->pluck('id')->toArray();

        $data['level_1']  = $checkL1;
        $data['level_2']  = $checkL2;
        $data['level_3']  = $checkL3;
        $data['level_4']  = $checkL4;
        $data['level_5']  = $checkL5;

        $levels = [
            'level_1' => $checkL1,
            'level_2' => $checkL2,
            'level_3' => $checkL3,
            'level_4' => $checkL4,
            'level_5' => $checkL5,
        ];

        $response = [];
        //$amt = 0;
        foreach ($levels as $level => $users) {
            foreach ($users as $user) {
                $chkOrder = Order::where('buyerId', $user->id)->select(
                    'buyerId',
                    'orderId',
                    'l_one_buyer',
                    'l_two_buyer',
                    'l_three_buyer',
                    'l_four_buyer',
                    'l_five_buyer',
                    'lev_1',
                    'lev_2',
                    'lev_3',
                    'lev_4',
                    'lev_5'
                )->get();

                $amt = 0;
                // Iterate through each order
                foreach ($chkOrder as $chkOrder) {
                    // Check each level buyer against the logged-in user ID
                    if ($chkOrder->l_one_buyer == $this->userid) {
                        $amt += $chkOrder->lev_1; // Sum lev_1
                    }
                    if ($chkOrder->l_two_buyer == $this->userid) {
                        $amt += $chkOrder->lev_2; // Sum lev_2
                    }
                    if ($chkOrder->l_three_buyer == $this->userid) {
                        $amt += $chkOrder->lev_3; // Sum lev_3
                    }
                    if ($chkOrder->l_four_buyer == $this->userid) {
                        $amt += $chkOrder->lev_4; // Sum lev_4
                    }
                    if ($chkOrder->l_five_buyer == $this->userid) {
                        $amt += $chkOrder->lev_5; // Sum lev_5
                    }
                }

                // Prepare the response array
                $response[$level][] = [
                    'id'         => $user->id,
                    'name'       => $user->name,
                    'email'      => $user->email,
                    'join_id'    => $user->join_id,
                    'amount'     => number_format($amt, 2),
                    'created_at' => date("Y-M-d", strtotime($user->created_at))
                ];
            }
        }
        // dd($response);
        return response()->json($response);
    }

    public function checkLevelHistory()
    {

        $userId           = $this->userid;

        $checkL1          = User::where('join_id', $userId)->select('id', 'name', 'email', 'created_at', 'join_id')->get();
        $checkL1->transform(function ($item) {
            $gloabl_setting   = Setting::find(1);
            $item['level_commision'] = $gloabl_setting->level_1_bonus; // Adding the extra key with value 6
            return $item;
        });

        $level1_ids       = $checkL1->pluck('id')->toArray();
        // Fetch level 2 users based on level 1 IDs
        $checkL2          = User::whereIn('join_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->get();
        $checkL2->transform(function ($item) {
            $gloabl_setting   = Setting::find(1);
            $item['level_commision'] = $gloabl_setting->level_2_bonus; // Adding the extra key with value 6
            return $item;
        });

        $level2_ids       = $checkL2->pluck('id')->toArray();

        $checkL3          = User::whereIn('join_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->get();
        $checkL3->transform(function ($item) {
            $gloabl_setting   = Setting::find(1);
            $item['level_commision'] = $gloabl_setting->level_2_bonus; // Adding the extra key with value 6
            return $item;
        });
        $level3_ids       = $checkL3->pluck('id')->toArray();

        $data['level_1']  = $checkL1;
        $data['level_2']  = $checkL2;
        $data['level_3']  = $checkL3;
        $data['total']    = count($level1_ids) + count($level2_ids) + count($level3_ids);

        return response()->json($data);
    }

    public function getLevelDetails()
    {

        $userId           = $this->userid;
        $checkL1          = User::where('join_id', $userId)->select('id', 'ocn_id', 'name', 'email', 'created_at', 'join_id')->get();

        $level1_ids       = $checkL1->pluck('id')->toArray();
        // Fetch level 2 users based on level 1 IDs
        $checkL2          = User::whereIn('join_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->get();
        $level2_ids       = $checkL2->pluck('id')->toArray();

        $checkL3          = User::whereIn('join_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'join_id')->get();
        $level3_ids       = $checkL3->pluck('id')->toArray();

        $data['level_1']  = count($level1_ids);
        $data['level_2']  = count($level2_ids);
        $data['level_3']  = count($level3_ids);
        $data['levels']   = $checkL1;
        $data['numberOfperson']    = count($level1_ids) + count($level2_ids) + count($level3_ids);
        $gloabl_setting   = Setting::find(1);
        $data['levelBonus'] = $gloabl_setting->level_1_bonus; // Adding the extra key with value 6

        // total referral earning

        $team_1 = count($level1_ids) * $gloabl_setting->level_1_bonus;
        $team_2 = count($level2_ids) * $gloabl_setting->level_2_bonus;
        $team_3 = count($level3_ids) * $gloabl_setting->level_3_bonus;
        $data['total_referal_warnings'] = $team_1 + $team_2 + $team_3;
        return response()->json($data);
    }

    public function AllUsersList(Request $request)
    {

        $page          = $request->input('page', 1);
        $selectedRole  = $request->input('selectedRole');
        $selectedStatus = $request->input('selectedStatus');
        $pageSize     = $request->input('pageSize', 10);
        // Get search query from the request
        $searchQuery    = $request->searchQuery;
        $selectedFilter = (int)$request->selectedFilter;
        // dd($selectedFilter);
        $query = User::orderBy('users.id', 'desc')
            ->join('rule', 'users.role_id', '=', 'rule.id')
            ->select('users.created_at', 'users.updated_at', 'users.join_id', 'users.role_id', 'users.id', 'users.name', 'users.email', 'users.login_in_time', 'users.phone_number', 'users.show_password', 'users.status', 'rule.name as rulename');
        if ($searchQuery !== null) {
            //$query->where('users.email', 'like', '%' . $searchQuery . '%');
            $query->where('users.email', $searchQuery);
        }

        if ($selectedStatus !== null) {
            $query->where('users.status', $selectedStatus);
        }
        $query->where('users.role_id', $selectedRole);

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);

        $modifiedCollection = $paginator->getCollection()->map(function ($item) {

            $telegram       = !empty($item->telegram) ? $item->telegram : "None";
            $phone          = !empty($item->phone_number) ? $item->phone_number : "";
            $whtsapp        = !empty($item->whtsapp) ? $item->whtsapp : "None";
            $status         = $item->status == 1  ? 'Active' : "Inactive";
            $ref_id         = !empty($item->join_id) ? $item->join_id : ""; //$item->ref_id == 1  ? 'Active' : "None";
            $chkInviteUser  = User::where('id', $item->join_id)->select('name', 'phone_number', 'email')->first();
            $registerIP     = $item->register_ip;
            $ipdat = @json_decode(file_get_contents(
                "http://www.geoplugin.net/json.gp?ip=" . $registerIP
            ));

            return [
                'id'            => $item->id,
                'name'          => substr($item->name, 0, 250),
                'rulename'      => substr($item->rulename, 0, 250),
                'userInfo_1'    => "Name:" . $item->name,
                'userInfo_2'    => "Phone:" . $phone,
                'userInfo_3'    => "Email:" . $item->email,
                'userInfo_4'    => "Telegram:" . $telegram,
                'userInfo_5'    => "WhatsApp:" . $whtsapp,
                'invite_user_1' =>  !empty($chkInviteUser->name) ? $chkInviteUser->name : "", //  "i --6658656656",//!empty("Name:" . $chkInviteUser) ? "Name:" . !empty($chkInviteUser->name) : "-",
                'invite_user_2' =>  !empty($chkInviteUser->phone_number) ? $chkInviteUser->phone_number : "",
                '', //!empty("Cell Phone:" . $chkInviteUser) ? "Cell Phone:" . $chkInviteUser->phone_number : "-",
                'invite_user_3' => !empty($chkInviteUser->email) ? $chkInviteUser->email : "",
                '', //!empty("Email:" . $chkInviteUser) ? "Email:" . !empty($chkInviteUser->email) : "",
                'email'         => $item->email,
                'register_ip'   => $item->register_ip,
                'lastlogin_ip'  => $item->lastlogin_ip,
                'login_in_time'  => $item->login_in_time,
                'register_country'   => !empty($ipdat->geoplugin_countryName) ? $ipdat->geoplugin_countryName : "",
                'lastlogin_country'  => !empty($item->lastlogin_country) ?: "",

                'created_at'  => date("Y-M-d H:i:s", strtotime($item->created_at)), //$item->created_at,
                'updated_at'  => date("Y-M-d H:i:s", strtotime($item->updated_at)), //$item->updated_at,

                'phone_number'  => $item->phone_number,
                'show_password' => $item->show_password,
                'status'        => $status,
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

    public function findUserDetails(Request $request)
    {

        $userid = $request->id;

        $data = Order::where('sellerId', $userid)
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
        //$rdata['earning']  = $earning;

        $item   = User::join('rule', 'users.role_id', '=', 'rule.id')
            ->select('users.created_at', 'users.updated_at', 'users.join_id', 'users.role_id', 'users.id', 'users.name', 'users.email', 'users.phone_number', 'users.show_password', 'users.status', 'rule.name as rulename')
            ->where('users.id', $request->id)
            ->first();

        $setting    = Setting::where('id', 1)->first();

        $order_data = Order::where('sellerId', $request->id)
            ->join('gig', 'orders.gig_id', '=', 'gig.id')
            ->select('orders.*', 'gig.name as gig_title')
            ->get();

        $orders = [];
        $priceSum = 0;
        foreach ($order_data as $v) {

            if ($v->order_status == 3) {
                $priceSum += $v->selected_price;
            }

            $buyer = User::where('id', $v->buyerId)->select('name')->first();
            $orderSts =  OrderStatus::where('id', $v->order_status)->select('name')->first();
            // echo "Orginal price: $originalPrice--Per.Amount :$perResult ----Final Amt: $result";
            $orders[] = [
                'id'                 => $v->id,
                'orderId'            => $v->orderId,
                'gig_title'          => $v->gig_title,
                'fullname'           => !empty($buyer) ? $buyer->name : "",
                'selected_packages'  => $v->selected_packages,
                'selected_price'     => $v->selected_price,
                'delivery_day'       => $v->delivery_day,
                'order_status'       => !empty($orderSts->name) ? $orderSts->name : "",
            ];
        }
        //01915

        $telegram       = !empty($item->telegram) ? $item->telegram : "None";
        $phone          = !empty($item->phone_number) ? $item->phone_number : "";
        $whatsapp       = !empty($item->whatsapp) ? $item->whatsapp : "None";
        $status         = $item->status == 1 ? 'Active' : "None";
        $ref_id         = !empty($item->ref_id) ? $item->ref_id : "";
        $chkInviteUser  = User::where('id', $ref_id)->select('name', 'phone_number', 'email')->first();
        $registerIP     = $item->register_ip;
        $ipdat          = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $registerIP));

        if (!function_exists('convertScientificToDecimal')) {
            function convertScientificToDecimal($value)
            {
                // Check if the value is in scientific notation
                if (stripos($value, 'e') !== false) {
                    list($base, $exponent) = explode('e', strtolower($value));
                    // Calculate the number of decimal places
                    $decimals = abs((int)$exponent);
                    $number = bcmul($base, bcpow(10, $exponent, $decimals + strlen($base)));
                    return rtrim(rtrim($number, '0'), '.');
                }
                return $value;
            }
        }

        $data = [
            'user_id'    => $item->id,
            'name'       => substr($item->name, 0, 250),
            'rulename'   => substr($item->rulename, 0, 250),
            'userInfo_1' => $item->name,
            'userInfo_2' => $phone,
            'userInfo_3' => $item->email,
            'userInfo_4' => $telegram,
            'userInfo_5' => $whatsapp,
            'invite_user_1' => !empty($chkInviteUser->name) ? $chkInviteUser->name : "",
            'invite_user_2' => !empty($chkInviteUser->phone_number) ? $chkInviteUser->phone_number : "",
            'invite_user_3' => !empty($chkInviteUser->email) ? $chkInviteUser->email : "",
            'email'         => $item->email,
            'register_ip'   => $item->register_ip,
            'lastlogin_ip'  => $item->lastlogin_ip,
            'register_country'  => isset($ipdat->geoplugin_countryName) ? $ipdat->geoplugin_countryName : "",
            'lastlogin_country' => $item->lastlogin_country,
            'created_at'        => date("Y-M-d H:i:s", strtotime($item->created_at)),
            'updated_at'        => date("Y-M-d H:i:s", strtotime($item->updated_at)),
            'login_in_time'     => $item->updated_at,
            'phone_number'      => $item->phone_number,
            'show_password'     => $item->show_password,
            'u_details_user_id' => $item->id,
            'forSellerCommission' => $setting->forSellerCommission,
            'u_details_kyc'     => !empty($item->doc_file) ? url($item->doc_file) : "",
            'status'            => $status,
            'total_success_deposit'       => 0,
            'total_success_withdraw'      => 0,

            'total_airdrop'               => 0,
            'total_profit'                => $earning,
            'total_commission'            => 0,

            'total_expense'               => 0,
            'register_bonus'              => 0,
            'adj_type_sum'                => 0,
            'adj_type_minus'              => 0,
            // 'swap_tran'                   => $swaptran,
        ];

        $data['orders'] = $orders;
        // dd($data);
        return response()->json($data);
    }

    public function getComissionReport($userId)
    {
        $setting = Setting::find(1);
        // echo "User ID: $userId<br/>";
        $checkL1 = User::where('ref_id', $userId)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        //Level 1
        $level1_ids = $checkL1->pluck('id')->toArray();
        // dd($level1_ids);
        $lev_profit_1 = 0;
        foreach ($level1_ids as $id) {
            $level_profit = !empty($setting->level_1_bonus) ? $setting->level_1_bonus : 0;
            $lev_profit_1 += $level_profit;
        }
        $level1Profit = $lev_profit_1;
        $data['level_1_profit'] = number_format($level1Profit, 2);
        //Level 2
        $checkL2    = User::whereIn('ref_id', $level1_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level2_ids = $checkL2->pluck('id')->toArray();

        $lev_profit_2 = 0;
        foreach ($level2_ids as $id) {
            $level_profit = !empty($setting->level_2_bonus) ? $setting->level_2_bonus : 0;
            $lev_profit_2 += $level_profit;
        }
        $level2Profit = $lev_profit_2;

        $data['level_2_profit'] = number_format($level2Profit, 2);
        //Level 3
        $checkL3    = User::whereIn('ref_id', $level2_ids)->select('id', 'name', 'email', 'created_at', 'ref_id')->get();
        $level3_ids = $checkL3->pluck('id')->toArray();

        $lev_profit_3 = 0;
        foreach ($level3_ids as $id) {
            $level_profit3 = !empty($setting->level_3_bonus) ? $setting->level_3_bonus : 0;
            $lev_profit_3 += $level_profit3;
        }
        $level3Profit = $lev_profit_3;
        $data['level_3_profit'] = number_format($level3Profit, 2);

        $allsum = $level1Profit + $level2Profit + $level3Profit;
        $data['commission_sum'] = number_format($allsum, 2);
        return response()->json($data);
        // return response()->json($data, 200);
        //dd($data);
    }

    public function sendNotification(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name'                       => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Check if a category with the same name already exists

        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = array(
            'name'                       => $request->name,

        );
        $resdata['id']                    = Notification::insertGetId($data);
        return response()->json($resdata);
    }
}
