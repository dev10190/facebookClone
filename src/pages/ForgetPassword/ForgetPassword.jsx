import React, { useEffect, useRef } from "react";
import styles from "./ForgetPassword.module.css";
import icon from "../../assets/facebookicon.png";
import Footer from "../../components/Footer/Footer";

const ForgetPassword = () => {
  const emailElement = useRef()
   useEffect(() => {
    emailElement.current.focus();
  })
  return (
    <div className={styles.main}>
      <div className={styles.forgetPassword}>
        <div className={styles.navbar}>
          <div className={styles.icon}>
            <img src={icon} alt="" />
          </div>
          <div className={styles.right}>
            <input type="email" placeholder="Email or phone" />
            <input type="text" placeholder="Password" />
            <button>Log in</button>
            <p>Forgotton acccout?</p>
          </div>
        </div>
        <div className={styles.findAccount}>
          <div className={styles.box}>
            <h3>Find Your Account</h3>
            {/* <hr /> */}
            <p>
              Please enter your email address or mobile number to search for
              your account.
            </p>
            <input ref={emailElement} type="email" placeholder="Email address or mobile number" />
            <div>
              <button className={styles.cancel}>Cancel</button>
              <button className={styles.search}> Search</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
