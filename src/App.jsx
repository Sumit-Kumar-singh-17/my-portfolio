import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
// import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Project />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
