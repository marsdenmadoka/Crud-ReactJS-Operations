import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
      <nav className="nav.nav-wrapper.red.darken-3">
        <div className="container">
        <a className="brand-logo"> poke' Times</a>
        <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
           
            {/* <li><a href="/">Contact</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">Contact</a></li> */}
            
        </ul>
        </div>
      </nav>
    )
}

export default Navbar