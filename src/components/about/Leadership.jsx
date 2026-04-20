import React from 'react'

const leaders = [
  {
    name: 'Karan Patel',
    role: 'Founder & Managing Partner',
    bio: 'Ex-Infosys architect. 18 years engineering and scaling systems across fintech and SaaS.',
    initials: 'KP',
    accent: 'blue',
    meta: ['18 yrs', 'IIT-BHU'],
  },
  {
    name: 'Ayesha Khan',
    role: 'Co-founder & CTO',
    bio: 'Formerly at Amazon and Stripe. Leads architecture and DevOps practice across 4 regions.',
    initials: 'AK',
    accent: 'black',
    meta: ['AWS Hero', 'BITS Pilani'],
  },
  {
    name: 'Rohan Desai',
    role: 'Head of Engineering',
    bio: 'Full-stack veteran with production experience across React, Go, and distributed systems.',
    initials: 'RD',
    accent: 'blue',
    meta: ['OSS Maintainer', 'NIT Surat'],
  },
  {
    name: 'Priya Iyer',
    role: 'Head of Design',
    bio: 'Design systems specialist. Built the UI languages behind two unicorn fintechs and a bank.',
    initials: 'PI',
    accent: 'black',
    meta: ['ADP Jury', 'NID'],
  },
  {
    name: 'Faizan Pathan',
    role: 'VP Client Solutions',
    bio: 'Translator between business goals and engineering reality. 12 years in enterprise sales & strategy.',
    initials: 'FP',
    accent: 'blue',
    meta: ['12 yrs', 'IIM-A'],
  },
  {
    name: 'Lena Müller',
    role: 'Head of Security',
    bio: 'Cybersecurity specialist leading our ISO 27001 and SOC 2 readiness engagements.',
    initials: 'LM',
    accent: 'black',
    meta: ['CISSP', 'TU Munich'],
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
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Leadership
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The people you will{' '}
              <span className="text-[#0276E2] italic">actually</span> work with.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            No bait-and-switch. Every engagement is led by one of these humans — not a junior you have never met.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {leaders.map((l) => (
            <article
              key={l.name}
              className="group relative border-2 border-black bg-white transition-all duration-500 hover:-translate-y-1"
            >
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2] z-10"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2] z-10"></span>

              {/* Avatar block */}
              <div className={`relative aspect-[4/3] flex items-center justify-center ${
                l.accent === 'blue' ? 'bg-[#0276E2]' : 'bg-black'
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
                  Partner
                </span>

                {/* Social tile */}
                <div className="absolute top-4 right-4 flex gap-1">
                  {['in', 'X'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-8 h-8 bg-white text-black flex items-center justify-center text-[10px] font-bold hover:bg-black hover:text-white transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-t-2 border-black">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — {l.role}
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
          <span className="absolute -top-3 -left-3 w-6 h-6 bg-[#0276E2]"></span>
          <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-black bg-white"></span>

          <div className="flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — We're Hiring
            </p>
            <h4
              className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-black leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              85 teammates. 12 open roles.
            </h4>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-3 h-12 px-6 border-2 border-black text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            View Open Positions
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
