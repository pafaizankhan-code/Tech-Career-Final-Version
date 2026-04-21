import React from 'react'
import { Link } from 'react-router-dom'

const steps = [
  {
    no: '01',
    phase: 'Discovery',
    duration: 'Week 1',
    title: 'Understand the problem.',
    desc: 'A free discovery call, competitor teardown, and a written scope we both sign off on — so there are no surprises later.',
    deliverables: ['Free Call', 'Scope Doc', 'Fixed Quote'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    no: '02',
    phase: 'Strategy & Design',
    duration: 'Week 2–3',
    title: 'Blueprint the build.',
    desc: 'Information architecture, UX flows, UI system, and architecture diagrams — validated with clickable prototypes.',
    deliverables: ['Wireframes', 'Design System', 'Architecture'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 2h7v7H2zM15 2h7v7h-7zM15 15h7v7h-7zM2 15h7v7H2z" />
      </svg>
    ),
  },
  {
    no: '03',
    phase: 'Development',
    duration: 'Week 4–8',
    title: 'Ship, sprint by sprint.',
    desc: 'Weekly demos on WhatsApp / video call. Code reviewed, tested, deployed to a staging link you can click on every Friday — no big-bang releases.',
    deliverables: ['Weekly Demos', 'Staging Link', 'WhatsApp Group'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l-4 8 4 8M16 4l4 8-4 8M14 3l-4 18" />
      </svg>
    ),
  },
  {
    no: '04',
    phase: 'Launch',
    duration: 'Week 9',
    title: 'Go live, confidently.',
    desc: 'Deploy to your hosting, connect your domain, set up analytics and basic monitoring — plus a handover walkthrough so your team owns the product.',
    deliverables: ['Deploy + Domain', 'Analytics', 'Handover Doc'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 14l6 6 10-18-8 6-4-2-4 8z" />
      </svg>
    ),
  },
  {
    no: '05',
    phase: 'Support & Growth',
    duration: 'Ongoing',
    title: 'Evolve, don\u2019t erode.',
    desc: 'Optional monthly retainer for bug fixes, small features, SEO and digital marketing — so your product keeps improving without scrambling for help.',
    deliverables: ['Monthly Retainer', 'Bug Fixes', 'Growth Work'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-3-6.7L21 8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 3v5h-5" />
      </svg>
    ),
  },
]

const OurProcess = () => {
  return (
    <section
      id="process"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Dot background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-[860px] mx-auto text-center mb-14 lg:mb-20">
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-10 h-px bg-[#097CF4]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
              Our Process
            </span>
            <span className="w-10 h-px bg-[#097CF4]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A <span className="text-[#097CF4] italic">disciplined</span> path
            <br className="hidden sm:block" /> from idea to impact.
          </h2>

          <p
            className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70 max-w-[640px] mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Five focused phases. Clear deliverables. No black-box work. You always know exactly
            where we are and what is coming next.
          </p>
        </div>

        {/* DESKTOP — horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Rail */}
          <div className="absolute left-0 right-0 top-[76px] h-px bg-black/15"></div>
          <div
            className="absolute left-0 top-[76px] h-px bg-[#097CF4]"
            style={{ width: '50%' }}
          ></div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.no} className="relative group">
                {/* Top number pill */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <span
                      className={`relative z-10 flex items-center justify-center w-20 h-20 border-2 transition-colors ${
                        i < 2
                          ? 'bg-[#097CF4] border-[#097CF4] text-white'
                          : 'bg-white border-black text-black group-hover:bg-black group-hover:text-white'
                      }`}
                    >
                      <div className="w-7 h-7">{s.icon}</div>
                    </span>
                    {/* Node dot on rail */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-[14px] w-3 h-3 border-2 ${
                        i < 2 ? 'bg-[#097CF4] border-[#097CF4]' : 'bg-white border-black'
                      }`}
                    ></span>
                  </div>
                </div>

                {/* Card */}
                <div className="border-2 border-black bg-white p-6 relative transition-colors group-hover:border-[#097CF4]">
                  <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#097CF4]"></span>
                  <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#097CF4]"></span>

                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      — {s.no}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {s.duration}
                    </span>
                  </div>

                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {s.phase}
                  </p>
                  <h3
                    className="text-[20px] font-extrabold text-black leading-[1.2]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.65] text-black/65">
                    {s.desc}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-black/10 space-y-1.5">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/70"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        <svg className="w-3 h-3 text-[#097CF4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE / TABLET — vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical rail */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-black/15"></div>

          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.no} className="relative pl-16">
                {/* Node */}
                <div
                  className={`absolute left-0 top-0 w-12 h-12 border-2 flex items-center justify-center transition-colors ${
                    i === 0
                      ? 'bg-[#097CF4] border-[#097CF4] text-white'
                      : 'bg-white border-black text-black'
                  }`}
                >
                  <div className="w-5 h-5">{s.icon}</div>
                </div>

                <div className="border-2 border-black bg-white p-5 sm:p-6 relative">
                  <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#097CF4]"></span>
                  <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#097CF4]"></span>

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      — {s.no} · {s.phase}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {s.duration}
                    </span>
                  </div>

                  <h3
                    className="text-[22px] sm:text-[24px] font-extrabold text-black leading-[1.2]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.65] text-black/65">
                    {s.desc}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-black/10 flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-black/15 text-[10px] font-bold uppercase tracking-[0.15em] text-black/70"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        <svg className="w-2.5 h-2.5 text-[#097CF4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 bg-black text-white p-8 lg:p-10 relative">
          <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#097CF4]"></span>
          <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#097CF4]"></span>

          <div className="flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — Ready When You Are
            </p>
            <h4
              className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your first sprint can start in{' '}
              <span className="italic text-[#097CF4]">7 days.</span>
            </h4>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-[#097CF4] text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#097CF4] transition-colors shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Book a Discovery Call
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
    </section>
  )
}

export default OurProcess
