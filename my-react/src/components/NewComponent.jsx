import React, { useRef, useState } from 'react'

const NewComponent = () => {
    const inputRef =useRef(null)
    let [state, setState]= useState('')
    const handleClick =()=>{
        setState(inputRef.current.value)
        // inputRef.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <h3>{state}</h3>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default NewComponent