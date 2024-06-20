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

            $totalUangKeuntungan = 0;

            foreach ($orders as $order) {
                foreach ($order->items as $item) {
                    $totalUangKeuntungan += $item->keuntungan * $item->quantity;
                }
            }

            $overview = [
                'total_menu' => $totalMenu,
                'total_penjualan' => $orders->count(),
                'total_uang_penjualan' => $orders->sum('total_pembelian'),
                'total_uang_keuntungan' => $totalUangKeuntungan,
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
