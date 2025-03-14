<?php

Route::get('/clear-cache', function() {
    \Artisan::call('config:clear');
    \Artisan::call('cache:clear');
    \Artisan::call('config:cache');
    return "Cache cleared!";
});

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Stripe\CheckOutController;
use App\Http\Controllers\Deposits\PaypalController;
use App\Http\Controllers\UnauthenticatedController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('active-account', [UnauthenticatedController::class, 'activeAccount'])->name('activeAccount');
//For Stripe
Route::post('/create-checkout-session', [CheckOutController::class, 'createCheckoutSession']);
Route::get('/checkout/success', [CheckOutController::class, 'checkoutSuccess'])->name('checkout.success'); // Success URL
Route::get('/checkout/cancel', [CheckOutController::class, 'checkoutCancel'])->name('checkout.cancel'); // Cancel URL
Route::post('/stripe_webhook', [CheckOutController::class, 'handleStripeWebhook']);
//For Paypal 
Route::get('paypal/payment/success', [PayPalController::class, 'paymentSuccess'])->name('paypal.payment.success');
Route::get('paypal/payment/cancel', [PayPalController::class, 'paymentCancel'])->name('paypal.payment/cancel');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/pay', function () {
    return view('checkout');
});
