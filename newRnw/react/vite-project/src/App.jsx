import { useState } from 'react' ;

import './App.css'

function App() {
const [count ,setCount]=useState(0) ;
console.log(count)
  return (
    <>
     <h1>Couter</h1>
  <button onClick={(e)=>setCount(count+1)}>Count <span style={{color:"blue"}} >{count}</span></button>
    </>
  )
}

export default App
