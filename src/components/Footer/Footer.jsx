import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <ul className={styles.langauge}>
          <li>English (UK)</li>
          <li>मराठी</li>
          <li>हिन्दी</li>
          <li>اردو</li>
          <li>ગુજરાતી</li>
          <li>ಕನ್ನಡ</li>
          <li>ਪੰਜਾਬੀ</li>
          <li>தமிழ்</li>
          <li>বাংলা</li>
          <li>తెలుగు</li>
          <li>മലയാളം</li>
        </ul>
        <ul className={styles.terms}>
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Places</li>
            <li>Games</li>
            <li>Marketplace</li>
            <li>Meta Pay</li>
            <li>Meta Store</li>
            <li>Meta Quest</li>
            <li>Meta AI</li>
            <li>Instagram</li>
            <li>Threads</li>
            <li>Fundraisers</li>
            <li>Services</li>
            <li>Voting Information Center</li>
            <li>Privacy Policy</li>
            <li>Privacy Center</li>
            <li>Groups</li>
            <li>About</li>
            <li>Create ad</li>
            <li>Create PAge</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Cookies</li>
            <li>AdChoice</li>
            <li>Terms</li>
            <li>Help</li>
            <li>Contact uploading and non-users</li>
        </ul>
        <p>Meta © 2024</p>
      </div>
    </div>
  );
};

export default Footer;
