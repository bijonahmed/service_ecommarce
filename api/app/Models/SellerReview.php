<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerReview extends Model
{
    use HasFactory;    
    public $table = 'seller_review';
    protected $fillable = ['seller_id', 'buyer_id', 'orderId', 'rating','review'];
}
