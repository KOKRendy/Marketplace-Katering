<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'merchants_id',
        'nama_menu',
        'jenis_makanan',
        'foto',
        'harga',
        'keuntungan',
        'deskripsi',
    ];

    public function merchant ()
    {
        return $this->belongsTo(Merchant::class, 'merchants_id');
    }
}
