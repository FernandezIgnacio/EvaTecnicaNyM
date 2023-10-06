<?php

namespace App\Models;
use App\Models\Persona;
use App\Models\Curso;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class CursoPersona extends Model
{

    use HasFactory;

    public function cursos(){
        return $this->belongsToMany(Curso::class);
    }

    public function personas(){
        return $this->belongsToMany(Persona::class);
    }
}
