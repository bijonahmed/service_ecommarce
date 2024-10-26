<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GigWishList extends Model
{
    use HasFactory;    
    public $table = 'gigWish_list';
    protected $fillable = ['user_id', 'gig_id',                                                                                  ];
}
