
import { useEffect  ,useState} from "react"
function App() {
  const [count ,setCount]=useState(5)
 useEffect(()=>{
let id ;
// console.log(id)
if(count==0){
  
  clearInterval(id) ;
  
}else{
  id=setInterval(()=>setCount((pre)=>pre-1),1000) ;
}

 return ()=>{
  console.log(typeof id)
  clearInterval(id)
 }
 },[count])
  return (
    <>
    <h2>{count}</h2>
    </>
  )
}

export default App
