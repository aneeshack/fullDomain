import React, { useState } from 'react'


const Child =({value})=>{
    return (
        <div>
            it is child:{value}
        </div>
    )
}
const PassingValue = () => {

  return (
    <div>
        <h1>parent: </h1>
        <Child value={'aneesha'}/>
    </div>
  )
}

export default PassingValue