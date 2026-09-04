import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ExternalLink
} from "lucide-react";

export function ServiceModal({ service, onClose, onSelectService }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain flex items-center justify-center p-3.5 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[86vh] my-auto flex flex-col"
      >
        {/* Header - High contrast dark surface with crisp white text */}
        <div className="p-4 sm:p-6 bg-slate-950 text-white relative shrink-0 border-b border-slate-800">
          <div className="flex items-center justify-between mb-2.5">
            {/* Prominent Back Button with Arrow Symbol */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 min-h-[38px] rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 text-white text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xs cursor-pointer transition-all hover:-translate-x-0.5 border border-white/20"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Back</span>
            </button>

            {/* Close X Button */}
            <button
              onClick={onClose}
              className="p-2 min-h-[38px] min-w-[38px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/25 text-blue-300 border border-blue-400/40 mb-1.5">
            Service {service.id}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="mt-1 text-slate-300 text-xs sm:text-sm leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto">
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Architecture & Overview
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
              Core Deliverables & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-blue-950 uppercase">Ready to get started?</div>
              <div className="text-xs text-blue-800 mt-0.5">Discuss requirements with our technical leads.</div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-2 min-h-[38px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold cursor-pointer transition-colors shadow-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-slate-700" />
                <span>Back</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onSelectService) onSelectService(service.title);
                }}
                className="btn-linear-base btn-linear-blue px-3.5 py-2 min-h-[38px] rounded-lg text-xs sm:text-sm font-semibold shrink-0 cursor-pointer shadow-xs"
              >
                <span>Inquire for {service.title} →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose, onConsult }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain flex items-center justify-center p-3.5 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[86vh] my-auto flex flex-col"
      >
        {/* Compact Visual Cover Header - High contrast dark background with crisp white text */}
        <div className="relative h-44 sm:h-52 w-full shrink-0 bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

          {/* Top Left Back Arrow Button with prominent symbol */}
          <button
            onClick={onClose}
            className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold backdrop-blur-md shadow-md cursor-pointer transition-all hover:-translate-x-0.5 border border-white/30"
            aria-label="Go back to projects"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-white font-medium">Back</span>
          </button>

          {/* Top Right Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-10 p-2 min-h-[38px] min-w-[38px] flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors cursor-pointer border border-white/30"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="absolute bottom-3 left-4 sm:left-5 right-4">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600/90 text-white border border-blue-400/40 mb-1">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-sm">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto">
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              System Architecture & Scope
            </h4>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.split("•").map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Measurable Business Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {project.metrics?.map((m, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center"
                >
                  <div className="text-xs sm:text-sm font-bold text-[#2563EB]">{m}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2.5">
            {/* Bottom Back Button with Arrow Symbol */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold cursor-pointer transition-all hover:-translate-x-0.5 shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-slate-700" />
              <span>Back to Projects</span>
            </button>
            <button
              onClick={() => {
                onClose();
                if (onConsult) onConsult(project.name);
              }}
              className="btn-linear-base btn-linear-brand px-4 py-2 min-h-[38px] rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Build Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CareerModal({ role, onClose, onSubmitSuccess }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    experience: "1-3 years",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess(formData);
    }, 900);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain flex items-center justify-center p-3.5 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md md:max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[86vh] my-auto flex flex-col"
      >
        <div className="p-4 sm:p-5 bg-slate-950 text-white relative shrink-0 border-b border-slate-800">
          <div className="flex items-center justify-between mb-2">
            {/* Top Left Back Arrow Button with prominent symbol */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xs cursor-pointer transition-all hover:-translate-x-0.5 border border-white/20"
              aria-label="Go back to careers"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Back</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 min-h-[38px] min-w-[38px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white cursor-pointer transition-colors border border-white/10"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
            Internship Program Application
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">{role?.title || "Internship at Govind Tech"}</h3>
          <p className="text-xs text-slate-300 mt-0.5">{role?.skills || "Practical Experience • Senior Mentorship"}</p>
        </div>

        <div className="p-4 sm:p-5 overflow-y-auto">
          {/* Official Google Form Direct Apply Link */}
          <div className="mb-3.5 p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-2">
            <div className="text-xs text-blue-950 font-medium">
              Prefer applying directly via Google Form?
            </div>
            <a
              href="https://forms.gle/6a4dWWEH8CTtNmuLA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 shrink-0"
            >
              <span>Open Form</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">Internship Application Submitted!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto">
                Thank you for applying to the Govind Tech Internship Program. Our engineering mentors will review your details and reach out shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-3 flex items-center gap-1.5 mx-auto px-4 py-2 min-h-[38px] rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4 text-white" />
                <span className="text-white font-medium">Back to Careers</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  GitHub / Portfolio URL
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://github.com/username"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Year / Experience
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm text-slate-900 bg-white"
                >
                  <option value="College Student (1st-2nd Year)">College Student (1st-2nd Year)</option>
                  <option value="Final Year / Pre-final Year Student">Final Year / Pre-final Year Student</option>
                  <option value="Recent Graduate (0-1 year exp)">Recent Graduate (0-1 year exp)</option>
                  <option value="Self-Taught Developer">Self-Taught Developer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Why do you want to intern at Govind Tech?
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Briefly tell us about your technical projects and interests..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm text-slate-900 bg-white resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex items-center gap-1.5 px-3 py-2 min-h-[38px] rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-700" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-linear-base btn-linear-brand px-4 py-2 min-h-[38px] rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
