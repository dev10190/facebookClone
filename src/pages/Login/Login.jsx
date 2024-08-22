import React, { useContext, useEffect, useRef } from 'react'
import styles from "./Login.module.css"
import facebook from '../../assets/facebook.svg'
import Footer from '../../components/Footer/Footer'
import { PostList } from '../../store/facebook-store'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const { setSignUp, signUp, loginUser } = useContext(PostList)
  const navigate = useNavigate()
  const emailElement = useRef()
  const passwordElement = useRef();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailElement.current.value;
    const password = passwordElement.current.value
    if(email === '' && password === ''){
      navigate('/forgetuser')
    }else{
      loginUser(email, password)
    }
  }

  useEffect(() => {
    emailElement.current.focus();
  })

  return (
    <div className={`${signUp === true && 'mainLogin'}`}>
      <div className={styles.login}>
        <div className={styles.main}>
          <div className={styles.left}>
            <img src={facebook} alt="" className={styles.icon} />
            <p>Facebook helps you connect and share</p>
            <p>with the people in your life.</p>
          </div>
          <div className={styles.right}>
            <div  className={styles.box}>
              <form onSubmit={handleLogin} className={styles.box1} >

              <input ref={emailElement} type="text" placeholder='Email address or phone number' />
              <input type="password" ref={passwordElement} placeholder='Password' />
              <button type='submit' className={styles.loginBtn}>Log in</button>
              </form>
              
              <p onClick={() => navigate('/forgetpassword')}>Forgetten password?</p>
              <hr />
              <button onClick={() => setSignUp(true)} className={styles.createBtn}>Create new account</button>
            </div>
            <p className={styles.para}><span>Create Page </span> for a celebrity, brand or business</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
