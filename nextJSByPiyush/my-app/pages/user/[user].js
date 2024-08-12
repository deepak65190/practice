import { useRouter } from "next/router"
export default function name(){
    const router=useRouter() ;
  
    return <>
    <h3>user pages dynamic </h3>
    <button onClick={(e)=>router.push("/")}>home</button>
    </> 

}