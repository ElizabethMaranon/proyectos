import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import App from './components/app';

createRoot(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('.app-wrapper'));

  