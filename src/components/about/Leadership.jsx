'use client'

import React from 'react'

const leaders = [
  {
    name: 'Faizan Pathan',
    role: 'Founder',
    bio: 'Full-stack developer and the person you will actually work with. Handles strategy, scoping, development and delivery - and answers his own phone.',
    initials: 'FP',
    accent: 'blue',
    meta: ['Founder', 'Ahmedabad'],
    chip: 'Founder',
    isOpen: false,
  },
  {
    name: 'Design Partner',
    role: 'UI / UX Lead',
    bio: 'We partner with a trusted design lead on Figma wireframes, prototypes and UI systems - brought in when a project needs design depth.',
    initials: 'UI',
    accent: 'black',
    meta: ['Figma', 'Design Systems'],
    chip: 'Partner',
    isOpen: false,
  },
  {
    name: 'Joining Soon',
    role: 'Full-Stack Developer',
    bio: 'We are hiring a second full-stack engineer to grow with our first clients. If that sounds like you, send a note - no long JD, no pointless rounds.',
    initials: '+',
    accent: 'blue',
    meta: ['React', 'Node.js'],
    chip: 'Open Role',
    isOpen: true,
  },
]

const Leadership = () => {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Leadership
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The team you will{' '}
              <span className="text-[#097CF4] italic">actually</span> work with.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We are a small, founder-led studio - so the person you meet in the sales call is the same person building your product. No bait-and-switch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {leaders.map((l) => (
            <article
              key={l.name}
              className="group relative border-2 border-black bg-white transition-all duration-500 hover:-translate-y-1"
            >
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4] z-10"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4] z-10"></span>

              {/* Avatar block */}
              <div className={`relative aspect-[4/3] flex items-center justify-center ${
                l.accent === 'blue' ? 'bg-[#097CF4]' : 'bg-black'
              }`}>
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                ></div>

                <span
                  className="relative text-[72px] lg:text-[96px] font-black text-white leading-none tracking-tighter"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {l.initials}
                </span>

                {/* Role chip */}
                <span
                  className="absolute top-4 left-4 px-3 py-1.5 bg-white text-black border-2 border-black text-[10px] font-bold uppercase tracking-[0.25em]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {l.chip}
                </span>

                {/* Social / apply tile */}
                {!l.isOpen && (
                  <div className="absolute top-4 right-4 flex gap-1">
                    <a
                      href="https://www.instagram.com/techcareer.llp"
                      className="w-8 h-8 bg-white text-black flex items-center justify-center text-[10px] font-bold hover:bg-black hover:text-white transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      IG
                    </a>
                  </div>
                )}
                {l.isOpen && (
                  <span
                    className="absolute top-4 right-4 px-2.5 py-1 bg-[#097CF4] border-2 border-white text-white text-[10px] font-bold uppercase tracking-[0.25em]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Hiring
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 border-t-2 border-black">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  - {l.role}
                </p>
                <h3
                  className="text-[26px] font-extrabold text-black leading-tight tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {l.name}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-black/65">{l.bio}</p>

                <div className="mt-5 pt-5 border-t border-black/10 flex flex-wrap gap-2">
                  {l.meta.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/15 text-black/70"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Join us strip */}
        <div className="mt-14 lg:mt-16 border-2 border-black p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 relative">
          <span className="absolute -top-3 -left-3 w-6 h-6 bg-[#097CF4]"></span>
          <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-black bg-white"></span>

          <div className="flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              - Early Team
            </p>
            <h4
              className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-black leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Want to build this studio with us?
            </h4>
          </div>

          <a
            href="mailto:inquiry.techcareer@gmail.com?subject=Join%20Tech%20Career%20IT%20Solutions%20LLP"
            className="group inline-flex items-center gap-3 h-12 px-6 border-2 border-black text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Send Us a Note
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Leadership