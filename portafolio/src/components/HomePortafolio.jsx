import React from 'react';

import NombreApellido from './NombreApellido';
import DatosPersonales from './DatosPersonales';
import Estudios from './Estudios';
import CursosRealizados from './CursosRealizados';
import HabilidadesBlandas from './HabilidadesBlandas';
import HabilidadesTecnicas from './HabilidadesTecnicas';
import Contacto from './Contacto';

function HomePortfolio() {
  return (
    <>
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
    </>
  );
}

export default HomePortfolio;