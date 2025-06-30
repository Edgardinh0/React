import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Greeting } from './Greeting.jsx';
import { Volar } from './volar-bebe.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Volar />
  </StrictMode>,
)
