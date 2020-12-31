import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import api from "./utils/api";

function App() {















  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's party.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
