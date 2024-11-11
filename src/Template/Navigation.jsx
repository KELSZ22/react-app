import React, { useState } from 'react'; 
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#"><img src={Logo} alt="Logo.png" width="100px" />
        </a>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/aboutme">About Me</Link></li>
      <li ><Link to="/resume">Resume</Link></li>
      <li ><Link to="/project">Project</Link></li>
      <li ><Link to="/contact">Contact</Link></li>
      </div>


      
      
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>

    </>
  );

  
}

export default Navbar;
