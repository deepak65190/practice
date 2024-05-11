import React ,{useState} from "react" ;
import { CardItem } from "./CardItem";

export  const Card=()=>{
    const [itemCount ,setItemCount]=useState(0) ;
    const handleAdd=()=>{
        setItemCount(itemCount+1)
    }
    const handleSub=()=>{
        setItemCount(itemCount-1)
    }
    return(
        <>
        <CardItem addFun={handleAdd} itemCount={itemCount} subFun={handleSub}/><br />
        <CardItem/><br />
       
        <h2>Total</h2>
        </>
    )
}