import React, { useContext } from 'react'
import styles from './Popup.module.css'
import { PostList } from '../../store/facebook-store'

const Popup = () => {
   const { setPopup} =  useContext(PostList)
  return (
    <div className={styles.main}>
        <div className={styles.popup}>
            <p>please filled all fields</p>
            <button onClick={()=> setPopup(false)}>Clicked</button>
        </div>
      
    </div>
  )
}

export default Popup
