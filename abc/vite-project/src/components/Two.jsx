import React ,{useContext} from 'react'
import { CounterContext } from '../Context/Contex';
const Two = () => {
    
    const counter1=useContext(CounterContext) ;
   const handleAdd=()=>{
    counter1.setCount(counter1.count+1)
   }
   const handleSub=()=>{
    counter1.setCount(counter1.count-1)
   }
   const handleReset=()=>{
    counter1.setCount(0)
   }
  return (
    <div>
      <h2>Counter</h2> 
      <button onClick={handleAdd}>+</button>
      <button>{counter1.count}</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Two
