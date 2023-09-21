<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;
    protected $fillable = [
                            'nombre',
                            'descripcion'
                          ];

    public function categorias(){
        return $this -> belongsTo(Categoria::class);
    }

    public function Personas(){
        return $this-> belongsToMany(Persona::class, 'curso:persona');
    }
}
