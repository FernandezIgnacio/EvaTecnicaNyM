<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Curso;
use App\Models\Persona;
use Illuminate\Http\Request;


class CursoPersonaController extends Controller
{
    public function index($cursoId, $personaId){
        $curso = Curso::find($cursoId);
        $persona = Persona::find($personaId);

        $cursoPersona = [$persona, $curso];
        return $cursoPersona;
    }
}
