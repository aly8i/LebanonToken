import React from 'react'
import styles from '../styles/Header.module.css'
const Header = ({setPage}) => {
  return (
    <>
        <div className={styles.header}>
            <div className={styles.menuCircle}/>
            <div className={styles.headerMenu}>
                <div className={`${styles.menuLink} ${styles.a} ${styles.isActive}`} onClick={()=>setPage("wallet")}>Wallet</div>
                <div className={`${styles.menuLink} ${styles.a} ${styles.notify}`} onClick={()=>setPage("pay")}>Pay</div>
                <div className={`${styles.menuLink} ${styles.a}`} onClick={()=>setPage("assets")}>Assets</div>
                <div className={`${styles.menuLink} ${styles.a} ${styles.notify}`} onClick={()=>setPage("exchange")}>Exchange</div>
                <div className={`${styles.menuLink} ${styles.a} ${styles.notify}`} onClick={()=>setPage("discover")}>Discover</div>
            </div>
            <div className={styles.searchBar}>
                <input className={styles.input} type="text" placeholder="Search"/>
            </div>
            <div className={styles.headerProfile}>
                <div className={styles.notification}>
                    <span className={`${styles.notificationNumber} ${styles.span}`}>3</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`${styles.feather} ${styles.svg} ${styles.featherBell}`}>
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                </div>
                <img className={`${styles.profileImg} ${styles.img}`} src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
            </div>
        </div>
    </>
  )
}

export default Header