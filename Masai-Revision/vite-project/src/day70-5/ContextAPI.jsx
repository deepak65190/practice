import { useState ,createContext } from "react";

const Theme=createContext(null) ;

const ThemeProvider=({children})=>{
    console.log(children)
    const [t ,setT]=useState("light")
    return(
        <Theme.Provider value={{t,setT}}>
{children}
        </Theme.Provider>
    )
}
export {Theme ,ThemeProvider} ;