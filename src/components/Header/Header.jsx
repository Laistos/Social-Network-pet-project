import React from "react";
import styles from './Header.module.css';

function Header() {
   return (
      <header className={styles.header}>
         <img className={styles.header__image} src='https://i.pinimg.com/564x/08/cb/0d/08cb0d86bd2b845411bdc5f58edf9002.jpg' alt='logo' />
      </header>
   )
};

export default Header;