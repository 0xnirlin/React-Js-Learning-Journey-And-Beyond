import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [light, changeMode] = useState('light');
  function updateMode() {
    if (light === 'light') {
      changeMode('dark');
    } 
    else if (light === 'dark') {
      changeMode('light');
    }
  }
  return (
    <div className={light}>
      <button onClick={updateMode}>
        Switch
      </button>
    </div>

  );
}

export default App;
