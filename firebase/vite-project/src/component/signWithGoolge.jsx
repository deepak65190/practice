import React from "react";
import app from "../fireBase"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
const Google=()=>{
    const auth=getAuth()
   const provider = new GoogleAuthProvider();

   const googleSign=()=>{
    signInWithPopup(auth ,provider).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    

   }
    return (
        <button onClick={googleSign}>sign with Google</button>
    )
}
export default Google