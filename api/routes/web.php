<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Stripe\CheckOutController;
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

Route::post('/create-checkout-session', [CheckOutController::class, 'createCheckoutSession']);
Route::get('/checkout/success', [CheckOutController::class, 'checkoutSuccess'])->name('checkout.success'); // Success URL
Route::get('/checkout/cancel', [CheckOutController::class, 'checkoutCancel'])->name('checkout.cancel'); // Cancel URL
Route::post('/stripe_webhook', [CheckOutController::class, 'handleStripeWebhook']);
//Route::post('/stripe_webhook', [UnauthenticatedController::class, 'handleWebhook']);
Route::get('/', function () {
    return view('welcome');
});

Route::get('/pay', function () {
    return view('checkout');
});
