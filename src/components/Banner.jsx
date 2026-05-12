'use client'

import React, { useState } from 'react'
import { Link } from '../lib/router-compat'

const capabilities = [
  'Restaurants',
  'Retail',
  'Clinics',
  'Real Estate',
  'Coaching',
  'Fitness',
  'Salons',
  'Hotels',
  'Factories',
  'Startups',
  'Fashion',
  'Weddings',
]

const stats = [
  { k: '10+', v: 'Industries Served' },
  { k: 'Any', v: 'Business Category' },
  { k: '< 24h', v: 'Reply Time' },
  { k: 'Fixed', v: 'Quote · Written' },
]

const businessCategories = [
  {
    slug: 'restaurants',
    title: 'Restaurants & Cafes',
    desc: 'Menu sites, online ordering, reservations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 3v9a3 3 0 003 3h1v7M8 15l-2-2m2 2l2-2M16 3v18M16 9a3 3 0 003-3V3" />
      </svg>
    ),
  },
  {
    slug: 'retail',
    title: 'Retail & E-commerce',
    desc: 'Shopify / custom online stores with payments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.6 3M7 13h10l3-8H5.4M7 13l-1.4 5h13M8 21a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
    ),
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Clinics',
    desc: 'Appointments, patient portals, lab reports.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    desc: 'Property listings, broker portals, CRM.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18M5 22V10l7-5 7 5v12M9 22V13h6v9" />
      </svg>
    ),
  },
  {
    slug: 'education',
    title: 'Education & Coaching',
    desc: 'Course sites, LMS, enquiries, enrolments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7M5 11v6a2 2 0 001 1.7l5 2.8a2 2 0 002 0l5-2.8a2 2 0 001-1.7v-6" />
      </svg>
    ),
  },
  {
    slug: 'fitness',
    title: 'Fitness & Salons',
    desc: 'Class booking, memberships, appointments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6M2 12h4M18 12h4M9 3v4M9 17v4M15 3v4M15 17v4" />
      </svg>
    ),
  },
  {
    slug: 'services',
    title: 'Professional Services',
    desc: 'CA, legal, consulting, agency websites.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="7" width="18" height="13" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" />
      </svg>
    ),
  },
  {
    slug: 'hospitality',
    title: 'Hotels & Hospitality',
    desc: 'Booking engines, room management, menus.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18M5 22V12a2 2 0 012-2h10a2 2 0 012 2v10M9 22v-6h6v6M8 7h8M9 3h6v4H9z" />
      </svg>
    ),
  },
]

