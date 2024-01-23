import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
