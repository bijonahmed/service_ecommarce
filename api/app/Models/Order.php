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
        'total',
        'subtotal',
        'order_status',
        'billing_name',
        'billing_email',
        'billing_phone_number',
        'billing_address',
        'billing_country', 
        'billing_city',
        'shipper_name',
        'shipper_email',
        'shipper_phone_number',
        'shipper_address',
        'shipper_country',
        'shipper_city',
        'payment_type',
        'packed_status',
        'dispatched_status',
        'outForDelivery_status',
        'delivered_status',
        'cancel_status',
        'return_status',
    ];
}
