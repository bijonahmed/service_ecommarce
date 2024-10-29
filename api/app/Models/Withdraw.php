<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\AttributeValues;
use AuthorizesRequests;
use DB;

class Withdraw extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "withdraw";
  
  protected $fillable = [
    'withdrawID',
    'depscription',
    'transection_fee',
    'selected_type',
    'method_id',
    'withdrawal_amount',
    'wallet_address',
    'withdrawal_pin',
    'crypto_wallet_type',
    'wallet_address',
    'remarks',
    'user_id',
    'type',
    'email',
    'approved_by',
    'status',
    'account_name',
    'account_num',
    'ibn_no',
    'bank_id',
    'branch_id',
  ];
 
}
