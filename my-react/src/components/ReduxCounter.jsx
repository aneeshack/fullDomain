import React from 'react'
import {createStore} from 'redux'
import {Provider, useDispatch, useSelector} from 'react-redux'

const counterReducer =(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
            return {count: state.count-1}
        case 'RESET':
            return {count:0}
        default:
        return state
    }
}

const store = createStore(counterReducer)

const Counter =()=>{
    const dispatch = useDispatch()
    const count = useSelector(state=>state.count)
    return(
        <div>
            <h1>counter application</h1>
            <h3>{count}</h3>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
            <button onClick={()=>dispatch({type:'RESET'})}>RESET</button>
        </div>
    )
}

const ReduxCounter = () => {
  return (
   <Provider store={store}>
    <Counter/>
   </Provider>
  )
}

export default ReduxCounter