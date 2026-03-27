import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import it here
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap the entire App! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);