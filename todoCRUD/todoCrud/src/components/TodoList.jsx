import React from 'react'

const TodoList = ({ status, text, id, del, toggle ,edit }) => {
  return (
    <div>
      <p>
        {text} - {status ? "yes" : "no"}
        <button onClick={() => del(id)}>delete</button>
        <button onClick={() => toggle(id)}>toggle</button>
        <button onClick={()=>edit(id,text,status)} >edit</button>
      </p>
    </div>
  );
};

export default TodoList