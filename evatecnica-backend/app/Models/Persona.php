<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    use HasFactory;
    protected $fillable = [ 'nombre', 'apellido', 'dni', 'genero', 'edad'   ];

    public function Cursos(){
        return $this-> belongsToMany(Curso::class, 'curso:persona');
    }

    public function persona(){
        return $this->hasOne(Persona::class);
    }
}
