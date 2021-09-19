import "./heading.css";
import React, {  useContext } from 'react';
import themeContext from "./usecontext"

function Footer()
{
    const {theme} = useContext(themeContext);
    const {changetheme} = useContext(themeContext);
    return(
        <div className = {`footer ${theme?" light":"black"}`} >
            <h1 >Footer </h1>
            
        </div>
    )
}

export default Footer;