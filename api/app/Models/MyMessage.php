<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class MyMessage extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "messages";
    protected $fillable = [
        'user_id',
        'to_id',
        'sender_id',
        'message',
        'files',
    ];

    
}