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
        Schema::create("curso_persona", function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('curso_id');
            $table->unsignedBigInteger('persona_id');

            $table->foreign('curso_id')
                  ->references('id')
                  ->on('cursos')
                  ->OnUpdate('cascade')
                  ->OnDelete('cascade');
            $table->foreign('persona_id')
                  ->references('id')
                  ->on('personas')
                  ->OnUpdate('cascade')
                  ->OnDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
