import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Flight from './Flight'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Flight />
  </StrictMode>,
)
