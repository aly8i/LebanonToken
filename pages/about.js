import React from 'react'
import styles from "../styles/About.module.css"
const about = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.gap}/>
        <div className={styles.cssTyping}>
            <p className={styles.textp}>
            Our software development company is committed to providing innovative, highly dependable solutions for all of our client’s needs.
            </p>
            <p className={styles.textp}>
            We specialize in engineering, design, implementation, and simplifying the user interface and experience.
            </p>
            <p className={styles.textp}>
            Our focus on quality is unparalleled - from the planning to the deployment to the production of every project we take on.
            </p>
            <p className={styles.textp}>
            We have a team of experienced professionals dedicated to creating software solutions tailored to meet your specific requirements.
            </p>
            <p className={styles.textp}>
            With our attention to detail and customer-oriented approach, we guarantee that you will be satisfied with the results of our work.
            </p>
        </div>
        <div className={styles.gap}/>
        <div className={styles.statistics}>
            <div className={styles.stat}>
                <div className={styles.title}>
                    Years
                </div>
                <div className={styles.number1}>
                    
                </div>
            </div>
            <div className={styles.stat}>
                <div className={styles.title}>
                    Cups of Coffee
                </div>
                <div className={styles.number2}/>
            </div>
            <div className={styles.stat}>
                <div className={styles.title}>
                    Working Hours
                </div>
                <div className={styles.number3}/>
            </div>
        </div>
    </div>
  )
}

export default about