import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/servvices/services'
import Project from './components/project/project'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

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
      <Footer/>

    </div>
  )
}

export default App