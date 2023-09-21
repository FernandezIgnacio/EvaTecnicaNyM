<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;
use App\Models\Curso;

class CursoController extends Controller
{
    public function index()
    {
        $Cursos = Curso::all();
        return $Cursos;
    }

    public function store(Request $request)
    {
        $category = Categoria::findOrFail($request -> categoria_id);
        $Curso = new Curso();
        $Curso -> nombre = $request -> nombre;
        $Curso -> descripcion = $request -> descripcion;

        $Curso->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $Curso = Curso::find($id);
        return $Curso;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Curso = Curso::findOrFail($request->id);
        $Curso -> nombre = $request -> nombre;
        $Curso -> descripcion = $request -> descripcion;

        $Curso -> save();
        return $Curso;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $Curso = Curso::destroy($id);
        return $Curso;
    }
}
