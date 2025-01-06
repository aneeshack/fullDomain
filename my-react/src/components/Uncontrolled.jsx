import React, { useRef, useState } from 'react'

const Uncontrolled = () => {
    const inputRef = useRef(null)
    const [val,setVal]= useState('')
    const handleClick=()=>{
        setVal(inputRef.current.value)
    }
  return (
    <div>

        <input type="text"  ref={inputRef}/>
        <p>{val}</p>
        <button onClick={handleClick}> click</button>

      
    </div>
  )
}

export default Uncontrolled