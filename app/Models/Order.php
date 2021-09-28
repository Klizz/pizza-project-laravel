<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{ 
    use HasFactory;
    protected $fillable = ['pizza_id', 'customer', 'total_price'];
    
    public function pizza(){
        return $this->belongsTo(Pizza::class);
    }

    public function ingredients(){
        return $this->belongsTo(OrderPizzaIngredient::class);
    }
}
