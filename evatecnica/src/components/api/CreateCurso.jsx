import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const CreateCurso = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombre_categoria, setNombre_categoria] = useState("");
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    getAllCategorias();
  }, []);

  const getAllCategorias = async () => {
    const response = await axios.get(`${endpoint}/categorias`);
    setCategorias(response.data);
  };

  const store = async (e) => {
    e.preventDefault();
    await axios.post(`${endpoint}/curso`, {
      nombre: nombre,
      descripcion: descripcion,
      nombre_categoria: nombre_categoria,
    });
    navigate("/");
  };
  return (
    <div>
      <h3>Crear Curso</h3>
      <form onSubmit={store}>
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
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <select
            className="form-select"
            onChange={(e) => setNombre_categoria(e.target.value)}
          >
            {console.log(categorias)}
            <option>-</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.nombre} type="text">
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateCurso;
