import React, { useState } from "react";
import styles from "./btn.module.css"
const Btn=()=>{
    const [name ,setName]=useState() ;
    const handleForm =()=>{
        console.log("hii")
        console.log(name)
    }
    return(
        <>
       
       <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="name"/>
       <br/>
       <br/>
       <input type="email" placeholder="email"/>
       <button onClick={handleForm}>submit</button>
         </>
    )
}
export default Btn ;