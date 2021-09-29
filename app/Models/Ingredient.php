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
    // public function order_pizza_ingredients(){
    //     return $this->hasMany(OrderPizzaIngredient::class);
    // }
    
    public function orders(){
        return $this-> belongsToMany(Order::class, 'order_pizza_ingredients', 'ingredient_id', 'order_id');
    }
}
