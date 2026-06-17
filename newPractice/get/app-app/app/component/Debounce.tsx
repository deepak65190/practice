"use client"
import { useEffect, useState } from "react"

const Debounce =()=>{
    const [text ,setText]=useState("") 
    const [d ,setD]=useState("")
   
   useEffect(()=>{
   let id= setTimeout(()=>{
    setD(text)

    },500)
return ()=> clearTimeout(id)

   },[text])
   

    return <div><h1 className="text-2xl font-bold">Debounce {d}</h1>
    <input type="text" placeholder="type anything"  className="border border-red-500  focus:border-red-400 focus:border ml-5 p-3" value={text} onChange={(e:any)=>setText(e.target.value)}/></div>
}
export default Debounce