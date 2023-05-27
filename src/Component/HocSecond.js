import { useState } from "react";
export default function HocSecond(){
    const[name,SetName]=useState("");
    return <>
        <h1>{name}</h1>
        <button onClick={SetName("Shoaib")}>Change ME</button>

    </>
}
