import ValueContext from "./valuecontext";
import React, {useContext} from 'react'



function Child(props)
{
    let value = useContext(ValueContext)
    return(
    <div >
        Child number {value}
    </div>
    )
}

export default Child;