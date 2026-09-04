import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Smartphone,
  Cloud,
  Briefcase,
  Code2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  ShieldCheck,
  Send,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Award
} from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";
import {
  SERVICES,
  TECHNOLOGIES,
  PROJECTS,
  CORE_VALUES,
  WHY_US_CARDS,
  PROCESS_STAGES,
  CAREER_ROLES
} from "../data";

// Helper for mapping icon strings to Lucide components
export function ServiceIcon({ name, className = "w-6 h-6" }) {
  switch (name) {
    case "Layers":
      return <Layers className={className} />;
    case "Smartphone":
      return <Smartphone className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Cloud":
      return <Cloud className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "Code2":
      return <Code2 className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export function WhyUsIcon({ name, className = "w-6 h-6" }) {
  switch (name) {
    case "Code2":
      return <Code2 className={className} />;
    case "Target":
      return <Target className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Users":
      return <Users className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
}

// 1. HERO SECTION
export function HeroSection({ onExploreServices, onViewProjects }) {
  return (
    <section
      id="hero"
      className="relative pt-[1px] pb-20 md:pb-24 overflow-hidden"
    >
      {/* Glow gradient blobs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 glow-brand rounded-full pointer-events-none -z-10 blur-3xl opacity-60 animate-glow-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full pointer-events-none -z-10 blur-3xl opacity-40 animate-glow-pulse" />

      {/* Desktop & Tablet Full-Width Video - Placed 1px under navbar and above hero content */}
      {/* add video file here */}
      <div className="hidden md:block w-full mb-10 lg:mb-14">
        <div className="relative w-full overflow-hidden bg-slate-950 aspect-video flex items-center justify-center">
          {/* HTML5 Video Element with 100% Width & 100% Height */}
          {/* add video file here: specify video source path or URL */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover block"
          >
            {/* add video file here */}
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            <source src="/govind-tech-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-6 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          {/* Left Hero Content - Higher z-index to stay crisp, fully legible, and interactive */}
          <div className="lg:col-span-6 space-y-7 text-left relative z-10">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#EC4899] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-slate-800 uppercase">
                GOVIND TECH • NEXT-GEN ENGINEERING
              </span>
            </div>

            {/* Main Headline with 45-Degree Pink Linear Gradient on Main Content */}
            <h1 className="text-3xl sm:text-5xl lg:text-[66px] font-extrabold text-slate-900 tracking-tight leading-[1.08] break-words">
              Build the Future with{" "}
              <span className="text-pink-45-gradient">
                Intelligent
              </span>{" "}
              Technology.
            </h1>

            {/* Supporting Headline / Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              We design and build powerful digital products, modern applications, SaaS platforms, and AI-powered business solutions.
            </p>

            {/* Hero CTAs: Unified Linear Gradient Border with Hover Fill */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-cta-services"
                onClick={onExploreServices}
                className="btn-linear-base btn-linear-brand px-7 py-3.5 text-base shadow-md group w-full sm:w-auto cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-projects"
                onClick={onViewProjects}
                className="btn-linear-base btn-linear-slate px-6 py-3.5 text-base shadow-xs w-full sm:w-auto cursor-pointer"
              >
                <span>View Projects</span>
              </button>
            </div>

            {/* Micro-metrics under CTA */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-md bg-white/70 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-3 lg:p-0 rounded-xl lg:rounded-none">
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">Production-Ready</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2563EB]">AI & Cloud</div>
                <div className="text-xs text-slate-500 mt-0.5">Native Architectures</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">Zero-Lag</div>
                <div className="text-xs text-slate-500 mt-0.5">Scale & Resilience</div>
              </div>
            </div>
          </div>

          {/* Hero 3D Interactive Canvas:
              - When menu icon appears (< lg, mobile & tablet view): placed behind the hero text content as an atmospheric interactive background
              - On desktop (lg+): positioned side-by-side in right column (lg:col-span-6)
          */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30 sm:opacity-40 overflow-hidden lg:static lg:z-auto lg:opacity-100 lg:pointer-events-auto lg:col-span-6 lg:flex lg:justify-center">
            <div className="w-full relative flex items-center justify-center">
              <Hero3DCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 2. TRUST / INTRODUCTION SECTION
export function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold text-[#2563EB] tracking-widest uppercase">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-slate-900 tracking-tight leading-tight">
            Technology that turns ideas into products.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Govind Tech creates modern software solutions that help businesses transform ideas into scalable digital products. From web and mobile applications to SaaS platforms, AI automation, CRM systems, and custom business software, we focus on building technology that is practical, scalable, and easy to use.
          </p>
        </div>
      </div>
    </section>
  );
}

// 3. SERVICES SECTION
export function ServicesSection({ onOpenService }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
            Capabilities & Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Technology Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From concept to production, we build complete digital solutions.
          </p>
        </div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => onOpenService(service)}
              className="group bg-white rounded-2xl p-7 border border-blue-500 md:border-slate-200/90 shadow-xs hover:border-blue-500 card-anim mobile-blue-card flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header with Icon and ID */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                    <ServiceIcon name={service.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {service.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-900 group-hover:text-[#2563EB]">
                <span>Explore Architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. TECHNOLOGY SECTION
export function TechnologiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTech, setActiveTech] = useState(null);

  const categories = ["All", "Frontend", "Backend", "Database", "Mobile", "Desktop", "Security", "DevOps", "AI / Data", "Intelligence"];

  const filteredTech = selectedCategory === "All"
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(t => t.category.includes(selectedCategory) || selectedCategory.includes(t.category));

  return (
    <section id="technologies" className="py-20 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
            Engineering Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Built With Modern Technology
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Engineered using battle-tested frameworks, cloud infrastructure, and modern languages.
          </p>
        </div>

        {/* Clean filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Pills/Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              onMouseEnter={() => setActiveTech(tech)}
              onMouseLeave={() => setActiveTech(null)}
              className="p-4 rounded-xl bg-slate-50/80 border border-blue-500 md:border-slate-200/90 hover:border-blue-500 hover:bg-white card-anim mobile-blue-card group text-left cursor-default relative"
            >
              <div className="text-xs font-semibold text-blue-600 mb-1">
                {tech.category}
              </div>
              <div className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {tech.name}
              </div>
              <p className="text-xs text-slate-500 mt-1.5 leading-snug line-clamp-2">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Active Technology Inspector */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-400">TECHNOLOGY FOCUS:</span>
            <span className="text-sm font-bold text-white">
              {activeTech ? activeTech.name : "Hover any technology pill above to inspect architecture role"}
            </span>
          </div>
          <div className="text-xs text-slate-400">
            {activeTech ? activeTech.desc : "All frameworks configured for zero-downtime containerized deployment"}
          </div>
        </div>

      </div>
    </section>
  );
}

// 5. SELECTED PROJECTS SECTION
export function ProjectsSection({ onOpenProject }) {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "SaaS", "AI", "CRM", "Automation", "Mobile Application", "Education", "Business"];

  const filteredProjects = selectedTag === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(selectedTag) || p.tag === selectedTag);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
            Case Studies & Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real products. Practical technology. Measurable impact.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedTag === tag
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onOpenProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-blue-500 md:border-slate-200 shadow-xs hover:border-blue-500 card-anim mobile-blue-card flex flex-col justify-between cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-900 shadow-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#2563EB] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech stack badge line */}
                  <div className="py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-100 text-xs font-mono text-slate-600 mb-4">
                    {project.tech}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between text-sm font-semibold text-[#2563EB] group-hover:text-blue-700">
                    <span>View Project Specifications</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// 6. ABOUT SECTION
export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              Company Mission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              We Build Technology With Purpose.
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Govind Tech is a technology-focused company dedicated to building modern software products and digital experiences. Our approach combines engineering, design, automation, and artificial intelligence to create solutions that solve real business problems.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Rather than generic agency retainers, we work as dedicated technical partners—aligning our architecture directly with your operational velocity, unit economics, and long-term customer value.
            </p>
          </div>

          {/* 6 Core Values */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.name}
                className="p-5 rounded-xl bg-[#F8FAFC] border border-blue-500 md:border-slate-200/90 hover:border-blue-400 hover:bg-white card-anim mobile-blue-card"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
                  <h4 className="text-base font-bold text-slate-900">{val.name}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// 7. WHY GOVIND TECH SECTION
export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Why Businesses Choose Govind Tech
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A combination of modern software architecture, product discipline, and speed.
          </p>
        </div>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="p-7 rounded-2xl bg-white border border-blue-500 md:border-slate-200 shadow-xs hover:border-blue-500 card-anim mobile-blue-card flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <WhyUsIcon name={card.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <span>Enterprise Grade</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// 8. PROCESS SECTION (How We Build)
export function ProcessSection() {
  const [activeStep, setActiveStep] = useState("01");

  return (
    <section id="process" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
            Execution Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            How We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A disciplined, five-stage product lifecycle engineered for predictability and speed.
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline / Mobile Vertical */}
        <div className="relative mb-12">
          {/* Connecting Line on Desktop */}
          <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-[2px] bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STAGES.map((stage) => {
              const isSelected = activeStep === stage.step;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(stage.step)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-center md:text-left flex flex-col justify-between card-anim mobile-blue-card ${
                    isSelected
                      ? "bg-slate-900 text-white border-blue-500 md:border-slate-900 shadow-xl scale-102"
                      : "bg-[#F8FAFC] text-slate-800 border-blue-500 md:border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`w-9 h-9 rounded-full font-mono text-sm font-bold flex items-center justify-center ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-500 to-red-500 text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {stage.step}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                          Active
                        </span>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${isSelected ? "text-white" : "text-slate-900"}`}>
                      {stage.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isSelected ? "text-slate-300" : "text-slate-600"}`}>
                      {stage.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Callout for currently selected step */}
        {(() => {
          const current = PROCESS_STAGES.find((s) => s.step === activeStep);
          return (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-slate-800">
              <div className="space-y-1 max-w-2xl">
                <div className="text-xs font-mono text-blue-400">
                  STAGE {current?.step} SPECIFICATION
                </div>
                <h4 className="text-xl sm:text-2xl font-bold">
                  {current?.title} — Deliverables & Milestones
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed pt-1">
                  {current?.details}
                </p>
              </div>
              <a
                href="#contact"
                className="btn-linear-base btn-linear-blue px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold shrink-0 flex items-center gap-1.5"
              >
                <span>Initiate Stage 01</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          );
        })()}

      </div>
    </section>
  );
}

// 9. CAREERS SECTION
export function CareersSection({ onApplyRole }) {
  return (
    <section id="careers" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
            INTERNSHIP PROGRAM • WE PROVIDE INTERNSHIPS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            We Provide Industry-Grade Internships
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Govind Tech provides exclusive, practical internship programs for students, freshers, and aspiring developers. Work directly on live production software, receive senior engineering mentorship, and build verified real-world portfolio proof.
          </p>
        </div>

        {/* Prominent Internship Notice */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-pink-50 border border-blue-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#EF4444] text-white flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="text-left space-y-0.5">
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Notice: Govind Tech Only Provides Internships</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                  Internships Provided
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We exclusively provide hands-on tech internships to train the next generation of engineers. Selected candidates receive milestone mentorship, live code reviews, performance stipends, and verifiable certificates.
              </p>
            </div>
          </div>
          <a
            href="https://forms.gle/6a4dWWEH8CTtNmuLA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linear-base btn-linear-pink px-4 py-2.5 text-xs font-semibold shrink-0 flex items-center gap-1.5 whitespace-nowrap cursor-pointer no-underline"
          >
            <span>Apply Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Opportunities List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {CAREER_ROLES.map((role) => (
            <div
              key={role.title}
              className="p-6 rounded-xl bg-white border border-blue-500 md:border-slate-200 shadow-xs hover:border-blue-500 card-anim mobile-blue-card flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-lg font-bold text-slate-900">{role.title}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700">
                    {role.type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    {role.stipend || "Certificate Provided"}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600">
                    {role.location}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono mb-2">{role.skills}</p>
                <p className="text-sm text-slate-600">{role.desc}</p>
              </div>

              <a
                href="https://forms.gle/6a4dWWEH8CTtNmuLA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linear-base btn-linear-pink px-5 py-2.5 text-xs sm:text-sm font-semibold shrink-0 flex items-center justify-center gap-1.5 cursor-pointer no-underline"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// 10. CONTACT SECTION
export function ContactSection({ selectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: selectedService || "Full-Stack Development",
    message: ""
  });

  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  // Sync selectedService prop if parent changes it
  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill out all required fields: Full Name, Email, Contact / Phone Number, and Message."
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    const gFormData = new FormData();
    gFormData.append("entry.35491985", formData.name.trim());
    gFormData.append("entry.1809408656", formData.email.trim());
    gFormData.append("entry.1266121411", formData.phone.trim());

    // Combine message with selected service & organization details
    const extraDetails = [];
    if (formData.service) extraDetails.push(`Service: ${formData.service}`);
    if (formData.company && formData.company.trim()) extraDetails.push(`Organization/College: ${formData.company.trim()}`);
    
    let combinedMessage = formData.message.trim();
    if (extraDetails.length > 0) {
      combinedMessage += `\n\n[Details: ${extraDetails.join(" | ")}]`;
    }
    gFormData.append("entry.1355718052", combinedMessage);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSe8a3IKlvx7PAGcdKmFobYcN3CWThX44MPDuq3hUn6XQzR5eA/formResponse",
        {
          method: "POST",
          body: gFormData,
          mode: "no-cors"
        }
      );

      setSent(true);
      setStatus({
        type: "success",
        message: "Your message has been sent successfully to Govind Tech! Our engineering team will review your inquiry and connect with you shortly."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Full-Stack Development",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: "There was a network error sending your message. Please try again or reach out directly at contact@govindtech.com."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              Let's Connect
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Have an Idea? Let's Build It.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Tell us what you want to build and our team can help turn your idea into a practical digital product.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email Inquiry</div>
                  <div className="text-sm font-semibold">contact@govindtech.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Phone Support</div>
                  <div className="text-sm font-semibold">+1 (800) 468-4638</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Headquarters</div>
                  <div className="text-sm font-semibold">San Francisco, CA & Global Remote</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-blue-500 md:border-slate-200 space-y-2 card-anim mobile-blue-card">
              <div className="text-xs font-bold text-slate-900 uppercase">Non-Disclosure Guarantee</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All client project briefs and intellectual property remain 100% confidential under standard mutual NDA agreements.
              </p>
            </div>
          </div>

          {/* Right form column: Sleeker footprint with rotating multi-color conic gradient border & 4-side hover show effect */}
          <div className="lg:col-span-7 contact-card-wrapper max-w-xl mx-auto lg:max-w-none w-full">
            <div className="contact-rotating-card w-full">
              <div className="contact-glass-inner p-5 sm:p-6 lg:p-7">
              {sent ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50/50 rounded-xl border border-emerald-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {status.message || "Thank you for reaching out. We have received your inquiry and our team will get in touch shortly."}
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setStatus({ type: null, message: "" });
                    }}
                    className="btn-linear-base btn-linear-brand mt-4 px-6 py-2.5 text-sm font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.type === "error" && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {status.message}
                    </div>
                  )}

                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="floating-box-group">
                      <input
                        id="contact-form-name"
                        required
                        type="text"
                        placeholder=" "
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="floating-box-input"
                      />
                      <label htmlFor="contact-form-name" className="floating-box-label">
                        Full Name *
                      </label>
                    </div>

                    <div className="floating-box-group">
                      <input
                        id="contact-form-email"
                        required
                        type="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="floating-box-input"
                      />
                      <label htmlFor="contact-form-email" className="floating-box-label">
                        Email Address *
                      </label>
                    </div>
                  </div>

                  {/* Row 2: Contact Number / Phone & Company/College */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="floating-box-group">
                      <input
                        id="contact-form-phone"
                        required
                        type="tel"
                        placeholder=" "
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="floating-box-input"
                      />
                      <label htmlFor="contact-form-phone" className="floating-box-label">
                        Contact / Phone Number *
                      </label>
                    </div>

                    <div className="floating-box-group">
                      <input
                        id="contact-form-company"
                        type="text"
                        placeholder=" "
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="floating-box-input"
                      />
                      <label htmlFor="contact-form-company" className="floating-box-label">
                        Company / Organization / College
                      </label>
                    </div>
                  </div>

                  {/* Row 3: Service of Interest (Budget Field REMOVED as requested) */}
                  <div className="floating-box-group">
                    <select
                      id="contact-service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="floating-box-input cursor-pointer bg-transparent"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Internship & Training Inquiry">Internship & Training Inquiry</option>
                      <option value="General Architecture Consultation">General Architecture Consultation</option>
                    </select>
                    <label htmlFor="contact-service-select" className="floating-box-label !top-0 !bg-white !text-[0.72rem] !font-semibold !text-blue-600">
                      Service of Interest
                    </label>
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div className="floating-box-group">
                    <textarea
                      id="contact-form-message"
                      required
                      rows={4}
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="floating-box-textarea"
                    />
                    <label htmlFor="contact-form-message" className="floating-box-label">
                      Message / Project Brief *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    id="contact-form-submit-btn"
                    className="w-full btn-contact-linear py-3.5 px-6 rounded-xl font-semibold text-base shadow-md cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2 group transition-all duration-300"
                  >
                    {loading ? (
                      <span className="relative z-10">Sending Message...</span>
                    ) : (
                      <>
                        <span className="relative z-10">Send Message</span>
                        <ArrowRight className="w-4 h-4 ml-1 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}

// 11. FOOTER SECTION
export function FooterSection({ onNavigate }) {
  const handleNav = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          {/* add logo image here */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* add logo image here */}
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                {/* add logo image here */}
                <img
                  src="/favicon.png"
                  alt="Govind Tech"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex items-baseline tracking-tight font-extrabold text-2xl text-white">
                <span className="logo-gradient-animated tracking-tight font-black">
                  GOVIND TECH
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building modern software, AI-powered solutions, and digital products that transform business ideas into scalable realities.
            </p>
            <div className="text-xs text-slate-500">
              Modern • Intelligent • Technical • Reliable • Innovative
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col items-start w-full">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <div className="footer-links-column flex flex-row flex-wrap items-center gap-x-4 gap-y-2 text-sm w-full md:flex-col md:items-start md:gap-2.5">
              <a
                href="#hero"
                onClick={(e) => handleNav(e, "hero")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                Home
              </a>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <a
                href="#about"
                onClick={(e) => handleNav(e, "about")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                About
              </a>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <a
                href="#careers"
                onClick={(e) => handleNav(e, "careers")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                Careers
              </a>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <a
                href="#projects"
                onClick={(e) => handleNav(e, "projects")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                Projects
              </a>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <a
                href="#contact"
                onClick={(e) => handleNav(e, "contact")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col items-start w-full">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <div className="footer-links-column flex flex-row flex-wrap items-center gap-x-4 gap-y-2 text-sm w-full md:flex-col md:items-start md:gap-2.5">
              <a
                href="#services"
                onClick={(e) => handleNav(e, "services")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                Full-Stack Development
              </a>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <a
                href="#services"
                onClick={(e) => handleNav(e, "services")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                Mobile App Development
              </a>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <a
                href="#services"
                onClick={(e) => handleNav(e, "services")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                AI & Automation
              </a>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <a
                href="#services"
                onClick={(e) => handleNav(e, "services")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                SaaS Products
              </a>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <a
                href="#services"
                onClick={(e) => handleNav(e, "services")}
                className="footer-link-item hover:text-white transition-colors text-left text-slate-400 py-1"
              >
                CRM & Operations
              </a>
            </div>
          </div>

          {/* Contact & Social Links Column */}
          <div className="flex flex-col items-start w-full">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="footer-links-column flex flex-row flex-wrap items-center gap-x-4 gap-y-2 text-sm w-full md:flex-col md:items-start md:gap-2.5">
              <span className="text-slate-300 block py-0.5">contact@govindtech.com</span>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <span className="text-slate-300 block py-0.5">+1 (800) 468-4638</span>
              <span className="footer-link-dot md:hidden text-slate-600">•</span>
              <span className="text-slate-400 text-xs block py-0.5">San Francisco, CA & Remote</span>
              
              <div className="pt-2 flex flex-row items-center gap-3 flex-wrap w-full">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link-item text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  GitHub
                </a>
                <span className="inline text-slate-600">•</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link-item text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  LinkedIn
                </a>
                <span className="inline text-slate-600">•</span>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link-item text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  X / Twitter
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Govind Tech. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
