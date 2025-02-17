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

            // ✅ Check if an existing deposit exists
            $existingDeposit = Deposit::where('email', $cusEmail)
                ->where('deposit_amount', $amount)
                ->where('currency', $currency)
                ->where('payment_status', 'pending') // FIX: Check only pending payments
                ->latest()
                ->first();

            if ($existingDeposit) {
                return response()->json([
                    'payment_id'   => $existingDeposit->payment_id,
                    'checkout_url' => $existingDeposit->checkout_url
                ]);
            }

            // ✅ Create Stripe Checkout Session
            $frontendSuccessUrl = $request->input('success_url') ?? env('FRONTEND_URL') . "/success";
            $frontendCancelUrl  = $request->input('cancel_url') ?? env('FRONTEND_URL') . "/cancel";

            $checkoutSession = Session::create([
                'success_url'    => $frontendSuccessUrl,
                'cancel_url'     => $frontendCancelUrl,
                'customer_email' => $cusEmail,
                'payment_method_types' => ['card','link'],
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

            // ✅ Insert deposit into the database
            $deposit = Deposit::create([
                'email'          => $cusEmail,
                'product'        => $request->input('product') ?? 'Deposit Payment',
                'deposit_amount' => $amount,
                'currency'       => $currency,
                'payment_status' => 'pending',
                'payment_id'     => "",
                'checkout_url'   => $checkoutSession->url,
            ]);

            return response()->json([
                'checkout_url' => $checkoutSession->url
            ]);
        } catch (\Exception $e) {
            \Log::error('Error in createPaymentIntent:', ['message' => $e->getMessage()]);
            return response()->json(['error' => 'Something went wrong! ' . $e->getMessage()], 500);
        }
    }
    // public function createPaymentIntent(Request $request)
    // {
    //     try {
    //         // Set the Stripe API key
    //         Stripe::setApiKey(env('STRIPE_SECRET'));

    //         // Retrieve the amount and currency from the request
    //         $amountVal = $request->json('amount');
    //         $amount    = intval($amountVal * 100); // Convert USD to cents
    //         $currency  = 'USD'; // You can change this to the required currency

    //         // Validate the amount
    //         $validator = Validator::make($request->all(), [
    //             'amount' => 'required|numeric',
    //         ]);

    //         if ($validator->fails()) {
    //             return response()->json(['errors' => $validator->errors()], 422);
    //         }

    //         // Define the customer email (if provided)
    //         $cusEmail = $this->email; // Get email from request

    //         // **Create Stripe Checkout Session**
    //         $frontendSuccessUrl = $request->json('success_url') ?? env('FRONTEND_URL') . "/success";
    //         $frontendCancelUrl  = $request->json('cancel_url') ?? env('FRONTEND_URL') . "/cancel";

    //         // Create a Stripe Checkout Session
    //         $checkoutSession = Session::create([
    //             'success_url'         => $frontendSuccessUrl,
    //             'cancel_url'          => $frontendCancelUrl,
    //             'customer_email'     => $cusEmail,
    //             'payment_method_types' => ['card', 'link'], // Add other payment methods as needed
    //             'line_items'         => [[
    //                 'price_data' => [
    //                     'product_data' => [
    //                         'name' => $request->json('product') ?? 'Deposit Payment',
    //                     ],
    //                     'unit_amount' => $amount, // Stripe requires amount in cents
    //                     'currency'    => $currency,
    //                 ],
    //                 'quantity' => 1,
    //             ]],
    //             'mode'               => 'payment',
    //             'allow_promotion_codes' => true,
    //         ]);




    //         // Insert deposit record into the database
    //         Deposit::create([
    //             'email'           => $cusEmail,
    //             'product'         => $request->json('product') ?? 'Deposit Payment',
    //             'deposit_amount'  => $amountVal * 100, // Convert to cents
    //             'currency'        => $currency,
    //             'payment_status'  => 'pending', // Initially set to 'pending'
    //             'client_secret'   => $clientSecret, // Store the client_secret
    //             'checkout_url'    => $checkoutSession->url, // Store the checkout URL
    //         ]);

    //         // Return the checkout URL and client secret in the response
    //         return response()->json([
    //             'checkout_url'    => $checkoutSession->url,

    //         ]);
    //     } catch (\Exception $e) {
    //         return response()->json(['error' => $e->getMessage()], 500);
    //     }
    // }
}
