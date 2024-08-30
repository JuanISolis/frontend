import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.jpg';
import istecLogo from './assets/logo-istec.png';
import puceLogo from './assets/logo-puce.png';
import puce2Logo from './assets/puce.png';
import EstudianteForm from './formulario/ISTEC'; // Asegúrate de la ruta correcta

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" className="header-logo" />
          <h1>MATRICULACIÓN</h1>
          <img src={puce2Logo} alt="PUCE Logo" className="header-logo" />
        </header>
        <section className="logo-section">
          <Link to="/istec">
            <img
              src={istecLogo}
              alt="ISTEC Logo"
              className="logo"
              style={{ cursor: 'pointer', marginRight: '20px' }}
            />
          </Link>
          <img
            src={puceLogo}
            alt="PUCE Logo"
            className="logo"
            onClick={() => handleClick('PUCE')}
            style={{ cursor: 'pointer', marginRight: '20px' }}
          />
        </section>
        <Routes>
          <Route path="/istec" element={<EstudianteForm />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;