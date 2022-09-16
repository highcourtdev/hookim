import React, { useState } from 'react'

const UseState = () => {
    const[test, testUpdate] = useState("Highcourt");

    const fnTest = () =>{
        if(!test){
            testUpdate("Maharaja");
        }
        
    }
    
  return (
    <div>
        <h1>{Date.now()}</h1>
        <button onClick={fnTest}></button>
    
    </div>
  )
}

export default UseState