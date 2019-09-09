import React from 'react'
import './Navbar.scss'
import Logo from '../../logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
           <img src={Logo} alt="City Tour Logo"/>
           <ul className="nav-links">
              <li>
                  <a href="/" className="nav-link">Home</a>
                  <a href="/about" className="nav-link">About</a>
                  <a href="/tours" className="nav-link active">Tours</a>
              </li>
           </ul>
        </nav>
    )
}
