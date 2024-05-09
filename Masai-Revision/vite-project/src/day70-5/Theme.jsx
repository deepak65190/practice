import React ,{useContext} from "react";
import { Theme } from "./ContextAPI.jsx";
export const ThemeC =()=>{
    const a=useContext(Theme) ;
    const handleTheme=()=>{
        a.t==="light"?a.setT("dark"):a.setT("light") ;
        document.body.style.backgroundColor = a.t === 'light' ? '#ffffff' : '#000000';
    document.body.style.color = a.t === 'light' ? '#000000' : '#ffffff';
         
    }
   const style={
    l:{
        backgroundColor:"white",
        color:"black" 
    } ,
    d:{
        backgroundColor:"black",
        color:"white" 
    }
   }
    return(
        <>
        <h1>hello world</h1>
        <button style={a.t === "light" ? style.l : style.d} onClick={handleTheme}> {a.t}</button>

       
        </>
    )
}