import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './day70-5/ContextAPI.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    
<ThemeProvider>
    <App />
    </ThemeProvider>
    
)
