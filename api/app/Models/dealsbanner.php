<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dealsbanner extends Model
{
    use HasFactory;
    protected $fillable = [
        'imageOne',
        'imageTwo',
    ];

}
