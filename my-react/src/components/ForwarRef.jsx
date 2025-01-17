import React, { forwardRef, useRef } from 'react'

const Child = forwardRef(function Child({value},ref){
    return (
        <div>
            <h1>child componenet</h1>
            <h2>value:{value}</h2>
            <input type="text" placeholder='enter something'
            ref={ref} />
        </div>
    )
})

const ForwarRef = () => {
    const inputRef = useRef(null)
    const valueRef = useRef('')
    const handleRef =()=>{
        valueRef.current = inputRef.current.value
        console.log(valueRef.current)
    }
  return (
    <div>
        <h4>parent componenet</h4>
        <button onClick={handleRef}>send ref</button>
        <Child  ref={inputRef} value={'it is from parents'}/>
    </div>
  )
}

export default ForwarRef