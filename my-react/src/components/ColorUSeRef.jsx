import React, { useRef } from 'react'

const ColorUSeRef = () => {
    const inputRef = useRef(null)
    const handleClick =()=>{
        inputRef.current.style.color ='red'
    }
  return (
    <div>
        <input type='text' ref={inputRef} />
       <button onClick={handleClick}>click</button>
    </div>
  )
}

export default ColorUSeRef