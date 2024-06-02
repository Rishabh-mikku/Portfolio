import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/Footer/FooterBottom'

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar/>
      <div className="max-w-screen-xl mx-auto">
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  )
}

export default App
