import React from 'react'
import { Link } from 'react-router-dom'

const heroStats = [
  { k: '2025', v: 'Founded · New Studio' },
  { k: '100%', v: 'Founder-Led Team' },
  { k: '< 24h', v: 'Reply Time' },
  { k: '∞', v: 'Projects Ahead' },
]

const AboutHero = () => {
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
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-black/50 mb-10"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <Link to="/" className="hover:text-[#097CF4]">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-semibold">About Us</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                About Tech Career IT Solutions LLP LLP
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[92px] xl:text-[104px] font-extrabold text-black leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A new studio
              <br />
              <span className="text-[#097CF4] italic">built on trust.</span>
            </h1>

            <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.7] text-black/70 max-w-[680px]">
              Tech Career IT Solutions LLP LLP is a founder-led web development, e-commerce and digital
              marketing studio based at iHub, Ahmedabad — building software and campaigns for
              growing Indian businesses with honest scopes, honest quotes and a team that answers
              its own phone.
            </p>
          </div>

          {/* Quick facts card */}
          <div className="lg:col-span-4">
            <div className="relative bg-black text-white p-6 lg:p-8 shadow-[10px_10px_0_0_#097CF4]">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Company At-a-Glance
              </p>

              <dl className="space-y-3 text-[13px]">
                {[
                  ['Founded', '2025 · Ahmedabad, India'],
                  ['Legal Entity', 'Tech Career IT Solutions LLP LLP'],
                  ['Team', 'Founder-led · small team'],
                  ['Headquarters', 'iHub · Ahmedabad · 380015'],
                  ['Focus', 'Web · E-commerce · CRM · Marketing'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4 pb-3 border-b border-white/15 last:border-0 last:pb-0">
                    <dt
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 shrink-0"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {k}
                    </dt>
                    <dd
                      className="text-right font-semibold"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-0 border-t-2 border-black">
          {heroStats.map((s, i) => (
            <div
              key={s.v}
              className={`py-8 px-1 lg:px-6 ${
                i !== heroStats.length - 1 ? 'lg:border-r-2 border-black' : ''
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

export default AboutHero
