import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import HomePortfolio from './components/HomePortafolio';

function ProjectPage() {
  return (
    <div className="page-content">
      <h2>Página de Proyectos</h2>
      <p>Aqui esta el link de mi GitHub para encontrar mas informacion de proyectos realizados.</p>
      <a href="https://github.com/JoelTorres981">Mi GitHub</a>
    </div>
  );
}

function AboutMePage() {
  return (
    <div className="page-content">
      <h2>Acerca de Mí</h2>
      <p>Soy un estudiante de desarrollo de software en la Escuela Politécnica Nacional,
            Me entusiasma aprender nuevas herramientas y lenguajes de programación para 
            construir soluciones innovadoras.</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="page-content">
      <h2>404 - Página No Encontrada</h2>
      <p>La ruta a la que intentas acceder no existe.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="main-nav">
        <Link to="/" className="nav-link">Mi Portafolio</Link>
        <Link to="/proyectos" className="nav-link">Proyectos</Link>
        <Link to="/acerca-de" className="nav-link">Acerca de Mi</Link>
      </nav>

      <div className="portfolio-container">
        <Routes>
          <Route path="/" element={<HomePortfolio />} />

          <Route path="/proyectos" element={<ProjectPage />} />
          <Route path="/acerca-de" element={<AboutMePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;