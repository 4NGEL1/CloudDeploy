import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css'
import './Components/nav/Nav'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

function App() {
  return (
    <Router>
      <Routes>
	      <Route exact path = "/" element = {<Login />} />
        <Route exact path = "/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
