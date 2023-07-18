import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
   return (
      <div className={styles.container}>
         <div className={styles.myPosts}>My Posts</div>
         <div className={styles.textarea__container}>
            <textarea className={styles.textarea} name="textarea" placeholder="Post text"></textarea>
         </div>
         <button className={styles.addPost}>Add Post</button>
         <Post />
      </div>
   )
};

export default MyPosts;