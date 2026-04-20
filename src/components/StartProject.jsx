import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const budgets = ['< ₹5 L', '₹5 L – ₹15 L', '₹15 L – ₹50 L', '₹50 L +']
const services = ['Web App', 'Mobile App', 'Cloud & DevOps', 'AI / ML', 'Cybersecurity', 'Other']

const StartProject = () => {
  const [budget, setBudget] = useState('₹5 L – ₹15 L')
  const [service, setService] = useState('Web App')

  return (
    <section
      id="start"
      className="relative bg-[#0276E2] text-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 80%)',
        }}
      ></div>

      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-white"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-white"></span>
      <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-white"></span>
      <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-white"></span>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT — narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-white"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                Start a New Project
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[68px] font-extrabold leading-[1.0] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Tell us what you're <span className="italic text-black">building.</span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-white/80 max-w-[460px]">
              Share a few details and a senior strategist will reply within one business day —
              with a response-estimate, not a sales pitch.
            </p>

            {/* Promise list */}
            <ul
              className="mt-8 space-y-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {[
                'Reply within 24 business hours',
                'NDA-protected conversation',
                'No obligation, no pressure',
                'Direct line to a senior architect',
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-[13px] font-semibold">
                  <span className="w-5 h-5 bg-black flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Contact channels */}
            <div className="mt-10 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a href="mailto:hello@techcareerit.com" className="group flex items-start gap-3">
                <span className="w-10 h-10 bg-black flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
                  </svg>
                </span>
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Email
                  </p>
                  <p className="text-[13px] font-semibold group-hover:underline">
                    hello@techcareerit.com
                  </p>
                </div>
              </a>
              <a href="tel:+919876543210" className="group flex items-start gap-3">
                <span className="w-10 h-10 bg-black flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.9 1.37l.9 2.69a2 2 0 01-.45 2L8.5 10.5a11 11 0 005 5l1.44-1.13a2 2 0 012-.45l2.69.9A2 2 0 0121 16.72V19a2 2 0 01-2 2A16 16 0 013 5z" />
                  </svg>
                </span>
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Phone
                  </p>
                  <p className="text-[13px] font-semibold group-hover:underline">
                    +91 98765 43210
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative bg-white text-black p-6 sm:p-8 lg:p-10 shadow-[12px_12px_0_0_rgba(0,0,0,1)]"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#0276E2]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#0276E2]"></span>

              <div className="flex items-center justify-between mb-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                  — Project Brief
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Step 01 / 01
                </p>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                    Your Name
                  </span>
                  <input
                    type="text"
                    placeholder="Priya Nair"
                    className="mt-2 w-full h-12 px-4 border-2 border-black/80 bg-white text-[14px] focus:border-[#0276E2] outline-none transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                    Work Email
                  </span>
                  <input
                    type="email"
                    placeholder="priya@company.com"
                    className="mt-2 w-full h-12 px-4 border-2 border-black/80 bg-white text-[14px] focus:border-[#0276E2] outline-none transition-colors"
                  />
                </label>
              </div>

              {/* Company + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                    Company
                  </span>
                  <input
                    type="text"
                    placeholder="Nexora Analytics"
                    className="mt-2 w-full h-12 px-4 border-2 border-black/80 bg-white text-[14px] focus:border-[#0276E2] outline-none transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                    Phone (optional)
                  </span>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="mt-2 w-full h-12 px-4 border-2 border-black/80 bg-white text-[14px] focus:border-[#0276E2] outline-none transition-colors"
                  />
                </label>
              </div>

              {/* Service chips */}
              <div className="mt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                  Service Needed
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setService(s)}
                      className={`px-4 h-10 border-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                        service === s
                          ? 'bg-black border-black text-white'
                          : 'bg-white border-black/30 text-black hover:border-black'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget chips */}
              <div className="mt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                  Estimated Budget
                </span>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`h-11 border-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
                        budget === b
                          ? 'bg-[#0276E2] border-[#0276E2] text-white'
                          : 'bg-white border-black/30 text-black hover:border-black'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project brief */}
              <label className="block mt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                  Project Brief
                </span>
                <textarea
                  rows="4"
                  placeholder="What are you building, who is it for, and what does success look like?"
                  className="mt-2 w-full px-4 py-3 border-2 border-black/80 bg-white text-[14px] focus:border-[#0276E2] outline-none transition-colors resize-none"
                ></textarea>
              </label>

              {/* Consent + submit */}
              <div className="mt-6 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <label className="flex items-start gap-3 text-[11px] text-black/60 max-w-[320px]">
                  <input type="checkbox" defaultChecked className="mt-1 accent-[#0276E2] w-4 h-4" />
                  <span>
                    I agree to the{' '}
                    <span className="text-[#0276E2] underline font-semibold">Privacy Policy</span>{' '}
                    and consent to be contacted.
                  </span>
                </label>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-between gap-3 h-14 pl-5 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#0276E2] transition-colors"
                >
                  Send Project Brief
                  <span className="w-10 h-10 bg-[#0276E2] group-hover:bg-white flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4 text-white group-hover:text-[#0276E2]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>

            <p className="mt-5 text-center lg:text-right text-[11px] text-white/70">
              Prefer a call instead?{' '}
              <Link to="/contact" className="font-bold underline hover:no-underline">
                Book a 30-min discovery call →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartProject
