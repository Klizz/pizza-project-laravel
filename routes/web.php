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

// RUTA PARA POSTEAR EL FORMULARIO
Route::post('/order/store', [OrderController::class, 'store'])->name('orders.store');

// RUTA PARA EDITAR LA ORDEN
Route::get('/order/edit/{order}', [OrderController::class, 'edit'])->name('orders.edit');

// RUTA PARA HACER UPDATE DE LA ORDEN
Route::put('/order/edit/{order}', [OrderController::class, 'update'])->name('orders.update');

// RUTA PARA VER TODAS LAS ÓRDENES DEL USUARIO LOGUEADO
Route::get('/orders/all', [OrderController::class, 'all'])->name('orders.all');

// RUTA PARA HACER LOGIN
Route::post('/login', HomeController::class);

// RUTA PARA VER LOS DETALLES DE UNA ORDEN DE MANERA INDIVIDUAL
Route::get('/orders/{order}', [OrderController::class, 'show'])->name('orders.show');

// RUTA PARA VER INFO DE LAS PIZZAS
Route::get('pizza', \App\Http\Controllers\PizzaController::class);

// RUTA PARA VER INFO DE LOS INGREDIENTES
Route::get('ingredients', \App\Http\Controllers\IngredientController::class);