const Banner = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="relative bg-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Soft dot grid background — edge to edge */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center top, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center top, black 40%, transparent 85%)',
        }}
      ></div>

      {/* Decorative blue glow */}
      <span className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#097CF4]/10 blur-3xl"></span>
      <span className="pointer-events-none absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#097CF4]/[0.06] blur-3xl"></span>

      {/* Blueprint corner markers */}
      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#097CF4] hidden md:block"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#097CF4] hidden md:block"></span>

      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 pt-12 sm:pt-14 lg:pt-20 pb-12 lg:pb-14">
        {/* Announcement chip — left on mobile, centered on md+ */}
       

        {/* Giant headline — left on mobile, centered on md+ */}
        <h1
          className="mt-6 sm:mt-8 lg:mt-10 text-left md:text-center font-extrabold text-black leading-[0.95] tracking-[-0.03em]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="block text-[40px] sm:text-[64px] lg:text-[92px] xl:text-[112px]">
            A website for <span className="italic text-[#097CF4]">every</span>
          </span>
          <span className="block text-[40px] sm:text-[64px] lg:text-[92px] xl:text-[112px]">
            kind of business.
          </span>
        </h1>

        {/* Subtitle — left on mobile, centered on md+ */}
        <p
          className="mt-5 sm:mt-7 lg:mt-9 max-w-[780px] md:mx-auto text-left md:text-center text-[14.5px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-black/65"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          We build <span className="text-black font-semibold">websites, online stores, custom CRM &amp; HRMS and mobile apps</span> for
          businesses across every category — restaurants to real estate, clinics to coaching classes, factories to fashion brands. Pick
          your category below.
        </p>

        {/* CTAs — full-width stacked on mobile, inline on md+ */}
        <div
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center sm:justify-center gap-3 sm:gap-4"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-between sm:justify-start gap-3 h-14 pl-5 sm:pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors duration-300"
          >
            Start a Project
            <span className="w-10 h-10 bg-[#097CF4] group-hover:bg-white flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white group-hover:text-[#097CF4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </Link>

          <Link
            to="/services"
            className="group inline-flex items-center justify-between sm:justify-start gap-3 h-14 px-5 sm:px-6 border-2 border-black text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-300"
          >
            See What We Build
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Trust bar — left + stacked on mobile, inline + centered on md+ */}
        <div className="mt-8 sm:mt-9 lg:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-start md:justify-center gap-y-2.5 sm:gap-y-3 sm:gap-x-6">
          <span
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-black/70"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <svg className="w-3.5 h-3.5 text-[#097CF4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            iHub · Ahmedabad, India
          </span>
          <span className="w-px h-4 bg-black/15 hidden sm:inline"></span>
          <span
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-black/70"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <svg className="w-3.5 h-3.5 text-[#097CF4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
            </svg>
            Reply within 24 hours
          </span>
          <span className="w-px h-4 bg-black/15 hidden sm:inline"></span>
          <a
            href="mailto:inquiry.techcareer@gmail.com"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-black/70 hover:text-[#097CF4] transition-colors break-all sm:break-normal"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <svg className="w-3.5 h-3.5 text-[#097CF4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
            </svg>
            inquiry.techcareer@gmail.com
          </a>
        </div>
      </div>

      {/* ── BUSINESS CATEGORY GRID ───────────────────────────────── */}
      <div className="relative border-t border-black/10 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#097CF4] mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Pick Your Business Type
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-black leading-[1.05] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Built for the business <br className="hidden sm:block" />
                <span className="italic text-[#097CF4]">you actually run.</span>
              </h2>
            </div>

            <p
              className="max-w-[380px] text-[14px] leading-[1.7] text-black/60"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Every category has its own quirks — what works for a restaurant fails for a clinic. We design around how
              your industry actually operates.
            </p>
          </div>

          {/* Categories grid — 2 col mobile, 4 col desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-4 border-t border-l border-black/10">
            {businessCategories.map((cat, i) => {
              const isActive = activeCategory === i
              return (
                <Link
                  key={cat.slug}
                  to="/contact"
                  onMouseEnter={() => setActiveCategory(i)}
                  onFocus={() => setActiveCategory(i)}
                  className={`group relative p-5 lg:p-6 border-r border-b border-black/10 transition-colors duration-500 ${
                    isActive ? 'bg-black' : 'bg-white'
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 transition-colors ${
                      isActive ? 'border-[#097CF4]' : 'border-black/15'
                    }`}
                  ></span>
                  <span
                    className={`pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 transition-colors ${
                      isActive ? 'border-[#097CF4]' : 'border-black/15'
                    }`}
                  ></span>

                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`w-11 h-11 flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#097CF4] text-white' : 'bg-black/[0.04] text-black/70'
                      }`}
                    >
                      <div className="w-5 h-5">{cat.icon}</div>
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
                        isActive ? 'text-[#097CF4]' : 'text-black/30'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      — {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3
                    className={`text-[16px] lg:text-[18px] font-extrabold leading-tight tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-black'
                    }`}
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className={`mt-2 text-[12px] leading-[1.55] transition-colors ${
                      isActive ? 'text-white/65' : 'text-black/55'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {cat.desc}
                  </p>

                  <span
                    className={`mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
                      isActive ? 'text-[#097CF4]' : 'text-black/50'
                    }`}
                  >
                    Get a Quote
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Not listed? */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-black/10 bg-white px-6 py-5">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-1"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Don't see your category?
              </p>
              <p
                className="text-[14px] sm:text-[15px] font-semibold text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                We work with every kind of business. Tell us yours.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 h-11 px-5 bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors shrink-0"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Tell Us Your Business
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Full-width stats strip */}
      <div className="relative border-t border-b border-black/10 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`group relative py-7 lg:py-9 px-6 lg:px-10 text-center transition-colors hover:bg-[#097CF4]/[0.03] ${
                i !== stats.length - 1 ? 'lg:border-r border-black/10' : ''
              } ${i < 2 ? 'border-b lg:border-b-0 border-black/10' : ''} ${
                i % 2 === 1 ? 'border-l lg:border-l-0 border-black/10' : ''
              }`}
            >
              <p
                className="text-[36px] sm:text-[42px] lg:text-[54px] font-extrabold text-black leading-none tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {s.k}
                <span className="text-[#097CF4]">.</span>
              </p>
              <p
                className="mt-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-black/55"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Category marquee */}
      <div className="relative border-t-2 border-b-2 border-black bg-white">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-white z-10 [mask-image:linear-gradient(to_right,black_40%,transparent)]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-white z-10 [mask-image:linear-gradient(to_left,black_40%,transparent)]"></div>

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...capabilities, ...capabilities].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-6 px-8 py-5 text-[13px] font-bold uppercase tracking-[0.3em] text-black/80"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {t}
                <span className="w-1.5 h-1.5 bg-[#097CF4] rounded-full"></span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Banner