import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import Projects from "./Projects"
export default function Index() {
  return (
    <main>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/skills' element={<Skills/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/projects' element={<Projects/>} />
    </Routes>
    </main>
  )
}
