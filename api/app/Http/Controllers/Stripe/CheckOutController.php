<?php

namespace App\Http\Controllers\Stripe;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use DB;
use App\Models\OrderStrip as Order; // Your Order model
use Stripe\Webhook;
use Stripe\Event;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\Log;
use Cart;
use App\Models\User;
use App\Models\Deposit;
use Stripe\Charge;

class CheckOutController extends Controller
{


    public function handleStripeWebhook(Request $request)
    {
        Log::info('handleWebhook method calling.');
        // ✅ Set Stripe API Key
        Stripe::setApiKey(env('STRIPE_SECRET'));

        // ✅ Retrieve the webhook secret from env file
        $endpointSecret = env('STRIPE_WEBHOOK_SECRET');

        // ✅ Verify the event authenticity
        $payload = $request->getContent();
        $sigHeader = $request->header('Stripe-Signature');

        try {
            $event = Webhook::constructEvent($payload, $sigHeader, $endpointSecret);
        } catch (\Exception $e) {
            Log::error('Stripe Webhook Error: ' . $e->getMessage());
            return response()->json(['error' => 'Invalid webhook signature'], 400);
        }

        // ✅ Handle the event type
        switch ($event->type) {
            case 'payment_intent.succeeded':
                $paymentIntent = $event->data->object;
                $this->handlePaymentSuccess($paymentIntent);
                break;

            case 'payment_intent.payment_failed':
                $paymentIntent = $event->data->object;
                $this->handlePaymentFailure($paymentIntent);
                break;

            default:
                Log::info("Unhandled event type: {$event->type}");
        }

        return response()->json(['status' => 'Webhook received']);
    }

    // Handle successful payment
    private function handlePaymentSuccess(PaymentIntent $paymentIntent)
    {
        $paymentId = $paymentIntent->id;
        $amount = $paymentIntent->amount;
        $currency = strtoupper($paymentIntent->currency);
        $status = $paymentIntent->status; // should be "succeeded"
        $receiptUrl = $paymentIntent->charges->data[0]->receipt_url ?? null;
        // Retrieve the latest charge to get billing details
        if (!empty($paymentIntent->latest_charge)) {
            $charge = Charge::retrieve($paymentIntent->latest_charge);
            $receiptUrl = $charge->receipt_url ?? null;
            $email = $charge->billing_details->email ?? null;
        }

        Log::info("✅ Payment Success: ID: $paymentId, Amount: $amount $currency, Status: $status, Email: $email");
        // ✅ Update database
        $deposit =  Deposit::where('email', $email)->orderBy('id', 'desc')->first();
        if ($deposit) {
            $deposit->update([
                'status' => 1,
                'payment_status' => $status,
                'payment_id' => $paymentId
            ]);
        }
    }

    //Handle failed payment
    private function handlePaymentFailure(PaymentIntent $paymentIntent)
    {
        $paymentId = $paymentIntent->id;
        $status = $paymentIntent->status; // should be "failed"
        if (!empty($paymentIntent->latest_charge)) {
            $charge = Charge::retrieve($paymentIntent->latest_charge);
            $receiptUrl = $charge->receipt_url ?? null;
            $email = $charge->billing_details->email ?? null;
        }

        Log::warning("Payment Failed: ID: $paymentId");
        // ✅ Update database
        $deposit =  Deposit::where('email', $email)->orderBy('id', 'desc')->first();
        if ($deposit) {
            $deposit->update([
                'status' => 0,
                'payment_status' => $status,
                'payment_id' => $paymentId
            ]);
        }
    }
}
