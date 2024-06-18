<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    return inertia('Customer/Login');
});

Route::get('/register', function () {
    return inertia('Customer/Register');
});
