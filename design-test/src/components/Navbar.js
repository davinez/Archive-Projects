import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { ReactComponent as BurgerIcon } from '../assets/list.svg';
import { ReactComponent as BrandIcon } from '../assets/puzzle.svg';

// Uso de estados para cambio/toggle de clases para implementar menu de hamburguesa
function Navbar() {
  const [navbarAbierto, setNavbarAbierto] = useState(false);

  const handleToggle = () => {
    setNavbarAbierto((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="hamburger-icon" onClick={handleToggle}>
        <BurgerIcon />
      </div>
      <div className="brand-icon">
        <BrandIcon fill="#4810ca" className="burger" />
      </div>

      <ul
        className={`navlinks ${
          navbarAbierto ? 'navlinks-abiertos' : 'navlinks-cerrados'
        }`}
      >
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>BLOG</li>
        <li>HOW IT WORKS?</li>
        <li className="log-in">LOG IN</li>
        <li className="sign-up">SIGN UP</li>
      </ul>
    </nav>
  );
}

export default Navbar;
