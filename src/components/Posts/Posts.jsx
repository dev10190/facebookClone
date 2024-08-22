import React, { useContext, useState } from "react";
import styles from "./Posts.module.css";
import photo from "../../assets/man.png";
import mainPhoto from "../../assets/first.jpg";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FaShare } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { PostList } from "../../store/facebook-store";

const Posts = ({name, profile, desc, time, main, email}) => {
  const {deletePosts} =  useContext(PostList)
  const [counter, setCounter] = useState(0)
  
  const handleDelete = () => {
    deletePosts(email, time)
  }
  return (
    <div className={styles.middleThird}>
      <div className={styles.profile}>
        <img src={profile} alt="" />
        <div className={styles.profilename}>
          <p>
            <span>{name}</span> is at <span>Satde de France</span>
          </p>
          <p>{time} hours ago</p>
        </div>
        <div className={styles.cross}>
          <BsThreeDots />
          <IoCloseSharp onClick={handleDelete}/>
        </div>
      </div>
      <div className={styles.desc}>
        <p>{desc}</p>
      </div>
      <div className={styles.mainPhoto}>
        <img src={main} alt="" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.like}>
          <div className={styles.first}>
            <FaRegThumbsUp />
            <p>{counter}</p>
          </div>
          <div className={styles.second}>
            <div>
              <FaComment />
              <p>451</p>
            </div>
            <div>
              <FaShare />

              <p>572</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.comment}>
          <div onClick={()=> setCounter(counter + 1)}>
            <AiTwotoneLike />
            <p>Like</p>
          </div>
          <div>
            <FaRegCommentDots />
            <p>Comment</p>
          </div>
          <div>
            <FaWhatsapp />
            <p>Send</p>
          </div>
          <div>
            <PiShareFatFill />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
