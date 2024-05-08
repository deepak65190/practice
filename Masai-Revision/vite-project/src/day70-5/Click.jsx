import React, { useEffect, useState } from "react";

const Click = () => {
    const [count, setCount] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
    },[])

    return (
        <>
            <h1>Hello world {hours}:{minute}:{count}</h1>
        </>
    );
};

export default Click;
