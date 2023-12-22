import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Menu from "./components/Menu.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import HomePage from "./components/HomePage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import {useEffect} from "react"; // Supposons que vous ayez un composant pour la section Contact

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/competences" element={<SkillsSection />} />
                <Route path="/projets" element={<ProjectsPage />} />
                <Route path="/projet/:slug" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
