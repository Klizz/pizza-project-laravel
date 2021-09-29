<?php

namespace App\Http\Controllers;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index() {
        $order = Order::all();
        // $pizza =  $order->pizza;
        // $ingredients = $order->ingredients;
        // return $order;
        return response()->json($order);
        return view('orders.index');
    }
    public function create() { 
        return view('orders.create');
    }
    // public function show($order) {
    //     return view('orders.show', compact('order'));
    // }
}