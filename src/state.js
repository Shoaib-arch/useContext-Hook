import React ,{ useState } from "react";

export default function Component(){
    const [count,setCount]=useState(0);

    const change_State=()=> setCount(count+1);

    return(
        <div>
        <p1>Count is : {count}</p1>
        <button onClick={change_State}>Click!</button>
        </div>
    )
}