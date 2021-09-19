import "./header.css";
import React, { useState, useContext } from 'react';
import lightContext from "./usecontext"

function Header()
{
    let [change, switcher] = useState(true);
    const {light} = useContext(lightContext)
    const {mode} = useContext(lightContext)
    function changeMode()
    {
        switcher(!change);
        mode(!light);
        
    }

    return(
        <div className =  {`wrapper1 ${light?" ":"black"}`} onClick = {changeMode}>
            <div className = {`${change?"toggle":"on"}`}>
                <div className = {`${change?"round":"trigger"}`}>

                </div>
            </div>
        </div>
    )
}

export default Header;