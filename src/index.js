import React from 'react';
import { render } from 'react-dom'; // Import 'render' from react-dom, not ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Use 'render' function from react-dom to render your app
render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
