import "../styles/globals.css";
import "../styles/home.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
