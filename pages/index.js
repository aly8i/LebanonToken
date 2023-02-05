import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from '../components/App'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Lebanon Token</title>
        <meta name="description" content="Lebanon Token" />
        <link rel="icon" href="/lt.png" />
      </Head>
      <main className={styles.main}>
        <App/>
      </main>
    </div>
  )
}
