<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogModel extends Model
{
    use HasFactory;
    public $table = "blog_posts";
    protected $fillable = ['title', 'slug', 'category', 'content', 'image', 'user_id'];
}
