import React, { useState } from "react";

export default function State(props){
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Shoaib");

    const updateState=()=>{
        setCount(count+1);
        setName(name);
    }


    


    return(
        <>
        <h1>Count: {count}</h1>
        <h1>name: {name }</h1>
        <button onClick={updateState}>Change State!!!!!!</button>
        
        </>
    )
}
