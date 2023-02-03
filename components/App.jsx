import React from 'react'
import styles from "../styles/Main.module.css"
import Background from './Background'
import { useState } from 'react'
import Navbar from './Navbar'
const App = () => {
    const [page,setPage] = useState("wallet");
  return (
    <>
      <Navbar/>
      <Background/> 
      <div className={styles.appwrapper}>
        <h1 class="text1">Powering all Software Solutions your Business Desires</h1> 
      </div>
    </>
  )
}

export default App