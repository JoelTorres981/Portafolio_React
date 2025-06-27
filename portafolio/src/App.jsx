import React from 'react';
import './App.css';
import NombreApellido from './components/NombreApellido';
import DatosPersonales from './components/DatosPersonales';
import Estudios from './components/Estudios';
import CursosRealizados from './components/CursosRealizados';
import HabilidadesBlandas from './components/HabilidadesBlandas';
import HabilidadesTecnicas from './components/HabilidadesTecnicas';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="portfolio-container">
      <div className="left-column">
        <NombreApellido />
        <DatosPersonales />
      </div>

      <div className="right-column">
        <Estudios />
        <CursosRealizados />
        <HabilidadesBlandas />
        <HabilidadesTecnicas />
      </div>

      <Contacto />
    </div>
  );
}

export default App;