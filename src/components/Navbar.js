import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { ViewQuilt } from '@mui/icons-material'
import {useState} from 'react'


function Navbar() {
  const [openlinks,setOpenLinks]=useState(false);


  const toggleNavbar =()=>{
    setOpenLinks(!openlinks);
    console.log(!openlinks);
  }
  return (
    <div className='navbar'>
      <div className='leftside' id = {openlinks?"open":"close"}>
          <img src={Logo}  />
          <div className='hiddenlinks'>
          <Link to = '/'><h1>Home</h1></Link>
          <Link to = '/About'><h1>About</h1></Link>
          <Link to = '/course'><h1>Course</h1></Link>
          <Link to = '/contact'><h1>Contact</h1></Link>
            </div>
      </div>
      <div className='rightside'>
          <Link to = '/'><h1>Home</h1></Link>
          <Link to = '/About'><h1>About</h1></Link>
          <Link to = '/course'><h1>Course</h1></Link>
          <Link to = '/contact'><h1>Contact</h1></Link>
        <button onClick={toggleNavbar}> 
          <ViewQuilt/>
        </button>
      </div>
    </div>
  )
}

export default Navbar