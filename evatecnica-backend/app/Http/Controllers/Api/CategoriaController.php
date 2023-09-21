<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function index(){
        $categorias = Categoria::all();
        return $categorias;
    }

    public function store(Request $request){


        $categoria = new Categoria;
        $categoria -> nombre = $request -> nombre;
    }

    public function show(string $id){
        $categoria = Categoria::find($id);
        return $categoria;
    }

    public function update(Request $request, string $id){
        $categoria = Categoria::findOrFail($request->id);
        $categoria -> nombre = $request -> nombre;

        $categoria -> save();
        return $categoria;
    }

    public function destroy(string $id){
        $categoria = Categoria::destroy($id);
        return $categoria;
    }
}
