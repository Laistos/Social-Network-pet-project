import React from "react";
import styles from './Post.module.css';

function Post() {
   return (
      <div className={styles.container}>
         <div className={styles.posts}>
            <div className={styles.post__container}>
               <div className={styles.flex__container}>
                  <div className={styles.avatar__container}>
                     <img className={styles.avatar} src="https://i.pinimg.com/236x/b6/8e/13/b68e131c4b2f3ea3d185d5e60e4005f9.jpg" alt="" />
                  </div>
                  <div className={styles.message}>
                     Hi! How are you?
                  </div>
               </div>
               <div className={styles.likes}>likes: 15</div>
            </div>
            <div className={styles.post__container}>
               <div className={styles.flex__container}>
                  <div className={styles.avatar__container}>
                     <img className={styles.avatar} src="https://i.pinimg.com/236x/b6/8e/13/b68e131c4b2f3ea3d185d5e60e4005f9.jpg" alt="" />
                  </div>
                  <div className={styles.message}>
                     Hi! How are you?
                  </div>
               </div>
               <div className={styles.likes}>likes: 15</div>
            </div>
            <div className={styles.post__container}>
               <div className={styles.flex__container}>
                  <div className={styles.avatar__container}>
                     <img className={styles.avatar} src="https://i.pinimg.com/236x/b6/8e/13/b68e131c4b2f3ea3d185d5e60e4005f9.jpg" alt="" />
                  </div>
                  <div className={styles.message}>
                     Hi! How are you?
                  </div>
               </div>
               <div className={styles.likes}>likes: 15</div>
            </div>
            <div className={styles.post__container}>
               <div className={styles.flex__container}>
                  <div className={styles.avatar__container}>
                     <img className={styles.avatar} src="https://i.pinimg.com/236x/b6/8e/13/b68e131c4b2f3ea3d185d5e60e4005f9.jpg" alt="" />
                  </div>
                  <div className={styles.message}>
                     Hi! How are you?
                  </div>
               </div>
               <div className={styles.likes}>likes: 15</div>
            </div>
            <div className={styles.post__container}>
               <div className={styles.flex__container}>
                  <div className={styles.avatar__container}>
                     <img className={styles.avatar} src="https://i.pinimg.com/236x/b6/8e/13/b68e131c4b2f3ea3d185d5e60e4005f9.jpg" alt="" />
                  </div>
                  <div className={styles.message}>
                     Hi! How are you?
                  </div>
               </div>
               <div className={styles.likes}>likes: 15</div>
            </div>
            <div className={styles.post__container}>
               <div className={styles.flex__container}>
                  <div className={styles.avatar__container}>
                     <img className={styles.avatar} src="https://i.pinimg.com/236x/b6/8e/13/b68e131c4b2f3ea3d185d5e60e4005f9.jpg" alt="" />
                  </div>
                  <div className={styles.message}>
                     Hi! How are you?
                  </div>
               </div>
               <div className={styles.likes}>likes: 15</div>
            </div>
         </div>
      </div>
   )
};

export default Post;