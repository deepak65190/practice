import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Signup from './Signup' ;
import Login from './Login';
import TaskScreen from './TaskScreen';
import AddTask from './AddTask';
import SinglePage from './SinglePage';
const AllRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/tsc' element={<TaskScreen/>}/>
        <Route path='/tsc/:use_id' element={<SinglePage/>}/>
        <Route path='/addTask' element={<AddTask/>}/>
    </Routes>
  )
}

export default AllRouter