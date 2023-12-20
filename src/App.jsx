import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from "./components/menu.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import HomePage from "./components/HomePage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import NotFound from "./components/NotFound.jsx"; // Supposons que vous ayez un composant pour la section Contact

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/competences" element={<SkillsSection />} />
                <Route path="/projets" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
