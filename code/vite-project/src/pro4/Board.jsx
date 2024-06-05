import React ,{useRef, useEffect, useState, useCallback} from 'react'

const Board = () => {
    const [password ,setPassword]=useState("hello") ;
    const [range ,setRange]=useState(3) ;
    const [charAllow ,setCharAllow]=useState(false) ;
    const [nums ,setNums]=useState(false) ;
const ref=useRef(null)
    const handleRange=(e)=>{
setRange(e.target.value)
    }
    const handleNums=(e)=>{
        setNums(e.target.checked)
    }
    const handleChar=(e)=>{
        setCharAllow(e.target.checked)
    }
    function pass(){
        let char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
        if(charAllow){
            char+="[]{}%@#,\/"
        }
        if(nums){
            char+="1234567890"
        }
       
        let str="" ;
        for(let i=1 ;i<=range ; i++){
            let random=Math.floor(Math.random()*char.length) ;
            
           str+=char.charAt(random)
        }
        setPassword(str)
    }
    
    const handleCopy=async()=>{
    await navigator.clipboard.writeText(password) ;
    ref.current.select()
      ref.current.setSelectionRange(0, 5)
    }
const gen=useCallback(pass ,[range ,nums,charAllow])
    
useEffect(()=>{
gen()
},[range ,nums,charAllow ,gen]) ;

  return (
    <>
      <input ref={ref} style={{width:"300px",marginLeft:"50px"}} type="text" value={password} readOnly />
      <button style={{backgroundColor:"red",color:"white"}} onClick={handleCopy}>copy</button>
      <br />
      <input type="range" min={1} onChange={handleRange} max={100} value={range}  /><label htmlFor="">{range}</label>
      <input type="checkbox" checked={nums} onChange={handleNums} /><label htmlFor="">Numbers</label>
      <input type="checkbox" checked={charAllow} onChange={handleChar} /><label htmlFor="">special char</label>
    </>
  )
}

export default Board
