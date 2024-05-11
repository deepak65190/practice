import { createContext ,useState } from "react";
export const  card=createContext(null) ;
export const CardProvider=({children})=>{
    const [total ,setTotal]=useState(0) ;
return (
    <card.Provider value={{total ,setTotal}}>
        {children}
        </card.Provider>
)
}
