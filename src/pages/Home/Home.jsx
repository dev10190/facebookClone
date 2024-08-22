import React, { useContext } from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import { PostList } from "../../store/facebook-store";
import Video from "../Video/Video";
import MarketPlace from "../MarketPlace/MarketPlace";
import UserProfile from "../UserProfile/UserProfile";

const Home = () => {
  const { navbarSelected, setAccount, userSession } = useContext(PostList);
  return (
    <>
    {userSession === 'zero' ? alert("please login") : 
    <div onClick={() => setAccount(false)}>
      <Navbar />
      {navbarSelected === "userProfile" && <UserProfile />}
      {navbarSelected === "Home" && <Main />}
      {navbarSelected === "Video" && <Video />}
      {navbarSelected === "Market" && <MarketPlace />}
    </div>
    }
    </>
  );
};

export default Home;
