import React, { useEffect, useRef, useState } from 'react'
let c ;
const CountDown = () => {
    const [timer ,setTimer]=useState(5) ;
const [load ,setLoad]=useState(false)
  
function handleCounter(){
    setTimer(timer-1)
    setLoad(true)
 c=setInterval(()=>{
   
setTimer((pre)=>pre-1)
},1000)

}
if(timer==0){

    clearInterval(c)
}
   function handlStop(){
  
    setLoad(false)
    clearInterval(c)
   }
  return (
    <div>
      <h1>Counter </h1>
      <button onClick={handleCounter} disabled={load}>Start  </button>
      <button>{timer}</button>
      <button onClick={handlStop}>Stop</button>
    </div>
  )
}

export default CountDown
