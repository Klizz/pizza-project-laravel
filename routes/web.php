<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
// use App\Http\Controllers\OrderController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// RUTA HOME
Route::get('/', HomeController::class);

// RUTA PARA VER LAS ÓRDENES CREADAS
Route::get('orders', [OrderController::class, 'index'])->name('orders.index');

// RUTA PARA CREAR UNA NUEVA ORDEN
Route::get('orders/create', [OrderController::class, 'create'])->name('orders.create');

// RUTA PARA CREAR UNA NUEVA ORDEN
Route::get('orders/all', [OrderController::class, 'all'])->name('orders.all');

// RUTA PARA POSTEAR EL FORMULARIO
Route::post('/order/store', [OrderController::class, 'store'])->name('orders.store');

// RUTA PARA VER UNA ORDEN DE MANERA INDIVIDUAL
Route::get('/orders/{order}', [OrderController::class, 'show'])->name('orders.show');

// RUTA PARA VER LAS PIZZAS
Route::get('pizza', \App\Http\Controllers\PizzaController::class);

// RUTA PARA VER LOS INGREDIENTES
Route::get('ingredients', \App\Http\Controllers\IngredientController::class);