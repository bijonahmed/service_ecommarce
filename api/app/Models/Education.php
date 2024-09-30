<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;
    public $table = "education";
    protected $fillable = ['user_id', 'year', 'subject', 'college', 'description'];
}
