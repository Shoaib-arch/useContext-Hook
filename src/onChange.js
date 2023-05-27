import { useState } from "react";

export default function Fun(){
   const [valuee,setValue]=useState("")
    const onChange=function(event){
        setValue(event.target.value);
    }

    const buttonClick = function ( ){
        alert(valuee);
        setValue("");
    }
    return (
        <div>
            <input value={valuee} type="text" onChange={onChange}></input>
           
            <button onClick={buttonClick}>Click to get Value!</button>
        </div>
    )
}