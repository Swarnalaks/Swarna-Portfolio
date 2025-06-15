
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsGridSection from '../components/SkillsGridSection';
import CertificationsSection from '../components/CertificationsSection';
import ProjectsSection from '../components/ProjectsSection';
import LanguagesSection from '../components/LanguagesSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsGridSection />
        <CertificationsSection />
        <ProjectsSection />
        <LanguagesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
