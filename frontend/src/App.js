import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navegacion from "./components/Navegacion";
import ListaUsuarios from "./components/ListaUsuarios";
import CrearUsuarios from "./components/CrearUsuarios";

function App() {
  return (
    <div>
      <Navegacion/>
      <div className='container p-4'>
        <Routes>
          <Route path="/" element={<ListaUsuarios/>} />
          <Route path="/CrearUsuario" element={<CrearUsuarios/>} />
          <Route path="/edit/:id" element={<CrearUsuarios/>} />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
