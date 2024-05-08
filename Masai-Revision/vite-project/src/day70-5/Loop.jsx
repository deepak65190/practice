import React, { useEffect, useState } from "react";

const Loop = () => {
    const [count, setCount] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            if (count < 59) {
                setCount((prevCount) => prevCount + 1);
            } else {
                setCount(0);
                setMinute((prevMinute) => prevMinute + 1);
            }
            if(minute>60){
              setMinute(0) ;
              setHours((prev)=>prev+1) 
            }
        }, 1000);

        return () => clearInterval(id);
    }, [count,minute,hours]);

    return (
        <>
            <h1>Hello world {hours}:{minute}:{count}</h1>
        </>
    );
};

export default Loop;
