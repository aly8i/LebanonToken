import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import logo from "../public/lt.png"
const Navbar = ({nav}) => {
  const [showMenu,setShowMenu] = useState("false");
    const router= useRouter();
    const toggleMenu = ()=>{
      if(showMenu=="true"){
          setShowMenu("false");
      }else{
          setShowMenu("true")
      }
  }
    const getLinks = () =>{
        return(
          <>
            <div onClick={()=>{router.push("/")}} className={nav=="/"?(`${styles.menuLink} ${styles.a} ${styles.isActive}`):(`${styles.menuLink} ${styles.a}`)}>Home</div>
            <div onClick={()=>{router.push("/services")}} className={nav=="/services"?(`${styles.menuLink} ${styles.a} ${styles.isActive}`):(`${styles.menuLink} ${styles.a}`)}>Services</div>
            <div onClick={()=>{router.push("/about")}} className={nav=="/about"?(`${styles.menuLink} ${styles.a} ${styles.isActive}`):(`${styles.menuLink} ${styles.a}`)}>About us</div>
            <div onClick={()=>{router.push("/contact")}} className={nav=="/contact"?(`${styles.menuLink} ${styles.a} ${styles.isActive}`):(`${styles.menuLink} ${styles.a}`)}>Contact us</div>     
          </>
        )
    }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
            <h1 className={styles.title}>Lebanon Token</h1>
        </div>
        <div className={styles.headerMenu}>
            {getLinks()}
        </div>
        <div className={styles.hamburger}>
            <MenuIcon className={styles.hamburgerImage} onClick={()=>toggleMenu()}/>
        </div>
        <div className={styles.headerProfile}>
          <div className={styles.message}>
              <ModeCommentIcon onClick={()=>{router.push("/contact")}} className={styles.lock}/>
          </div>
            </div>
          </div>
          {showMenu=="true"?(
        <div className={styles.subHeader}>
            <div className={styles.subHeaderMenu}>
                {getLinks()}
            </div>
        </div>
        ):(<></>)}
    </div>
  )
}

export default Navbar