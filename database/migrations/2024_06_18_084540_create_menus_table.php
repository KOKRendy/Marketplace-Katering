<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('merchants_id');
            $table->string('nama_menu');
            $table->string('jenis_makanan');
            $table->string('foto');
            $table->integer('harga');
            $table->integer('keuntungan');
            $table->text('deskripsi');
            $table->timestamps();

            $table->foreign('merchants_id')->references('id')->on('merchants')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
