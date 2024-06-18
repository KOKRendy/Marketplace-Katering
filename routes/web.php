<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MerchantController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfilMerchantController;
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

Route::middleware(['auth', 'role:merchant'])->group(function () {
    Route::controller(MerchantController::class)->group(function () {
        Route::get('/merchant', 'index')->name('merchant.index');
    });

    Route::controller(MenuController::class)->group(function () {
        Route::get('/menu', 'index')->name('menu.index');
    });

    Route::controller(OrderController::class)->group(function () {
        Route::get('/order', 'index')->name('order.index');
    });

    Route::controller(ProfilMerchantController::class)->group(function () {
        Route::get('/profil-merchant', 'index')->name('profil.merchant.index');
        Route::post('/profil-merchant/update', 'update')->name('profil.merchan.update');
    });
});

Route::controller(CartController::class)->middleware('auth')->group(function () {
    Route::post('cart/store', 'store')->name('cart.store');
});

Route::controller(CheckoutController::class)->middleware(['auth', 'role:customer'])->group(function () {
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
