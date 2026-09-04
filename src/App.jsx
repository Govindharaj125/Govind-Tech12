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
import { ServiceModal, CareerModal } from "./components/Modals";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeCareerModal, setActiveCareerModal] = useState(null);
  const [contactPreselectedService, setContactPreselectedService] = useState("");

  // Smooth scroll handler with comfortable gap from fixed navbar
  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      try {
        const yOffset = -96; // Generous gap offset from navbar so content never sticks
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
          onExploreInternships={() => handleNavigate("careers")}
        />

        {/* 3. Trust / What We Do Section */}
        <TrustSection />

        {/* 4. Services Section (6 Cards) */}
        <ServicesSection
          onOpenService={(service) => setActiveServiceModal(service)}
        />

        {/* 5. Built With Modern Technology */}
        <TechnologiesSection />

        {/* 6. Selected Projects Section (Display Only) */}
        <ProjectsSection />

        {/* 7. Why Govind Tech (6 Advantages) */}
        <WhyUsSection />

        {/* 8. Process Section (How We Build) */}
        <ProcessSection />

        {/* 9. Careers Section (Internship Program) */}
        <CareersSection
          onApplyRole={(role) => setActiveCareerModal(role)}
        />

        {/* 10. About Section (Leadership Team & Core Values - Placed after Internship) */}
        <AboutSection />

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
