
import React from 'react'
import { NameConsumer } from './NameContext'
import { AgeConsumer } from './PersonContext'
function C() {
  return (
    <div>
    <NameConsumer>
        {(valuee)=><>
            <h1>{valuee}</h1>
            <AgeConsumer>
            {(age)=><h1>{age}</h1>}
        </AgeConsumer>
            </> }
        
    </NameConsumer>
        
    </div>
  )
}

export default C