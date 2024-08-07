import { createContext, useState } from "react";

export const counterContext = createContext(null);

export default function Counter({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <counterContext.Provider value={{ counter, setCounter }}>
      {children}
    </counterContext.Provider>
  );
}
