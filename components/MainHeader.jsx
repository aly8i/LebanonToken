import React from 'react'
import styles from '../styles/MainHeader.module.css'
const MainHeader = () => {
  return (
    <div className={styles.mainHeader}>
        <a className={`${styles.menuLinkMain} ${styles.a}`} href="#">All Apps</a>
        <div className={styles.headerMenu}>
            <a className={`${styles.mainHeaderLink} ${styles.a} ${styles.isActive}`} href="#">Desktop</a>
            <a className={`${styles.mainHeaderLink} ${styles.a}`} href="#">Mobile</a>
            <a className={`${styles.mainHeaderLink} ${styles.a}`} href="#">Web</a>
        </div>
    </div>
  )
}

export default MainHeader