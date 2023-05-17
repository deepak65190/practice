import React, { useEffect, useState } from 'react'
import SinUpInbuild from './SinUpInbuild'
import Login from './Login' ;
import app from '../fireBase';
import { getAuth, onAuthStateChanged ,signOut} from "firebase/auth";
function VerifyUserLogin() {
    const [user ,setUser]=useState(null)
    const auth=getAuth(app) ;
useEffect(()=>{
onAuthStateChanged(auth ,user=>{
    if(user){
        setUser(user)
    }else{
        setUser(null)
    }
})
},[])
 
   if(user===null){
    return(
        <>
        <SinUpInbuild/>
        <Login/>
        </>
    )
   }
  return (
    <div>
    <h1>{user.email} </h1>
      <button onClick={()=>signOut(auth)}>logout</button> 
    </div>
  );
}

export default VerifyUserLogin