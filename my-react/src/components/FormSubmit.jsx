import React, { useRef, useState } from 'react'

const FormSubmit = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const [error,setError] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        if(!name ||!email){
            setError('both name and email need')
            return
        }
        setError('')
        console.log('form submitted:',{name,email})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">name</label>
        <input type="text" ref={nameRef} />
        </div>
        <div>
       <label htmlFor="">email</label>
        <input type="text" ref={emailRef} />
        </div>
       {error && <p style={{color:'red'}}>{error}</p>}
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default FormSubmit