import React from "react";
import styles from './Profile.module.css';

function Profile() {
   return (
      <div className={styles.content}>
         <div>
            <img className={styles.image} src='https://cdna.artstation.com/p/assets/images/images/035/810/886/large/void-2k.jpg?1615965119' alt='' />
         </div>
         <div>
            ava + description
         </div>
         <div> My Post
            <div>New Post</div>
            <div>
               <div>post 1</div>
               <div>post 2</div>
            </div>
         </div>
      </div>
   )
};

export default Profile;