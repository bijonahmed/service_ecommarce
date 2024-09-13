<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    use HasFactory;
    public $table = "salary";
  protected $fillable = [
    'name',
    'number_of_referell',
    'number_of_sales',
    'number_of_blogs',
    'salary_amount',
  ];
 
}
