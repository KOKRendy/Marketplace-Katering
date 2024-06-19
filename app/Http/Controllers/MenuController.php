<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Merchant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class MenuController extends Controller
{
    public function index()
    {
        try {
            $user = auth()->user();

            $merchant = Merchant::where('user_id', $user->id)->first();

            $menus = Menu::where('merchants_id', $merchant->id)->get();

            return inertia('Merchant/Menu', [
                'menus' => $menus,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function menuCreateIndex()
    {
        try {
            return inertia('Merchant/FormMenu');
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nama_menu' => 'required',
                'jenis_makanan' => 'required',
                'foto' => 'required|image|max:10240',
                'harga' => 'required|numeric',
                'keuntungan' => 'required|numeric',
                'deskripsi' => 'required',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            $user = auth()->user();

            $merchant = Merchant::where('user_id', $user->id)->first();

            $imageName = time() . '.' . $request->foto->extension();

            $pathname = 'uploads/menu-image';

            $request->foto->move(public_path($pathname), $imageName);

            $url = $pathname . '/' . $imageName;

            Menu::create([
                'merchants_id' => $merchant->id,
                'nama_menu' => $request->nama_menu,
                'jenis_makanan' => $request->jenis_makanan,
                'foto' => $url,
                'harga' => $request->harga,
                'keuntungan' => $request->keuntungan,
                'deskripsi' => $request->deskripsi,
            ]);

            return back();
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function menuUpdateIndex($menuId)
    {
        try {
            $user = auth()->user();

            $merchant = Merchant::where('user_id', $user->id)->first();

            $menu = Menu::where('merchants_id', $merchant->id)->where('id', $menuId)->first();

            if (!$menu) {
                return back()->withErrors('Menu tidak ditemukan');
            }

            return inertia('Merchant/FormEditMenu', [
                'menu' => $menu,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function update(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nama_menu' => 'required',
                'jenis_makanan' => 'required',
                'foto' => 'required|max:10240',
                'harga' => 'required|numeric',
                'keuntungan' => 'required|numeric',
                'deskripsi' => 'required',
                'menu_id' => 'required',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            $user = auth()->user();

            $menu = Menu::where('id', $request->menu_id)->first();

            $merchant = Merchant::where('user_id', $user->id)->first();

            if ($menu->merchants_id != $merchant->id) {
                return back();
            }

            $url = $menu->foto;

            if ($request->hasFile('foto')) {
                $oldImage = $menu->foto;

                if ($oldImage) {
                    $oldImagePath = public_path($oldImage);

                    if (file_exists($oldImagePath)) {
                        unlink($oldImagePath);
                    }
                }

                $imageName = time() . '.' . $request->foto->extension();

                $pathname = 'uploads/menu-image';

                $request->foto->move(public_path($pathname), $imageName);

                $url = $pathname . '/' . $imageName;
            }

            $menu->update([
                'nama_menu' => $request->nama_menu,
                'jenis_makanan' => $request->jenis_makanan,
                'foto' => $url,
                'harga' => $request->harga,
                'keuntungan' => $request->keuntungan,
                'deskripsi' => $request->deskripsi,
            ]);

            return back();
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function delete($menuId)
    {
        try {
            $user = auth()->user();

            $merchant = Merchant::where('user_id', $user->id)->first();

            $menu = Menu::where('id', $menuId)->first();

            if ($menu->merchants_id != $merchant->id) {
                return back();
            }

            $menu->delete();

            return back();
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
