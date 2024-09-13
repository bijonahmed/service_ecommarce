<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productwarrantyhistory extends Model
{
    use HasFactory;
    public $table ='product_warranty_history';
    protected $fillable =[
        'warranty_id',
        'product_id',
        'order_id',
    ];
    

}
