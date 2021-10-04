<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\OrderPizzaIngredient;
use App\Models\Pizza;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
    public function edit(Order $order) { 
        return view('orders.edit', compact('order'));
    }

    public function store(Request $request) { 
        
        $order = new Order();

        $order->customer = $request->customer;
        $order->pizza_id = $request->pizza_id;
        $pizza = Pizza::find($request->pizza_id);
        $pizza_ingredients = $request->ingredient_id;
        $sum = array_reduce($pizza_ingredients, function ($carry, $item) {
            return $carry + $item['price'];
        });
        $order->total_price = $sum + $pizza->price;
        $order->save();

        foreach ($pizza_ingredients as &$valor) {
            if ($valor['id'] != 0) {
                OrderPizzaIngredient::create([
                    'order_id' => $order->id,
                    'ingredient_id' => $valor['id']
                ]);
            }
        }
        return response()->json($order);
    }
    public function update(Order $order, Request $request) { 

        $order->customer = $request->customer;
        $order->pizza_id = $request->pizza_id;
        $pizza = Pizza::find($request->pizza_id);
        $pizza_ingredients = $request->ingredient_id;
        $sum = array_reduce($pizza_ingredients, function ($carry, $item) {
            return $carry + $item['price'];
        });
        $order->total_price = $sum + $pizza->price;
        $order->save();

       OrderPizzaIngredient::where('order_id', $order->id) ->whereIn('ingredient_id', $request->removeElements)->delete();

        foreach ($pizza_ingredients as &$valor) {
            if ($valor['id'] != 0) {
                OrderPizzaIngredient::firstOrCreate([
                    'order_id' => $order->id,
                    'ingredient_id' => $valor['id']
                ]);
            }
        }
        return response()->json($order);
    }
    public function show(Order $order, Request $request) {
        // $pizza = $order->pizza;
        // $ingredients = $order->ingredients;
        // return response()->json($order);
        // return view('orders.show', compact('order'));

        if ($request->wantsJson()) {
            $pizza = $order->pizza;
            $ingredients = $order->ingredients;
            return response()->json($order);
        } else {
            return view('orders.show', compact('order'));
        }
    }
    public function all(Order $orders) { 
        return view('orders.all', compact('orders'));
    }
}