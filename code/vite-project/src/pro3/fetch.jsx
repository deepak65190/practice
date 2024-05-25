import { useState ,useEffect } from "react";
 async function ab(){
    let res=await fetch("https://fakestoreapi.com/products") ;
  let data=await res.json() 
  return data
}



const FetchData=()=>{
    const [data ,setData] =useState([])
    useEffect(()=>{

        ab().then((data)=>setData(data)) ;
    },[])
    
    console.log(data)
    return(
        <h1>hello</h1>
    )
}
export default FetchData