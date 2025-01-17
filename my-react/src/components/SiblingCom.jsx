import React, { useState } from 'react'

const Sibling1 = ({message,setMessage})=>{
    return(
        <div>
            <h2>Sibling1</h2>
            <input type="text"
            placeholder='write something' 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
        </div>
    )
}
const Sibling2 = ({message})=>{
    return(
        <div>
            <h2>Sibling2 :{message}</h2>
          
        </div>
    )
}

const SiblingCom = () => {
    const [message,setMessage]= useState('')
  return (
    <div>
        <h1>parent component</h1>
        <Sibling1 message={message} setMessage={setMessage}/>
        <Sibling2 message={message}/>
    </div>
  )
}

export default SiblingCom