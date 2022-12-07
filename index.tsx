import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import './src/tailwind.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<App />);
