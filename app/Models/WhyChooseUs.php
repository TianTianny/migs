<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WhyChooseUs extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'number',
        'title',
        'description',
        'image_path',
        'position',
    ];
}
