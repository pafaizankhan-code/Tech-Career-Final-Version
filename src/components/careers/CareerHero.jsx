import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { k: '12', v: 'Open Roles' },
  { k: '85', v: 'Teammates' },
  { k: '4.9/5', v: 'Glassdoor Score' },
  { k: '3', v: 'Global Offices' },
]

const CareerHero = () => {
  return (
    <section
      className="relative bg-white pt-20 lg:pt-28 pb-16 lg:pb-20 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.22]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      ></div>

      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#0276E2]"></span>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <nav
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-black/50 mb-10"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <Link to="/" className="hover:text-[#0276E2]">Home</Link>
          <span>/</span>
          <span className="text-black font-semibold">Careers</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#0276E2] animate-ping opacity-75"></span>
                <span className="relative inline-flex rounded-full w-2 h-2 bg-[#0276E2]"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Now Hiring · 12 Open Roles
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[96px] xl:text-[108px] font-extrabold text-black leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Build the web's
              <br />
              <span className="text-[#0276E2] italic">most trusted</span>
              <br />
              software, with us.
            </h1>

            <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.7] text-black/70 max-w-[680px]">
              We are a senior-only engineering studio. No juniors throwing code over the wall. If
              you want to spend your best decade shipping craft — not sprint points — this might be home.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <a
                href="#open-positions"
                className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#0276E2] transition-colors"
              >
                See Open Roles
                <span className="w-10 h-10 bg-[#0276E2] group-hover:bg-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white group-hover:text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>

              <a
                href="#process"
                className="group inline-flex items-center gap-3 h-14 px-6 border-2 border-black text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
              >
                How We Hire
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Featured role card */}
          <div className="lg:col-span-4">
            <div className="relative bg-black text-white p-6 lg:p-7 shadow-[10px_10px_0_0_#0276E2]">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2]"></span>

              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — Featured Role
                </span>
                <span className="px-2 py-1 bg-[#0276E2] text-white text-[9px] font-bold uppercase tracking-[0.25em]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  New
                </span>
              </div>

              <h3
                className="text-[26px] lg:text-[30px] font-extrabold leading-[1.15] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Principal Engineer, Platform
              </h3>

              <dl
                className="mt-5 space-y-2.5 text-[12px]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {[
                  ['Team', 'Platform Engineering'],
                  ['Location', 'Ahmedabad · Remote-OK'],
                  ['Type', 'Full-time'],
                  ['Compensation', '₹55 L – ₹85 L + ESOP'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between pb-2.5 border-b border-white/15 last:border-0 last:pb-0">
                    <dt className="uppercase tracking-[0.2em] text-white/50">{k}</dt>
                    <dd className="text-right font-bold">{v}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#open-positions"
                className="group mt-6 w-full inline-flex items-center justify-between gap-3 h-12 px-4 bg-[#0276E2] text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-[#0276E2] transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Apply Now
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t-2 border-black">
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`py-8 px-1 lg:px-6 ${
                i !== stats.length - 1 ? 'lg:border-r-2 border-black' : ''
              } ${i < 2 ? 'border-b-2 lg:border-b-0 border-black' : ''} ${
                i % 2 === 1 ? 'border-l-2 lg:border-l-0 border-black' : ''
              }`}
            >
              <p
                className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {s.k}
                <span className="text-[#0276E2]">.</span>
              </p>
              <p
                className="mt-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-black/60"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerHero
