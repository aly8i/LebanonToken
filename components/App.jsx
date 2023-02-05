import React from 'react'
import styles from "../styles/Main.module.css"
import { useState } from 'react'
const App = () => {
    const [page,setPage] = useState("wallet");
  return (
    <div className={styles.appwrapper}>
      <h1 class="text1">Powering all Software Solutions your Business Desires</h1> 
    </div>
  )
}

export default App