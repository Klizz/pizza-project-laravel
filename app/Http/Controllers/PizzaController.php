<?php

namespace App\Http\Controllers;
use App\Models\Order;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    public function __invoke() {
        $order = Order::first();
        $pizza =  $order->pizza;
        // $ingredients = $order->ingredients;
        // return $order;
        return response()->json($pizza);
        return view('pizza');
    }
}