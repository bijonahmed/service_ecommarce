<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class companyProfile extends Model
{
    use HasFactory;
    public $table = 'companyprofilesettings';
    protected $fillable = [
        'company_name',
        'logo',
        'address',
        'subscription_charge',
        'setup_charge',
        'transaction_fee',
        'other_charges',
        'phone',
        'email',
        'found_year',
        'industry',
        'about',
    ];
}
