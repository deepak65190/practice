import React, { useState, useRef } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startCounter = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  const stopCounter = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const clearCounter = () => {
    setCount(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={isRunning ? stopCounter : startCounter}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={clearCounter}>Clear</button>
    </div>
  );
}

export default CounterApp;
