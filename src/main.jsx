import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import fbconfig from './fbconfig.js'
import { initializeApp } from 'firebase/app';
// import { auth, database } from './fbconfig';



const app = initializeApp(fbconfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
