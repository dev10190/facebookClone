import React, { useContext, useState } from "react";
import styles from "./UserProfile.module.css";
import coverPhoto from "../../assets/coverpage/coverphoto.jpg";
import profilephoto from "../../assets/coverpage/profilePhoto.jpg";
import profilephoto1 from "../../assets/coverpage/profilePhoto1.jpg";
import { FaPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { PostList } from "../../store/facebook-store";
import Posts from "../../components/Posts/Posts";


const UserProfile = () => {
  const { userLoggedIn, userPosts } = useContext(PostList);
  const {email} = userLoggedIn[0]
  console.log(email)
  const profileUser = userPosts.filter((user)=> user.email === email)
  console.log(userLoggedIn)
  console.log(userPosts)
  console.log(profileUser)

  const [underline, setUnderline] = useState("post");
  return (
    <div className={styles.main}>
      <div className={styles.userProfile}>
        <div className={styles.coverPhoto}>
          <img src={coverPhoto} alt="" />
          <div className={styles.editCover}>
            <button>
              <FaCameraRetro /> Edit cover photo
            </button>
          </div>
        </div>

        <div className={styles.profilePhoto}>
          <div className={styles.top}>
            <div className={styles.profilePic}>
              <img src={profilephoto} alt="" />
            </div>
            <div className={styles.profileDetails}>
              {userLoggedIn.map((user) => (
                <div className={styles.profileTop}>
                  <h3>{user.firstname} {user.last}</h3>
                  <p>1.1K friends</p>
                </div>
              ))}

              <div className={styles.profileBottom}>
                <div className={styles.friendsList}>
                  <img src={profilephoto1} alt="" />
                  <img src={profilephoto} alt="" />
                  <img src={profilephoto1} alt="" />
                  <img src={profilephoto} alt="" />
                </div>
                <div className={styles.editProfile}>
                  <button className={styles.story}>
                    {" "}
                    <FaPlus /> Add to story
                  </button>
                  <button className={styles.profileBtn}>Edit profile</button>
                  <button className={styles.arrow}>
                    <FaAngleDown />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.bottom}>
            <ul>
              <li
                onClick={() => setUnderline("post")}
                className={`${underline === "post" && "under"}`}
              >
                Posts
              </li>
              <li
                onClick={() => setUnderline("about")}
                className={`${underline === "about" && "under"}`}
              >
                About
              </li>
              <li
                onClick={() => setUnderline("friend")}
                className={`${underline === "friend" && "under"}`}
              >
                Friends
              </li>
              <li
                onClick={() => setUnderline("photo")}
                className={`${underline === "photo" && "under"}`}
              >
                Photos
              </li>
              <li
                onClick={() => setUnderline("video")}
                className={`${underline === "video" && "under"}`}
              >
                Videos
              </li>
              <li
                onClick={() => setUnderline("reel")}
                className={`${underline === "reel" && "under"}`}
              >
                Reels
              </li>
              <li
                onClick={() => setUnderline("more")}
                className={`${underline === "more" && "under"}`}
              >
                More
              </li>
            </ul>
            <div className={styles.icon}>
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.userPost}>
      {profileUser.map((users) => (
                <Posts
                  name={users.name}
                  desc={users.desc}
                  main={users.main}
                  profile={users.profile}
                  time={users.time}
                />
              ))}
      </div>
    </div>
  );
};

export default UserProfile;
