import React ,{createContext, useState} from 'react'
export const userContext=createContext(null)
export const Context = ({children}) => {
    const [userInfo ,setUserInfo]=useState("")
  return (
    <userContext.Provider value={{userInfo ,setUserInfo}}>
        {children}

    </userContext.Provider>
  )
}

