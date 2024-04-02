import React from 'react'
import "../styles/Alle.css"
import {Link} from 'react-router-dom';



function Navbar() {
  return (
    <nav id="desktop-nav">

       
      
          <div className="logo"><b><i>Jass.dev</i></b></div>
      <ul className="nav-links">
        <li><Link to=""><b>About</b></Link></li>
        <li><Link to="/skills"><b>Skills</b></Link></li>
        <li><Link to="/projects"><b>Projects/Apps</b></Link></li>
        <li><Link to="/contact"><b>Contact Me</b></Link></li>
        
      </ul>
    
  </nav>
  )
}

export default Navbar;