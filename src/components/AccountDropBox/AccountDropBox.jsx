import React, { useContext } from "react";
import styles from "./AccountDropBox.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { RiFeedbackFill } from "react-icons/ri";
import photo from "../../assets/man.png";
import { useNavigate } from "react-router-dom";
import { PostList } from "../../store/facebook-store";

const AccountDropBox = () => {
  const { setNavbarSelected, userLoggedIn } = useContext(PostList);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        {userLoggedIn.map((user) => (
          <div onClick={() => setNavbarSelected("userProfile")}>
            <img src={photo} alt="" />
            <p>{user.firstname} {user.last}</p>
          </div>
        ))}

        <hr />
        <p>See all profiles</p>
      </div>
      <div className={styles.options}>
        <div>
          <div className={styles.icon}>
            <IoMdSettings />
          </div>
          <p>Setting & privacy</p>
        </div>
        <div className={styles.arrow}>
          <RiArrowRightSLine />
        </div>
      </div>
      <div className={styles.options}>
        <div>
          <div className={styles.icon}>
            <IoMdHelpCircle />
          </div>
          <p>Help & support</p>
        </div>
        <div className={styles.arrow}>
          <RiArrowRightSLine />
        </div>
      </div>
      <div className={styles.options}>
        <div>
          <div className={styles.icon}>
            <IoMoon />
          </div>
          <p>Display & accessibilty</p>
        </div>
        <div className={styles.arrow}>
          <RiArrowRightSLine />
        </div>
      </div>
      <div className={styles.options}>
        <div>
          <div className={styles.icon}>
            <RiFeedbackFill />
          </div>
          <p>Give feedback</p>
        </div>
      </div>
      <div onClick={handleLogout} className={styles.options}>
        <div>
          <div className={styles.icon}>
            <IoLogOut />
          </div>
          <p>Log out</p>
        </div>
      </div>
      <div className={styles.privacy}>
        <p>
          Privacy · Terms · Advertising · Ad choices · Cookies · · Meta © 2024
        </p>
      </div>
    </div>
  );
};

export default AccountDropBox;
