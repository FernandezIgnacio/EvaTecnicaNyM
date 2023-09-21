import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowCurso = () => {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    getAllCursos();
  }, []);

  const getAllCursos = async () => {
    const response = await axios.get(`${endpoint}/cursos`);
    setCursos(response.data);
  };

  const deleteCurso = async (id) => {
    await axios.delete(`${endpoint}/curso/${id}`);
    getAllCursos();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>
      </div>

      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td> {curso.nombre}</td>
              <td> {curso.descripcion}</td>
              <td>
                <Link to={`/edit/${curso.id}`} className="btn btn-warning">
                  Editar
                </Link>
                <button
                  onClick={() => deleteCurso(curso.id)}
                  className="btn btn-danger"
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowCurso;
