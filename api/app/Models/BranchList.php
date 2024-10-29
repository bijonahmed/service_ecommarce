<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BranchList extends Model
{
    use HasFactory;    
    public $table = 'branch';
    protected $fillable = ['bank_id','name', 'status'];
}
