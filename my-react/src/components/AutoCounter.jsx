import React, { useState } from 'react'

const AutoCounter = () => {
    const [count, setCount]= useState(0)
    const increment =()=>{
        const timer = setInterval(() => {
           setCount((prevCount)=>{
            if(prevCount===10){
                clearInterval(timer)
                return prevCount
            }
            return prevCount+1
           })
        }, 1000);
    }
const decrement =()=>{
    const timer =setInterval(() => {
        setCount((prevCount)=>{
            if(prevCount===0){
                clearInterval(timer)
                return prevCount
            }
            return prevCount-1
        })
    }, 500);
}
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default AutoCounter