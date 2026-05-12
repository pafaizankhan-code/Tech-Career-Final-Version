'use client'

import React from 'react'
import { Link } from '../lib/router-compat'

const items = [
  {
    no: '01',
    kind: 'Mission',
    title: 'Make good software feel within reach.',
    body:
      'Give small and mid-sized Indian businesses the kind of websites, stores and internal tools that usually only big-budget teams get - at a price and pace that actually fits their business.',
    keyword: 'Within reach',
  },
  {
    no: '02',
    kind: 'Vision',
    title: 'Grow slowly. Build things that last.',
    body:
      'Become the studio that businesses in Ahmedabad and across India recommend to the next business - without us ever asking. One happy client at a time.',
    keyword: 'That last',
  },
]

const MissionVision = () => {
  return (
    <section
      className="relative bg-white text-black overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Soft dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.16] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Blueprint corner markers */}
      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#097CF4] hidden md:block" />
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#097CF4] hidden md:block" />
      <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#097CF4] hidden md:block" />
      <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#097CF4] hidden md:block" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-14 lg:mb-20">
          <div
            className="inline-flex items-center gap-3 mb-5"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-10 h-px bg-[#097CF4]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.32em] text-[#097CF4]">
              Mission &amp; Vision
            </span>
            <span className="w-10 h-px bg-[#097CF4]" />
          </div>

          <h2
            className="text-[34px] sm:text-5xl lg:text-[60px] font-extrabold leading-[1.04] tracking-[-0.02em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The <span className="text-[#097CF4] italic">why</span> behind every
            line of code.
          </h2>

          <p
            className="mt-5 sm:mt-6 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] text-black/60 max-w-[600px] mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We are a new studio - that means we have everything to prove and
            nothing to coast on. Here is what drives the work, and where we
            want to be ten years from now.
          </p>
        </div>

        {/* The two cards - split with center divider */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-black/10">
          {items.map((item, i) => (
            <article
              key={item.kind}
              className={`relative group ${
                i === 0 ? 'lg:pr-12 xl:pr-16' : 'lg:pl-12 xl:pl-16'
              } ${i === 0 ? 'pb-12 lg:pb-0' : 'pt-12 lg:pt-0'} ${
                i === 0
                  ? 'border-b lg:border-b-0 border-black/10'
                  : ''
              }`}
            >
              {/* Number + kind row */}
              <div
                className="flex items-baseline gap-5 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span
                  className="text-[64px] sm:text-[80px] lg:text-[96px] leading-none font-extrabold text-[#097CF4] tracking-[-0.04em]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.no}
                  <span className="text-black">.</span>
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.32em] text-black/55">
                  <span className="w-7 h-px bg-black/30" />
                  {item.kind}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.title}
              </h3>

              {/* Body */}
              <p
                className="mt-5 text-[14px] sm:text-[15px] leading-[1.7] text-black/65 max-w-[500px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.body}
              </p>

              {/* Keyword pill */}
              <div
                className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-[#097CF4]/[0.08] border border-[#097CF4]/30"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-1.5 h-1.5 bg-[#097CF4] rounded-full" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#097CF4]">
                  {item.keyword}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 lg:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-black/10 pt-8">
          <div
            className="text-[12px] sm:text-[13px] font-semibold text-black/60 max-w-[440px] text-center sm:text-left"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="text-[#097CF4] font-bold uppercase tracking-[0.18em] mr-2">
              - In short:
            </span>
            small studio, founder-led, built for the long haul.
          </div>

          <Link
            to="/about"
            className="group inline-flex items-center gap-3 h-12 pl-5 pr-2 bg-black text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#097CF4] transition-colors duration-300 shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Read Full Story
            <span className="w-9 h-9 bg-[#097CF4] group-hover:bg-white flex items-center justify-center transition-colors">
              <svg
                className="w-3.5 h-3.5 text-white group-hover:text-[#097CF4]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MissionVision