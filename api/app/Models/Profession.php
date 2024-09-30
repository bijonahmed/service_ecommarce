<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profession extends Model
{
    public $table = "professions";
    protected $fillable = [
        'name',
        'profession_name',
        'status',
    ];
}
