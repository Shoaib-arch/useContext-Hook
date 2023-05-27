import React from 'react'
import { useState } from 'react'

function UsWithObj() {
    const obj={
        name: 'Shoaib',
        age:19,
        isYoung: true,
    }

    const [person,setPerson]=useState(obj)
    const changeState=()=>{
        setPerson(previousPersonInfo=>{
            return{
                    ...previousPersonInfo,
                    name:"Qazi Sahab!"
            }
        })
    }
  return (
    <>
    <div>{person.name}</div>
    <div>{person.age}</div>
    <div>{person.isYoung.toString()}</div>
    <button onClick={changeState}>Change</button>
    </>
    )
}

export default UsWithObj