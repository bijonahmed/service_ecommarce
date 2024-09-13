<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Customer;
use App\Models\CategoryCommissionHistory;
use App\Models\Profile;
use App\Models\Categorys;
use App\Models\Product;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;

class CustomerController extends Controller
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


    public function cateCommissionHistReport(Request $request)
    {

        //this admin panel 
        $frm_date    =  !empty($request->frm_date) ? date("Y-m-d", strtotime($request->frm_date)) : "";
        $to_date     =  !empty($request->to_date) ? date("Y-m-d", strtotime($request->to_date)) : "";
        $customer_id =  !empty($request->customer_id) ? $request->customer_id : "";
        //echo "$frm_date-----$to_date---$customer_id"; exit;


        $query = CategoryCommissionHistory::where('customer_id', $customer_id);

        if (!empty($frm_date) && !empty($to_date)) {
            $query->whereBetween('created_at', [$frm_date, $to_date]);
        }
        $query->join('product', 'category_commission_history.product_id', '=', 'product.id');
        $query->join('categorys', 'category_commission_history.category_id', '=', 'categorys.id');
        $query->select(
            'product.name as product_name',
            'category_commission_history.category_id',
            'categorys.name as category_name',
            'product_qty',
            'product_price',
            'category_percetage',
            'admin_get_amount',
            \DB::raw('DATE(category_commission_history.created_at) as created_date')
        );

        $data = $query->get();
        $result['data'] = $data;
        return response()->json($result);
    }

    public function getmlmReport(Request $request)
    {
        //this admin panel 
        $frm_date    =  date("Y-m-d", strtotime($request->frm_date));
        $to_date     =  date("Y-m-d", strtotime($request->to_date));
        $customer_id = $request->customer_id;
        //echo "$frm_date-----$to_date---$customer_id"; exit;

        $userid = $customer_id;
        $userL1   = User::where('join_id', $userid)
            ->select('id', 'name', 'join_id')
            ->get();
        // Helper function to get users for a specific level
        function getUsersForLevels($users, $level)
        {
            $userIdsArray = [];

            foreach ($users as $user) {
                $userId = $user->id;
                $userIdsArray[] = $userId;
            }

            $implodedIds = implode(', ', $userIdsArray);
            $userIdsArray = explode(', ', $implodedIds);

            return User::whereIn('join_id', $userIdsArray)->select('id', 'name', 'join_id')->get();
        }

        // Lev-1
        $userL1 = User::where('join_id', $userid)->select('id', 'name', 'join_id')->get();
        //dd($userL1);
        $lev1 = count($userL1);

        // Lev-2
        if (!empty($lev1)) {
            $userL2 = getUsersForLevels($userL1, 2);
            $lev2 = count($userL2);
        } else {
            $userL2 = [];
            $lev2 = 0;
        }

        // Lev-3
        if (!empty($lev2)) {
            $userL3 = getUsersForLevels($userL2, 3);
            $lev3 = count($userL3);
        } else {
            $userL3 = [];
            $lev3 = 0;
        }

        // Lev-4
        if (!empty($lev3)) {
            $userL4 = getUsersForLevels($userL3, 4);
            $lev4 = count($userL4);
        } else {
            $userL4 = [];
            $lev4 = 0;
        }

        // Lev-5
        if (!empty($lev4)) {
            $userL5 = getUsersForLevels($userL4, 5);
            $lev5 = count($userL5);
        } else {
            $userL5 = [];
            $lev5 = 0;
        }


        // Lev-6
        if (!empty($lev5)) {
            $userL6 = getUsersForLevels($userL5, 5);
            $lev6 = count($userL6);
        } else {
            $userL6 = [];
            $lev6 = 0;
        }

        // Lev-7
        if (!empty($lev6)) {
            $userL7 = getUsersForLevels($userL6, 5);
            $lev7 = count($userL7);
        } else {
            $userL7 = [];
            $lev7 = 0;
        }

        // Lev-8
        if (!empty($lev7)) {
            $userL8 = getUsersForLevels($userL7, 5);
            $lev8 = count($userL8);
        } else {
            $userL8 = [];
            $lev8 = 0;
        }

        // Lev-9
        if (!empty($lev7)) {
            $userL9 = getUsersForLevels($userL8, 5);
            $lev9 = count($userL9);
        } else {
            $userL9 = [];
            $lev9 = 0;
        }

        // Lev-10
        if (!empty($lev9)) {
            $userL10 = getUsersForLevels($userL9, 5);
            $lev10 = count($userL10);
        } else {
            $userL10 = [];
            $lev10 = 0;
        }

        // Level counts
        $lev_data = [
            'lev1Count' => $lev1,
            'lev2Count' => $lev2,
            'lev3Count' => $lev3,
            'lev4Count' => $lev4,
            'lev5Count' => $lev5,
            'lev6Count' => $lev6,
            'lev7Count' => $lev7,
            'lev8Count' => $lev8,
            'lev9Count' => $lev9,
            'lev10Count' => $lev10,

        ];
        return response()->json($lev_data, 200);
    }


    ///getCustomerCalculateLevAd
    public function getCustomerAllLevel(){
        
        $userId = $this->userid;
        
        // start 
        function getLevelss($users, $level)
        {

            if (empty($users)) {
                return [];
            }
            $userIdsArray = $users->pluck('id')->toArray();
            return User::whereIn('join_id', $userIdsArray)->select('id', 'name', 'join_id')->get();
        }

        // dd($request->params);
        $userid = $this->userid;
        $userL1   = User::where('join_id', $userid)
            ->select('id', 'name', 'join_id', 'email', 'created_at', 'status')
            ->get();

        $userL2 = getLevelss($userL1, 2);
        $userL3 = getLevelss($userL2, 3);
        $userL4 = getLevelss($userL3, 4);
        $userL5 = getLevelss($userL4, 2);

        $levels = [];
        $levelNumbers = '1,2,3,4,5'; // Define levels as a string
        $levelArray = explode(',', $levelNumbers); // Split into an array
        
        foreach ($levelArray as $levelNumber) {
            // Dynamically access userL variables (like $userL1, $userL2, etc.)
            $userLevel = ${"userL$levelNumber"};
        
            foreach ($userLevel as $v) {
                $uplineQr = User::where('id', $v->join_id)->select('created_at', 'name', 'email')->first();
        
                // Check if this combination of id and name is already processed
                if (!isset($uniqueEntries[$v->id][$v->name])) {
                    $levels[] = [
                        'id'      => $v->id,
                        'name'    => !empty($v->name) ? $v->name : "",
                        'profit'  => 0,
                        'regDate' => date("Y-m-d", strtotime($uplineQr->created_at)),
                        'upline'  => !empty($uplineQr->name) ? $uplineQr->name : "",
                        'status'  => $v->status,
                    ];
        
                    // Mark this id and name as processed
                    $uniqueEntries[$v->id][$v->name] = true;
                }
            }
        }

        $data = [
            'level'      => $levels,
            'teamCount'  => count($levels),
            'teamProfit' => 0,
        ];

        return response()->json($data, 200);

        // END
         
    }

    
    public function getCustomerCalculateLevAd(Request $request)
    {


        $customer_id = (int)$request->customer_id;

        function getLevelsAd($users, $level)
        {

            if (empty($users)) {
                return [];
            }
            $userIdsArray = $users->pluck('id')->toArray();
            return User::whereIn('join_id', $userIdsArray)->select('id', 'name', 'join_id')->get();
        }

        // dd($request->params);
        $userid = $customer_id;
        $userL1   = User::where('join_id', $userid)
            ->select('id', 'name', 'join_id', 'email', 'created_at', 'status')
            ->get();

        $userL2 = getLevelsAd($userL1, 2);
        $userL3 = getLevelsAd($userL2, 3);
        $userL4 = getLevelsAd($userL3, 4);
        $userL5 = getLevelsAd($userL4, 5);
        $userL6 = getLevelsAd($userL5, 5);
        $userL7 = getLevelsAd($userL6, 5);
        $userL8 = getLevelsAd($userL7, 5);
        $userL9 = getLevelsAd($userL8, 5);
        $userL10 = getLevelsAd($userL9, 5);

        $levels = [];
        $levelNumber = $request->params;

        if ($levelNumber >= 1 && $levelNumber <= 10) {
            $userLevel = ${"userL$levelNumber"};

            foreach ($userLevel as $v) {
                $uplineQr = User::where('id', $v->join_id)->select('name', 'email')->first();

                $levels[] = [
                    'id'      => $v->id,
                    'name'    => !empty($v->name) ? $v->name : "",
                    'profit'  => 0,
                    'regDate' => date("Y-m-d", strtotime($uplineQr->created_at)),
                    'upline'  => !empty($uplineQr->name) ? $uplineQr->name : "",
                    'status'  => $v->status,
                ];
            }
        }

        $data = [
            'level'      => $levels,
            'teamCount'  => count($levels),
            'teamProfit' => 0,
        ];

        return response()->json($data, 200);
    }


    public function getCustomerCalculateLev(Request $request)
    {

        function getLevels($users, $level)
        {

            if (empty($users)) {
                return [];
            }
            $userIdsArray = $users->pluck('id')->toArray();
            return User::whereIn('join_id', $userIdsArray)->select('id', 'name', 'join_id')->get();
        }

        // dd($request->params);
        $userid = $this->userid;
        $userL1   = User::where('join_id', $userid)
            ->select('id', 'name', 'join_id', 'email', 'created_at', 'status')
            ->get();

        $userL2 = getLevels($userL1, 2);
        $userL3 = getLevels($userL2, 3);
        $userL4 = getLevels($userL3, 4);
        $userL5 = getLevels($userL4, 2);

        $levels = [];
        $levelNumber = $request->params;

        if ($levelNumber >= 1 && $levelNumber <= 5) {
            $userLevel = ${"userL$levelNumber"};

            foreach ($userLevel as $v) {
                $uplineQr = User::where('id', $v->join_id)->select('created_at', 'name', 'email')->first();

                $levels[] = [
                    'id'      => $v->id,
                    'name'    => !empty($v->name) ? $v->name : "",
                    'profit'  => 0,
                    'regDate' => date("Y-m-d", strtotime($uplineQr->created_at)),
                    'upline'  => !empty($uplineQr->name) ? $uplineQr->name : "",
                    'status'  => $v->status,
                ];
            }
        }

        $data = [
            'level'      => $levels,
            'teamCount'  => count($levels),
            'teamProfit' => 0,
        ];

        return response()->json($data, 200);
    }

    public function getCustomerLevel()
    {

        $userid = $this->userid;
        $userL1   = User::where('join_id', $userid)
            ->select('id', 'name', 'join_id')
            ->get();
        $totalmember   = User::where('join_id', $userid)
            ->select('id', 'name', 'join_id')
            ->get();
        $totalmemberCount   = User::where('join_id', $userid)
            ->select('id', 'name', 'join_id')
            ->count();

        // Helper function to get users for a specific level
        function getUsersForLevel($users, $level)
        {
            $userIdsArray = [];

            foreach ($users as $user) {
                $userId = $user->id;
                $userIdsArray[] = $userId;
            }

            $implodedIds = implode(', ', $userIdsArray);
            $userIdsArray = explode(', ', $implodedIds);

            return User::whereIn('join_id', $userIdsArray)->select('id', 'name', 'join_id')->get();
        }

        // Lev-1
        $userL1 = User::where('join_id', $userid)->select('id', 'name', 'join_id')->get();
        //dd($userL1);
        $lev1 = count($userL1);

        // Lev-2
        if (!empty($lev1)) {
            $userL2 = getUsersForLevel($userL1, 2);
            $lev2 = count($userL2);
        } else {
            $userL2 = [];
            $lev2 = 0;
        }

        // Lev-3
        if (!empty($lev2)) {
            $userL3 = getUsersForLevel($userL2, 3);
            $lev3 = count($userL3);
        } else {
            $userL3 = [];
            $lev3 = 0;
        }

        // Lev-4
        if (!empty($lev3)) {
            $userL4 = getUsersForLevel($userL3, 4);
            $lev4 = count($userL4);
        } else {
            $userL4 = [];
            $lev4 = 0;
        }

        // Lev-5
        if (!empty($lev4)) {
            $userL5 = getUsersForLevel($userL4, 5);
            $lev5 = count($userL5);
        } else {
            $userL5 = [];
            $lev5 = 0;
        }

        $totalMembers = $totalmember;
        // Level counts
        $lev_data = [
            'total'     => $totalMembers,
            'totalmemberCount'     => $totalmemberCount,
            'lev1Count' => $lev1,
            'lev2Count' => $lev2,
            'lev3Count' => $lev3,
            'lev4Count' => $lev4,
            'lev5Count' => $lev5,
        ];
        return response()->json($lev_data, 200);
    }

    public function saveLead(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'          => 'required',
            'email'         => 'required',
            'phone'         => 'required',
            'address'       => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'     => !empty($request->name) ? $request->name : "",
            'phone'    => !empty($request->phone) ? $request->phone : "",
            'email'    => !empty($request->email) ? $request->email : "",
            'address'  => !empty($request->address) ? $request->address : "",
            'entry_by' => $this->userid,
            'status'   => $request->status,
        );
        if ($request->status == 2) {
            $sdata['name']      = $request->name;
            $sdata['addres']    = $request->address;
            $sdata['email']     = $request->email;
            $sdata['phone']     = $request->phone;
            $sdata['entry_by']  = $this->userid;
            $sdata['status']    = 1;
            DB::table('customer')->insertGetId($sdata);
        }
        if (empty($request->id)) {
            DB::table('lead')->insertGetId($data);
        } else {
            DB::table('lead')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully',
        ];
        return response()->json($response);
    }
    public function saveCustomer(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'  => 'required',
            'email' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'     => !empty($request->name) ? $request->name : "",
            'address_1'   => !empty($request->address_1) ? $request->address_1 : "",
            'address_2'   => !empty($request->address_2) ? $request->address_2 : "",
            'address_3'   => !empty($request->address_3) ? $request->address_3 : "",
            'email'    => !empty($request->email) ? $request->email : "",
            // 'entry_by' => $this->userid,
            'status'   => $request->status,
        );
        if (empty($request->id)) {
            DB::table('users')->insertGetId($data);
        } else {
            DB::table('users')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully Working',
        ];
        return response()->json($response);
    }
    public function allCustomers(Request $request)
    {

        try {
            $rows = User::where('role_id', 2)->get();
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
    public function allleadList(Request $request)
    {

        try {
            $rows = Customer::filterLeadList($request->all());
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
    public function checkCustomer($id)
    {
        $id = (int) $id;
        $data = User::where('id', $id)->first();
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkLead($id)
    {
        $id = (int) $id;
        $data = Customer::checkLeadRow($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
}
