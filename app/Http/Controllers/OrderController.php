<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\OrderPizzaIngredient;
use App\Models\Pizza;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index() {
        $ingredients = OrderPizzaIngredient::all();
        $pizzas = Pizza::all();
        $orders = Order::all();

        return response()->json([
            'pizzas' => $pizzas,
            'orders' => $orders,
            'ingredients' => $ingredients,
        ]);
    }
    public function create() { 
        return view('orders.create');
    }
    public function all() { 
        return view('orders.all');
    }
}