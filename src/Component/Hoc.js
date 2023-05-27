import React from "react"

export default function HOC(props){

    return <h1 style={{backgroundColor:'red'}}>Changed! <props.cmp/></h1>
    
}

