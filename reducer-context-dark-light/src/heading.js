import "./heading.css";
import React, {  useContext } from 'react';
import lightContext from "./usecontext"

function Heading()
{
    const {light} = useContext(lightContext);
    return(
        <div className = {`wrapper2 ${light?" ":"black"}`}>
            <h1 className = 'primary-h'>This is Ahmad Niazi Here </h1>
            
        </div>
    )
}

export default Heading;