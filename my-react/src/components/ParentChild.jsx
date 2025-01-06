import { useState } from "react"

const Child =({change})=>{
    const handleClick=()=>{
        change('successful')
    }
    return(
        <div>
            hello
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

const ParentChild = () => {
    const[child,setChild]= useState('')
    const handleClick =(data)=>{
        setChild(data)
    }
  return (
    <div>
        <h1>value from child:{child}</h1>
        <Child change={handleClick}/>
    </div>
  )
}

export default ParentChild