
import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectionId, NavLink as NavLinkType } from './types'; // Explicitly import NavLinkType
import { NAV_LINKS, PROFILE_INFO, PROJECTS_DATA, SKILLS_DATA } from './constants';

const App: React.FC = () => {
  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-primary text-text-main font-sans flex flex-col">
      <Navbar navLinks={NAV_LINKS} onNavLinkClick={scrollToSection} profileName={PROFILE_INFO.name} />
      <main className="flex-grow">
        <HeroSection id={SectionId.Hero} profileInfo={PROFILE_INFO} onContactClick={() => scrollToSection(SectionId.Contact)} />
        <AboutSection id={SectionId.About} shortBio={PROFILE_INFO.shortBio} profileName={PROFILE_INFO.name} />
        <ProjectsSection id={SectionId.Projects} projects={PROJECTS_DATA} />
        <SkillsSection id={SectionId.Skills} skillCategories={SKILLS_DATA} />
        <ContactSection id={SectionId.Contact} profileInfo={PROFILE_INFO} />
      </main>
      <Footer profileName={PROFILE_INFO.name} />
    </div>
  );
};

export default App;
