import React, { useRef } from 'react'

const SampleUseref = () => {
    const countRef = useRef(0)
    const timer =()=>{
       const interval = setInterval(() => {
            countRef.current++
            console.log(countRef.current)
            if(countRef.current ===10){
                clearInterval(interval)
            }
        }, 100);
    }
  return (
    <div>
        <button onClick={timer}>start timer</button>
    </div>
  )
}

export default SampleUseref