import React from 'react'

function List({ title, status, handleToggle, id, handleDelete }) {
  return (
    <div>
      
      <li>
        {title} - {status ? "completed" : "not completed"}
        <button onClick={() => handleToggle(id)}>toggle</button>
        <button onClick={() => handleDelete(id)}>DELETE</button>
      </li>
    </div>
  );
}

export default List