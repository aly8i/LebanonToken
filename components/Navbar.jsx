import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import logo from "../public/lt.png"
const Navbar = ({nav}) => {
    const router= useRouter();
    const getLinks = () =>{
        return(
          <>
            <div onClick={()=>{router.push("/")}} className={nav=="/"?(`${styles.menuLink} ${styles.a} ${styles.isActive}`):(`${styles.menuLink} ${styles.a}`)}>Home</div>
            <div onClick={()=>{router.push("/about")}} className={nav=="/jobs"?(`${styles.menuLink} ${styles.a} ${styles.isActive}`):(`${styles.menuLink} ${styles.a}`)}>About us</div>
            <div onClick={()=>{router.push("/contact")}} className={nav=="/talents"?(`${styles.menuLink} ${styles.a} ${styles.isActive}`):(`${styles.menuLink} ${styles.a}`)}>Contact us</div>
            <div onClick={()=>{router.push("/services")}} className={nav=="/employers"?(`${styles.menuLink} ${styles.a} ${styles.isActive}`):(`${styles.menuLink} ${styles.a}`)}>Services</div>
          </>
        )
    }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
            <h1>Lebanon Token</h1>
        </div>
        <div className={styles.headerMenu}>
            {getLinks()}
        </div>
        <div className={styles.hamburger}>
        </div>
        <div className={styles.headerProfile}>
          <div className={styles.message}>
              <ModeCommentIcon className={styles.lock}/>
          </div>
            </div>
          </div>
        <div className={styles.subHeader}>
            <div className={styles.subHeaderMenu}>
                {getLinks()}
            </div>
        </div>
    </>
  )
}

export default Navbar