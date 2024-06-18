<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'menus_id' => 'required',
                'quantity' => 'required',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            Cart::create([
                'user_id' => auth()->id(),
                'menus_id' => $request->menus_id,
                'quantity' => $request->quantity,
            ]);

            return back();
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function delete($cartId)
    {
        try {
            if (!$cartId) {
                return back();
            }

            Cart::where('id', $cartId)->delete();

            return back();
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
