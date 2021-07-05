import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import How from './components/How'
import Banner from './components/Banner'
import Projects from './components/Projects'
import Services from './components/Services'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <How />
      <Banner />
      <Projects />
     {/*  <Services /> */}
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

