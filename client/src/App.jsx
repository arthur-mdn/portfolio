import { useState } from 'react'
import './App.css'
import Menu from "./components/menu.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import LinksSection from "./components/LinksSection.jsx";

function App() {
  return (
    <>
      <Menu/>
      <div style={{height:'80px'}}>
      </div>
      <HeroSection/>
      <br/>
      <br/>
      <AboutSection/>
      <br/>
      <SkillsSection/>
      <ProjectsSection/>
        <LinksSection/>
        <br/>
        <br/>
    </>
  )
}

export default App
