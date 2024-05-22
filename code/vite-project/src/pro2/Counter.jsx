import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(10);

    const handleAdd = () => {
        setCounter(prevCounter => {
         
            return prevCounter + 1;
        });
    };

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleAdd}>add</button>
        </>
    );
};

export default Counter;
