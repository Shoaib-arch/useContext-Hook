import React from "react";
export default function PropsDemo(props){
    //props.message = "Working Fine~";// this linne showing error messages because of props are read only.
    return <h1>{props.message}</h1>
}