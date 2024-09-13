<?php

namespace App\Http\Controllers\Setting;

use DB;
use Auth;
use Helper;
use App\Models\User;
use App\Models\coupons;
use App\Models\Profile;
use App\Models\Setting;
use App\Models\Sliders;
use App\Models\students;
use App\Models\dealsbanner;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\topHeaderBanner;
use App\Rules\MatchOldPassword;
use App\Models\sliderSideAdsModel;
use App\Http\Controllers\Controller;
use App\Models\companyProfile;
use App\Models\couponUseHistory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SettingController extends Controller
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
    public function insertEmployeeType(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('employee_type')->insertGetId($data);
        } else {
            DB::table('employee_type')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPayGroup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('pay_group')->insertGetId($data);
        } else {
            DB::table('pay_group')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertAnnualPay(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('annual_pay')->insertGetId($data);
        } else {
            DB::table('annual_pay')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }


    public function insertSalary(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'                  => 'required',
            'number_of_referell'    => 'required',
            'number_of_sales'       => 'required',
            'number_of_blogs'       => 'required',
            'salary_amount'         => 'required',
            'status'                => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'                      => !empty($request->name) ? $request->name : "",
            'number_of_referell'        => !empty($request->number_of_referell) ? $request->number_of_referell : "",
            'number_of_sales'           => !empty($request->number_of_sales) ? $request->number_of_sales : "",
            'number_of_blogs'           => !empty($request->number_of_blogs) ? $request->number_of_blogs : "",
            'salary_amount'             => !empty($request->salary_amount) ? $request->salary_amount : "",
            'status'                    => !empty($request->status) ? $request->status : "",

        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('salary')->insertGetId($data);
        } else {
            DB::table('salary')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }



    public function insertPack(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'                  => 'required',
            'number_of_referell'    => 'required',
            'number_of_sales'       => 'required',
            'number_of_blogs'       => 'required',
            'salary_amount'         => 'required',
            'status'                => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'                      => !empty($request->name) ? $request->name : "",
            'number_of_referell'        => !empty($request->number_of_referell) ? $request->number_of_referell : "",
            'number_of_sales'           => !empty($request->number_of_sales) ? $request->number_of_sales : "",
            'number_of_blogs'           => !empty($request->number_of_blogs) ? $request->number_of_blogs : "",
            'salary_amount'             => !empty($request->salary_amount) ? $request->salary_amount : "",
            'status'                    => !empty($request->status) ? $request->status : "",

        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('packages')->insertGetId($data);
        } else {
            DB::table('packages')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }

    public function insertBankMaster(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('bank_master')->insertGetId($data);
        } else {
            DB::table('bank_master')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertWedges(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('wedges_pay_mode')->insertGetId($data);
        } else {
            DB::table('wedges_pay_mode')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPayItem(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'              => !empty($request->name) ? $request->name : "",
            'in_percent'        => !empty($request->in_percent) ? $request->in_percent : "",
            'in_rupees'         => !empty($request->in_rupees) ? $request->in_rupees : "",
            'min_value'         => !empty($request->min_value) ? $request->min_value : "",
            'max_value'         => !empty($request->max_value) ? $request->max_value : "",
            'effective_frm'     => !empty($request->effective_frm) ? date("Y-m-d", strtotime($request->effective_frm)) : "",
            'effective_to'      => !empty($request->effective_to) ? date("Y-m-d", strtotime($request->effective_to)) : "",
            'status'            => !empty($request->status) ? $request->status : "",
            'entry_by'           => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('payroll_pay_item')->insertGetId($data);
        } else {
            DB::table('payroll_pay_item')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertBankCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'bank_id'   => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'bank_id'       => !empty($request->bank_id) ? $request->bank_id : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('bank_short_code')->insertGetId($data);
        } else {
            DB::table('bank_short_code')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertTaxMaster(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'                          => !empty($request->name) ? $request->name : "",
            'percentage_of_deduction'       => !empty($request->percentage_of_deduction) ? $request->percentage_of_deduction : "",
            'tax_reference'                 => !empty($request->tax_reference) ? $request->tax_reference : "",
            'status'                        => !empty($request->status) ? $request->status : "",
            'entry_by'                      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('tax_master')->insertGetId($data);
        } else {
            DB::table('tax_master')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPaymentType(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'              => 'required',
            'working_hour'      => 'required',
            'rate'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'                          => !empty($request->name) ? $request->name : "",
            'working_hour'                  => !empty($request->working_hour) ? $request->working_hour : "",
            'rate'                          => !empty($request->rate) ? $request->rate : "",
            'status'                        => !empty($request->status) ? $request->status : "",
            'entry_by'                      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('payment_type')->insertGetId($data);
        } else {
            DB::table('payment_type')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }


    public function checkrowsallary($id)
    {
        $id = (int) $id;
        $data = DB::table('salary')->where('id', $id)->first();
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }


    public function checkrowPack($id)
    {
        $id = (int) $id;
        $data = DB::table('packages')->where('id', $id)->first();
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }



    public function getEmployeeTypeList(Request $request)
    {
        try {
            $rows = Setting::filterEmpList($request->all());
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
    public function getPayGroupList(Request $request)
    {
        try {
            $rows = Setting::filterPayGroupList($request->all());
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
    public function getAnnualPayist(Request $request)
    {
        try {
            $rows = Setting::filterAnnualPay($request->all());
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



    public function getsalary(Request $request)
    {
        try {
            $rows = DB::table('salary')->get();
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


    public function getPack(Request $request)
    {
        try {
            $rows = DB::table('packages')->get();
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





    public function getBankMasterlist(Request $request)
    {
        try {
            $rows = Setting::filterbankMaster($request->all());
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
    public function gettxtMastlist(Request $request)
    {
        try {
            $rows = Setting::filtertaxtMaster($request->all());
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
    public function getWdges(Request $request)
    {
        try {
            $rows = Setting::filterWdges($request->all());
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
    public function getPayItemList(Request $request)
    {
        try {
            $rows = Setting::filterPayItemlist($request->all());
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
    public function getPaymentType(Request $request)
    {
        try {
            $rows = Setting::filterpaymentType($request->all());
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
    public function getBankShortCodelist(Request $request)
    {
        try {
            $rows = Setting::filterBShortCode($request->all());
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
    public function checkrowEmpleeType($id)
    {
        $id = (int) $id;
        $data = Setting::editEmpTypeId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowPayGroup($id)
    {
        $id = (int) $id;
        $data = Setting::editPayGroupId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowAnnualPay($id)
    {
        $id = (int) $id;
        $data = Setting::editAnnualPayId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }



    public function checkrowBankMaster($id)
    {
        $id = (int) $id;
        $data = Setting::editBankMasterId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowBankShortCode($id)
    {
        $id = (int) $id;
        $data = Setting::editBankShortCodeId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowtxtmaster($id)
    {
        $id = (int) $id;
        $data = Setting::edittxtMasterId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowPaymenttype($id)
    {
        $id = (int) $id;
        $data = Setting::editPaymentId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowWedges($id)
    {
        $id = (int) $id;
        $data = Setting::editWedgesId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkPayItemRow($id)
    {
        $id = (int) $id;
        $data = Setting::editPayrowId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    // brands part start here 
    public function addbrands() {}
    // ads part start here 

    public function getbannerTop()
    {

        $banner    = topHeaderBanner::first();
        $imagesUrl = !empty($banner->image) ? url($banner->image) : "";

        if ($banner->count() > 0) {
            return response()->json([
                'status' => 200,
                'images' => $imagesUrl
            ], 200);
        } else {
            return response()->json([
                'status' => 202,
                'message' => "Banner Not Found"
            ], 202);
        }
    }
    public function updatebannerTop(Request $request)
    {

        $messages = [
            'image' => 'Image size must be 640x33 and jpg,png,jpeg,gif',
        ];
        $validator = Validator::make($request->all(), [
            'image'     => 'mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=640,min_height=33,max_width=640,max_height=33',
            // |dimensions:min_width=640,min_height=33,max_width=640,max_height=33
            'status'    => 'string',
        ], $messages);


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        } else {
            if ($request->hasFile("image")) {

                $bannerAdd = topHeaderBanner::first();

                $image = $request->image;
                $imageName = "/bannerImage/" . time() . "." . $image->getClientOriginalExtension();
                $image->move(public_path("bannerImage"), $imageName);

                if (!empty($bannerAdd->image) && File::exists(public_path($bannerAdd->image))) {
                    File::delete(public_path($bannerAdd->image));
                }

                // $bannerAdd = topHeaderBanner::create([               
                $bannerAdd->update([
                    "image" => $imageName,
                    "status" => $request->status,
                ]);
                // ]);

                if ($bannerAdd) {

                    $images = url($imageName);

                    return response()->json([
                        "status" => 200,
                        "images" => $images,

                    ], 200);
                } else {
                    return response()->json([
                        "status" => 500,
                        "errors" => "Something went wrong"
                    ], 500);
                }
            }
        }
    }
    public function updatedealsbannner(request $request)
    {
        $messages = [
            'imageOne' => 'Image size must be 572x250 and jpg,png,jpeg,gif',
            'imageTwo' => 'Image size must be 572x250 and jpg,png,jpeg,gif',
        ];
        $validator = Validator::make($request->all(), [
            'imageOne' => $request->hasFile('imageOne') ? 'mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=572,min_height=250,max_width=572,max_height=250' : '',
            'imageTwo' => $request->hasFile('imageTwo') ? 'mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=572,min_height=250,max_width=572,max_height=250' : '',
        ], $messages);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $dealsBanner = dealsbanner::first();

        if ($request->hasFile('imageOne')) {
            $image = $request->imageOne;
            $imageName = "/bannerImage/" . time() . "img." . $image->getClientOriginalExtension();
            $image->move(public_path("bannerImage"), $imageName);
            // Delete previous image if it exists
            if (!empty($dealsBanner->imageOne) && File::exists(public_path($dealsBanner->imageOne))) {
                File::delete(public_path($dealsBanner->imageOne));
            }


            if (!$request->hasFile('imageTwo')) {
                $dealsBanner->update(["imageOne" => $imageName]);
            } else {
                $imageTwo = $request->imageTwo;
                $imageNameTwo = "/bannerImage/" . time() . "." . $imageTwo->getClientOriginalExtension();
                $imageTwo->move(public_path("bannerImage"), $imageNameTwo);
                // Delete previous image if it exists
                if (!empty($dealsBanner->imageOne) && File::exists(public_path($dealsBanner->imageOne))) {
                    File::delete(public_path($dealsBanner->imageOne));
                }
                if (!empty($dealsBanner->imageTwo) && File::exists(public_path($dealsBanner->imageTwo))) {
                    File::delete(public_path($dealsBanner->imageTwo));
                }

                $dealsBanner->update(["imageOne" => $imageName]);
                $dealsBanner->update(["imageTwo" => $imageNameTwo]);
            }
        } else if ($request->hasFile('imageTwo')) {
            $imageTwo = $request->imageTwo;
            $imageNameTwo = "/bannerImage/" . time() . "." . $imageTwo->getClientOriginalExtension();
            $imageTwo->move(public_path("bannerImage"), $imageNameTwo);
            // Delete previous image if it exists
            if (!empty($dealsBanner->imageTwo) && File::exists(public_path($dealsBanner->imageTwo))) {
                File::delete(public_path($dealsBanner->imageTwo));
            }
            if (!$request->hasFile('imageOne')) {
                $dealsBanner->update(["imageTwo" => $imageNameTwo]);
            }
        }

        if ($dealsBanner->count() > 0) {
            $imageOne = $dealsBanner->imageOne ? url($dealsBanner->imageOne) : null;
            $imageTwo = $dealsBanner->imageTwo ? url($dealsBanner->imageTwo) : null;
            return response()->json([
                'status' => 200,
                'imageOne' => $imageOne,
                'imageTwo' => $imageTwo
            ], 200);
        } else {
            return response()->json([
                'status' => 202,
                'message' => "Banner Not Found"
            ], 202);
        }
    }

    public function getdealsbanners()
    {

        $dealbanner    = dealsbanner::first();
        // $imagesUrlone = !empty($dealbanner->image) ? url($dealbanner->imageOne) : "";
        // $imagesUrltwo = !empty($dealbanner->image) ? url($dealbanner->imageTwo) : "";

        if ($dealbanner->count() > 0) {
            return response()->json([
                'status' => 200,
                'imageone' => url($dealbanner->imageOne),
                'imagetwo' => url($dealbanner->imageTwo),
            ], 200);
        } else {
            return response()->json([
                'status' => 202,
                'message' => "Banner Not Found"
            ], 202);
        }
    }

    public function savecoupons(request $request)
    {

        $validator = Validator::make($request->all(), [
            // 'coupon_type'   => "required|string", 
            'name'                  => "",
            'promocode'             => "required",
            'code_type'             => "required",
            'min_shopping'          => "required|numeric",
            'd_percent'             => "max:100",
            'd_fvalue'              => "",
            'status'                => "required",
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->name)));

        // $coupons = coupons::create([
        //     'name'              => $request->name,
        //     'slug'              => $slug,
        //     'promocode'         => $request->promocode,
        //     'code_type'         => $request->code_type,
        //     'min_shopping'      => $request->min_shopping,
        //     'd_percent'         => $request->d_percent,
        //     'd_fvalue'          => $request->d_fvalue,
        //     'status'            => $request->status,
        // ]);
        $couponsData = [
            'name'          => $request->name,
            'slug'          => $slug,
            'promocode'     => $request->promocode,
            'code_type'     => $request->code_type,
            'min_shopping'  => $request->min_shopping,
            'status'        => $request->status,
        ];

        if ($request->code_type == 'percentage') {
            $couponsData['d_percent'] = $request->d_percent;
        } else {
            $couponsData['d_fvalue'] = $request->d_fvalue;
        }

        $coupons = coupons::create($couponsData);


        if ($coupons) {
            return response()->json([
                'status'    => true,
                'data'      => $coupons
            ], 200);
        } else {
            return response()->json([
                'status'    => true,
                'data'      => "Coupon Not Create"
            ], 404);
        }
    }
    public function couponsList()
    {
        $coupons = coupons::all();
        $formatedData = [];
        foreach ($coupons as $Key => $value) {
            $formatedData[] = [


                'id'                => $value->id,
                'name'          => $value->name,
                'slug'          => $value->slug,
                'promocode'     => $value->promocode,
                'code_type'     => $value->code_type,
                'min_shopping'  => $value->min_shopping,
                'status'        => $value->status,
                'd_percent'     => $value->d_percent,
                'd_fvalue'      => $value->d_fvalue,

                // 'role'              => $value->role_id,
                // 'businessName'      => $value->business_name,
                // 'slug'      => $value->business_name_slug,
                // 'businessLogo'      => !empty($value->business_logo) ? url($value->business_logo) : "",
            ];
        }
        return response()->json($formatedData, 200);
    }

    public function getcoupons($id)
    {
        $id = (int) $id;
        $data = coupons::where('id', $id)->first();
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function updatecoupon(Request $request)
    {
        $id = $request->input('id');
        $validator = Validator::make($request->all(), [
            // 'coupon_type'   => "required|string", 
            'name'                  => "",
            'promocode'             => "required",
            'code_type'             => "required",
            'min_shopping'          => "required|numeric",
            'd_percent'             => "",
            'd_fvalue'              => "",
            'status'                => "required",
        ]);
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                // 'id' => $id
            ], 422);
        }

        $updateCoupon = coupons::where('id', $id)->first();
        $updateData = [
            'name'         => $request->name,
            'promocode'    => $request->promocode,
            'code_type'    => $request->code_type,
            'min_shopping' => $request->min_shopping,
            'status'       => $request->status
        ];

        // Check if d_percent is not null or 0
        if ($request->d_percent !== null && $request->d_percent !== 0) {
            $updateData['d_percent'] = $request->d_percent;
        } else {
            // If d_percent is null or 0, set it to null in the update data
            $updateData['d_percent'] = null;
        }
        // Check if d_percent is not null or 0
        if ($request->d_fvalue !== null && $request->d_percent !== 0) {
            $updateData['d_fvalue'] = $request->d_fvalue;
        } else {
            // If d_percent is null or 0, set it to null in the update data
            $updateData['d_fvalue'] = null;
        }

        $updateCoupon->update($updateData);
    }
    public function updatesliderLeftads(request $request)
    {
        $messages = [
            'ads1' => 'Image size must be 600x370 and jpg,png,jpeg,gif,webp',
            'ads2' => 'Image size must be 600x370 and jpg,png,jpeg,gif,webp',
        ];
        $validator = Validator::make($request->all(), [
            // Check if ads1 has a file
            'ads1' => $request->hasFile('ads1') ? 'required|mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=600,min_height=370,max_width=600,max_height=370' : '',
            // Check if ads2 has a file
            'ads2' => $request->hasFile('ads2') ? 'required|mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=600,min_height=370,max_width=600,max_height=370' : '',
        ], $messages);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $adsBanner = sliderSideAdsModel::first();

        // Assuming $adsBanner is your model instance

        // Check if ads1 has a file
        if ($request->hasFile('ads1')) {
            $image = $request->ads1;
            $imageName = "/bannerImage/" . time() . "-ads1." . $image->getClientOriginalExtension();
            $image->move(public_path("bannerImage"), $imageName);

            // Delete previous image if it exists
            if (!empty($adsBanner->adsOne) && File::exists(public_path($adsBanner->adsOne))) {
                File::delete(public_path($adsBanner->adsOne));
            }

            // Update adsOne only if ads2 is null or empty
            if (!$request->hasFile('ads2') || !$request->ads2) {
                $adsBanner->update(["adsOne" => $imageName]);
            } else {
                $imageTwo = $request->ads2;
                $imageNameTwo = "/bannerImage/" . time() . "-ads2." . $imageTwo->getClientOriginalExtension();
                $imageTwo->move(public_path("bannerImage"), $imageNameTwo);

                // Delete previous image if it exists
                if (!empty($adsBanner->adsOne) && File::exists(public_path($adsBanner->adsOne))) {
                    File::delete(public_path($adsBanner->adsOne));
                }
                if (!empty($adsBanner->adsTwo) && File::exists(public_path($adsBanner->adsTwo))) {
                    File::delete(public_path($adsBanner->adsTwo));
                }

                // Update adsTwo only if ads1 is null or empty
                // if (!$request->hasFile('ads1') || !$request->ads1) {
                $adsBanner->update(["adsOne" => $imageName]);
                $adsBanner->update(["adsTwo" => $imageNameTwo]);
                // }
            }
        }

        // Check if ads2 has a file
        else if ($request->hasFile('ads2')) {
            $imageTwo = $request->ads2;
            $imageNameTwo = "/bannerImage/" . time() . "-ads2." . $imageTwo->getClientOriginalExtension();
            $imageTwo->move(public_path("bannerImage"), $imageNameTwo);

            // Delete previous image if it exists
            if (!empty($adsBanner->adsTwo) && File::exists(public_path($adsBanner->adsTwo))) {
                File::delete(public_path($adsBanner->adsTwo));
            }

            // Update adsTwo only if ads1 is null or empty
            if (!$request->hasFile('ads1') || !$request->ads1) {
                $adsBanner->update(["adsTwo" => $imageNameTwo]);
            }
        }

        return response()->json([
            'status' => 202,
            'message' => "Banner add succesfully"
        ], 202);

        // if ($dealsBanner->count() > 0) {
        //     $imageOne = $dealsBanner->imageOne ? url($dealsBanner->imageOne) : null;
        //     $imageTwo = $dealsBanner->imageTwo ? url($dealsBanner->imageTwo) : null;
        //     return response()->json([
        //         'status' => 200,
        //         'imageOne' => $imageOne,
        //         'imageTwo' => $imageTwo
        //     ], 200);
        // } else {
        //     return response()->json([
        //         'status' => 202,
        //         'message' => "Banner Not Found"
        //     ], 202);
        // }
    }
    public function getadsbanner()
    {
        $adsBanner = sliderSideAdsModel::first();
        if ($adsBanner->count() > 0) {
            $adsOne = $adsBanner->adsOne ? url($adsBanner->adsOne) : null;
            $adsTwo = $adsBanner->adsTwo ? url($adsBanner->adsTwo) : null;
            return response()->json([
                'status' => 200,
                'adsOne' => $adsOne,
                'adsTwo' => $adsTwo
            ], 200);
        } else {
            return response()->json([
                'status' => 202,
                'message' => "Banner Not Found"
            ], 202);
        }
    }

    public function editseller($id)
    {
        $id = (int) $id;
        $data = User::where('id', $id)->first();
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function updateSeller(request $request)
    {

        $id = $request->id;

        $validator = Validator::make($request->all(), [
            'business_name'      => "required",
            'status'             => "required",
            'home_status'        => "required"
        ]);
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $updateCoupon = User::where('id', $id)->first();
        $updateData = [
            'business_name'         => $request->business_name,
            'status'                => $request->status,
            'home_status'           => $request->home_status
        ];
        $sql = $updateCoupon->update($updateData);

        if ($sql) {
            return response()->json([
                'status'    => true,
                'message'   => "Successful",
            ]);
        } else {
            return response()->json([
                'status'    => false,
                'message'   => "Failed to update.",
            ]);
        }
    }

    public function saveslidersImages(Request $request)
    {
        // dd($request->image);
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=600,min_height=400,max_width=600,max_height=400',
            'status' => 'required'
        ], [
            'image.dimensions' => 'The image must be 600x400 pixels.',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $imageName = "/backend/slider_images/" . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path("/backend/slider_images/"), $imageName);
            // dd($imageName);
            // return false;
            $slider = Sliders::create([
                'images' => $imageName,
                'status' => $request->status, // Assuming status is part of the sliders table
            ]);

            if ($slider) {
                return response()->json(["message" => "Successfully Added"], 200);
            } else {
                return response()->json(["message" => "Failed to add slider"], 500);
            }
        }
    }
    public function deleteSliderimage(Request $request)
    {
        $id = $request->id;
        $slider = Sliders::findOrFail($id);

        $slider->delete();

        return response()->json(['message' => 'Slider image deleted successfully'], 200);
    }
    public function updateCompanyProfile(request $request)
    {
        // dd($request);
        // return false;
        $validator = Validator::make($request->all(), [
            'company_name' => 'required|string|max:255',
            'address' => 'nullable|string|max:255',
            'setup_charge' => 'nullable|numeric',
            'transaction_fee' => 'nullable|numeric',
            'other_charges' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'industry' => 'nullable|max:255',
            'about' => 'nullable|string',
        ], [
            'transaction_fee' => 'Cash on delivery fee must be only number',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->toArray()], 422);
        }

        $companyId = $request->id;
        // dd($companyId);
        // return false;
        $companyProfile = CompanyProfile::find($companyId);

        if (!$companyProfile) {
            return response()->json([
                'error' => 'Company profile not found.'
            ], 404);
        }

        $updateData = [
            'company_name' => $request->company_name,
            'address' => $request->address,
            'setup_charge' => $request->setup_charge,
            'transaction_fee' => $request->transaction_fee,
            'other_charges' => $request->other_charges,
            'phone' => $request->phone,
            'email' => $request->email,
            'founded_year' => $request->found_year,
            'industry' => $request->industry,
            'about' => $request->about,
        ];

        // Handle logo file upload if present
        if ($request->hasFile('logo')) {
            $validator = Validator::make($request->all(), [
                'logo' => 'nullable|mimes:jpg,png,jpeg,gif,webp|max:2048',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()->toArray()], 422);
            }

            $image = $request->file('logo');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('/backend/upload/'), $imageName);
            $updateData['logo'] = '/backend/upload/' . $imageName;
        }

        // Update the company profile
        $companyProfile->update($updateData);

        return response()->json([
            'status' => 'success',
            'message' => 'Company profile settings updated successfully.'
        ], 200);
    }
    public function getProfileData()
    {
        $getData = companyProfile::get()->first();
        $getData['logo'] = url($getData->logo);
        return response()->json($getData);
    }

    public function getcoupos(Request $request)
    {
        $minShop = $request->query('minShop');
        $user_id = $request->query('user_id');


        $couponList = coupons::where('min_shopping', '<', $minShop)
            ->where('status', 1)
            ->limit(3)
            ->get();


        foreach ($couponList as $key => $coupon) {

            $usageRecord = CouponUseHistory::where('user_id', $user_id)
                ->where('coupon_id', $coupon->id)
                ->first();


            if ($usageRecord) {
                unset($couponList[$key]);
            }
        }

        // dd($couponList);
        // return false;

        return response()->json(['couponList' => array_values($couponList->toArray())]);
    }
}
