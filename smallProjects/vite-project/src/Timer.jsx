import {useState ,useEffect} from "react"
export default function Clock() {
  const [second ,setSecond]=useState(0) ;
  const [minute ,setMinute]=useState(0) ;
  const [hours ,setHours] =useState(0); 
  const timer=()=>{
    setSecond(new Date().getSeconds())
    setMinute(new Date().getMinutes())
    let newHours=new Date().getHours();

    setHours(newHours%12)
  }
  
  useEffect(()=>{
   let a ;
    timer()
   a=setInterval(timer ,1000)
return ()=>clearInterval(a)
  } ,[])
  return <div>{hours}:{minute}:{second}</div>;
}