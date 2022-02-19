import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './global.css';
import App from './App';
import DATA from './data.json';

// const DATA = JSON.parse(localStorage.getItem("tasks") || "[]");

ReactDOM.render(
  <React.StrictMode>
    <App rituals={DATA.rituals} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
