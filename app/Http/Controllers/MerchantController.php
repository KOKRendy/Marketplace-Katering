<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Merchant;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MerchantController extends Controller
{
    public function index()
    {
        try {
            $merchant = Merchant::where('user_id', auth()->id())->first();

            $totalMenu = Menu::where('merchants_id', $merchant->id)->count();

            $orders = Order::with('items')->where('merchants_id', $merchant->id)->get();

            $overview = [
                'total_menu' => $totalMenu,
                'total_penjualan' => $orders->count(),
                'total_uang_penjualan' => $orders->sum('total_pembelian'),
                'total_uang_keuntungan' => $orders->sum(function ($item) {
                    return $item->keuntungan * $item->quantity;
                }),
            ];

            return inertia('Merchant/Merchant', [
                'orders' => $orders,
                'overview' => $overview,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
