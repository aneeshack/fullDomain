import React, { useState } from 'react'

const ColorChange = () => {
    const [state,setState]= useState(false)
    const handleClick =()=>{
        if(state){
            setState(false)
        }else{
            setState(true)
        }
        // setState(!state)
    }
  return (
    <div>
        {state? (<p style={{'backgroundColor':'red'}}>hello it is colour change para</p>) :
       ( <p>not a state</p> )}

        <button onClick={handleClick}>change</button>
    </div>
  )
}

export default ColorChange