import { createContext  ,useState} from "react"; 
export const CounterContext=createContext(null) ;
export const CounterProvider=(prop)=>{
    console.log(prop)
const [count ,setCount]=useState(0)
return(
    <CounterContext.Provider value={{count,setCount}}>
        {prop.children}
    </CounterContext.Provider>
)
}