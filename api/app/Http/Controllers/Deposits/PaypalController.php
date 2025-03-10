<?php

namespace App\Http\Controllers\Deposits;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Deposit;
use App\Models\User;

use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Session;
use DB;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PaypalController extends Controller
{
    protected $userid;
    protected $email;
    protected $provider;
    protected $return_website;
    
    public function __construct(PayPalClient $provider)
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        if (!empty($id)) {
            $user = User::find($id->id);
            $this->userid = $user->id;
            $this->email = $user->email;
            $this->provider = $provider;
            $this->return_website =  env('FRONTEND_URL', 'http://localhost:3000');;
        }
    }
    public function createPaymentPaypal(Request $request)
    {
         // dd($request->all());
        
        $validator = Validator::make($request->all(), [
            'amount'           => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();
      //  dd($paypalToken);
        $response = $provider->createOrder([
             "intent" => "CAPTURE",
            "application_context" => [
                //  "return_url" => route('paypal.payment.success'),
                // "cancel_url" => route('paypal.payment/cancel'),
                "return_url" => $this->return_website . '/paypalsuccess', // Frontend success URL
                "cancel_url" => $this->return_website . '/paypalcancel', // Frontend cancel URL

            ],

            "purchase_units" => [
                0 => [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => $request->amount
                    ]
                ]
            ],
            
        ]);

        if (isset($response['id']) && $response['id'] != null) {
            foreach ($response['links'] as $links) {
                if ($links['rel'] == 'approve') {
                    // Return the PayPal checkout URL in a JSON response
                    return response()->json([
                        'checkout_url' => $links['href']
                    ]);
                }
            }

            return response()->json([
                'error' => 'Something went wrong checkouturl.',
            ]);
            // return redirect()
            //     ->route('cancel.payment')
            //     ->with('error', 'Something went wrong.');
        } else {

            return response()->json([
                'error' => $response['message'] ?? 'Something went wrong.....',
            ]);

            // return redirect()
            //     ->route('create.payment')
            //     ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    public function paymentCancel()

    {
        return response()->json([
            'status' => 'error',
            'message' => $response['message'] ?? 'You have canceled the transaction.',
            'redirect_url' => $this->return_website . '/paypalcancel',
        ]);

        // return redirect()
        //     ->route('paypal')
        //     ->with('error', $response['message'] ?? 'You have canceled the transaction.');
    }


    public function paymentSuccess(Request $request)
    {

        // Capture the token and payer ID from the query string
        $token = $request->query('token');
        $payerID = $request->query('PayerID');

        if (!$token || !$payerID) {
            return response()->json([
                'status' => 'error',
                'message' => 'Missing token or payer ID',
                'redirect_url' => $this->return_website . '/paypalcancel',
            ]);
        }

        // Proceed with the payment capture process
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();
        $response = $provider->capturePaymentOrder($token);

        if (isset($response['status']) && $response['status'] == 'COMPLETED') {
            // Return JSON with success status, message, and the token and payer ID
            return response()->json([
                'status'       => 'success',
                'message'      => 'Transaction complete.',
                'redirect_url' => $this->return_website . '/paypalsuccess?token=' . $token . '&PayerID=' . $payerID,
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => $response['message'] ?? 'Something went wrong.',
                'redirect_url' => $this->return_website . '/paypalcancel',
            ]);
        }
    }



    function generateUnique4DigitNumber($existingNumbers = [])
    {
        do {
            $uniqueNumber = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
        } while (in_array($uniqueNumber, $existingNumbers));

        return $uniqueNumber;
    }
}
