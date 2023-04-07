import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutInfo from './components/AboutInfo'
import AboutNavbar from './components/AboutNavbar'
import ContactInfo from './components/ContactInfo'
import ContactNavbar from './components/ContactNavbar'
import MobileNavbar from './components/MobileNavbar'
import ProjectsInfo from './components/ProjectsInfo'
import ProjectsNavbar from './components/ProjectsNavbar'

function App() {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)

  const showMobileNav = () => {
    setToggleMobileNav(true)
    console.log('game')
  }

  const hideMobileNav = () => {
    setToggleMobileNav(false)
  }

  return (
    <div className="app">
      
      <Routes>

        {/* About */}
        <Route path='/' element={
          <div>
            <AboutNavbar onClick={showMobileNav} />
            <AboutInfo />
            <MobileNavbar toggleMobileNav={toggleMobileNav} onClick={hideMobileNav} hideMobileNav={hideMobileNav} />
          </div>
        } />

        {/* PROJECTS */}
        <Route path='/projects' element={
          <div>
            <ProjectsNavbar onClick={showMobileNav} />
            <ProjectsInfo />
            <MobileNavbar toggleMobileNav={toggleMobileNav} onClick={hideMobileNav} hideMobileNav={hideMobileNav} />
          </div>
        } />

        {/* CONTACT */}
        <Route path='/contact' element={
          <div>
            <ContactNavbar onClick={showMobileNav} />
            <ContactInfo />
            <MobileNavbar toggleMobileNav={toggleMobileNav} onClick={hideMobileNav} hideMobileNav={hideMobileNav} />
          </div>
        } />


      </Routes>

    </div>
  )
}

export default App
