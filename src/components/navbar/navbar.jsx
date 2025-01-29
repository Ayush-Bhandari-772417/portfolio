import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className="heading">आयुष भण्डारी</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default navbar