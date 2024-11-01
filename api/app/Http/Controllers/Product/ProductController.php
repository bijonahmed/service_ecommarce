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
use App\Models\Deposit;
use App\Models\Order;
use App\Models\OrderHistory;
use App\Models\Withdraw;
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


    public function dashboardCounting()
    {
        $user_row    = User::find($this->userid);
        $recivAmount = Deposit::where('status', 1)->sum('receivable_amount');
        $serviceFee  = Order::sum('service_fee');
        $totalmlmSum = Order::sum('lev_1') +
            Order::sum('lev_2') +
            Order::sum('lev_3') +
            Order::sum('lev_4') +
            Order::sum('lev_5');

        $data['total_deposit']  = !empty($recivAmount) ? number_format($recivAmount, 2) : 0;
        $data['total_income']   = !empty($recivAmount) ? number_format($recivAmount, 2) : 0;
        $data['serviceFee']     = !empty($serviceFee) ? number_format($serviceFee, 2) : 0;
        $data['totalmlmwallet'] = !empty($totalmlmSum) ? number_format($totalmlmSum, 2) : 0;


        $data['total_withdraw'] = Withdraw::where('status', 1)->count();
        $data['total_users']    = User::where('role_id', 2)->where('status', 1)->count();
        $data['total_seller']   = User::where('status', 1)->where('role_id', 2)->count();
        $data['total_buyer']    = User::where('status', 1)->where('role_id', 3)->count();
        $data['total_order']    = Order::count();
        $data['user_name']      = !empty($user_row->name) ? $user_row->name : "";
        $data['api_counts']     = 0;
        return response()->json($data);
    }
}
