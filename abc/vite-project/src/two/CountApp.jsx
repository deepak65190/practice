

import { useContext } from "react";
import { counterContext } from "./Context.jsx";

export default function CounterAPP() {
  const count = useContext(counterContext);
  

  return (
    <>
      <button onClick={()=>count.setCounter((pre)=>pre+1)}>Increment dude</button>
      <button>Decrement dude</button>
      <button>Reset dude</button>
      <h1>{count.counter}</h1>
    </>
  );
}
