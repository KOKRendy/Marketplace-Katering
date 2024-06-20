<?php

namespace App\Http\Controllers;

use App\Models\MenuRating;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class MenuRatingController extends Controller
{
    public function index()
    {
        try {
            $myOrder = Order::with(['user', 'items.menu.merchant'])->where('user_id', auth()->id())->first();


            return inertia('Customer/Ulasan', [
                'myOrder' => $myOrder,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'menu_id' => 'required|exists:menus,id',
                'rating' => 'required|numeric|max:5',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            // Cek apakah user sudah benar benar membeli menu ini

            $orderItem = OrderItem::where('menu_id', $request->menu_id)->first();


            if (!$orderItem) {
                return back();
            }

            $user = auth()->user();

            $rating = MenuRating::where('menu_id', $request->menu_id)->where('user_id', $user->id)->first();

            // Cek apakah user sudah pernah rating menu ini atau belum

            if ($rating) {
                $rating->update([
                    'rating' => $request->rating,
                ]);
                
                return back();
            }

            MenuRating::create([
                'menu_id' => $request->menu_id,
                'user_id' => $user->id,
                'rating' => $request->rating,
            ]);

            return back();
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}

// public function index()
// {
//     try {
//         //code...
//     } catch (\Exception $e) {
//         Log::emergency($e->getMessage());
//         return back();
//     }
// }