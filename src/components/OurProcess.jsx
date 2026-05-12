'use client'

import React from 'react'
import { Link } from '../lib/router-compat'

const steps = [
  {
    no: '01',
    phase: 'Discovery',
    duration: 'Week 1',
    title: 'Understand the problem.',
    desc: 'A free discovery call, competitor teardown, and a written scope we both sign off on — so there are no surprises later.',
    deliverables: ['Free Call', 'Scope Doc', 'Fixed Quote'],
  },
  {
    no: '02',
    phase: 'Strategy & Design',
    duration: 'Week 2–3',
    title: 'Blueprint the build.',
    desc: 'Information architecture, UX flows, UI system, and architecture diagrams — validated with clickable prototypes.',
    deliverables: ['Wireframes', 'Design System', 'Architecture'],
  },
  {
    no: '03',
    phase: 'Development',
    duration: 'Week 4–8',
    title: 'Ship, sprint by sprint.',
    desc: 'Weekly demos on WhatsApp / video call. Code reviewed, tested, deployed to a staging link you can click on every Friday — no big-bang releases.',
    deliverables: ['Weekly Demos', 'Staging Link', 'WhatsApp Group'],
  },
  {
    no: '04',
    phase: 'Launch',
    duration: 'Week 9',
    title: 'Go live, confidently.',
    desc: 'Deploy to your hosting, connect your domain, set up analytics and basic monitoring — plus a handover walkthrough so your team owns the product.',
    deliverables: ['Deploy + Domain', 'Analytics', 'Handover Doc'],
  },
  {
    no: '05',
    phase: 'Support & Growth',
    duration: 'Ongoing',
    title: 'Evolve, don’t erode.',
    desc: 'Optional monthly retainer for bug fixes, small features, SEO and digital marketing — so your product keeps improving without scrambling for help.',
    deliverables: ['Monthly Retainer', 'Bug Fixes', 'Growth Work'],
  },
]

const principles = [
  { label: 'Fixed Quotes', sub: 'No scope creep.' },
  { label: 'Weekly Demos', sub: 'See real progress.' },
  { label: 'Founder Access', sub: 'Talk to the decision maker.' },
]

const OurProcess = () => {
  return (
    <section
      id="process"
      className="relative bg-white py-14 lg:py-20 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* ── EDITORIAL INTRO — two-column ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-10 lg:mb-14 pb-10 lg:pb-14 border-b border-black/10">
          <div className="lg:col-span-7">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — Our Process
            </p>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              How we turn an idea into a{' '}
              <span className="italic text-[#097CF4]">working product</span>.
            </h2>
          </div>

     
        </div>

        {/* ── STEP ROWS ───────────────────────────────────── */}
        <ol className="space-y-0">
          {steps.map((s, i) => (
            <li
              key={s.no}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 py-7 lg:py-8 border-t border-black/10 first:border-t-0 transition-colors hover:bg-[#fafbfc]"
            >
              {/* Active marker on hover */}
              <span className="hidden lg:block absolute left-0 top-7 bottom-7 w-[2px] bg-[#097CF4] opacity-0 group-hover:opacity-100 transition-opacity"></span>

              {/* LEFT — Number + phase meta */}
              <div className="lg:col-span-4 flex items-start gap-4 lg:pl-5">
                <span
                  className="text-[72px] sm:text-[88px] lg:text-[100px] font-extrabold leading-[0.85] tracking-[-0.05em] text-black/[0.06] group-hover:text-[#097CF4]/30 transition-colors select-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {s.no}
                </span>
                <div className="pt-2 lg:pt-3">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-1.5"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    — {s.phase}
                  </p>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/45"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {s.duration}
                  </p>
                </div>
              </div>

              {/* MIDDLE — Title + description */}
              <div className="lg:col-span-5">
                <h3
                  className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-black leading-[1.15] tracking-[-0.015em] mb-2.5"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {s.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-[1.65] text-black/65 max-w-[520px]">
                  {s.desc}
                </p>
              </div>

              {/* RIGHT — Deliverables */}
              <div className="lg:col-span-3">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2.5"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — Deliverables
                </p>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2.5 text-[12px] font-semibold text-black/80"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      <span className="w-1 h-1 bg-[#097CF4] rounded-full shrink-0"></span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {/* ── BOTTOM CTA — editorial banner ────────────────── */}
        <div className="mt-16 lg:mt-24 relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          ></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-14">
            {/* Left — number */}
            <div className="lg:col-span-2 flex items-start">
              <span
                className="text-[64px] lg:text-[88px] font-extrabold leading-[0.85] tracking-[-0.04em] text-[#097CF4]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                07
                <span className="text-white/30">d</span>
              </span>
            </div>

            {/* Middle — content */}
            <div className="lg:col-span-7">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Kickoff in a week
              </p>
              <h4
                className="text-[28px] sm:text-[32px] lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Your first sprint can start{' '}
                <span className="italic text-[#097CF4]">7 days from today.</span>
              </h4>
              <p className="mt-3 text-[14px] leading-[1.65] text-white/65 max-w-[560px]">
                Book a 30-minute discovery call. We'll scope the problem, agree on a timeline, and send a fixed quote — no obligations.
              </p>
            </div>

            {/* Right — CTA */}
            <div className="lg:col-span-3 flex lg:items-end lg:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-[#097CF4] text-white text-[12px] font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-[#097CF4] transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Book a Call
                <span className="w-10 h-10 bg-white group-hover:bg-[#097CF4] flex items-center justify-center transition-colors">
                  <svg
                    className="w-4 h-4 text-[#097CF4] group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess