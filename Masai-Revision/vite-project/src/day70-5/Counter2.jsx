import { useState, useRef ,useEffect } from "react";
export const Counter2 = () => {
  const [counter, setCounter] = useState(0);
  const [minute, setMinute] = useState(0);

  const intervalRef = useRef(null);
  
  const start = () => {
    setCounter(1);
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };
  const stop = () => {
    clearInterval(intervalRef.current);
    console.log("hii");
  };
  const clear = () => {
    setCounter(0);
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <h1>
        Hell world {minute}:{counter}
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={clear}>Clear</button>
    </>
  );
};
