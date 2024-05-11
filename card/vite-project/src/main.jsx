import React from 'react'
import ReactDOM from 'react-dom/client'
import { CardProvider } from './Card/context'
import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <CardProvider>
    <App />
    </CardProvider>
  </React.StrictMode>,
)
