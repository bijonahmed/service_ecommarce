<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuyerReview extends Model
{
    use HasFactory;    
    public $table = 'buyer_review';
    protected $fillable = ['seller_id', 'buyer_id', 'orderId', 'rating','review'];
}
