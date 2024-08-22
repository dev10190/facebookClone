import React, { useContext, useEffect, useRef } from 'react'
import styles from './ForgetUser.module.css'
import icon from '../../assets/facebookicon.png'
import Footer from '../../components/Footer/Footer'
import { PostList } from '../../store/facebook-store'

const ForgertUser = () => {
  const { loginUser }  = useContext(PostList)
  const emailElement = useRef()
  const passwordElement = useRef();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailElement.current.value;
    const password = passwordElement.current.value
      loginUser(email, password)
  }

  useEffect(() => {
    emailElement.current.focus();
  })
  return (
    <div className={styles.main}> 
    <div className={styles.forgetuser}>
        <div className={styles.icon}>
            <img src={icon} alt="" />
        </div>
        <form onSubmit={handleLogin} className={styles.bottom}>
          <h3>Log in to Facebook</h3>
            <input type="email" placeholder='Enter address or phone number' ref={emailElement} />
            <h6>The email address or mobile number you entered isn't connected to an account. Find your account and log in.</h6>
            <input ref={passwordElement} type="text" placeholder='Password' />
            <button>Log in</button>
            <p>Forgotten password ?</p>
        </form>
    </div>
      <Footer />
    </div>
  )
}

export default ForgertUser
