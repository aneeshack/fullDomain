import React, { useState } from 'react'

const useCounter =(initialvalue =0)=>{
    const[count,setCount]= useState(initialvalue)
    const increment =()=>{setCount((prevCount)=>prevCount+1)}
    const decrement =()=>{setCount((prevCount)=>prevCount-1)}
    return {count, increment,decrement}
}
const Customhook = () => {
    const {count,increment,decrement}= useCounter(6)
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Customhook