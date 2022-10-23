//jsx bc easier to access images with this than js
import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Game from './components/games/Games.jsx'
import WorkHistory from './components/workhistory/WorkHistory.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

//all self closing tags
const app = () => {
  return (
    <div id='app'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <WorkHistory />
      <Contact />
      <Footer />
    </div>
  )
}

export default app