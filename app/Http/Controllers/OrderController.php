<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index() {
        return "Pagina donde se muestran las ordenes";
    }
    public function create() { 
        return "Pagina donde se crean las ordenes";
    }
    public function show() {
        return "Pagina donde se muestra una orden individualmente";
    }
}
