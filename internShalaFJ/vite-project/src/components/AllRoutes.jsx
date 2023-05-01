import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Hello from './Hello'
import {Route ,Routes} from "react-router-dom"
function AllRoutes() {
  return (
   <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/home' element={<Hello/>}/>

   </Routes>
  )
}

export default AllRoutes
