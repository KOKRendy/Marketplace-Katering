<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Support\Facades\Log;

class InvoiceController extends Controller
{
    public function index()
    {
        try {
            $user = auth()->user();

            $order = Order::latest()->with(['items', 'user'])->where('user_id', $user->id)->where('status_pembelian', 'Pending')->first();

            return inertia('Customer/Invoice', [
                'order' => $order,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
