import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";
function CounterApp() {
  const count = useContext(CounterContext);
  console.log(count);
  return (
    <div>
      <h1>{count.count}</h1>
      <button onClick={() => count.setCount(count.count + 1)}>add</button>
      <button onClick={() => count.setCount(count.count - 1)}>minus</button>
    </div>
  );
}

export default CounterApp;
