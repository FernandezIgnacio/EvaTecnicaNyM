import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    getAllCategorias();
  }, []);

  const getAllCategorias = async () => {
    const response = await axios.get(`${endpoint}/categorias`);
    setCategorias(response.data);
  };

  const deleteCategoria = async (id) => {
    await axios.delete(`${endpoint}/categoria/${id}`);
    getAllCategorias();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/createCategoria"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>
      </div>

      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad de Cursos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td> {categoria.id} </td>
              <td> {categoria.nombre} </td>
              <td> {/* Cantidad de cursos */} </td> 
              <td>
                <button
                  onClick={() => deleteCategoria(categoria.id)}
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

export default ShowCategoria;
