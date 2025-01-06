import { useState } from "react"


const Counter = () => {
    const [value, setValue]= useState(0)
    const increment =()=>{
       if(value>=10){
        setValue(10)
       }else{
           setValue(value+1)
       }
    }
    const decrement = ()=>{
        if(value>-10){
            setValue(value-1)
        }
    }
  return (
    <div>
        <h1>Counter: {value}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter