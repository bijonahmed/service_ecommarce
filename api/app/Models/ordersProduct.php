<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ordersProduct extends Model
{
    use HasFactory;
    public $table = 'orders_product';
    protected $fillable = [
        "order_id",
        "product_id",
        "price",
        "discount",
        "discount_status",
        "vat",
        "vat_status",
        "last_price",
        "qty",
        "color",
        "size",
    ];
}
