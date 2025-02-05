import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='आयुष भण्डारी'/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>CV</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default navbar