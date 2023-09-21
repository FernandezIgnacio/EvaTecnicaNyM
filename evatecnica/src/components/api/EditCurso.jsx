import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/curso";

const EditCurso = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}/${id}`, {
      nombre: nombre,
      descripcion: descripcion,
    });
    navigate("/");
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endpoint}/${id}`);
      setNombre(response.data.nombre);
      setDescripcion(response.data.descripcion);
    };
    getProductById();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditCurso;
