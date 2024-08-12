import { useState ,useEffect } from "react"
import { useRouter } from "next/router" ;
import Link from "next/link";
const Dummy=()=>{
    const [data ,setData]=useState([]) ;
    const router=useRouter()
    useEffect(()=>{
const fetchData=async()=>{
const data =await fetch("https://dummyjson.com/products") ;
const res=await data.json() ;
setData(res.products)
}
fetchData()
    },[])
    return <>
    <h5>Dummy Data</h5>
    {
        data&&data.map((el)=><div key={el.id}><Link href={`/dummy/${el.id}`}>{el.title}</Link></div>)
    }
    </>
}
export default Dummy