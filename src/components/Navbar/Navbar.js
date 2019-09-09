import React from 'react'
import './Navbar.scss'
import Logo from '../../logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
           <img src={Logo} alt="City Tour Logo"/>
        </nav>
    )
}
