import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*
const name = "Ben"
const firstPage = 2023;

const demo = (
  <div>
    <h1>My name is {name}</h1>
    <p>and I have been coding for {2023 - firstPage} years</p>
  </div>
);
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
