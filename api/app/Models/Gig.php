<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gig extends Model
{
    use HasFactory;
    public $table = "gig";
    protected $fillable = [
        'user_id',
        'gig_slug',
        'category_id',
        'subcategory_id',
        'insubcategory_Id',
        'title',
        'slug',
        'category',
        'content',
        'image',
        'order_rules',
        'name',
        'thumbnail_images',
        'types',
        'gig_description',
        'price',
        'delivery_day',
        'basic_price',
        'basic_description',
        'basic_delivery_days',
        'source_file',
        'standard_price',
        'stn_descrition',
        'stn_delivery_days',
        'language_name',
        'reason_descriptoin',
        'language_type',
        'stn_source_file',
        'premium_price',
        'premium_description',
        'premium_delivery_days',
        'premium_source_file',
        'status',
    ];
}
