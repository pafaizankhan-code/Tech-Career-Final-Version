'use client'

import React from 'react'

const stages = [
  {
    no: '01',
    label: 'Apply',
    duration: 'Day 0',
    title: 'Send a short, honest application.',
    desc: 'No cover letter gymnastics. A resume and two paragraphs on what you want to build next is enough to start.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M10 13h4M10 17h4" />
      </svg>
    ),
  },
  {
    no: '02',
    label: 'Intro Call',
    duration: 'Day 2 – 4',
    title: '30 minutes with the founder.',
    desc: 'A conversation, not an interrogation. We talk about your past work, what you want to do next, and whether the role actually fits.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 2H7a3 3 0 00-3 3v10a3 3 0 003 3h2l3 3 3-3h2a3 3 0 003-3V5a3 3 0 00-3-3z" />
      </svg>
    ),
  },
  {
    no: '03',
    label: 'Craft Review',
    duration: 'Day 5 – 8',
    title: 'We look at real work, together.',
    desc: 'Walk us through a past project you are proud of, or take home a small paid exercise. No whiteboard leet-code. Ever.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    no: '04',
    label: 'Team Chat',
    duration: 'Day 10 – 12',
    title: 'A casual chat at iHub (or on Meet).',
    desc: 'A visit to the studio, coffee, and an unstructured chat about how you like to work. You meet the founding team and get a real feel for the place before committing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-2a4 4 0 00-3-3.87M7 20v-2a4 4 0 013-3.87M15 10a4 4 0 11-8 0 4 4 0 018 0zM22 20v-2a4 4 0 00-3-3.87" />
      </svg>
    ),
  },
  {
    no: '05',
    label: 'Offer',
    duration: 'Day 14',
    title: 'A clear, signed offer - within 48 hours.',
    desc: 'Transparent salary, role and scope in writing. You negotiate with numbers, not nerves, and we say yes or no quickly - no ghosting.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
]

const promises = [
  { k: '14 days', v: 'Average cycle, apply to offer' },
  { k: '72 hrs', v: 'Reply on every application' },
  { k: 'Paid', v: 'Take-home exercises, always' },
  { k: '100%', v: 'No whiteboard leet-code' },
]

const HiringProcess = () => {
  return (
    <section
      id="process"
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
        <div className="max-w-[860px] mx-auto text-center mb-14 lg:mb-20">
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-10 h-px bg-[#097CF4]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
              Hiring Process
            </span>
            <span className="w-10 h-px bg-[#097CF4]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Five steps.{' '}
            <span className="text-[#097CF4] italic">Fourteen</span> days. No games.
          </h2>

          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-white/70 max-w-[620px] mx-auto">
            A tiny studio means a tiny interview loop. Here is the entire journey, written out
            - so you know what to expect before you even apply.
          </p>
        </div>

        {/* Promise strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-white/20 mb-12 lg:mb-16">
          {promises.map((p, i) => (
            <div
              key={p.v}
              className={`py-5 px-5 lg:px-6 ${
                i !== promises.length - 1 ? 'lg:border-r border-white/20' : ''
              } ${i < 2 ? 'border-b lg:border-b-0 border-white/20' : ''} ${
                i % 2 === 1 ? 'border-l lg:border-l-0 border-white/20' : ''
              }`}
            >
              <p
                className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold leading-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {p.k}
                <span className="text-[#097CF4]">.</span>
              </p>
              <p
                className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {p.v}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[38px] left-0 right-0 h-px bg-white/20"></div>
          <div className="absolute top-[38px] left-0 h-px bg-[#097CF4]" style={{ width: '60%' }}></div>

          <div className="grid grid-cols-5 gap-5">
            {stages.map((s, i) => (
              <div key={s.no} className="relative group">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <span
                      className={`relative z-10 w-20 h-20 border-2 flex items-center justify-center transition-colors ${
                        i < 3 ? 'bg-[#097CF4] border-[#097CF4] text-white' : 'bg-black border-white text-white'
                      }`}
                    >
                      <div className="w-8 h-8">{s.icon}</div>
                    </span>
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-[14px] w-3 h-3 border-2 ${
                        i < 3 ? 'bg-[#097CF4] border-[#097CF4]' : 'bg-black border-white'
                      }`}
                    ></span>
                  </div>
                </div>

                <div className="border-2 border-white/20 bg-black p-5 relative transition-colors group-hover:border-[#097CF4]">
                  <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#097CF4]"></span>
                  <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#097CF4]"></span>

                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      - {s.no}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {s.duration}
                    </span>
                  </div>

                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {s.label}
                  </p>
                  <h3
                    className="text-[18px] font-extrabold leading-[1.2]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-[1.6] text-white/65">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/20"></div>

          <div className="space-y-5">
            {stages.map((s, i) => (
              <div key={s.no} className="relative pl-16">
                <span
                  className={`absolute left-0 top-0 w-12 h-12 border-2 flex items-center justify-center transition-colors ${
                    i === 0 ? 'bg-[#097CF4] border-[#097CF4] text-white' : 'bg-black border-white text-white'
                  }`}
                >
                  <div className="w-5 h-5">{s.icon}</div>
                </span>

                <div className="border-2 border-white/20 bg-black p-5 relative">
                  <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#097CF4]"></span>
                  <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#097CF4]"></span>

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      - {s.no} · {s.label}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {s.duration}
                    </span>
                  </div>

                  <h3
                    className="text-[22px] font-extrabold leading-[1.2]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-white/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HiringProcess