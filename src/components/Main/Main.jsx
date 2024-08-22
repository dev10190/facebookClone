import React, { useContext } from "react";
import styles from "./Main.module.css";
import { leftLine } from "../../assets/left";
import photo from "../../assets/man.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import status1 from "../../assets/status1.jpg";
import status2 from "../../assets/status2.jpg";
import status3 from "../../assets/status3.png";
import status4 from "../../assets/status4.jpg";
import status5 from "../../assets/status5.jpg";
import present from "../../assets/present.png";
import Posts from "../Posts/Posts";
import { user } from "../../assets/user";
import { PostList } from "../../store/facebook-store";

const Main = () => {
  const { userPosts, userLoggedIn, setCreatePost } = useContext(PostList);
  const {firstname , last} = userLoggedIn[0];
console.log(userPosts)
  

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainTop}>
          <div className={styles.left}>
            
              <div className={styles.leftInside}>
                <div className={styles.leftImg}>
                  <img src={photo} alt="" />
                </div>
                <p>{firstname} {last}</p>
              </div>
            

            {leftLine.map((items) => (
              <div className={styles.leftInside}>
                <div className={styles.leftImg}>
                  <img src={items.icon} alt="" />
                </div>
                <p>{items.name}</p>
              </div>
            ))}
          </div>

          <div className={styles.middle}>
            <div className={styles.middleInside}>
              <div className={styles.middleFirst}>
                <div className={styles.firstInside}>
                  <div className={styles.statusPhoto}>
                    <img src={status1} alt="" />
                    <div className={styles.name}>
                      <p>Anish </p>
                    </div>
                    <div className={styles.little}>
                      <img src={status5} className={styles.littleimg} />
                    </div>
                  </div>
                  <div className={styles.statusPhoto}>
                    <img src={status2} alt="" />
                  </div>
                  <div className={styles.statusPhoto}>
                    <img src={status3} alt="" />
                  </div>
                  <div className={styles.statusPhoto}>
                    <img src={status4} alt="" />
                  </div>
                  <div className={styles.statusPhoto}>
                    <img src={status5} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.middleSecond}>
                <div className={styles.secondTop}>
                  <img src={photo} alt="" />
                  <input
                    type="text"
                    placeholder="Whats on your Mind"
                    onClick={()=> setCreatePost(true)}
                  />
                </div>
                <hr />
                <div className={styles.secondBottom}>
                  <div>
                    <img src={one} alt="" />
                    <p>Live video</p>
                  </div>
                  <div>
                    <img src={two} alt="" />
                    <p>Photo/video</p>
                  </div>
                  <div>
                    <img src={three} alt="" />
                    <p>Feeling/activity</p>
                  </div>
                </div>
              </div>

              {userPosts.map((users) => (
                <Posts
                  name={users.name}
                  desc={users.desc}
                  main={users.main}
                  profile={users.profile}
                  time={users.time}
                  email={users.email}
                />
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.rightInside}>
              <div className={styles.birthday}>
                <h3>Birthday</h3>
                <div>
                  <img src={present} alt="" />
                  <p>
                    <span>Himashu Kurva</span> and <span> 3 others</span> have
                    their birthdays today.
                  </p>
                </div>
                <hr />
              </div>
              <div className={styles.contacts}>
                <div className={styles.contacttop}>
                  <p>Contact</p>
                </div>
                <div className={styles.contactbottom}>
                  <img src={photo} alt="" />
                  <p>Rajeev Gwalior Wale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
