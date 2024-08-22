import React from "react";
import ReactPlayer from "react-player";
import styles from "./Video.module.css";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineAddHome } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { BsSave2Fill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { SiBookmyshow } from "react-icons/si";
import { MdMissedVideoCall } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";
import user from "../../assets/man.png";

const Video = () => {
  return (
    <div className={styles.main}>
      <div className={styles.video}>
        <div className={styles.left}>
          <div className={styles.top}>
            <p>Video</p>
            <div>
              <IoSettingsSharp />
            </div>
          </div>
          <div className={styles.middle}>
            <input type="text" placeholder="Search Result" />
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomMenu}>
              <div>
                <MdOutlineAddHome />
              </div>
              <p>Home</p>
            </div>
            <div className={styles.bottomMenu}>
              <div>
                <RiLiveFill />
              </div>
              <p>Live</p>
            </div>
            <div className={styles.bottomMenu}>
              <div>
                <MdMissedVideoCall />
              </div>
              <p>Reels</p>
            </div>
            <div className={styles.bottomMenu}>
              <div>
                <SiBookmyshow />
              </div>
              <p>Shows</p>
            </div>
            <div className={styles.bottomMenu}>
              <div>
                <MdOutlineExplore />
              </div>
              <p>Explore</p>
            </div>
            <div className={styles.bottomMenu}>
              <div>
                <BsSave2Fill />
              </div>
              <p>Saved videos</p>
            </div>
          </div>
        </div>

        {/* --------------------Right Side------------------- */}

        <div className={styles.right}>
          <div className={styles.rightBlog}>
            <div className={styles.profile}>
              <div className={styles.photo}>
                <img src={user} alt="" />
              </div>
              <div className={styles.profileName}>
                <p className={styles.time}>Pawan Verma vlogs</p>
                <p>30 July 2024 15:35</p>
              </div>
            </div>
            <div className={styles.hastags}>
              <p>
                Dhanush ki new superhit movie #hanshikamotwani #South
                #blockbuster #Latestmovie2024 #cr7 #FIFAWordcup2022
              </p>
            </div>
            <div className={styles.videos}>
              <div className={styles.video_wrapper}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=OzI9M74IfR0"
                  playing
                  loop
                  muted
                  className={styles.react_palyer}
                />
              </div>
            </div>
            <div className={styles.likes}>
              <div>
                <AiOutlineLike />
                <p>Like</p>
              </div>
              <div>
                <FaRegComment />
                <p>Comment</p>
              </div>
              <div>
                <FaShare />
                <p>Share</p>
              </div>
            </div>
          </div>
          <div className={styles.rightBlog}>
            <div className={styles.profile}>
              <div className={styles.photo}>
                <img src={user} alt="" />
              </div>
              <div className={styles.profileName}>
                <p className={styles.time}>Pawan Verma vlogs</p>
                <p>30 July 2024 15:35</p>
              </div>
            </div>
            <div className={styles.hastags}>
              <p>
                Dhanush ki new superhit movie #hanshikamotwani #South
                #blockbuster #Latestmovie2024 #cr7 #FIFAWordcup2022
              </p>
            </div>
            <div className={styles.videos}>
              <div className={styles.video_wrapper}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=roz9sXFkTuE&list=RDroz9sXFkTuE&index=2"
                  stopOnUnmount
                  loop
                  muted
                  className={styles.react_palyer}
                />
              </div>
            </div>
            <div className={styles.likes}>
              <div>
                <AiOutlineLike />
                <p>Like</p>
              </div>
              <div>
                <FaRegComment />
                <p>Comment</p>
              </div>
              <div>
                <FaShare />
                <p>Share</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
