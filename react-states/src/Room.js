import React, {useState} from 'react';
import './App.css'

function Room(){
    let [islit, setlit] = useState(true);
    let [age, setAge] = useState(45);
    let [textcolor, changeColor] = useState('red');
    function updateLit()
    {
        console.log("Button CLicked");
        if(textcolor === 'red')
        {
            changeColor("orange");

        }
        else
        {
            changeColor("red");
        }
        setlit(!islit);
        setAge(++age);
    }
  
    return(
        <div>
            This is room is :  <span style = {{color: textcolor}}>{islit?"Burning":"Dark"}</span>
            <br/>
            {age}
            <button onClick={updateLit} >
            Toggle Light
            </button>
        </div>
    )
}

export default Room;