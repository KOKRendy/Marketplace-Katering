<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    public function checkout()
    {
        DB::beginTransaction();
        try {
            $user = auth()->user();

            $carts = Cart::with('menu')->where('user_id', $user->id)->get();

            $totalHarga = 0;

            foreach ($carts as $cart) {
                $totalHarga += $cart->menu->harga * $cart->quantity;
            }


            $order = Order::create([
                'user_id' => $user->id,
                'total_pembelian' => $totalHarga,
                'status_pembelian' => 'Pending',
            ]);

            foreach ($carts as $cart) {
                OrderItem::create([
                    'orders_id' => $order->id,
                    'nama_menu' => $cart->menu->nama_menu,
                    'harga' => $cart->menu->harga,
                    'quantity' => $cart->quantity,
                ]);
            }

            Cart::where('user_id', $user->id)->delete();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::emergency($e->getMessage());

            return back();
        }
    }
}
