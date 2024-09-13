<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_warranty extends Model
{
    use HasFactory;
    public $table = 'product_warranty';
    protected $fillable = [
        'product_id',
        'warranty_name',
        'days',
        'price',
    ];
}
