<?php

namespace App\Http\Controllers\Payment;;

use Illuminate\Http\Request;
use Stripe\Stripe;
use App\Http\Controllers\Controller;
use App\Models\Deposit;
use Stripe\PaymentIntent;
use Stripe\Checkout\Session;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class PaymentController extends Controller


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

 

    public function createPaymentIntent(Request $request)
    {
        try {
            // ✅ Set Stripe API Key
            Stripe::setApiKey(env('STRIPE_SECRET'));

            // ✅ Validate the request
            $validator = Validator::make($request->all(), [
                'amount' => 'required|numeric',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            // ✅ Retrieve values from the request
            $amountVal = $request->input('amount');
            $amount = intval($amountVal * 100); // Convert USD to cents
            $currency = 'USD';
            $cusEmail = $this->email; // FIX: Ensure email comes from the request
            // ✅ Create Stripe Checkout Session
            $frontendSuccessUrl = $request->input('success_url') ?? env('FRONTEND_URL') . "/success";
            $frontendCancelUrl  = $request->input('cancel_url') ?? env('FRONTEND_URL') . "/cancel";

            $checkoutSession = Session::create([
                'success_url'    => $frontendSuccessUrl,
                'cancel_url'     => $frontendCancelUrl,
                'customer_email' => $cusEmail,
                'payment_method_types' => ['card', 'link', 'alipay'],
                'line_items'     => [[
                    'price_data' => [
                        'product_data' => [
                            'name' => $request->input('product') ?? 'Deposit Payment',
                        ],
                        'unit_amount' => $amount,
                        'currency'    => $currency,
                    ],
                    'quantity' => 1,
                ]],
                'mode'                => 'payment',
                'allow_promotion_codes' => true,

            ]);
            $amountVal     = $request->amount;
            $uniqueID      = 'D.' . $this->generateUnique4DigitNumber();
            // ✅ Insert deposit into the database
            $logData = Deposit::create([
                'depositID'      => $uniqueID,
                'email'          => $cusEmail,
                'product'        => $request->input('product') ?? 'Deposit Payment',
                'deposit_amount' => $amountVal,
                'currency'       => $currency,
                'user_id'        => $this->userid,
                'payment_method' => 'Stripe',
                'payment_status' => 'pending',
                'checkout_url'   => $checkoutSession->url,
            ]);
            // Save to 'public/deposits/{uniqueID}.log'
            $logPath = public_path("deposits/{$uniqueID}.log");
            $logData = json_encode([
                'depositID'      => $uniqueID,
                'email'          => $cusEmail,
                'product'        => $request->input('product') ?? 'Deposit Payment',
                'deposit_amount' => $amountVal,
                'currency'       => $currency,
                'payment_method' => 'Strip',
                'user_id'        => $this->userid,
                'payment_status' => 'pending',
                'checkout_url'   => $checkoutSession->url,
            ], JSON_PRETTY_PRINT);

            // ✅ Ensure the 'deposits' folder exists inside 'public/'
            if (!file_exists(public_path('deposits'))) {
                mkdir(public_path('deposits'), 0777, true); // Create folder with full permissions
            }
            // ✅ Write log file
            if (file_put_contents($logPath, $logData) === false) {
                \Log::error("Failed to write log file: {$logPath}");
            }

            return response()->json([
                'checkout_url' => $checkoutSession->url
            ]);
        } catch (\Exception $e) {
            \Log::error('Error in createPaymentIntent:', ['message' => $e->getMessage()]);
            return response()->json(['error' => 'Something went wrong! ' . $e->getMessage()], 500);
        }
    }

    function generateUnique4DigitNumber($existingNumbers = [])
    {
        do {
            $uniqueNumber = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
        } while (in_array($uniqueNumber, $existingNumbers));

        return md5($uniqueNumber);
    }
}
