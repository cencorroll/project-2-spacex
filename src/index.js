import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss' // Custom styles

createRoot(document.getElementById('root')).render(<App />)