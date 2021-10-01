<?php

namespace App\Http\Controllers;
use App\Models\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller

{
    public function __invoke(){
        $pizzas = Pizza::all();
        return response()->json($pizzas);
        return view('pizza');
    }
}