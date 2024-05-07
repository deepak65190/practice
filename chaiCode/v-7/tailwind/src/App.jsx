import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-white p-1   rounded-full bg-red-700">
        Hello
      </h1>
      <button className="rounded border-spacing-1">submit</button>
    </>
  );
}

export default App;
