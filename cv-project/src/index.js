import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Info from './components/Info';
import App from './App';
import Education from './components/Education';
import Experience from './components/Experience';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Resume Builder App</h1>
    <Info />
    <Education />
    <Experience />
    <App />
  </StrictMode>
);
