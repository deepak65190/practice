import React, { useState } from 'react';

const Circule = () => {
    const [length ,setLength]=useState(4)
    const arr = Array.from({ length }, (_, index) => index + 1);
console.log(length)
    const circle = {
        margin: "auto",
        borderRadius: "50%",
        border: "1px solid red",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    return (<>
      <input type="number" value={parseInt(length)} onChange={(e)=>setLength(e.target.value)} />
        <div style={{ position: "relative", width: '200px', height: '200px' }}>
          
            {arr.map((el, ind) => (
                <div
                    key={ind}
                    style={{
                        ...circle,
                        width: `${100 + (ind * 50)}px`,
                        height: `${100 + (ind * 50)}px`
                    }}
                >
                  
                </div>
            ))}
        </div>
        </>
    );
};

export default Circule;
