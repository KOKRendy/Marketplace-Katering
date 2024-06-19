<?php

namespace App\Http\Controllers;

use App\Models\Merchant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ProfilMerchantController extends Controller
{
    public function index()
    {
        try {
            $user = auth()->user();

            $merchant = Merchant::where('user_id', $user->id)->first();

            return inertia('Merchant/ProfilMerchant', [
                'merchant' => $merchant,
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
                'nama_perusahaan' => 'required',
                'logo_perusahaan' => 'required|max:10240',
                'alamat' => 'required',
                'kontak' => 'required',
                'deskripsi' => 'required',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            $user = auth()->user();

            $merchant = Merchant::where('user_id', $user->id)->first();

            $url = $merchant->logo_perusahaan;

            if ($request->hasFile('logo_perusahaan')) {
                $oldImage = $merchant->logo_perusahaan;

                if ($oldImage) {
                    $oldImagePath = public_path($oldImage);

                    if (file_exists($oldImagePath)) {
                        unlink($oldImagePath);
                    }
                }

                $imageName = time() . '.' . $request->logo_perusahaan->extension();

                $pathname = 'uploads/logo-perusahaan';

                $request->logo_perusahaan->move(public_path($pathname), $imageName);

                $url = $pathname . '/' . $imageName;
            }

            $merchant->update([
                'nama_perusahaan' => $request->nama_perusahaan,
                'logo_perusahaan' => $url,
                'alamat' => $request->alamat,
                'kontak' => $request->kontak,
                'deskripsi' => $request->deskripsi,
            ]);
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function delete(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            $user = $request->user();

            if (!Hash::check($request->password, $user->password)) {
                $validator->errors()->add('password', 'Password salah');

                return back()->withErrors($validator->errors());
            }

            Auth::logout();

            $user->delete();

            return redirect('/');
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }
}
