// /pages/index.jsx
import SkillsSection from '../components/SkillsSection';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import LinksSection from "@/components/HomePage/LinksSection";
import ProjectsSection from "@/components/HomePage/ProjectsSection";

export default function Competences() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection />
            <ProjectsSection/>
            <LinksSection />
        </>
    );
}
