import React from 'react'
import {Link }from "react-router-dom"

function Dynamic() {
  return (
        <div>
            <Link to="/">Home Page</Link>
            <Link to="/about">About Page</Link>
            <Link to="/contact">contact Page</Link>

            
        </div>
  )
}

export default Dynamic;