import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TooltipProvider } from "@/components/ui/tooltip"
import TanStackQuery from './provider/Tanstack.jsx'
createRoot(document.getElementById('root')).render(
    <TanStackQuery>  
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </TanStackQuery>
)
