import React from "react";
import styles from './Sidebar.module.css';

function Sidebar() {
   return (
      <nav className={styles.sidebar}>
         <div>Profile</div>
         <div>Messages</div>
         <div>News</div>
         <div>Music</div>
         <div>Settings</div>
      </nav>
   )
};

export default Sidebar;