<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderPizzaIngredient extends Model
{
    use HasFactory;
    protected $fillable = ['order_id', 'ingredient_id'];

    public function ingredients(){
        return $this->hasMany(Ingredient::class);
    }
}
