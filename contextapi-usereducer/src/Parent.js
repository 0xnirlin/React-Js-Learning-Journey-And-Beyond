import Child from "./Child";
import React, {useContext} from "react";
import ValueContext from "./valuecontext";
function Parent(props)
{
    let value = useContext(ValueContext)
    return(
    <div>
        Parent {value}
        <Child ></Child>
    </div>
    ) 
}

export default Parent;