import React ,{useState} from "react" ;
export  const CardItem=(props)=>{
 console.log(props)
    return(
        <>
        <span>B re 200</span>
        <button  onClick={props.addFun()}>+</button>
        <button>{props.itemCount}</button>
        <button disabled={props.itemCount==0} onClick={props.subFun()}>-</button>
        </>
    )
}