<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'orders_id',
        'menu_id',
        'nama_menu',
        'harga',
        'keuntungan',
        'quantity',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'orders_id');
    }

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }
}
