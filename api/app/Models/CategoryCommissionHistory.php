<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class CategoryCommissionHistory extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "category_commission_history";
  protected $fillable = [
    'customer_id',
    'seller_id',
    'product_id',
    'product_qty',
    'product_price',
    'category_id',
    'category_percetage',
    'admin_get_amount',
    'check_status',
  ];

  public function attribute()
  {
      return $this->belongsTo(Attribute::class);
  }
   
 
}
