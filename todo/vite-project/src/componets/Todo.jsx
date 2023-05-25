import React, { useState } from 'react'
import List from './List' 
import Input from './Input'
function Todo() {
    const [todo ,setTodo]=useState([])
    const handleProp=(text)=>{
const newText = {
  text: text,
  status: false,
  id: new Date().toDateString()+text,
};
setTodo([...todo ,newText])
    }
    const handleToggle=(id)=>{
       const update=todo.map((el)=>el.id===id?{...el ,status:!el.status}:el) ;
       setTodo(update)
    }
    const handleDelete = (id) => {
        const delItem=todo.filter((el)=>el.id!==id) ;
        setTodo(delItem)
    };
  return (
    <div>
      <h3>Todo</h3>
      <Input handleProp={handleProp} />
      {todo.map((el)=>{
        return (
          <List
            key={el.id}
            title={el.text}
            status={el.status}
            id={el.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default Todo