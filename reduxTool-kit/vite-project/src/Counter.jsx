import { useSelector ,useDispatch } from "react-redux"
import { add ,sub } from "./CounterSlice";
const Counter=()=>{
    const count = useSelector((state)=>state.value)
  

    const dispatch=useDispatch()
const handleAdd=()=>{
    dispatch(add(5))
}
const handleSub=()=>{
dispatch(sub(5))
}
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        </>
    )
}
export default Counter