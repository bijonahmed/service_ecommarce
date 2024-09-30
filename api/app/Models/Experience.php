<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;
    public $table = "experience";
    protected $fillable = ['user_id', 'year','role', 'company', 'description'];
}
