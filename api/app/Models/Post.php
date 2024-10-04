<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Post extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "posts";
    protected $fillable = [
        'name',
        'slug',
        'description_short',
        'description_full',
        'question',
        'answer',
        'categoryId',
        'entry_by',
        'thumnail_img',
        'status'
    ];

     
}
