import React, { useCallback, useState } from 'react'

const ChildComp = React.memo(function ChildComp({ onClick }) {
    const [state,setState]= useState(0)

    return (
      <div>
        <h3>state value:{state}</h3>
        <button onClick={()=>setState(state+1)}>changestate</button>
        <button onClick={onClick}>Click</button>
      </div>
    );
  });
const SampleUsecallback = () => {
    const [count,setCount]= useState(0)
    const increment =useCallback(()=>{
        console.log('callback is calling')
        setCount((prevCount)=>prevCount+1,[])
    })
  return (
    <div>
        <h3>use call back: {count}</h3>
       <ChildComp onClick={increment}/>
    </div>
  )
}

export default SampleUsecallback