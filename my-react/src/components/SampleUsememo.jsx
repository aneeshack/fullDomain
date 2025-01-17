import React, { useMemo, useState } from 'react'

const SampleUsememo = () => {
    const [number, setNumber]=useState(0)
    const [text,setText]=useState('')
    const calcFactorial =(n)=>{
        console.log('fact is running')
        if(n<0)return 0
        return n===0?1 :n*calcFactorial(n-1)

    }
    const factorial = useMemo(()=>calcFactorial(number),[number])
  return (
    <div>
        sample of use memo
        <input type="number" onChange={(e)=>setNumber(e.target.value)} />
        <h3>factorial:{factorial}</h3>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
        <h4>you have typed:{text}</h4>
    </div>
  )
}

export default SampleUsememo