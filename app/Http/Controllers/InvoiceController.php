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

            $order = Order::with('items')->latest()->where('user_id', $user->id)->first();

            return inertia('Customer/Invoice', [
                'order' => $order,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
