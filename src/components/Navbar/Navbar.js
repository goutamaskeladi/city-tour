import React from 'react'
import './Navbar.scss'
import Logo from '../../logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
           <img src={Logo} alt="City Tour Logo" onClick={() => location.reload()}/>
           <ul className="nav-links">
              <li>
                  <a href="/" className="nav-link" onClick={() => location.reload()}>Home</a>
                  <a href="/explore" className="nav-link">Explore</a>
                  <a href="/contact" className="nav-link active">Contact</a>
              </li>
           </ul>
        </nav>
    )
}
