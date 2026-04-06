import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Repository from './components/Repository.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Repository>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Repository>
  </StrictMode>,
)
