import React, { useState } from 'react'

const Child = React.memo(function Child({increment}){
  console.log('inside react.memo')
  return(
    <div>
      <h4>value from parent:{increment}</h4>
    </div>
  )
})

const SampleReactmemo = () => {
  const[value,setValue]= useState(0)
  return (
    <div>
      <h3>parent components:{value}</h3>
      <button onClick={()=>setValue(value+1)}>change</button>
        <Child increment='salary increment'/>
    </div>
  )
}

export default SampleReactmemo