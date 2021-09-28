<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;
    // protected $table = 'ingredient';
    protected $guarded = ['id'];
    // protected $fillable = ['name', 'price'];
}
