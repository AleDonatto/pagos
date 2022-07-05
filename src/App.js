import React from 'react';
import './App.css';
import { HomePagos } from './components/HomePagos';
import { Routes, Route } from "react-router-dom";
import { PagePagoPredial } from './components/PagePagoPredial';
import { PageTramiteC } from './components/PageTramiteC';
import { PageCerCat } from './components/PageCerCat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePagos />} />
        <Route path='/pago-predial' element={<PagePagoPredial/>} />
        <Route path='/tramites-catastrales' element={<PageTramiteC/>} />
        <Route path='/certificado-catastral' element={<PageCerCat/>} />
      </Routes>
    </div>
  );
}

export default App;
