import "../styles/globals.css";
import "../styles/home.css";
import "../styles/portfolio-refinements.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { ProjectsLibraryProvider } from "@/components/ProjectsLibraryState";

function MyApp({ Component, pageProps }) {
  return (
    <ProjectsLibraryProvider>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </ProjectsLibraryProvider>
  );
}

export default MyApp;
