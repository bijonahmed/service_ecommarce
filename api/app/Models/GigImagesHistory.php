<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GigImagesHistory extends Model
{
    use HasFactory;
    public $table = "gig_images_history";
    protected $fillable = [
        'gig_id',
        'image_path',
    ];
}
