import logo from './logo.svg';
import './App.css';
import Header from './header';
import Heading from './heading';
import React,{useState} from 'react';
import lightContext from './usecontext';


function App() {
  let [light,mode] = useState(true);

  return (
    <lightContext.Provider value = {{light,mode}}>
    <div className={`wrapper ${light?"light":"dark"}`} >
      <Header></Header>
      <Heading></Heading>
    </div>
    </lightContext.Provider>
  );
}

export default App;
