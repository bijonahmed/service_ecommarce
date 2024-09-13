<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class coupons extends Model
{
    use HasFactory;
    protected $fillable = [
            'name',
            'promocode',
            'code_type',
            'min_shopping',
            'd_percent',
            'd_fvalue',
            'status',
    ];
}
