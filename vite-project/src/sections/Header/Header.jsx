import React, { useState } from 'react';
import styles from './HeaderStyles.module.css';

function Header() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='#home' className={`${styles.logo}`}>Hyin Ki </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='#hero' className={`${styles.navLink}`}>About</a>
              </li>
              <li onClick={removeActive}>
                <a href='#projects' className={`${styles.navLink}`}>Projects</a>
              </li>
              <li onClick={removeActive}>
                <a href='#skills' className={`${styles.navLink}`}>Skills</a>
              </li>
              <li onClick={removeActive}>
                <a href='#contact' className={`${styles.navLink}`}>Contact</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Header;
  ;
