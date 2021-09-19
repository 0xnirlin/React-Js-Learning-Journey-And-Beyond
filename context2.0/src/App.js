import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import themeContext from './usecontext';
import Heading from './heading';
import Footer from './footer';

function App() {
  let [theme, changetheme] = useState(true);
  function changeMode()
  {
    changetheme(!theme);
  }
  return (
    <themeContext.Provider value = {theme}>
    <div className="wrapper">
         <div className =  {`wrapper1 ${theme?"light":"black"}`} onClick = {changeMode}>
            <div className = {`${theme?"toggle":"on"}`}>
                <div className = {`${theme?"round":"trigger"}`}>

                </div>
            </div>
        </div>
        <Heading></Heading>
        <Footer></Footer>

    </div>
    </themeContext.Provider>
    
  );
}

export default App;
