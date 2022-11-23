import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppBoard from '../components/AppBoard'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Lebanon Token</title>
        <meta name="description" content="Lebanese Digital Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AppBoard/>
      </main>
    </div>
  )
}
