import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export { default as Navigation } from "./components/Navigation.js";
export { default as Footer } from "./components/Footer.js";
export { default as Home } from "./components/Home.js";
export { default as About } from "./components/About.js";
export { default as Contact } from "./components/Contact.js";
export { default as Buy } from "./components/Buy.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
