import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShowCurso from "./components/api/ShowCurso";
import CreateCursos from "./components/api/CreateCurso";
import EditCursos from "./components/api/EditCurso";
import ShowCategoria from "./components/api/ShowCategoria";
import CreateCategoria from "./components/api/CreateCategoria";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/showCurso" element={<ShowCurso />} />
          <Route path="/createCurso" element={<CreateCursos />} />
          <Route path="/editCurso/:id" element={<EditCursos />} />
          <Route path="/showCategoria" element={<ShowCategoria />} />
          <Route path="/createCategoria" element={<CreateCategoria />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;