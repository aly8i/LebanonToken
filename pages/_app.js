import '../styles/globals.css'
import Layout from "../components/Layout";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const url = router.asPath
  return (
    <Layout url={url}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
