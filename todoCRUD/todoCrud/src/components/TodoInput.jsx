import React, { useState } from "react";

const TodoInput = ({ add, id, eText, eStatus }) => {
  const [text, setText] = useState("");

  const hanldeTodo = () => {
    add(text);
    setText("");
  };
  if (id) {
    text=eText ,id=id,status=eStatus
  }
  return (
    <div>
      <input
        type="text"
        placeholder="add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={hanldeTodo}>add</button>
    </div>
  );
};

export default TodoInput;
