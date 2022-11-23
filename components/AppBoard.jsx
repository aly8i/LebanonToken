import React from 'react'
import styles from "../styles/Board.module.css"
import Background from './Background'
import DarkSwitch from './DarkSwitch'
import FeaturesBanner from './FeaturesBanner'
import Header from './Header'
import Installed from './Installed'
import AppsSection from './AppsSection'
import { useState } from 'react'
const AppBoard = () => {
    const [page,setPage] = useState("wallet");
  return (
    <>
        <Background/>
        <DarkSwitch/>
        <div className={styles.app}>
            <Header setPage={setPage}/>
                <div className={styles.wrapper}>
                    <div className={styles.mainContainer}>
                    <div className={styles.contentWrapper}>
                        {page=="discover"?<FeaturesBanner/>:<></>}
                        <div className={styles.contentSection}>
                            <Installed/>
                        </div>
                        <div className={styles.contentSection}>
                            <AppsSection/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.overlayApp}></div>
        </div>
    </>
  )
}

export default AppBoard