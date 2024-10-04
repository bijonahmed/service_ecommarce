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
    'user_id',
    'name',
    'account_number',
  ];
 
}
