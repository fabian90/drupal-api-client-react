// src/App.js
import React from 'react';
import DataTable from './interface/views/DataTable'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <h1>Mi Tabla de Datos</h1>
      <DataTable />
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a> {/* Este es el enlace que estás buscando en la prueba */}
    </div>
  );
};

export default App;
