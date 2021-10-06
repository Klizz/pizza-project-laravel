<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class HomeController extends Controller

{
    public function __invoke(Request $request){
        $current_user = session(['user' => $request->name]);
        return view('home');
    }

    public function storeuser(Request $request){
        return response()->json($request);
    }
}
