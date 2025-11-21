import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoContextProvider } from './Context/TodoContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <TodoContextProvider>
    <StrictMode>
     <App />
    </StrictMode>

  </TodoContextProvider>
 
)
