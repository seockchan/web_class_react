import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss";
import App from "./App";

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
    <div>안녕</div>
  </React.StrictMode>,
);