import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { ReactComponent as Burger } from '../assets/list.svg';

// Uso de estados para cambio/toggle de clases para implementar menu de hamburguesa
function Nav() {
  const [navbarAbierto, setNavbarAbierto] = useState(false);

  const handleToggle = () => {
    setNavbarAbierto((prev) => !prev);
  };

  return (
    <nav className={styles['navbar']}>
      <div className={styles.hamburger} onClick={handleToggle}>
        <Burger />
      </div>
      <ul
        className={`${styles['navlinks']} ${
          navbarAbierto
            ? styles['navlinks-abiertos']
            : styles['navlinks-cerrados']
        }`}
      >
        <li>
          <Link to="/">Pokedex</Link>
        </li>
        <li>
          <Link to="/">Salon de la Fama</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
