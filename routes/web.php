<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Customer/Home');
});

Route::get('/search', function () {
    return inertia('Customer/Search');
});

Route::get('/login', function () {
    return inertia('Customer/Login');
});

Route::get('/register', function () {
    return inertia('Customer/Register');
});
