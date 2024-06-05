import { useSelector ,useDispatch } from "react-redux"
// import { add ,sub } from "./CounterSlice";
import { fetchTodos } from "./ApiSlice";
import { useEffect } from "react";
const Counter=()=>{
    //const count = useSelector((state)=>console.log(state))


  const dispatch=useDispatch()

useEffect(()=>{
   dispatch(fetchTodos())
})
    return(
        <>
       
       
        
       <h1>hello</h1>
        </>
    )
}
export default Counter