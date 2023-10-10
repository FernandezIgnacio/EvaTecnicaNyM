import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const CreateCategoria = () => {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();
  const store = async (e) => {
    e.preventDefault();
    await axios.post(`${endpoint}/categoria`, {
      nombre: nombre,
    });
    navigate("/ShowCategoria");
  };
  return (
    <div>
      <h3>Crear Categoria</h3>
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
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateCategoria;
