import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar/>
      <div className="max-w-screen-xl mx-auto">
        <Banner/>
        <About />
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
