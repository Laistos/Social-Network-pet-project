import React from "react";
import styles from './Sidebar.module.css';
import { NavLink } from "react-router-dom";

function Sidebar() {
   return (
      <nav className={styles.sidebar}>
         <NavLink className={styles.link} to={"/profile"}>Profile</NavLink>
         <NavLink className={styles.link} to={"/messages"}>Messages</NavLink>
         <div>News</div>
         <div>Music</div>
         <div>Settings</div>
      </nav>
   )
};

export default Sidebar;