import React from 'react'
import styles from "../styles/Background.module.css"
const Background = () => {
  return (
    <>
        <div className={styles.videoBg}>
            <video className={styles.video} width="320" height="240" autoPlay={true} loop={true} muted={true}>
                <source src="/technologybackground.mp4" type="video/mp4"/>
            </video>
        </div>
    </>
  )
}

export default Background