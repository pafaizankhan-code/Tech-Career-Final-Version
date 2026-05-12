'use client'

import React from 'react'
import { Link } from '../../lib/router-compat'

const idealClients = [
  'SMALL BUSINESSES',
  'GROWING BRANDS',
  'D2C FOUNDERS',
  'COACHING CLASSES',
  'LOCAL AGENCIES',
  'CLINICS',
  'CA / LEGAL FIRMS',
  'RESTAURANTS',
  'STARTUP MVPs',
  'SERVICE BUSINESSES',
  'MANUFACTURERS',
  'E-COMMERCE STORES',
  'REAL ESTATE',
  'SAAS FOUNDERS',
  'CREATIVE STUDIOS',
  'PROFESSIONAL SERVICES',
]

const focusStats = [
  { k: '100%', v: 'India-Focused' },
  { k: 'B2B', v: 'Small & Mid-Size' },
  { k: 'SMB', v: 'D2C & Services' },
  { k: '5+', v: 'Flagship Slots' },
  { k: '24h', v: 'Reply Promise' },
]

const ClientsShowcase = () => {
  return (
    <section
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="max-w-[860px] mx-auto text-center mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-10 h-px bg-[#097CF4]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
              Who We're Built For
            </span>
            <span className="w-10 h-px bg-[#097CF4]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Your logo could{' '}
            <span className="text-[#097CF4] italic">live here</span> first.
          </h2>

          <p
            className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70 max-w-[620px] mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We are a new studio — no client logos yet. Instead, here are the kinds of businesses we
            are built to serve best. If you see yourself in this list, you are exactly who we want
            to work with.
          </p>
        </div>

        {/* Ideal client grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-black/10">
          {idealClients.map((c, i) => (
            <div
              key={c}
              className={`group relative h-24 sm:h-28 lg:h-32 flex items-center justify-center border-r border-b border-black/10 bg-white hover:bg-black transition-colors duration-500 ${
                i === 2 || i === 9 ? 'bg-black/[0.02]' : ''
              }`}
            >
              <span className="pointer-events-none absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t-2 border-l-2 border-black/15 group-hover:border-[#097CF4] transition-colors"></span>
              <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b-2 border-r-2 border-black/15 group-hover:border-[#097CF4] transition-colors"></span>

              <span
                className="text-[11px] sm:text-[12px] lg:text-[13px] font-black tracking-[0.25em] text-black/80 group-hover:text-white transition-colors text-center px-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {c}
              </span>
            </div>
          ))}
        </div>

        {/* Focus strip */}
        <div className="mt-14 lg:mt-16 border-2 border-black p-6 sm:p-8 lg:p-10 relative">
          <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#097CF4]"></span>
          <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#097CF4]"></span>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
            <div className="shrink-0">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Our Focus
              </p>
              <h3
                className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-black leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A small studio with <span className="text-[#097CF4] italic">clear</span> priorities.
              </h3>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-4 lg:gap-2">
              {focusStats.map((r, i) => (
                <div
                  key={r.v}
                  className={`py-4 lg:py-5 lg:px-4 ${
                    i !== focusStats.length - 1 ? 'lg:border-r border-black/15' : ''
                  }`}
                >
                  <p
                    className="text-2xl lg:text-[30px] font-extrabold text-black leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {r.k}
                    <span className="text-[#097CF4]">.</span>
                  </p>
                  <p
                    className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-black/60"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {r.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-12 relative bg-black text-white p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#097CF4]"></span>
          <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#097CF4]"></span>

          <div className="flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — Ready to be our first?
            </p>
            <h4
              className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Launch-client slots open · <span className="italic text-[#097CF4]">5 only.</span>
            </h4>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-[#097CF4] text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#097CF4] transition-colors shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Apply for a Slot
            <span className="w-10 h-10 bg-white group-hover:bg-[#097CF4] flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-[#097CF4] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ClientsShowcase