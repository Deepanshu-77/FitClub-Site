import React from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
import {Link } from 'react-scroll'; 

const Header = () => {
  return (
    <div className='header' >
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
          
             <Link to='header' spy={true} smooth={true}>Home</Link>
            <Link to='Programs' spy={true} smooth={true}>Programs</Link>
            <Link to='Reasons' spy={true} smooth={true}>Why us</Link>
             <Link to='plans' spy={true} smooth={true}>Plan</Link>
            <Link to='Testimonials' spy={true} smooth={true}>Testimonials</Link>
            {/* <li>Testimonials</li> */}
        </ul>
      
    </div>
  )
}

export default Header
