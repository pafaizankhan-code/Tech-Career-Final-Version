'use client'

import React from 'react'
import { Link } from '../../lib/router-compat'

const commitments = [
  { k: '2–4 wk', v: 'Typical Launch', sub: 'For a 5–8 page build' },
  { k: '< 1.5s', v: 'Page Load Target', sub: 'On 4G mobile · fully built' },
  { k: '100/100', v: 'Lighthouse SEO', sub: 'Technical SEO out of the box' },
  { k: '30 days', v: 'Free Bug Fixes', sub: 'Post-launch window included' },
]

const FeaturedCase = () => {
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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div
              className="inline-flex items-center gap-3 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Capability Spotlight
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A business website, <br />
              <span className="text-[#097CF4] italic">done properly.</span>
            </h2>
          </div>

          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#097CF4] text-white text-[10px] font-bold uppercase tracking-[0.25em] self-start sm:self-auto"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-1.5 h-1.5 bg-white"></span>
            Example Build · Concept
          </span>
        </div>

        {/* Dashboard / website preview mockup */}
        <div className="relative border-2 border-black bg-[#097CF4] aspect-[16/9] lg:aspect-[21/9] overflow-hidden mb-10">
          <div className="absolute inset-8 lg:inset-12 bg-white border-2 border-black">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b-2 border-black">
              <span className="w-3 h-3 rounded-full bg-black/30"></span>
              <span className="w-3 h-3 rounded-full bg-black/30"></span>
              <span className="w-3 h-3 rounded-full bg-[#097CF4]"></span>
              <span className="ml-4 text-[11px] font-bold tracking-[0.15em] text-black/50 uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                yourbrand.in / home
              </span>
            </div>
            <div className="p-4 lg:p-6 grid grid-cols-12 gap-3 h-[calc(100%-52px)]">
              <div className="col-span-3 space-y-2 bg-black/[0.03] p-3">
                <div className="h-3 w-2/3 bg-black"></div>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`h-2 ${i === 1 ? 'bg-[#097CF4]' : 'bg-black/30'} ${i === 1 ? 'w-4/5' : 'w-3/4'}`}></div>
                ))}
                <div className="h-8 bg-[#097CF4] mt-4"></div>
              </div>
              <div className="col-span-6 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-2 border-black p-2">
                      <div className="h-2 w-1/2 bg-black mb-1"></div>
                      <div className="h-4 w-2/3 bg-[#097CF4]"></div>
                    </div>
                  ))}
                </div>
                <div className="border-2 border-black p-3 h-24 flex items-end gap-1">
                  {[40, 70, 55, 80, 35, 90, 60, 72, 65, 88, 50, 95].map((h, i) => (
                    <span
                      key={i}
                      className={`flex-1 ${i === 5 || i === 11 ? 'bg-[#097CF4]' : 'bg-black/70'}`}
                      style={{ height: `${h}%` }}
                    ></span>
                  ))}
                </div>
                <div className="border-2 border-black p-3">
                  <div className="h-2 w-1/4 bg-black mb-2"></div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-6 border border-black/20"></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-3 space-y-2">
                <div className="h-10 bg-black"></div>
                <div className="border-2 border-black p-2 space-y-1">
                  <div className="h-2 bg-black/50"></div>
                  <div className="h-2 bg-black/30 w-4/5"></div>
                  <div className="h-2 bg-black/30 w-3/5"></div>
                </div>
                <div className="border-2 border-black p-2 space-y-1">
                  <div className="h-2 bg-black/50"></div>
                  <div className="h-2 bg-[#097CF4] w-2/3"></div>
                </div>
                <div className="h-8 border-2 border-black flex items-center justify-center">
                  <span className="w-3 h-3 bg-[#097CF4]"></span>
                </div>
              </div>
            </div>
          </div>

          <span className="pointer-events-none absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white"></span>
          <span className="pointer-events-none absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white"></span>
          <span className="pointer-events-none absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white"></span>
          <span className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white"></span>
        </div>

        {/* What we do / How we do it / What you get */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {[
            {
              label: 'What We Build',
              title: 'A website you will keep for years.',
              body:
                'A modern, SEO-friendly business website — 5 to 10 pages — built in Next.js or WordPress, fully responsive, with a simple CMS so your team can update content without calling us every time.',
              accent: 'bg-[#097CF4]',
            },
            {
              label: 'How We Do It',
              title: 'Written scope first. No surprises.',
              body:
                'A free discovery call, a written scope with a fixed quote, Figma designs you sign off before we code, and weekly demos on a staging link — so you always know exactly where we are.',
              accent: 'bg-black',
            },
            {
              label: 'What You Get',
              title: 'Code, credentials, and confidence.',
              body:
                'A live website on your domain, your hosting and analytics set up, admin access in your name, a handover walkthrough, and 30 days of free bug fixes after launch.',
              accent: 'bg-[#097CF4]',
            },
          ].map((b, i) => (
            <article key={b.label} className="relative border-2 border-black bg-white p-6 lg:p-8">
              <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#097CF4]"></span>

              <div className="flex items-start justify-between mb-5">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — {b.label}
                </span>
                <span
                  className={`w-9 h-9 ${b.accent} text-white flex items-center justify-center font-extrabold text-[11px]`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3
                className="text-[22px] lg:text-[26px] font-extrabold text-black leading-[1.2] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {b.title}
              </h3>

              <p className="mt-4 text-[14px] leading-[1.7] text-black/65">{b.body}</p>
            </article>
          ))}
        </div>

        {/* Commitments */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-black">
          {commitments.map((m, i) => (
            <div
              key={m.v}
              className={`p-6 lg:p-8 ${i !== commitments.length - 1 ? 'lg:border-r-2 border-black' : ''} ${
                i < 2 ? 'border-b-2 lg:border-b-0 border-black' : ''
              } ${i % 2 === 1 ? 'border-l-2 lg:border-l-0 border-black' : ''}`}
            >
              <p
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-black leading-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {m.k}
                <span className="text-[#097CF4]">.</span>
              </p>
              <p
                className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {m.v}
              </p>
              <p className="mt-1 text-[11px] text-black/50">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Founder note + engagement card */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative bg-black text-white p-6 sm:p-8 lg:p-10">
            <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#097CF4]"></span>
            <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#097CF4]"></span>
            <span
              className="absolute top-4 right-8 text-[120px] leading-none font-black text-[#097CF4]/20 select-none pointer-events-none"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              &ldquo;
            </span>

            <p
              className="relative text-xl sm:text-2xl lg:text-[26px] font-medium leading-[1.4]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              We would rather build one website really well than ten websites half-way.
              That is the whole point of starting with first clients — you get the quality a
              studio usually saves for its biggest accounts.
            </p>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-4">
              <span
                className="w-12 h-12 bg-[#097CF4] flex items-center justify-center text-[14px] font-extrabold"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                FP
              </span>
              <div>
                <p className="font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Faizan Pathan</p>
                <p className="text-[11px] text-white/60 uppercase tracking-[0.2em]">Founder · Tech Career IT Solutions LLP</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 border-2 border-black p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Typical Engagement
              </p>
              <dl
                className="space-y-3 text-[12px]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {[
                  ['Duration', '2–4 weeks'],
                  ['Team', 'Founder-led'],
                  ['Model', 'Fixed Quote'],
                  ['Stack', 'Next.js · WordPress'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between pb-2 border-b border-black/10 last:border-0">
                    <dt className="uppercase tracking-[0.2em] text-black/50">{k}</dt>
                    <dd className="font-bold text-black text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center justify-between gap-2 h-12 px-4 bg-black text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#097CF4] transition-colors"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Get a Quote
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCase