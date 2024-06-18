<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nama_menu',
        'quantity',
        'total_pembelian',
        'status_pembelian',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
