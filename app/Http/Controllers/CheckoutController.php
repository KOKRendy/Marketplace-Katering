<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CheckoutController extends Controller
{
    public function checkout()
    {
        DB::beginTransaction();
        try {
            $user = auth()->user();

            $carts = Cart::with('menu')->where('user_id', $user->id)->get();

            $groupedByMerchant = $carts->groupBy(function ($item) {
                return $item->menu->merchants_id;
            });

            foreach ($groupedByMerchant as $merchantId => $items) {

                $totalPembelian = $items->sum(function ($item) {
                    return $item->menu->harga * $item->quantity;
                });

                $order = Order::create([
                    'merchants_id' => $merchantId,
                    'user_id' => $user->id,
                    'total_pembelian' => $totalPembelian,
                ]);

                foreach ($items as $item) {
                    OrderItem::create([
                        'orders_id' => $order->id,
                        'nama_menu' => $item->menu->nama_menu,
                        'harga' => $item->menu->harga,
                        'keuntungan' => $item->menu->keuntungan,
                        'quantity' => $item->quantity,
                    ]);

                    $item->delete();
                }
            }

            DB::commit();

            return back();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::emergency($e->getMessage());

            return back();
        }
    }
}
