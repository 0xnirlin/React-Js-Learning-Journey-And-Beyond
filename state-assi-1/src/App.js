import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  let [switcher, mode] = useState(true);
  let [change,tempC] = useState(22);
  function changeModeOn()
  {
      mode(true);
    
  }
  

  function changeModeOff() {
      mode(false);
  };
  function updateTempi()
  {
    tempC(++change);
  }
  function updateTempd()
  {
    tempC(--change);
  }
  return (
   <div className = {`wrapper ${switcher?'light':'dark'}`} >
      <div className = 'lightSwitch'>
          <button className = "on" onClick = {changeModeOn}>
            ON
          </button>
          <button className = 'off' onClick = {changeModeOff}>
            OFF
          </button>
      </div>
      <div className =  {`temp ${switcher?'white':'black'}`}>
      <button className = "plus" onClick = {updateTempi}>
            +
          </button>
          <span className = 'degree'> {change}</span>
          <button className = 'minus' onClick = {updateTempd}>
            -
          </button>

      </div>
    </div>

    
  );
}

export default App;
