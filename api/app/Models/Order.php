<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public $table = "orders";
    protected $fillable = [
        'orderId',
        'buyerId',
        'sellerId',
        'gig_id',
        'fullname',
        'email_address',
        'delivery_day',
        'billing_address',
        'card_number',
        'expiration_date',
        'delivery_day_convert_date',
        'cvc',
        'selected_packages',
        'selected_price', 
        'order_status',
    ];
}
