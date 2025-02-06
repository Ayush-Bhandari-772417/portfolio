import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/servvices/services'
import Project from './components/project/project'
import Contact from './components/contact/contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Services/>
      <Project/>
      <Contact/>

    </div>
  )
}

export default App