import React, { useState } from 'react'

const inquiryTypes = [
  { key: 'project', label: 'New Project', desc: 'I want to build or scale something.' },
  { key: 'support', label: 'Support', desc: 'I am an existing client.' },
  { key: 'partner', label: 'Partnership', desc: 'Agency, reseller, or alliance.' },
  { key: 'media', label: 'Press / Media', desc: 'Interview, speaker, feature.' },
]

const services = ['Website', 'E-commerce', 'Mobile App', 'CRM / HRMS', 'UI / UX', 'Digital Marketing', 'Other']
const budgets = ['< ₹10 K', '₹10 K – ₹50 K', '₹50 K – ₹2 L', '₹2 L +', 'Undecided']
const timelines = ['ASAP', 'Within 1 month', '1 – 3 months', 'Exploring']

const ContactForm = () => {
  const [inquiry, setInquiry] = useState('project')
  const [service, setService] = useState('Website')
  const [budget, setBudget] = useState('₹50 K – ₹2 L')
  const [timeline, setTimeline] = useState('Within 1 month')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4500)
  }

  return (
    <section
      id="contact-form"
      className="relative bg-[#097CF4] text-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
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
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-white"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                Send a Message
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[68px] font-extrabold leading-[1.0] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Write to us. <br />
              <span className="italic text-black">Get a human back.</span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-white/85 max-w-[420px]">
              The more context you share, the better our first reply. If you have a brief, a deck,
              or screenshots of a reference — attach it. We read everything.
            </p>

            <ul
              className="mt-8 space-y-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {[
                'Founder replies within 24 hours',
                'NDA on request · zero spam',
                'Free discovery call, no pressure',
                'Fixed written quote before any work',
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
          </div>

          {/* RIGHT — form card */}
          <div className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="relative bg-white text-black p-6 sm:p-8 lg:p-10 shadow-[12px_12px_0_0_rgba(0,0,0,1)]"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#097CF4]"></span>

              <div className="flex items-center justify-between mb-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                  — What brings you here?
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  * required
                </p>
              </div>

              {/* Inquiry type segmented control */}
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-black mb-8">
                {inquiryTypes.map((t, i) => {
                  const active = inquiry === t.key
                  return (
                    <button
                      type="button"
                      key={t.key}
                      onClick={() => setInquiry(t.key)}
                      className={`text-left p-4 transition-colors ${
                        active ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'
                      } ${i !== inquiryTypes.length - 1 ? 'lg:border-r-2 border-black' : ''} ${
                        i < 2 ? 'border-b-2 lg:border-b-0 border-black' : ''
                      } ${i % 2 === 1 ? 'border-l-2 lg:border-l-0 border-black' : ''}`}
                    >
                      <p className={`text-[12px] font-extrabold uppercase tracking-[0.15em] ${active ? 'text-[#097CF4]' : 'text-[#097CF4]'}`}>
                        {t.label}
                      </p>
                      <p className={`text-[11px] mt-1 leading-snug ${active ? 'text-white/70' : 'text-black/55'}`}>
                        {t.desc}
                      </p>
                    </button>
                  )
                })}
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                    Your Name *
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="mt-2 w-full h-12 px-4 border-2 border-black bg-white text-[14px] focus:border-[#097CF4] outline-none transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                    Work Email *
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="mt-2 w-full h-12 px-4 border-2 border-black bg-white text-[14px] focus:border-[#097CF4] outline-none transition-colors"
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
                    placeholder="Your Company / Brand"
                    className="mt-2 w-full h-12 px-4 border-2 border-black bg-white text-[14px] focus:border-[#097CF4] outline-none transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                    Phone (optional)
                  </span>
                  <input
                    type="tel"
                    placeholder="+91 70966 08771"
                    className="mt-2 w-full h-12 px-4 border-2 border-black bg-white text-[14px] focus:border-[#097CF4] outline-none transition-colors"
                  />
                </label>
              </div>

              {/* Conditional project fields */}
              {inquiry === 'project' && (
                <>
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

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                        Budget Range
                      </span>
                      <div className="mt-3 grid grid-cols-2 sm:grid-cols-2 gap-2">
                        {budgets.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setBudget(b)}
                            className={`h-11 border-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
                              budget === b
                                ? 'bg-[#097CF4] border-[#097CF4] text-white'
                                : 'bg-white border-black/30 text-black hover:border-black'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                        Timeline
                      </span>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {timelines.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTimeline(t)}
                            className={`h-11 border-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
                              timeline === t
                                ? 'bg-[#097CF4] border-[#097CF4] text-white'
                                : 'bg-white border-black/30 text-black hover:border-black'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Message */}
              <label className="block mt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">
                  Your Message *
                </span>
                <textarea
                  rows="5"
                  required
                  placeholder="Tell us about your project, your team, and what a great outcome looks like for you."
                  className="mt-2 w-full px-4 py-3 border-2 border-black bg-white text-[14px] focus:border-[#097CF4] outline-none transition-colors resize-none"
                ></textarea>
              </label>

              {/* Attachment + consent */}
              <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <label className="inline-flex items-center gap-2 h-11 px-4 border-2 border-dashed border-black/30 text-[11px] font-bold uppercase tracking-[0.2em] text-black/70 hover:border-[#097CF4] hover:text-[#097CF4] transition-colors cursor-pointer">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                  </svg>
                  Attach brief (PDF · 10 MB)
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>

                <label className="flex items-start gap-3 text-[11px] text-black/60 max-w-[360px]">
                  <input type="checkbox" required defaultChecked className="mt-1 accent-[#097CF4] w-4 h-4" />
                  <span>
                    I agree to the <span className="text-[#097CF4] underline font-semibold">Privacy Policy</span> and consent to be contacted.
                  </span>
                </label>
              </div>

              {/* Submit + success */}
              <div className="mt-6 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[11px] text-black/50">
                  Founder replies within <span className="font-bold text-black">24 hours</span>.
                </p>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-between gap-3 h-14 pl-5 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors"
                >
                  Send Message
                  <span className="w-10 h-10 bg-[#097CF4] group-hover:bg-white flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white group-hover:text-[#097CF4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Success toast */}
              <div
                className={`mt-5 overflow-hidden transition-all duration-500 ${
                  submitted ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex items-center gap-3 p-4 bg-[#097CF4] text-white">
                  <span className="w-8 h-8 bg-white text-[#097CF4] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-[13px] font-semibold">
                    Message received. The founder will reply within 24 hours.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
