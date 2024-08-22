import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { IoIosHome } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { MdGroups2 } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import facebook_icon from "../../assets/facebook_icon1.png";
import { PostList } from "../../store/facebook-store";
import AccountDropBox from "../AccountDropBox/AccountDropBox";

const Navbar = () => {
  const { account, setAccount, setNavbarSelected  } = useContext(PostList);
  const [selected, setSelected] = useState("Home");

  

  const handleNavbar = (select) => {
    setSelected(select);
    setNavbarSelected(select);
  };

  const handleAccount = (e) => {
    setAccount(!account);
    e.stopPropagation();
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.main}>
        <div className={styles.left}>
          <img onClick={()=> setNavbarSelected('Home')} src={facebook_icon} alt="" />
          <input type="text" placeholder="Search Facebook" />
        </div>

        <div className={styles.middle}>
          <div
            onClick={() => {
              handleNavbar("Home");
            }}
            className={`${styles.icons} ${selected === "Home" && "active"}`}
          >
            <IoIosHome className={styles.icon} />
            <p className={styles.para}>Home</p>
          </div>
          <div
            onClick={() => {
              handleNavbar("Video");
            }}
            className={`${styles.icons} ${selected === "Video" && "active"}`}
          >
            <MdOndemandVideo className={styles.icon} />
            <p className={styles.para}>Video</p>
          </div>
          <div
            onClick={() => {
              handleNavbar("Market");
            }}
            className={`${styles.icons} ${selected === "Market" && "active"}`}
          >
            <CiShop className={styles.icon} />
            <p className={styles.para}>Market</p>
          </div>
          <div
            onClick={() => {
              handleNavbar("Group");
            }}
            className={`${styles.icons} ${selected === "Group" && "active"}`}
          >
            <MdGroups2 className={styles.icon} />
            <p className={styles.para}>Groups</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.icons}>
            <CgMenuGridR className={styles.icon} />
            <p className={styles.para}>Menu</p>
          </div>
          <div className={styles.icons}>
            <RiMessengerFill className={styles.icon} />
            <p className={styles.para}>Messenger</p>
          </div>
          <div className={styles.icons}>
            <IoIosNotifications className={styles.icon} />
            <p className={styles.para}>Notification</p>
          </div>
          <div onClick={handleAccount} className={styles.iconsAccount}>
            <FaUserAlt className={styles.icon} />
            {/* <p className={styles.para}>Account</p> */}
            {account === true && (
              <div className={styles.account}>
                <AccountDropBox />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
