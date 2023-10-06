<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;
    protected $fillable = [
                            'nombre',
                            'descripcion',
                            'nombre_categoria'
                          ];

    public function categorias(){
        return $this -> belongsTo(Categoria::class, 'nombre_categoria');
    }

    public function Personas(){
        return $this-> belongsToMany(Persona::class, 'curso:persona');
    }
}
