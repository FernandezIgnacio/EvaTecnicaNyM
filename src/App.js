import React, { useState } from "react";
import "./App.css";
/* import { Descripcion } from "./components/descripcion.jsx"; */
/* import { Categorias } from "./components/categorias"; */
import { Titulo } from "./components/titulo";     
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
  {
    idCurso: "3",
    nameCurso: "Pasteleria",
    descCurso: "Aprende a como hacer pan y facturas.",
    idCategoria: "2",
  },
  {
    idCurso: "4",
    nameCurso: "laravel en php",
    descCurso: "Aprende a como hacer pan y facturas.",
    idCategoria: "1",
  },
  {
    idCurso: "5",
    nameCurso: "logica propiporopi",
    descCurso: "Aprende a como hacer pan y facturas.",
    idCategoria: "1",
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
        {CatSelect === "Informatica" && <With title="Informtatica" name="Programacion POO" descrip="capacitacion para aprender html, css y js. Condicionales, repetitivas y programacion orientada a objetos (POO)" boton="inscribirse"/>}
        {CatSelect === "Informatica" && <With title="Informtatica" name="logica propocicional" descrip="capacitacion para logica de porgramacion, condicionales y repetitivas" boton="inscribirse"/>}
        {CatSelect === "Informatica" && <With title="Informtatica" name="logica propocicional" descrip="capacitacion para logica de porgramacion, condicionales y repetitivas" boton="inscribirse"/>}
       
        {CatSelect === "Cocina" &&  <With title="Panaderia" name="PANADERIA" descrip="capacitacion paraaprender a hacer pan" boton="inscribirse"/> }
        {CatSelect === "Cocina" &&  <With title="Panaderia" name="reposteria" descrip="capacitacion para reposteria" boton="inscribirse"/> }
      </header>
    </div>
  );
}

export default App;

