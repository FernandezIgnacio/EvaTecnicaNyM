import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Home(){
    return <div>
                <Link className="btn btn-info mt-3 m-1" to="/showCurso">Listado de cursos</Link>
                <Link className="btn btn-info mt-3 m-1" to="/showCategoria">Listado de Categorias</Link>
            </div>
};