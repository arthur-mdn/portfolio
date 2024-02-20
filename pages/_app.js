// pages/_app.js
import '../styles/globals.css';
import Menu from "@/components/Menu";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

function MyApp({Component, pageProps}) {

    return (
        <>
            <Menu/>
            <Component {...pageProps} />
            <Footer/>
        </>

    )

}

export default MyApp;
