import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
   return (
      <div className={styles.container}>
         <div className={styles.image__container}>
            <img className={styles.image} src='https://cdna.artstation.com/p/assets/images/images/035/810/886/large/void-2k.jpg?1615965119' alt='' />
         </div>
         <div className={styles.description}>
            ava + description
         </div>
         <MyPosts />
      </div>
   )
};

export default Profile;