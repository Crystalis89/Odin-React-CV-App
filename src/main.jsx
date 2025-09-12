import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import personalInfoCV from './components/personalinfo.jsx'
import App from './App.jsx'

// console.log(personalInfoCV)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
