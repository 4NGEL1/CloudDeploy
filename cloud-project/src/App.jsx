import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css'
import './Components/nav/Nav'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Cloud from './Components/Cloud/Cloud';
import Footer from "./Components/Footer/footer";
import Sass from "./Components/SASS/Sass";
import Pass from "./Components/PASS/Pass";
import Iass from "./Components/IASS/Iass";

function App() {
  const [data, setData] = useState();
  useEffect(() =>{
    let prop = localStorage.getItem("Auth");
    setData(prop);
  }, []);
  return (
    <Router>
      <Routes>
	      <Route exact path = "/" element = {<Login />} />
        <Route exact path = "/home" element = {<Home />} />
        <Route exact path = "/cloud" element = {<Cloud/>} />
        <Route exact path = "/iass" element = {<Iass/>} />
        <Route exact path = "/pass" element = {<Pass/>} />
        <Route exact path = "/sass" element = {<Pass/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
