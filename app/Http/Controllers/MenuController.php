<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MenuController extends Controller
{
    public function index()
    {
        try {
            $user = auth()->user();

            $menus = Menu::where('merchants_id', $user->id)->get();

            return inertia('Merchant/Menu', [
                'menus' => $menus,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
