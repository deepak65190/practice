import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CounterProvider from './Context/Contex.jsx'
import  Counter from "./two/Context.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Counter>
    <App />
    </Counter>
 
)