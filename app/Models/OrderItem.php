<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'orders_id',
        'nama_menu',
        'harga',
        'quantity',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'orders_id');
    }
}
