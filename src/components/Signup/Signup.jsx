import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Signup.module.css";
import { Form, useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { PostList } from "../../store/facebook-store";
import { redirect } from "react-router-dom";

const Signup = () => {

  const { setSignUp, addPost, setPopup } = useContext(PostList);
  const firstElement = useRef();
  const lastElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();
  const dayElement = useRef();
  const monthElement = useRef();
  const yearElement = useRef()
  const genderElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
      const firstname = firstElement.current.value
      const last = lastElement.current.value
      const email = emailElement.current.value
      const password = passwordElement.current.value;
      const DOB = `${dayElement.current.value} - ${monthElement.current.value} - ${yearElement.current.value}`
      const gender = genderElement.current.value;
      if(firstElement !== '' || last !== '' || email !== '' || password !== '' || DOB !== '' || gender !== ''){
        addPost(firstname, last, email, password, DOB, gender)
      }else{
        setPopup(true)

      }


  }



  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );



  return (
    <div className={styles.main}>
      <div  className={styles.signup}>
        <div className={styles.top}>
          <h2>Sign Up</h2>
          <p>Its's quick and easy</p>
          <div onClick={() => setSignUp(false)} className={styles.close}>
            <IoMdClose />
          </div>
        </div>
        <form  onSubmit={handleSubmit} className={styles.bottom}>
          <div>
            <input
            ref={firstElement}
            name="firstname"
              type="text"
              className={`${styles.input}`}
              placeholder="First Name"
            />

            <input
              type="text"
              ref={lastElement}
              placeholder="Surname"
            />
          </div>
          <input type="text" ref={emailElement}  placeholder="Mobile number or email address" />
          <input type="password" ref={passwordElement} placeholder="New password" />
          <div className={styles.date}>
            <p>Date of birth</p>
            <div className={styles.dates}>
              <select ref={dayElement} className={styles.dateselect}>
                <option value="">Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              <select ref={monthElement} className={styles.dateselect}>
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>

              <select ref={yearElement} className={styles.dateselect}>
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.gender}>
            <p>Gender</p>
            <div>
              <select ref={genderElement} className={styles.genderselect}>
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className={styles.conditions}>
            <p>
              People who use our service may have uploaded your contact
              information to Facebook. <span>Learn more.</span>
            </p>
            <p>
              By clicking Sign Up, you agree to our{" "}
              <span>Terms, Privacy Policy</span> and <span>Cookies Policy</span>
              . You may receive SMS notifications from us and can opt out at any
              time.
            </p>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};



export default Signup;
