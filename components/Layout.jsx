import {Navigation, Footer} from "./index.js";

function Layout({pageProps})
{
  return(
    <>
      <Navigation />
      {...pageProps}
      <Footer />
    </>
  );
}

export default Layout;