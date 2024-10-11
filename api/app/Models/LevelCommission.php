<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LevelCommission extends Model
{
    use HasFactory;    
    public $table = 'level_commission';
    protected $fillable = ['buyerId', 'name', 'level','amount','commission_recev_frm','orderId','commission_recv_frm_name'];
}
