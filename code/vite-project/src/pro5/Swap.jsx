import { useState } from "react"

const Swap=()=>{
    const [one ,setOne]=useState(1)

    const [two,setTwo]=useState(2)
    const handleSwap=()=>{
        setOne(two)
        setTwo(one)
    }
    return(
        <>
        <h1>hello {one}</h1>
        <button className="bg-black text-white rounded-md p-2" onClick={handleSwap}>Swap</button>
        <h1>hello {two}</h1>
        </>
    )
}
export default Swap