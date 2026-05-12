'use client'

import React from 'react'

const industries = [
  {
    no: '01',
    name: 'Retail & E-commerce',
    count: 'Shopify · Custom',
    clients: ['Product Stores', 'Fashion Brands', 'D2C'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.5 3M5.5 6h15L18 14H7m-1.5-8L7 14m0 0a2 2 0 100 4 2 2 0 000-4zm10 4a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    no: '02',
    name: 'Healthcare & Wellness',
    count: 'Clinics · Labs',
    clients: ['Clinics', 'Diagnostic Labs', 'Wellness Brands'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12M12 22a10 10 0 110-20 10 10 0 010 20z" />
      </svg>
    ),
  },
  {
    no: '03',
    name: 'Education & Coaching',
    count: 'Courses · Classes',
    clients: ['Coaching Classes', 'Online Courses', 'Schools'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7M5 11v6a2 2 0 001 1.7l5 2.8a2 2 0 002 0l5-2.8a2 2 0 001-1.7v-6" />
      </svg>
    ),
  },
  {
    no: '04',
    name: 'Real Estate & Property',
    count: 'Listings · CRM',
    clients: ['Developers', 'Brokers', 'Rental Platforms'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18M5 22V10l7-5 7 5v12M9 22V13h6v9" />
      </svg>
    ),
  },
  {
    no: '05',
    name: 'Services & Agencies',
    count: 'Websites · Portals',
    clients: ['Consulting', 'CA / Legal', 'Creative Agencies'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M8 4v14M16 4v14" />
      </svg>
    ),
  },
  {
    no: '06',
    name: 'Logistics & Manufacturing',
    count: 'CRM · Dashboards',
    clients: ['Factories', 'Transport', 'Supply Chain'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h13l5 5v5a2 2 0 01-2 2h-1M3 7v10a2 2 0 002 2h1M3 7l2-3h10M8 19a2 2 0 11-4 0 2 2 0 014 0zM20 19a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    no: '07',
    name: 'Food & Hospitality',
    count: 'Orders · Bookings',
    clients: ['Restaurants', 'Cloud Kitchens', 'Hotels'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4M5 11v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
      </svg>
    ),
  },
  {
    no: '08',
    name: 'Startups & SaaS',
    count: 'MVP · Growth',
    clients: ['Early Stage', 'Founders', 'SaaS Tools'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

const Industries = () => {
  return (
    <section
      className="relative bg-black text-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      
      <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#097CF4]"></span>
      <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#097CF4]"></span>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Industries Served
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Eight spaces{' '}
              <span className="text-[#097CF4] italic">we love</span> to build for.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-white/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Every industry has its own quirks — these are the ones our founder-led team already understands and is actively open to working in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15">
          {industries.map((ind) => (
            <article
              key={ind.no}
              className="group relative p-6 lg:p-7 border-r border-b border-white/15 transition-colors hover:bg-[#097CF4]"
            >
              <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-white/30 group-hover:border-white transition-colors"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-white/30 group-hover:border-white transition-colors"></span>

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border-2 border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#097CF4] transition-colors">
                  <div className="w-6 h-6">{ind.icon}</div>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — {ind.no}
                </span>
              </div>

              <h3
                className="text-[20px] lg:text-[22px] font-extrabold leading-[1.15] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {ind.name}
              </h3>

              <p
                className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#097CF4] group-hover:text-white transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {ind.count}
              </p>

              <div className="mt-5 pt-4 border-t border-white/15 group-hover:border-white/30 transition-colors">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 mb-2 group-hover:text-white/70 transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Typical Clients
                </p>
                <ul
                  className="text-[12px] text-white/80 space-y-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {ind.clients.map((c) => (
                    <li key={c} className="flex items-center gap-2 font-semibold">
                      <span className="w-1 h-1 bg-[#097CF4] group-hover:bg-white transition-colors"></span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries