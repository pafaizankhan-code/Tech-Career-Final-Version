import React from 'react'

const benefits = [
  {
    no: '01',
    title: 'Above-Market Compensation',
    desc: 'Senior-only salary bands, top-quartile of the market, with transparent leveling and annual reviews.',
    tag: 'Pay',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'ESOP for Every Teammate',
    desc: 'Meaningful equity from day one. We win together, we exit together — with a founder-grade cap table.',
    tag: 'Equity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Remote-First, Async-Default',
    desc: 'Work from anywhere in the world. Four-hour overlap windows. No meetings on Wednesdays.',
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
    title: 'Unlimited Learning Budget',
    desc: '₹80k/year per engineer for books, courses, and conferences. Plus two paid conference trips, anywhere.',
    tag: 'Growth',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M4 4h16v12H4zM4 8h16" />
      </svg>
    ),
  },
  {
    no: '05',
    title: 'Family Health Cover',
    desc: 'Comprehensive insurance for you, your partner, your kids, and your parents. ₹25 L coverage, cashless.',
    tag: 'Health',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    no: '06',
    title: 'Sabbatical After 4 Years',
    desc: 'Every engineer gets a fully paid 6-week sabbatical every four years. Not optional. Strongly encouraged.',
    tag: 'Time',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    no: '07',
    title: 'Top-Tier Home Office',
    desc: '₹1.5 L one-time setup budget. Apple hardware. Your pick of monitor, chair, desk, and mic.',
    tag: 'Setup',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18v11H3zM8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    no: '08',
    title: 'Open-Source Fridays',
    desc: 'One Friday a month, paid, to contribute to libraries the industry depends on. We sponsor the maintenance.',
    tag: 'Impact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
]

const manifest = [
  'We hire senior and expect ownership.',
  'We ship in small teams, not committees.',
  'We document everything — including mistakes.',
  'We say "I do not know" out loud, often.',
  'We protect deep-work time fiercely.',
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
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Why Work Here
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Designed so your <span className="text-[#0276E2] italic">best</span> work can happen here.
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70 max-w-[640px]">
              We treat compensation, environment, and time like the serious decisions they are. No
              ping-pong tables. No vanity perks. Just the conditions great engineers ask for.
            </p>
          </div>

          {/* Right: manifest card */}
          <div className="lg:col-span-5">
            <div className="bg-black text-white p-6 lg:p-7 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — The Team Manifest
              </p>

              <ul className="space-y-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {manifest.map((m, i) => (
                  <li key={m} className="flex items-start gap-3 text-[13px] lg:text-[14px] font-semibold">
                    <span className="text-[10px] tracking-[0.2em] text-[#0276E2] pt-1 shrink-0">
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
              <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-black/20 group-hover:border-[#0276E2] transition-colors"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-black/20 group-hover:border-[#0276E2] transition-colors"></span>

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center border-2 border-black group-hover:border-[#0276E2] group-hover:bg-[#0276E2] transition-colors">
                  <div className="w-6 h-6">{b.icon}</div>
                </div>
                <div className="text-right">
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-[#0276E2] transition-colors block"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    — {b.no}
                  </span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0276E2] block mt-1"
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

              <span className="block h-[2px] bg-[#0276E2] mt-3 mb-4 w-8 group-hover:w-16 transition-all duration-500"></span>

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
