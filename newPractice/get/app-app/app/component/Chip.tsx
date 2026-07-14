import React, { useState } from "react";

function ChipsInput() {
  const [chipsData, setChipsData] = useState([]);
 
  const [inputText, setInputText] = useState("")
  const handleEnter = (e) => {
    const id = `${Date.now()}-${inputText}`;
    if (e.key === "Enter" &&inputText.trim().length>0) {
      setChipsData((prev:any[]) => [...prev, { id: id, name: inputText.trim() }])
      setInputText("")

      
      
    }
   
  }
  const handleDelete = (id) => {
    setChipsData((prev:any[]) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
      value={inputText}
        type="text" 
        placeholder="Type a chip and press tag"
        className="input"
        onKeyDown={(e) => handleEnter(e)}
        onChange={(e)=>setInputText(e.target.value)}
      />

      <ul>
      {
        chipsData?.length>0 && chipsData?.map((el,ind) => <li key={el.id}>{el?.name}<button onClick={()=>handleDelete(el.id)}>X</button></li>)
        }</ul>

    </div>
  );
}

export default ChipsInput;