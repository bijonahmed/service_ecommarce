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

class WithdrawMethod extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "withdrawal_method";
  
  protected $fillable = [
    'name',
    'user_id',
    'type',
    'email',
    'account_name',
    'countryName',
    'account_num',
    'wallet_address',
    'bank_name',
    'ibn_no',
    'bank_id',
    'branch_id',
    'swift_bic'
    
  ];
 
}
