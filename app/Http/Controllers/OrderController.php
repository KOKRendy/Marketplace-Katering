<?php

namespace App\Http\Controllers;

use App\Models\Merchant;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    public function index()
    {
        try {
            $user = auth()->user();

            $merchant = Merchant::where('user_id', $user->id)->first();

            $orders = Order::with(['user', 'items'])->latest()->where('merchants_id', $merchant->id)->get();

            return inertia('Merchant/Order', [
                'orders' => $orders,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
