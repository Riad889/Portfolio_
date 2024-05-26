import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import {Box} from "@mui/material"
import Welcome from './components/Welcome'

function App() {
  

  return (
    <>
    <Box sx={{backgroundColor:"#101630", height:"100vh",width:'100vw'}} >
    <Navbar/>
    <Welcome/>
    </Box>
   
    </>
  )
}

export default App
