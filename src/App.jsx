import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CursorAnimation from "./components/CursorAnimation";
import {
  HeroSection,
  TrustSection,
  ServicesSection,
  TechnologiesSection,
  ProjectsSection,
  AboutSection,
  WhyUsSection,
  ProcessSection,
  CareersSection,
  ContactSection,
  FooterSection
} from "./components/Sections";
import { ServiceModal, ProjectModal, CareerModal } from "./components/Modals";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeCareerModal, setActiveCareerModal] = useState(null);
  const [contactPreselectedService, setContactPreselectedService] = useState("");

  // Smooth scroll handler
  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      try {
        const yOffset = -76; // Navbar height offset
        const y = element.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      } catch {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sectionIds = ["hero", "trust", "services", "technologies", "projects", "about", "why-us", "process", "careers", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
      {/* Interactive Cursor Animation in Empty Areas */}
      <CursorAnimation />
      
      {/* 1. Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      {/* Fixed Navbar Spacer */}
      <div className="h-[76px] shrink-0" aria-hidden="true" />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section with 3D Technology Core */}
        <HeroSection
          onExploreServices={() => handleNavigate("services")}
          onViewProjects={() => handleNavigate("projects")}
        />

        {/* 3. Trust / What We Do Section */}
        <TrustSection />

        {/* 4. Services Section (6 Cards) */}
        <ServicesSection
          onOpenService={(service) => setActiveServiceModal(service)}
        />

        {/* 5. Built With Modern Technology */}
        <TechnologiesSection />

        {/* 6. Selected Projects Section */}
        <ProjectsSection
          onOpenProject={(project) => setActiveProjectModal(project)}
        />

        {/* 7. About Section (Values) */}
        <AboutSection />

        {/* 8. Why Govind Tech (6 Advantages) */}
        <WhyUsSection />

        {/* 9. Process Section (How We Build) */}
        <ProcessSection />

        {/* 10. Careers Section */}
        <CareersSection
          onApplyRole={(role) => setActiveCareerModal(role)}
        />

        {/* 11. Contact Section */}
        <ContactSection
          selectedService={contactPreselectedService}
        />

      </main>

      {/* 12. Footer Section */}
      <FooterSection onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      {activeServiceModal && (
        <ServiceModal
          service={activeServiceModal}
          onClose={() => setActiveServiceModal(null)}
          onSelectService={(serviceTitle) => {
            setContactPreselectedService(serviceTitle);
            handleNavigate("contact");
          }}
        />
      )}

      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
          onConsult={(projectName) => {
            setContactPreselectedService(`Custom Build: Similar to ${projectName}`);
            handleNavigate("contact");
          }}
        />
      )}

      {activeCareerModal && (
        <CareerModal
          role={activeCareerModal}
          onClose={() => setActiveCareerModal(null)}
          onSubmitSuccess={() => {
            // Handled inside modal with celebratory state
          }}
        />
      )}

    </div>
  );
}
