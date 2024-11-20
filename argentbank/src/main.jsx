import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import store from "./Redux/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <store> */}
    <App />
    {/* </store> */}
  </StrictMode>,
)
