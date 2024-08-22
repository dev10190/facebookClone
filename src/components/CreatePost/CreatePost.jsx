import React, { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import photo from "../../assets/man.png";
import { MdGroup } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { PostList } from "../../store/facebook-store";

const CreatePost = () => {
  const { setCreatePost, userLoggedIn, userAddPost } = useContext(PostList);
  const descElement = useRef()
  const {firstname , last, email} = userLoggedIn[0];
  const  name = `${firstname} ${last}`
  const date = new Date()
  const time = date.toLocaleTimeString()
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = descElement.current.value;
    userAddPost(name, desc, time, email)

  };
  return (
    <div className={styles.main}>
      <div className={styles.createPost}>
        <div className={styles.title}>
          <p>Create Post</p>
          <div onClick={() => setCreatePost(false)} className={styles.close}>
            <IoMdClose />
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.post}>
          <div className={styles.profile}>
            <img src={photo} alt="" />
            
              <div>
                <h4>
                  {name}
                </h4>
                <p>
                  <MdGroup /> Friends <FaCaretDown />
                </p>
              </div>
            
          </div>
          <textarea ref={descElement} placeholder="Whats on your mind, Devendra?"></textarea>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
