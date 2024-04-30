import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {
  const [] = useState(0)

  return (
    <>
      <Navigation/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
