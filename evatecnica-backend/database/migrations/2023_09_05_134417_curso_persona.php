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

            $table->foreignId('persona_id')
                  ->constrained('Persona')
                  ->cascadeOnUpdate();

            $table->foreignId('curso_id')
                  ->constrained('Curso')
                  ->cascadeOnUpdate();
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
