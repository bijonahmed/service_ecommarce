<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaymentCard extends Model
{
    use HasFactory;
    public $table = 'creditcards';
    protected $fillable = [
        'user_id', 
        'card_number', 
        'card_holder', 
        'card_type', 
        'expiry_date', 
        'cvv', 
        'billing_address', 
        'issuing_bank'
    ];
}
