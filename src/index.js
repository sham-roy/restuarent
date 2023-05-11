import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
