import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Send, ExternalLink } from "lucide-react";

export function ServiceModal({ service, onClose, onSelectService }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
            Service {service.id}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Architecture & Overview
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Core Deliverables & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-blue-900 uppercase">Ready to get started?</div>
              <div className="text-xs text-blue-700 mt-0.5">Discuss requirements with our technical leads.</div>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onSelectService) onSelectService(service.title);
              }}
              className="btn-linear-base btn-linear-blue px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold shrink-0"
            >
              Inquire for {service.title} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose, onConsult }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Visual Cover */}
        <div className="relative h-60 sm:h-72 w-full shrink-0 bg-slate-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 sm:left-8 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30 mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              System Architecture & Scope
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.split("•").map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Measurable Business Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics?.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center"
                >
                  <div className="text-sm font-bold text-[#2563EB]">{m}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium"
            >
              Back to Portfolio
            </button>
            <button
              onClick={() => {
                onClose();
                if (onConsult) onConsult(project.name);
              }}
              className="btn-linear-base btn-linear-brand px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
            Internship Program Application
          </div>
          <h3 className="text-xl font-bold">{role?.title || "Internship at Govind Tech"}</h3>
          <p className="text-xs text-slate-300 mt-1">{role?.skills || "Practical Experience • Senior Mentorship"}</p>
        </div>

        <div className="p-6">
          {/* Official Google Form Direct Apply Link */}
          <div className="mb-4 p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-2">
            <div className="text-xs text-blue-900 font-medium">
              Prefer applying directly via Google Form?
            </div>
            <a
              href="https://forms.gle/6a4dWWEH8CTtNmuLA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 shrink-0"
            >
              <span>Open Form</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Internship Application Submitted!</h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Thank you for applying to the Govind Tech Internship Program. Our engineering mentors will review your details and reach out with assessment tasks shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Portfolio / GitHub / Resume *</label>
                  <input
                    required
                    type="url"
                    placeholder="https://github.com/alex"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Current Status</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>College / University Student</option>
                    <option>Recent Graduate / Fresher</option>
                    <option>Self-Taught Developer</option>
                    <option>Early Professional Career Switcher</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Why are you interested in this internship?</label>
                <textarea
                  rows={3}
                  placeholder="Describe what you want to learn, projects you've built, or your career goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-linear-base btn-linear-pink w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <span>Submit Internship Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
