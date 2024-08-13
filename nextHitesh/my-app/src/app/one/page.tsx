'use client';
import { useState } from "react"
const Counter=()=>{
    const [counter ,setCounter]=useState(0)
    return(
        <>
        <div className="flex justify-center">
        <button className="bg-blue-500 text-white font-semibold py-2 px-10 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={()=>setCounter(counter+1)}>+</button>
        <button className="bg-blue-500 text-white font-semibold py-2 mx-5 px-10 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Counter {counter}</button>
        <button className="bg-blue-500 text-white font-semibold py-2 px-10 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={()=>setCounter(counter-1)}>-</button>
        </div>
        </>
    )
}
export default Counter