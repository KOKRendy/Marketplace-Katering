<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        try {
            $menus = Menu::with('merchant')
                ->withAvg('ratings', 'rating')
                ->when($request->input('search'), function ($query, $search) {
                    $query
                        ->where('nama_menu', 'like', '%' . $search . '%')
                        ->orWhere('jenis_makanan', 'like', '%' . $search . '%')
                        ->orWhere('deskripsi', 'like', '%' . $search . '%')
                        ->orWhereHas('merchant', function ($query) use ($search) {
                            $query->where('nama_perusahaan', 'like', '%' . $search . '%')
                                ->orWhereHas('user', function ($query) use ($search) {
                                    $query->where('name', 'like', '%' . $search . '%');
                            })
                            ->orWhere('alamat', 'like', '%' . $search . '%');
                        });
                })
                ->get();

            return inertia('Customer/Search', [
                'menus' => $menus,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
