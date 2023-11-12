import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("teal");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="bg-black p-4 rounded-full w-2/4 m-auto absolute inset-x-0 bottom-12">
        <button
          onClick={() => setColor("red")}
          className="text-white rounded-full bg-red-500 px-5 py-2 text-xl text-center me-2 ms-8"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="text-white rounded-full bg-green-400 px-5 py-2 text-xl text-center me-2"
        >
          Green
        </button>
        <button
          onClick={() => setColor("cyan")}
          className="text-white rounded-full bg-cyan-400 px-5 py-2 text-xl text-center me-2"
        >
          Cyan
        </button>
        <button
          onClick={() => setColor("blue")}
          className="text-white rounded-full bg-blue-700 px-5 py-2 text-xl text-center me-2"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("indigo")}
          className="text-white rounded-full bg-indigo-800 px-5 py-2 text-xl text-center me-2"
        >
          Indigo
        </button>
        <button
          onClick={() => setColor("voilet")}
          className="text-white rounded-full bg-violet-600 px-5 py-2 text-xl text-center me-2"
        >
          Voilet
        </button>
        <button
          onClick={() => setColor("purple")}
          className="text-white rounded-full bg-purple-950 px-5 py-2 text-xl text-center me-2"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("pink")}
          className="text-white rounded-full bg-pink-500 px-5 py-2 text-xl text-center me-2"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="text-white rounded-full bg-yellow-400 px-5 py-2 text-xl text-center me-2"
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
