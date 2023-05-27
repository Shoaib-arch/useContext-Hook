import React,{useState} from "react"
export default function UsWithArray(){
    const num=[1,2,3,4,5];
    const [numbers,setNum]=useState(num)

    const addElement=()=>{
        setNum(prev=>{
            return[

                ...numbers,123
            ]
        })
    }

    return(<>
        
        <ul>
            {numbers.map((value,i)=> <h1 key={i} >{i} index of {value}</h1>)}
        </ul>
        <button onClick={addElement}>Update!</button>
        </>)
}