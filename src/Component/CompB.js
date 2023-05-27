import React from 'react'
import { NameContext } from './MainPage';
import { createContext } from 'react';
import C from './CompC';
function CompB() {
    
  return (
    <div>
        <h1>B Component</h1>
        <C/>
    </div>
  )
}

export default CompB