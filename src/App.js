import React, { useState } from "react";
import "./App.css";
/* import { Descripcion } from "./components/descripcion.jsx"; */
/* import { Categorias } from "./components/categorias"; */
import { Titulo } from "./components/titulo";
import x from './components/Pruebacurso.js'
import With from "./components/Pruebacurso.jsx";

const cat = [
  {
    idCategoria: "1",
    nombreCat: "Informatica",
  },
  {
    idCategoria: "2",
    nombreCat: "Cocina",
  },
];
const Cursos = [
  {
    idCurso: "1",
    nameCurso: "Introduccion a la Programacion",
    descCurso: "Aprende los conceptos basicos de la programacion.",
    idCategoria: "1",
  },
  {
    idCurso: "2",
    nameCurso: "Panaderia",
    descCurso: "Aprende a como hacer pan y facturas.",
    idCategoria: "2",
  },
];

function App() {
  const [CatSelect, setCatSelect] = useState("");

  const displayCursos = (event) => {
    console.log(event.target.value);
    setCatSelect(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Titulo name="Capacitaciones en Neuquen"></Titulo>
        <Titulo name="Categorias"></Titulo>
        <select onChange={(event) => displayCursos(event)}>
          <option>-</option>
          {cat.map((cat, i) => {
            return (
              <option key={i} value={cat.id}>
                {cat.nombreCat}
              </option>
            );
          })}
        </select>
        {CatSelect === "Informatica" && <With title="Informtatica" name="Programacion" descrip="capacitacion para logica de porgramacion, condicionales, repetitivas y programacion orientada a objetos (POO)" boton="inscribirse"/>}
        {CatSelect === "Cocina" &&  <With title="Panaderia" name="PANADERIA neuquen" descrip="curso sobre panaderia, se trata de conseguir mas panaderos para neuquen en capital no hay mucho" boton="inscribirse"/> }
      </header>
    </div>
  );
}

export default App;

