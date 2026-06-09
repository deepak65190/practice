'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [data ,setData]=useState([])
  const getData=async ()=>{
  try{
const res =await fetch("https://dummyjson.com/users")
  const resData= await res.json()
  setData(resData?.users)
  console.log(resData?.users)
  }catch(error){
    console.log(error)
  }
  


}
  useEffect(()=>{

getData()
  },[])
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>hello</h1>
      <ul>
      {data?.length>0&&data.map((el:any)=><li key={el?.id}>{el?.firstName} {el?.lastName} </li>)}</ul>
    </div>
  );
}
