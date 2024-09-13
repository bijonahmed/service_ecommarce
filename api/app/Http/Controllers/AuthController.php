<?php

namespace App\Http\Controllers;

use App\Models\User;
use Validator;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use DB;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['updateLogo', 'login', 'register', 'showProfileData', 'updateprofile', 'updatePassword', 'registerSeller', 'updateBusinessprofile']]);
    }
    protected function validateLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);
        $credentials = request(['email', 'password']);
        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json([
                'errors' => [
                    'account' => [
                        "Invalid username or password"
                    ]
                ]
            ], 422);
        }
        return $this->respondWithToken($token);
    }

    public function register(Request $request)
    {
        // dd($request->all());
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:2|confirmed', // Add the 'confirmed' rule
        ],[
            'password' => "Password dosen't match",
        ]);

        $ipaddress = request()->ip();
        $t = microtime(true);
        $createTimeStamp =  strtok($t, '.');
        $code = $createTimeStamp; //uniqid().mt_rand(1, 999999);
        $inviteCode = !empty($request->invite_code) ? $request->invite_code : "";
        if (!empty($inviteCode)) {
            $user = DB::table('users')->where('invite_code', $inviteCode)->first();

            if (!empty($user->id)) {
                $setting = DB::table('tbl_setting')->first();

                // Update user data
                $userData = [
                    'reffer_bonus' => !empty($setting->reffer_bonus) ? $user->reffer_bonus + $setting->reffer_bonus : 0,
                ];

                DB::table('users')->where('invite_code', $inviteCode)->update($userData);

                $inviteCode = $code;
                $joinId = $user->id;
            } else {
                $errorMessage = "Invalid Code: The provided invite code does not exist.";
                // You may want to log this error or return it to the client, depending on your application needs.
            }
        } else {
            $inviteCode = $code;
            $joinId = "";
        }

        // If you need to return a response, you can do it here.
        // For example, return a JSON response:
        if (isset($errorMessage)) {
            return response()->json(['error' => $errorMessage], 400);
        } else {

            $user = User::create([
                'name'          => $request->name,
                'email'         => $request->email,
                'role_id'       => 2,
                'status'        => 1,
                'ip'            => $ipaddress,
                'invite_code'   => $inviteCode,
                'join_id'       => $joinId,
                'show_password' => $request->password,
                'password' => bcrypt($request->password),
            ]);
            // Get the token
            $token = auth('api')->login($user);
            return $this->respondWithToken($token);
        }
    }

    public function registerSeller(Request $request)
    {
        //    dd($request->all());
        $this->validate($request, [
            'first_name'          => 'required',
            'last_name'           => 'required',
            'phone_number'        => 'required',
            'business_name'       => 'required',
            'business_address'    => 'required',
            'business_email'      => 'required',
            'business_phone'      => 'required',
            'business_return_name'       => 'required',
            'business_return_address'    => 'required',
            'business_return_phone'      => 'required',
            'business_warehouse_address' => 'required',
            'business_owner_name'        => 'required',
            'business_register_num'      => 'required',
            'agree_with_terms'           => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:2|confirmed', // Add the 'confirmed' rule
        ], [
            'required'  => 'The :attribute field is required.',
            'unique'    => 'The :attribute has already been taken.',
            'confirmed' => 'The :attribute confirmation does not match.',
            'min'       => 'The :attribute must be at least :min characters.',
        ], [
            'first_name'             => 'First Name',
            'last_name'              => 'Last Name',
            'phone_number'           => 'Phone Number',
            'business_name'          => 'Business Name',
            'business_address'       => 'Business Address',
            'business_email'         => 'Business Email',
            'business_phone'         => 'Business Phone',
            'business_return_name'   => 'Business Return Name',
            'business_return_address' => 'Business Return Address',
            'business_return_phone'  => 'Business Return Phone',
            'business_warehouse_address' => 'Business Warehouse Address',
            'business_owner_name'        => 'Business Owner Name',
            'business_register_num'      => 'Business Registration Number',
            'agree_with_terms'           => 'Agree with Terms',
            'email'                      => 'Email',
            'password'                   => 'Password',
        ]);

        $ipaddress = request()->ip();
        if (isset($errorMessage)) {
            return response()->json(['error' => $errorMessage], 400);
        } else {

            $user = User::create([
                'first_name'                => $request->first_name,
                'last_name'                 => $request->last_name,
                'name'                      => $request->first_name . '' . $request->last_name,
                'email'                     => $request->email,
                'role_id'                   => 3, // for seller
                'status'                    => 1,
                'ip'                        => $ipaddress,
                'show_password'             => $request->password,
                'phone_number'              => $request->phone_number,
                'business_owner_name'       => $request->business_owner_name,
                'business_name'             => $request->business_name,
                'business_name_slug'        => Str::slug($request->business_name), // Add this line for the slug
                'business_register_num'     => $request->business_register_num,
                'business_address'          => $request->business_address,
                'business_warehouse_address' => $request->business_warehouse_address,
                'business_email'            => $request->business_email,
                'business_phone'            => $request->business_phone,
                'business_return_name'      => $request->business_return_name,
                'business_return_address'   => $request->business_return_address,
                'business_return_phone'     => $request->business_return_phone,
                'password'                  => bcrypt($request->password),
            ]);
        }
    }

    public function me()
    {
        //return response()->json($this->guard('api')->user());
        $user = $this->guard('api')->user();

        $response = [
            'message' => 'User successfully retrieved',
        ];

        if (!empty($user)) {
            // Fetch all columns dynamically from the user object
            $userColumns = $user->getAttributes();

            // Loop through each column and add it to the response
            foreach ($userColumns as $column => $value) {
                $response[$column] = $value;
            }

            // Add 'profileLogo' and 'businessLogo' columns specifically
            $response['profileLogo'] = url(!empty($user->image) ? $user->image : '/profileLogo');
            $response['businessLogo'] = url(!empty($user->business_logo) ? $user->business_logo : '/businessLogo');
        }

        return response()->json($response);
    }
    public function logout()
    {
        auth()->guard('api')->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
    public function refresh()
    {
        return $this->respondWithToken($this->guard('api')->refresh());
    }
    protected function respondWithToken($token)
    {
        $user = auth('api')->user();
        return response()->json([
            'access_token' => $token,
            'role_id'      => $user->role_id,
            'email'        => $user->email,
            'token_type'   => 'bearer',
            'expires_in'   => auth('api')->factory()->getTTL() * 60
        ]);
    }
    public function guard()
    {
        return Auth::guard();
    }
    public function profile(Request $request)
    {
        $user = auth('api')->user();
        $this->validate($request, [
            'name' => 'required',
            'email' => "required|unique:users,email, $user->id",
            'password' => 'sometimes|nullable|min:8'
        ]);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);
        if ($request->password) {
            $user->update([
                'password' => bcrypt($request->password),
            ]);
        }
        return response()->json([
            'success' => true,
            'user' => $user
        ], 200);
    }

 

    public function updateBusinessprofile(Request $request)
    {

        $user = auth('api')->user();

        $authId = $user->id;
        $validator = Validator::make($request->all(), [
            'business_owner_name'       => 'required',
            'business_name'             => 'required',
            'business_register_num'     => 'required',
            'business_address'          => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'id'                => $authId,
            'business_owner_name'       => $request->business_owner_name,
            'business_name'             => $request->business_name,
            'business_register_num'     => $request->business_register_num,
            'business_address'          => $request->business_address,

        );

        $response = [
            'message' => 'Business Information successfully update'
        ];
        return response()->json($response);
    }


    public function updateLogo(Request $request)
    {
        $user       = auth('api')->user();
        $authId     = $user->id;

        if (!empty($request->file('file'))) {
            $documents = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($documents->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $documents->move(public_path('/backend/files/'), $upload_url);
            $data['image'] = $upload_url;
        }
        //business logo 

        if (!empty($request->file('business_logo'))) {
            $documents = $request->file('business_logo');
            $fileName = Str::random(20);
            $ext = strtolower($documents->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $documents->move(public_path('/backend/files/'), $upload_url);
            $data['business_logo'] = $upload_url;
        }




        //dd($data);
        DB::table('users')->where('id', $authId)->update($data);
        $response = [
            'profileLogo'  => !empty($user) ? url($user->image) : "",
            'businessLogo' => !empty($user) ? url($user->business_logo) : "",
            'message' => 'Logo successfully update'
        ];
        return response()->json($response);
    }


    public function updateprofile(Request $request)
    {
        $user       = auth('api')->user();
        $authId     = $user->id;
        $validator  = Validator::make($request->all(), [
            'email'        => 'required',
            'email'        => "required|unique:users,email, $user->id",

        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        // name: '',
        // email: '',
        // gender: '',
        // birthdate: '',
        
        // address_1: '',
        // country_1: '',
        // landmark_1: '',
        // city_1: '',
        // phone_1: '',

        // address_2: '',
        // country_2: '',
        // city_2: '',
        // landmark_2: '',
        // phone_2: '',


        $data = array(
            'id'                => $authId,
            'name'              => !empty($request->name) ? $request->name : "",
            'email'             => !empty($request->email) ? $request->email : "",

            'gender'      => !empty($request->gender) ? $request->gender : "",
            'birthdate'      => !empty($request->birthdate) ? $request->birthdate : "",


            // 'address'           => !empty($request->address) ? $request->address : "",

            'address_1'         => !empty($request->address_1) ? $request->address_1 : "",
            'address_2'         => !empty($request->address_2) ? $request->address_2 : "",
            'country_1'         => !empty($request->country_1) ? $request->country_1 : "",
            'country_2'         => !empty($request->country_2) ? $request->country_2 : "",
            'city_1'            => !empty($request->city_1) ? $request->city_1 : "",
            'city_2'            => !empty($request->city_2) ? $request->city_2 : "",
            'landmark_1'        => !empty($request->landmark_1) ? $request->landmark_1 : "",
            'landmark_2'        => !empty($request->landmark_2) ? $request->landmark_2 : "",
            'phone_1'           => !empty($request->phone_1) ? $request->phone_1 : "",
            'phone_2'           => !empty($request->phone_2) ? $request->phone_2 : "",
            


            'website'           => !empty($request->website) ? $request->website : "",
            'github'            => !empty($request->github) ? $request->github : "",
            'twitter'           => !empty($request->twitter) ? $request->twitter : "",
            'instagram'         => !empty($request->instagram) ? $request->instagram : "",
            'facebook'          => !empty($request->facebook) ? $request->facebook : "",
            'first_name'        => !empty($request->first_name) ? $request->first_name : "",
            'last_name'         => !empty($request->last_name) ? $request->last_name : "",
            'business_email'    => !empty($request->business_email) ? $request->business_email : "",
            'business_phone'    => !empty($request->business_phone) ? $request->business_phone : "",
            'business_warehouse_address'      => !empty($request->business_warehouse_address) ? $request->business_warehouse_address : "",

            'business_return_name'    => !empty($request->business_return_name) ? $request->business_return_name : "",
            'business_return_email'   => !empty($request->business_return_email) ? $request->business_return_email : "",
            'business_return_address' => !empty($request->business_return_address) ? $request->business_return_address : "",
            'business_return_phone'   => !empty($request->business_return_phone) ? $request->business_return_phone : "",

        );

        if (!empty($request->file('file'))) {
            $documents = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($documents->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $documents->move(public_path('/backend/files/'), $upload_url);
            $data['image'] = $upload_url;
        }
        // dd($data);
        // return false;


        DB::table('users')->where('id', $authId)->update($data);
        $response = [
            'imagelink' => !empty($user) ? url($user->image) : "",
            'message' => 'User successfully update'
        ];
        return response()->json($response);
    }
    public function showProfileData(Request $request)
    {
        $data = auth('api')->user();

        $addressData = [
            'address_1' => $data->address_1 ?? '',
            'country_1' => $data->country_1 ?? '',
            'city_1' => $data->city_1 ?? '',
            'landmark_1' => $data->landmark_1 ?? '',
            'phone_1' => $data->phone_1 ?? '',
            'country_2' => $data->country_2 ?? '',
            'city_2' => $data->city_2 ?? '',
            'landmark_2' => $data->landmark_2 ?? '',
            'phone_2' => $data->phone_2 ?? '',
            'address_2' => $data->address_2 ?? '',
        ];
        $formattedAddresses = [];

        // Address 1
        if (!empty($addressData['address_1']) || !empty($addressData['country_1']) || !empty($addressData['city_1']) || !empty($addressData['landmark_1']) || !empty($addressData['phone_1'])) {
            $addressParts = array_filter([$addressData['address_1'], $addressData['landmark_1'], $addressData['city_1'], $addressData['country_1'], $addressData['phone_1']]);
            $formattedAddresses[] = implode(', ', $addressParts);
        }

        // Address 2
        if (!empty($addressData['address_2']) || !empty($addressData['country_2']) || !empty($addressData['city_2']) || !empty($addressData['landmark_2']) || !empty($addressData['phone_2'])) {
            $addressParts = array_filter([$addressData['address_2'], $addressData['landmark_2'], $addressData['city_2'], $addressData['country_2'], $addressData['phone_2']]);
            $formattedAddresses[] = implode(', ', $addressParts);
        }

        // dd($formattedAddresses);
        // return false;

        return response()->json([
            'data' => $data,
            'dataImg' => !empty($data->image) ? url($data->image) : "",
            'address' => $formattedAddresses,
            'message' => 'User Profile Data'
        ]);
    }
    public function changesPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:1|confirmed',
            'password_confirmation' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $id = auth('api')->user();
        $user = User::find($id->id);
        //dd($currentuser->username);
        $user->password = Hash::make($request->password);
        $user->show_password = $request->password;
        $user->save();
        $response = "Password successfully changed!";
        return response()->json($response);
    }
}
