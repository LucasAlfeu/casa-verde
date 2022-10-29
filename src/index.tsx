import AssinaturaNewslatter from 'Components/AssinaturaNewslatter';
import ConseguindoPlanta from 'Components/ConseguindoPlanta';
import Menu from 'Components/Menu';
import Ofertas from 'Components/Ofertas';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu />
    <AssinaturaNewslatter />
    <ConseguindoPlanta />
    <Ofertas />
  </React.StrictMode>
);
