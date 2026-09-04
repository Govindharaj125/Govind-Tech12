import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X} from "lucide-react";

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure menu closes on viewport resize to desktop and on Escape key press
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Careers", href: "#careers", id: "careers" },
    { name: "About", href: "#about", id: "about" },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-[18px] border-b border-slate-200/90 shadow-sm"
          : "bg-white/80 backdrop-blur-[18px] border-b border-slate-200/80"
      }`}
      style={{ height: "76px" }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark / Logo */}
        {/* add logo image here */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "hero")}
          className="flex items-center gap-2.5 group cursor-pointer"
          id="navbar-brand-logo"
        >
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
          <div className="flex items-baseline tracking-tight font-extrabold text-xl">
            <span className="logo-gradient-animated tracking-tight font-black">
              GOVIND TECH
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative text-[15px] font-medium py-1 transition-colors duration-200 group ${
                  isActive ? "text-[#2563EB]" : "text-slate-700 hover:text-[#2563EB]"
                }`}
              >
                {link.name}
                {/* Gradient underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#EF4444] transition-all duration-300 origin-left ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Top Right: Desktop Contact CTA (Removed in mobile view) & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            id="navbar-contact-btn"
            className="hidden lg:inline-flex btn-contact-linear px-5 py-2.5 text-sm font-semibold shadow-xs hover:shadow-md cursor-pointer group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Mobile Menu Button - Shown exclusively in mobile/tablet views */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay - tap outside to close */}
          <div
            id="mobile-nav-backdrop"
            className="lg:hidden fixed inset-0 top-[76px] bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div
            id="mobile-nav-drawer"
            className="lg:hidden fixed top-[76px] left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-2xl transition-all duration-200 max-h-[calc(100vh-76px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`min-h-[44px] text-base font-medium py-2.5 px-3 rounded-lg border-b border-slate-100/80 flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-[#2563EB] bg-blue-50/70 font-semibold"
                        : "text-slate-800 hover:text-[#2563EB] hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? "text-[#2563EB]" : "text-slate-400"}`} />
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className={`min-h-[44px] text-base py-2.5 px-3 rounded-lg border-b border-slate-100/80 flex items-center justify-between font-semibold mt-1 transition-colors ${
                  activeSection === "contact"
                    ? "text-blue-700 bg-blue-50/80"
                    : "text-[#2563EB] hover:bg-blue-50/50"
                }`}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
