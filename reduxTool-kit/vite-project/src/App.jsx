import { useEffect, useState } from 'react';
import './App.css';


function App() {
  

  const [count, setCount] = useState(1);

  const handleAdd = () => {
   
    setCount(2);
   
  };



  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Click</button>
    </>
  );
}

export default App;
