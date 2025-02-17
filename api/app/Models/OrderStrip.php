<?php

namespace App\Models;
use Illuminate\Http\Request;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderStrip extends Model
{
    use HasFactory;

    public $table = "orders_strip";
    protected $fillable = [
        'total_amount',
        'payment_id',
        'payment_status',
        // ... other fillable fields ...
    ];

    public function createCheckoutSession(Request $request)
    {
        // ...

        $order = new Order();
        $order->total_amount = $request->input('total_amount'); // Get the total amount from the request
        // ... other order data ...
        $order->save(); // Save the order to the database

        // ...
    }

    public function checkoutSuccess(Request $request)
    {
        // ...

        $order = Order::find($orderId); // Retrieve the order

        if ($order) {
            $order->payment_id = $paymentIntentId;
            $order->payment_status = 'paid';
            $order->save();  // Update the order

            // ...
        }

        // ...
    }
}
