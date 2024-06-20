<?php

namespace App\Http\Controllers;

use App\Models\Merchant;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function index()
    {
        try {
            $user = auth()->user();

            $merchant = Merchant::with('user')->where('user_id', $user->id)->first();

            $orders = Order::with(['user', 'items'])->latest()->where('merchants_id', $merchant->id)->get();

            return inertia('Merchant/Order', [
                'orders' => $orders,
                'merchant' => $merchant,
                'urlInvoice' => url('/invoice'),
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function changeStatus(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'status' => 'required|in:Dalam Proses Pembuatan,Dalam Pengiriman,Pesanan Selesai',
                'order_id' => 'required',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            $user = auth()->user();

            $merchant = Merchant::where('user_id', $user->id)->first();

            $order = Order::where('id', $request->order_id)->first();

            if (!$order) {
                return back();
            }

            if ($order->merchants_id != $merchant->id) {
                return back();
            }

            $order->update([
                'status_pembelian' => $request->status,
            ]);

            return back();
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
