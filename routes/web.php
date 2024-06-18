<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Customer/Home');
});

Route::get('/search', function () {
    return inertia('Customer/Search');
});

Route::get('/merchant', function () {
    return inertia('Merchant/Merchant');
});

Route::get('/menus', function () {
    return inertia('Merchant/Menu');
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
});
