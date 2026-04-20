import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    no: '01',
    title: 'Web Development',
    desc: 'Lightning-fast websites, SaaS platforms, and enterprise portals built with modern frameworks and headless architectures.',
    tags: ['React', 'Next.js', 'Node.js', 'Headless CMS'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path strokeLinecap="round" d="M3 8h18M7 12l-2 2 2 2M11 16l2-4M17 12l2 2-2 2" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'Mobile Applications',
    desc: 'Native and cross-platform mobile experiences engineered for iOS and Android with pixel-perfect UI and seamless APIs.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path strokeLinecap="round" d="M10 18h4M12 5.5h.01" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Custom Software',
    desc: 'Tailored business applications, CRMs, ERPs, and internal tools that automate workflows and scale with your team.',
    tags: ['ERP', 'CRM', 'SaaS', 'Automation'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l-4 8 4 8M16 4l4 8-4 8M14 3l-4 18" />
      </svg>
    ),
  },
  {
    no: '04',
    title: 'Cloud & DevOps',
    desc: 'Cloud-native architecture, CI/CD pipelines, and container orchestration for resilient, auto-scaling infrastructure.',
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a4 4 0 01-.88-7.9 5 5 0 019.9-1.06A4.5 4.5 0 1118 18H7z" />
      </svg>
    ),
  },
  {
    no: '05',
    title: 'AI / ML Solutions',
    desc: 'Predictive models, intelligent automation, and LLM-powered assistants integrated into your products and processes.',
    tags: ['LLM', 'NLP', 'Vision', 'Forecasting'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    no: '06',
    title: 'Cybersecurity',
    desc: 'End-to-end security audits, SOC operations, penetration testing, and compliance for ISO 27001 and SOC 2.',
    tags: ['Audit', 'SOC', 'Pentest', 'Compliance'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
]

const OurServices = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      id="services"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Our Services
              </span>
              <span className="w-10 h-px bg-[#0276E2]"></span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Built to Solve.{' '}
              <span className="text-[#0276E2] italic">Engineered</span> to Scale.
            </h2>

            <p
              className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              From idea to deployment, we partner with you across the entire digital lifecycle —
              delivering software that is reliable, measurable, and built for the decade ahead.
            </p>
          </div>

          <Link
            to="/services"
            className="group self-start lg:self-end inline-flex items-center gap-3 h-12 px-6 border-2 border-black text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            View All Services
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
          {services.map((s, i) => {
            const isHovered = hovered === i
            return (
              <article
                key={s.no}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative p-8 lg:p-10 border-r border-b border-black/10 transition-colors duration-500 ${
                  isHovered ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                {/* Corner blueprint markers */}
                <span
                  className={`pointer-events-none absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 transition-colors duration-500 ${
                    isHovered ? 'border-[#0276E2]' : 'border-black/20'
                  }`}
                ></span>
                <span
                  className={`pointer-events-none absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 transition-colors duration-500 ${
                    isHovered ? 'border-[#0276E2]' : 'border-black/20'
                  }`}
                ></span>

                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center border-2 transition-colors duration-500 ${
                      isHovered
                        ? 'border-[#0276E2] bg-[#0276E2] text-white'
                        : 'border-black text-black group-hover:bg-[#0276E2]'
                    }`}
                  >
                    <div className="w-7 h-7 lg:w-8 lg:h-8">{s.icon}</div>
                  </div>

                  <span
                    className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${
                      isHovered ? 'text-[#0276E2]' : 'text-black/30'
                    }`}
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    — {s.no}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[26px] lg:text-[30px] font-extrabold leading-[1.15] tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {s.title}
                </h3>

                {/* Accent underline */}
                <span
                  className={`block h-[2px] bg-[#0276E2] mt-4 mb-5 transition-all duration-500 ${
                    isHovered ? 'w-20' : 'w-10'
                  }`}
                ></span>

                {/* Description */}
                <p
                  className={`text-[14px] leading-[1.7] transition-colors duration-500 ${
                    isHovered ? 'text-white/70' : 'text-black/65'
                  }`}
                >
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] border transition-colors duration-500 ${
                        isHovered
                          ? 'border-white/30 text-white/80'
                          : 'border-black/15 text-black/70'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <Link
                  to="/services"
                  className={`mt-8 inline-flex items-center justify-between w-full pt-5 border-t transition-colors duration-500 ${
                    isHovered ? 'border-white/20' : 'border-black/10'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
                    Explore Service
                  </span>
                  <span
                    className={`w-9 h-9 flex items-center justify-center transition-colors duration-500 ${
                      isHovered ? 'bg-[#0276E2] text-white' : 'bg-black text-white group-hover:bg-[#0276E2]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </Link>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 lg:mt-20 relative border-2 border-black p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          <span className="absolute -top-3 -left-3 w-6 h-6 bg-[#0276E2]"></span>
          <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-black bg-white"></span>

          <div className="flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — Don't see what you need?
            </p>
            <h4
              className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-black leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Every great product starts with a <span className="italic text-[#0276E2]">conversation</span>.
            </h4>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#0276E2] transition-colors duration-300 shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Let's Talk
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
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurServices
