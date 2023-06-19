import { useState } from 'react'
import { Route ,Routes } from 'react-router-dom'
import './App.css'
import Headers from './components/Headers'
import Main from './components/Main' 
import Login from './pages/Login' 
import Home from './pages/Home' 
import Register from './pages/Register' ;
import {Context} from "./components/Context"
function App() {
 

  return (
    <>
    <Context>
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/headers' element={<Headers/>}/>

    <Route path='/post' element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </Context>  
    </>
  )
}

export default App
