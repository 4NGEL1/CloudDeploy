import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './Components/nav/Nav'
import Login from './Components/Login/Login'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
    <App/>
  </React.StrictMode>,
)
