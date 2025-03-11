<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Helper;
use Validator;
use App\Models\Gig;
use App\Models\Post;
use App\Models\User;
use function Ramsey\Uuid\v1;
use Illuminate\Http\Request;
use App\Mail\ForgetPasswordEmail;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Support\Str;


class ForgotPasswordController extends Controller
{
    protected $frontend_url;
    protected $userid;


    public function forgetPassword(Request $request)
    {

        //dd($request->all());
        $request->validate([
            'email'          => 'required|email',
            'current_domain' => 'required',
        ]);
        $email          = $request->email;
        $current_domain = $request->current_domain;

        $chkUser = User::where('email', $email)->where('role_id', 2)->first();

        if (empty($chkUser)) {
            return response()->json([
                'errors' => [
                    'email' => ['Invalid Email.']
                ]
            ], 422);
        }
        // Generate a secure token
        $token = Str::random(60);

        // Store token in password_resets table (optional but recommended)
        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $chkUser->email],
            ['token' => $token, 'created_at' => Carbon::now()]
        );

        $customLink = "$current_domain/reset-password?token=$token&email=" . urlencode($chkUser->email);
        Mail::to($chkUser->email)->queue(new ForgetPasswordEmail($customLink));

        return response()->json(['success' => 'Successfully Send.'], 200);
    }


    public function reset(Request $request)
    {
        // Validate request
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'token' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        // Get token data from database
        $tokenData = DB::table('password_reset_tokens')
            ->where('email', $request->email)
            ->first();

        // Check if token exists and is valid
        if ($request->token != $tokenData->token) {
            return response()->json(['errors' => ['error' => 'Invalid or expired token.']], 422);
        }

        // Find user by email
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['errors' => ['error' => 'User not found.']], 404);
        }

        // Update user's password
        $user->password = Hash::make($request->password);
        $user->show_password = $request->password;
        $user->save();

        // Delete token after reset
        DB::table('password_reset_tokens')->where('email', $request->email)->delete();

        return response()->json(['message' => 'Password reset successful.'], 200);
    }

    // public function reset(Request $request)
    // {
    //     // Validate request
    //     $request->validate([
    //         'email' => 'required|email|exists:users,email',
    //         'token' => 'required',
    //         'password' => 'required|min:6|confirmed',
    //     ]);

    //     //dd($request->all());
    //     // Check if the token is valid in the password_resets table
    //     $tokenData = DB::table('password_reset_tokens')
    //         ->where('email', $request->email)
    //         ->where('token', $request->token)
    //         ->first();

    //     if (!empty($tokenData)) {
    //         $user = User::where('email', $request->email)->first();
    //         //dd($user);
    //         //dd($currentuser->username);
    //         $user->password = Hash::make($request->password);
    //         $user->show_password = $request->password;
    //         $user->save();
    //         // Delete token after reset to prevent reuse
    //         DB::table('password_reset_tokens')->where('email', $request->email)->delete();
    //         return response()->json(['message' => 'Password reset successful.'], 200);
    //     } else {
    //         return response()->json(['errors' => ['error' => 'Invalid request.']], 422);
    //     }

    // }
}
