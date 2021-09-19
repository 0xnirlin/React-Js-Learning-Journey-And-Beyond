import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Parent from './Parent';
import ValueContext from './valuecontext';

function App() {

  // let [number, setNumber] = useState(45);
  let newValue = 81;
  return (
    <ValueContext.Provider value = {newValue}>
      <div className="App"> 
        Hello World
        <Parent ></Parent>
        {/* <button onClick={() => setNumber(++number)}> Update NUmber</button> */}
      </div>
    </ValueContext.Provider>
    
  );
}

export default App;
