import { useState } from 'react'
import app from './fireBase'
import {getDatabase ,set,ref} from "firebase/database"
const db=getDatabase(app)
function App() {
 
const postData=()=>{
  set(ref(db ,"deepak/data"),{
    id:2,
    name:"ram" ,
    age:20
  })
}
  return (
    <div className="App">
      <button onClick={postData}>post data</button>
       
    </div>
  )
}

export default App
