import React, { useState } from 'react'

function UsComponent() {
    const myarray =useState('Adil');
    const [name,setName]=useState('Adil');
    const change= () => {
        
            setName("Shoaib!");
    }
  return (
    <div>
    <div>{name}</div>
    <div>{myarray[1]}</div>
    <button onClick={change}>Update me </button>
    </div>
    )
}

export default UsComponent