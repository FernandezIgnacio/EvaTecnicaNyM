<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Persona;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $personas = Persona::all();
        return $personas;
    }

    public function store(Request $request)
    {
        $persona = new Persona();
        $persona -> nombre = $request -> nombre;
        $persona -> apellido = $request -> apellido;
        $persona -> dni = $request -> dni;
        $persona -> genero = $request -> genero;
        $persona -> edad = $request -> edad;

        $persona->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $persona = Persona::find($id);
        return $persona;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $persona = Persona::findOrFail($request->id);
        $persona -> nombre = $request -> nombre;
        $persona -> apellido = $request -> apellido;
        $persona -> dni = $request -> dni;
        $persona -> genero = $request -> genero;
        $persona -> edad = $request -> edad;

        $persona -> save();
        return $persona;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $persona = Persona::destroy($id);
        return $persona;
    }
}
