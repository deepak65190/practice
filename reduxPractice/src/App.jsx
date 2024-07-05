import { useState } from 'react'

import MainRoutes from './pages/mainRoutes'
import './App.css'
import Login from './pages/Login'
import Scroll from './Scroll'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Scroll/>
    </div>
  );
}

export default App
