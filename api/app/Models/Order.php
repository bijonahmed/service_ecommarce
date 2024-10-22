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
        'sub_total',
        'service_fee',
        'lev_1',
        'lev_2',
        'lev_3',
        'lev_4',
        'lev_5',
        'tips',
        'delivery_day',
        'delivery_day_convert_date',
        'selected_packages',
        'selected_price',
        'cancel_resion',
        'seller_review_sts',
        'company_commission',
        'order_status',
    ];
}
