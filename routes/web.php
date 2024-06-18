<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\MerchantController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index')->name('home.index');
});

Route::controller(SearchController::class)->group(function () {
    Route::get('/search', 'index')->name('search.index');
});

Route::controller(InvoiceController::class)->group(function () {
    Route::get('/invoice', 'index')->name('invoice.index');
});

Route::controller(MerchantController::class)->middleware(['auth', 'role:merchant'])->group(function () {
    Route::get('/merchant', 'index')->name('merchant.index');
});

Route::controller(CartController::class)->middleware('auth')->group(function () {
    Route::post('cart/store', 'store')->name('cart.store');
});

Route::controller(OrderController::class)->middleware('auth')->group(function () {
    Route::get('/checkout', 'checkout')->name('checkout');
});

Route::controller(AuthController::class)->group(function () {
    Route::prefix('login')->group(function () {
        Route::get('/', 'loginIndex')->name('login.index');
        Route::post('/store', 'loginStore')->name('login.store');
    });

    Route::prefix('register')->group(function () {
        Route::get('/', 'registerIndex')->name('register.index');
        Route::post('/store', 'registerStore')->name('register.store');
    });

    Route::prefix('register-merchant')->group(function () {
        Route::get('/', 'registerMerchantIndex')->name('registerMerchant.index');
        Route::post('/store', 'registerMerchantStore')->name('registerMerchant.store');
    });

    Route::get('/logout', 'logout');
});
