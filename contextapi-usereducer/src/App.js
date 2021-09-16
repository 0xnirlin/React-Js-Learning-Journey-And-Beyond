import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import Parent from './Parent';

function App() {

  let [number, setNumber] = useState(45);

  return (
    <div className="App">
      Hello World
      <Parent num = {number}></Parent>
      <button onClick = {() => setNumber(++number)}> Update NUmber</button>
    </div>
  );
}

export default App;
