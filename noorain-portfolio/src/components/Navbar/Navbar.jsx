import React, {useState} from 'react'

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
    <a className={styles.title} href="/">
    portfolio
    </a>
    <div className={styles.menu}>
      <img
      className={styles.menuBtn}
      src={
        menuOpen 
        ? getImageUrl("closeIcon.png")
        : getImageUrl("menuIcon.png")
      } 
      alt="menu-button"
      onClick={() => setMenuOpen(!menuOpen)}
      />
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}` }>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

