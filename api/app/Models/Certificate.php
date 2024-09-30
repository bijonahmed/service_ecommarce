<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;
    public $table = "certificates";
    protected $fillable = ['user_id', 'year','course_name', 'institute_name', 'description'];
}
