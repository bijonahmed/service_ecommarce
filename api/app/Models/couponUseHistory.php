<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class couponUseHistory extends Model
{
    use HasFactory;
    public $table = "couponusehistorys";
    protected $fillable = [
        'user_id',
        'coupon_id',
    ];
}
