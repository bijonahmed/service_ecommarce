<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class blogCategory extends Model
{
    use HasFactory;    
    public $table = 'blogcategorys';
    protected $fillable = ['name', 'slug', 'description','user_id','status'];
}
