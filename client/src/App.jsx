import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from "./components/menu.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import HomePage from "./components/HomePage.jsx";
import ContactPage from "./components/ContactPage.jsx"; // Supposons que vous ayez un composant pour la section Contact

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={
                   <HomePage />
                } />
                <Route path="/competences" element={<SkillsSection />} />
                <Route path="/projets" element={<ProjectsSection />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
