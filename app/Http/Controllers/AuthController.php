<?php

namespace App\Http\Controllers;

use App\Models\Merchant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function loginIndex()
    {
        try {
            return inertia('Auth/Login');
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function loginStore(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|exists:users,email',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            $credentials = $request->only('email', 'password');

            if (Auth::attempt($credentials)) {
                $user = auth()->user();

                if ($user->role == 'merchant') {
                    return redirect('/merchant');
                }

                return redirect('/');
            } else {
                $validator->errors()->add('password', 'Wrong password.');
                return back()->withErrors($validator->errors());
            }
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function registerIndex()
    {
        try {
            return inertia('Auth/Register');
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function registerStore(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required',
                'phone_number' => 'required|min:8',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'password' => Hash::make($request->password),
                'role' => 'customer',
            ]);

            Auth::login($user);

            return redirect('/');
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function registerMerchantIndex()
    {
        try {
            return inertia('Auth/RegisterMerchant');
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function registerMerchantStore(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'phone_number' => 'required|unique:users,phone_number|min:8',
                'password' => 'required',
                'nama_perusahaan' => 'required',
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'password' => Hash::make($request->password),
                'role' => 'merchant',
            ]);

            Auth::login($user);

            Merchant::create([
                'user_id' => $user->id,
                'nama_perusahaan' => $request->nama_perusahaan,
            ]);

            return redirect('/merchant');
        } catch (\Exception $e) {
            Log::emergency($e->getMessage());
            return back();
        }
    }

    public function logout()
    {
        Auth::logout();

        return redirect('/');
    }
}
