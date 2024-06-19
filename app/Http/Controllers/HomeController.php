<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    public function index()
    {
        try {
            $menus = Menu::with('merchant.user')->withAvg('ratings', 'rating')->latest()->get();

            return inertia('Customer/Home', [
                'menus' => $menus,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
