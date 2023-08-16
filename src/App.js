import logo from "./logo.svg";
import "./App.css";
/* import { Descripcion } from "./components/descripcion.jsx"; */
import { Categorias } from "./components/categorias";
import { Boton } from "./components/button";
import { Cursos } from "./components/cursos";
import { Titulo } from "./components/titulo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo name="Capacitaciones en Neuquen"></Titulo>

        <Titulo name="Categorias"></Titulo>
        <Categorias title="Programacion"></Categorias>
        <Categorias title="Panaderia"></Categorias>
        <Categorias title="Reposteria"></Categorias>
        <Categorias title="Carburacion de motos"></Categorias>
        <Categorias title="Mecanica automotriz"></Categorias>
        <Categorias title="Reparacon de aires acondicionados"></Categorias>
        <Boton name="incribirse a todos los cursos"></Boton>
        <Cursos></Cursos>
      </header>
    </div>
  );
}

export default App;
