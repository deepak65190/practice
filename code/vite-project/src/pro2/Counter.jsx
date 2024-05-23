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
            <button onClick={handleAdd} className="text-white bg-cyan-500 hover:bg-cyan-600 p-2 rounded-md mx-20">add</button>
        </>
    );
};

export default Counter;
