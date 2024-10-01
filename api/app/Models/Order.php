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
        'gig_id',
        'fullname',
        'email_address',
        'billing_address',
        'card_number',
        'expiration_date',
        'cvc',
        'selected_packages',
        'selected_price', 
        'order_status',
    ];
}
