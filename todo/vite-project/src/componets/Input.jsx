import React ,{useState} from 'react'

function Input({handleProp}) {
  const [text, setText] = useState("");
  const handleAdd = () => {
    handleProp(text);
    setText("");
  };
  return (
    <div>
      <h3>Input</h3>
      <input
        type="text"
        value={text}
        placeholder="enter text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}

export default Input