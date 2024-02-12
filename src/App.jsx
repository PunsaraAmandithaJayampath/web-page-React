import React, { useEffect } from 'react'
import Home from './pages/Home'
import Animation from './pages/animation'
import AOS from 'aos';
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import Slideshow from './pages/Slideshow';


export default function App() {

  useEffect (()=> {
    AOS.init()
  },[])

  return (
    <div>
      <Home/>
      <Slideshow/>
      <Animation/>
    </div>
  )
}
