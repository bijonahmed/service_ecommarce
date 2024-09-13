<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Packages extends Model
{
    use HasFactory;
    public $table = "packages";
  protected $fillable = [
    'name',
    'number_of_referell',
    'number_of_sales',
    'number_of_blogs',
    'salary_amount',
  ];
 
}
