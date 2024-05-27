import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import {Box} from "@mui/material"
import Welcome from './components/Welcome'
import AboutMe from './components/Aboutme'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
  

  return (
    <>
    <Box sx={{backgroundColor:"#101630", height:"100%"}} >
    <Navbar/>
    <Welcome/>
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    </Box>
   
    </>
  )
}

export default App
