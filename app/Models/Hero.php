<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hero extends Model
{
    use HasFactory;

    use SoftDeletes;

    protected $fillable = [
        'title',
        'subtitle',
        'image_url',
        'is_active',
        'sort_order',
    ];
}
