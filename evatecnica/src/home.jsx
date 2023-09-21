import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Boton } from "./components/button";
import { Categorias } from "./components/categoria.jsx";
import { Cursos } from "./components/cursos";
const root = ReactDOM.createRoot(document.getElementById("root"));
export function Titulo(title) {
  console.log(title);
  return <h1>{title}</h1>;
}
function Descripcion(d) {
  return (d = (
    <p>
      Estas capacitaciones estan pensadas para hacer que los vecinos de neuquen
      sin trabajo que quieran especializarse en alguna tecnica, puedan hacerlo
      sin tener que pagar ningun curso. La idea es que todos tengan trabajo
    </p>
  ));
}
root.render(
  <>
    <Titulo title="Capacitaciones en Neuquen"></Titulo>
    <Descripcion></Descripcion>
    <Titulo title="Categorias"></Titulo>
    <Categorias title="Programacion"></Categorias>
    <Categorias title="Panaderia"></Categorias>
    <Categorias title="Reposteria"></Categorias>
    <Categorias title="Carburacion de motos"></Categorias>
    <Categorias title="Mecanica automotriz"></Categorias>
    <Categorias title="Reparacon de aires acondicionados"></Categorias>
    <Boton></Boton>
    <Cursos></Cursos>
  </>
);
//import reportWebVitals from "./reportWebVitals";
