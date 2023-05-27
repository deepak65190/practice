import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
function Todo() {
  const [todo, setTodo] = useState([]);
  const [editId ,setEditId]=useState("") ;
  const [editText ,setEdtiText]=useState("") ;
  const [editStatus ,setStatus]=useState("") ;
  const handleAdd=(text)=>{
    const newTodo={
       text,status:false ,id: new Date().getSeconds()+text
    }
    setTodo([...todo ,newTodo])
  }
  console.log(todo)
  const handleDelte =(id)=>{
    const upTodo=todo.filter((el)=>el.id!==id) ;
    setTodo(upTodo)
  }
  const hanldeToggle=(id)=>{
   const updateStatus=todo.map((el)=>el.id===id?{...el,status:!el.status}:el)
   setTodo(updateStatus)
  }
  const handleEdit =(id ,text,status)=>{
    
    setEditId(id) ;
    setEdtiText(status);
    setStatus(text);
  }
  
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <TodoInput add={handleAdd} eText={editText} eStatus={editStatus} id={editId} />
      </div>
      <div>
        {todo.map((el) => (
          <TodoList
            key={el.id}
            text={el.text}
            status={el.status}
            id={el.id}
            del={handleDelte}
            toggle={hanldeToggle}
            edit={handleEdit}
          />
        ))}
       
      </div>
    </div>
  );
}

export default Todo;
