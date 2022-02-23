import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navegacion from './components/Navegacion';
import Footer from './Footer';

const NavBar = () => {
  return (
    <Router>
        <div>
        <Navegacion/>
            <Routes>
                <Route path='/about' element={<About />}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/' element={<Home />}/>
            </Routes>
        </div>
    </Router>
  )
}

export default NavBar