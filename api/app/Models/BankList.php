<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankList extends Model
{
    use HasFactory;    
    public $table = 'bank_info';
    protected $fillable = ['name', 'status'];
}
