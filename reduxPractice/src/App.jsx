import { useState } from 'react'

import MainRoutes from './pages/mainRoutes'
import './App.css'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainRoutes />
      {/* <Login/> */}
    </div>
  );
}

export default App
