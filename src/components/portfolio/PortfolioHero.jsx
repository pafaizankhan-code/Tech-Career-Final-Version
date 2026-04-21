import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { k: '2025', v: 'New Studio · Ahmedabad' },
  { k: '06', v: 'Core Capabilities' },
  { k: '< 24h', v: 'Reply Time' },
  { k: '05', v: 'Flagship Slots Open' },
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

      

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <nav
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-black/50 mb-10"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <Link to="/" className="hover:text-[#097CF4]">Home</Link>
          <span>/</span>
          <span className="text-black font-semibold">Portfolio</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Capability Showcase · 2025
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[96px] xl:text-[108px] font-extrabold text-black leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              What we can <span className="text-[#097CF4] italic">build.</span>
              <br />
              Starting with yours.
            </h1>

            <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.7] text-black/70 max-w-[680px]">
              We are a new studio — so instead of a decade of client logos, here is a transparent
              showcase of exactly what we can build for you: the formats, the stack, and honest
              timelines for each. Your project could be the first one we feature here.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="relative bg-[#097CF4] text-white p-6 lg:p-8 shadow-[10px_10px_0_0_#000]">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-white"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-white"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Launch-Client Offer
              </p>

              <p
                className="text-[48px] lg:text-[64px] font-extrabold leading-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                First 5
                <span className="text-black">.</span>
              </p>

              <p
                className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/80"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Flagship clients at launch pricing <br /> · limited slots · apply inside.
              </p>

              <div className="mt-6 pt-5 border-t border-white/30 flex items-center justify-between">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-white"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Open · Apply Now
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
                <span className="text-[#097CF4]">.</span>
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
