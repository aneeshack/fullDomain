import React, { useEffect, useState } from 'react'

const WithLoading =(WrappedComponet)=>{
    return function WithLoading(props){
        const [loading,setLoading]= useState(true)
        useEffect(()=>{
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        },[])
        if(loading){
            <div>loading....</div>
        }
        return(
            <WrappedComponet/>
        )
    }
}
const BaseComponent = () => {
    return <div>This is the wrapped component!</div>;
  };
  
  // Enhanced component using HOC
  const EnhancedHocExample = WithLoading(BaseComponent);

const HocExample = () => {
  return (
    <div>
        <EnhancedHocExample/>
    </div>
  )
}

export default HocExample