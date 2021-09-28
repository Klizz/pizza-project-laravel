<?php

namespace App\Http\Controllers;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index() {
        $order = Order::first();

        return $order->pizza;
        return view('orders.index');
    }
    public function create() { 
        return view('orders.create');
    }
    public function show() {
        return view('orders.show');
    }
}
