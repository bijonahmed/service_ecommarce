<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class topheaderbanner extends Model
{
    
    use HasFactory;
    public $table = "topheaderbanner";

    protected $fillable = [
        'image',
        'status',
    ];
}
