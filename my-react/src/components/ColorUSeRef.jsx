import React, { useRef } from 'react'

const ColorUSeRef = () => {
    const inputRef = useRef(null)
    const handleClick =()=>{
        inputRef.current.style.color ='red'
    }
  return (
    <div>
        <input type='text' ref={inputRef} it is colour changing />
       <button onClick={handleClick}>click</button>
    </div>
  )
}

export default ColorUSeRef