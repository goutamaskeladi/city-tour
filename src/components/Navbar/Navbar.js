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
                  <a href="/services" className="nav-link">Services</a>
                  <a href="/contact" className="nav-link active">Contact</a>
              </li>
           </ul>
        </nav>
    )
}
