import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { k: '250+', v: 'Projects Shipped' },
  { k: '14', v: 'Industries Served' },
  { k: '99.99%', v: 'Avg. Uptime' },
  { k: '4.9/5', v: 'Client Score' },
]

const PortfolioHero = () => {
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
          <span className="text-black font-semibold">Portfolio</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Portfolio · 2013 — 2026
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[96px] xl:text-[108px] font-extrabold text-black leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Work that <span className="text-[#0276E2] italic">works.</span>
              <br />
              Long after launch.
            </h1>

            <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.7] text-black/70 max-w-[680px]">
              A living archive of products we have designed, shipped, and kept shipping with —
              from fintech unicorns to Fortune 500 logistics. Every system below is still in
              production and still compounding.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="relative bg-[#0276E2] text-white p-6 lg:p-8 shadow-[10px_10px_0_0_#000]">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-white"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-white"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Signature Result
              </p>

              <p
                className="text-[64px] lg:text-[88px] font-extrabold leading-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                $1.4B
                <span className="text-black">.</span>
              </p>

              <p
                className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/80"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Revenue flowing through <br /> products we have built · to date.
              </p>

              <div className="mt-6 pt-5 border-t border-white/30 flex items-center justify-between">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-white"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Aggregate · Client Data
                </span>
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
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

export default PortfolioHero
