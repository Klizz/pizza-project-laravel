<?php

namespace App\Http\Controllers;
use App\Models\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    public function __invoke(){
        $pizza = Pizza::all();
        return response()->json($pizza);
        return view('pizza');
    }
}