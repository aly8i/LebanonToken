import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from './Background'
import { createTheme,ThemeProvider } from "@mui/material";
const Layout = ({ children,url}) => {
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Lebnaon Token</title>
        <meta name="description" content="#1 Production Crew" />
        <link rel="icon" href="/lt.png" />
      </Head>
      <Background/> 
      <div className={styles.container}>
        <main className={styles.main}>
          <Navbar nav={url}/>
          {children}
        </main>
        <Footer instagram={"https://www.instagram.com"} twitter={"https://www.instagram.com"} facebook={"https://www.instagram.com"} linkedin={"https://www.instagram.com"}/>
      </div>
    </ThemeProvider>
    </>
  );
};

export default Layout;
