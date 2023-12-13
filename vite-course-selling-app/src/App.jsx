import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from "./Signup.jsx"
import Appbar from "./Appbar.jsx"


function App() {
  return (
    <div style = {{width :"100vw" , height : "100vh" , backgroundColor : "#eeeeee"}}>
       <Appbar> </Appbar>
       <Signup> </Signup>
    </div>
  )
}

export default App
