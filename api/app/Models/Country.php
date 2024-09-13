<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class country extends Model
{
    public $table = "country";
    protected $fillable = [
        'category_name',
        'status',
        'created_at',
        'updated_at',
    ];
}
