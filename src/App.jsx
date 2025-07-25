import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Navbar from './components/navbar'
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Projects from "./components/projects"
import "../styles/navbar_list.css"

function App() {
  return (  <div className='root'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
       </BrowserRouter>

    </div>)
}


export default App;