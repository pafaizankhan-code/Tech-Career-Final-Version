'use client'

import React from 'react'

const benefits = [
  {
    no: '01',
    title: 'Real Ownership',
    desc: 'You work directly with the founder — your code ships to real clients, and your voice actually shapes product decisions.',
    tag: 'Impact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'Fair Starting Pay',
    desc: 'A clean, market-fair salary for Ahmedabad — no lowball startup excuses, with transparent reviews as the studio grows.',
    tag: 'Pay',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Hybrid Work',
    desc: 'Work from iHub a few days a week, rest from home. Walking distance to cafes, classrooms and the occasional cricket match.',
    tag: 'Flexibility',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
      </svg>
    ),
  },
  {
    no: '04',
    title: 'Learn on Real Work',
    desc: 'No sandbox projects. You ship for paying clients from day one — the fastest way to genuinely level up.',
    tag: 'Growth',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M4 4h16v12H4zM4 8h16" />
      </svg>
    ),
  },
  {
    no: '05',
    title: 'Founder Mentorship',
    desc: 'One-on-one time with the founder every week — architecture reviews, code feedback, career conversations, no HR layer.',
    tag: 'Mentorship',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87m10-4a4 4 0 10-8 0 4 4 0 008 0z" />
      </svg>
    ),
  },
  {
    no: '06',
    title: 'Modern Tech Stack',
    desc: 'React, Next.js, Node, React Native, Shopify, Tailwind — you use what is actually being paid to use today, not legacy Java.',
    tag: 'Stack',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l-4 8 4 8M16 4l4 8-4 8M14 3l-4 18" />
      </svg>
    ),
  },
  {
    no: '07',
    title: 'Shape the Culture',
    desc: 'You are one of the first — which means your habits, your standards and your taste become the studio\'s default.',
    tag: 'Culture',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    no: '08',
    title: 'No Bureaucracy',
    desc: 'No HR portals, no 5-round interviews, no timesheet theatre. Small team, short chains, everything over WhatsApp and direct chat.',
    tag: 'Simplicity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
]

const manifest = [
  'We hire for ownership, not years of experience.',
  'We ship small, ship weekly, and learn in the open.',
  'We write plain-language scopes — no jargon.',
  'We say "I do not know" out loud, often.',
  'We treat our first clients as partners, not transactions.',
]

const WhyJoinUs = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-14 lg:mb-20">
          {/* Left: heading */}
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Why Work Here
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A small studio, with <span className="text-[#097CF4] italic">real</span> upside.
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70 max-w-[640px]">
              We are not a big IT firm with slick perks — we are a new team in Ahmedabad offering
              the thing big firms cannot: ownership, clarity, and the chance to grow with a studio
              you helped build.
            </p>
          </div>

          {/* Right: manifest card */}
          <div className="lg:col-span-5">
            <div className="bg-black text-white p-6 lg:p-7 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — The Team Manifest
              </p>

              <ul className="space-y-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {manifest.map((m, i) => (
                  <li key={m} className="flex items-start gap-3 text-[13px] lg:text-[14px] font-semibold">
                    <span className="text-[10px] tracking-[0.2em] text-[#097CF4] pt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
          {benefits.map((b) => (
            <article
              key={b.no}
              className="group relative p-6 lg:p-7 border-r border-b border-black/10 bg-white hover:bg-black hover:text-white transition-colors duration-500"
            >
              <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-black/20 group-hover:border-[#097CF4] transition-colors"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-black/20 group-hover:border-[#097CF4] transition-colors"></span>

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center border-2 border-black group-hover:border-[#097CF4] group-hover:bg-[#097CF4] transition-colors">
                  <div className="w-6 h-6">{b.icon}</div>
                </div>
                <div className="text-right">
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-[#097CF4] transition-colors block"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    — {b.no}
                  </span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#097CF4] block mt-1"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {b.tag}
                  </span>
                </div>
              </div>

              <h3
                className="text-[18px] lg:text-[20px] font-extrabold leading-[1.2] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {b.title}
              </h3>

              <span className="block h-[2px] bg-[#097CF4] mt-3 mb-4 w-8 group-hover:w-16 transition-all duration-500"></span>

              <p className="text-[12px] leading-[1.65] text-black/65 group-hover:text-white/70 transition-colors">
                {b.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoinUs