// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppState from './Context/AppState.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <AppState>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </AppState>
  
)
