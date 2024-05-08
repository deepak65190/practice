import { useState } from "react";
const Batch=()=>{
    const [count ,setCount]=useState(0) ;
const handleAdd=()=>{
    setCount(count+100) ;
    setCount(count+100) ;
    setCount(count+100) ;
    setCount(count+100) ;
}
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleAdd}>add</button>
        </>
    )
}
export default Batch