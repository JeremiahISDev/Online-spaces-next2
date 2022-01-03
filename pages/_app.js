import '../styles/globals.css'
import { Navigation , Footer } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navigation/>
      <Component {...pageProps} />
    <Footer/>
    </>
  );
}

export default MyApp