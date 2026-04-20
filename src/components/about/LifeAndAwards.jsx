import React from 'react'

const perks = [
  { k: '🌍', label: 'Fully Remote-First', sub: 'Work from anywhere · 4 continents' },
  { k: '📚', label: 'Learning Budget', sub: '₹80k/yr per engineer' },
  { k: '🩺', label: 'Family Health Cover', sub: 'Dependents · unlimited' },
  { k: '🧘', label: 'No-Meeting Wednesdays', sub: 'Deep work, every week' },
  { k: '🎨', label: 'Side-Project Fridays', sub: 'Explore. Prototype. Share.' },
  { k: '🎓', label: 'Conference Sponsorship', sub: 'Two per engineer, every year' },
]

const awards = [
  { year: '2025', title: 'Clutch Top 100', issuer: 'Clutch.co', tag: 'Global' },
  { year: '2024', title: 'Best UI/UX Studio', issuer: 'India Design Council', tag: 'Design' },
  { year: '2024', title: 'SOC 2 Type II', issuer: 'AICPA', tag: 'Security' },
  { year: '2023', title: 'GoodFirms Top Agency', issuer: 'GoodFirms', tag: 'Reviews' },
  { year: '2023', title: 'ISO 27001 Certified', issuer: 'BSI', tag: 'Security' },
  { year: '2022', title: 'Deloitte Fast 50', issuer: 'Deloitte India', tag: 'Growth' },
]

const press = [
  { logo: 'FORBES', quote: 'Quietly running some of India\u2019s most rigorous engineering practice.' },
  { logo: 'ECONOMIC TIMES', quote: 'Bootstrapped, profitable, and exporting craft at scale.' },
  { logo: 'TECHCRUNCH', quote: 'The senior-only model that shouldn\u2019t work — but does.' },
]

const LifeAndAwards = () => {
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
        {/* LIFE AT TECH CAREER */}
        <div className="mb-20 lg:mb-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
            <div className="max-w-[720px]">
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-10 h-px bg-[#0276E2]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                  Life at Tech Career
                </span>
              </div>

              <h2
                className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A studio that takes{' '}
                <span className="text-[#0276E2] italic">people</span> seriously.
              </h2>
            </div>

            <p
              className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We do not have a ping-pong table. We do have unlimited books, four-day learning sprints, and engineers we trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
            {perks.map((p) => (
              <div
                key={p.label}
                className="group relative p-6 lg:p-8 border-r border-b border-black/10 bg-white hover:bg-[#0276E2] hover:text-white transition-colors duration-500"
              >
                <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-black/15 group-hover:border-white transition-colors"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-black/15 group-hover:border-white transition-colors"></span>

                <div className="text-[36px] mb-4">{p.k}</div>
                <h3
                  className="text-[20px] font-extrabold leading-tight tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {p.label}
                </h3>
                <p
                  className={`mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] ${
                    'text-black/50 group-hover:text-white/80'
                  } transition-colors`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {p.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AWARDS + PRESS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Awards list */}
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Awards & Certifications
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Recognition, quietly{' '}
              <span className="text-[#0276E2] italic">earned.</span>
            </h2>

            <div className="mt-8 border-t-2 border-black">
              {awards.map((a, i) => (
                <div
                  key={`${a.year}-${a.title}`}
                  className="group grid grid-cols-12 gap-3 py-5 border-b-2 border-black items-center hover:bg-black/[0.02] transition-colors"
                >
                  <div className="col-span-2">
                    <span
                      className="text-[18px] sm:text-[22px] font-extrabold text-black"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {a.year}
                      <span className="text-[#0276E2]">.</span>
                    </span>
                  </div>
                  <div className="col-span-7">
                    <h3
                      className="text-[16px] sm:text-[18px] font-extrabold text-black leading-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {a.title}
                    </h3>
                    <p className="text-[11px] text-black/55 mt-0.5">{a.issuer}</p>
                  </div>
                  <div className="col-span-3 flex justify-end">
                    <span
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/15 text-black/70"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {a.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Press column */}
          <div className="lg:col-span-5">
            <div className="bg-black text-white p-6 sm:p-8 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — As Featured In
              </p>

              <div className="space-y-6">
                {press.map((p, i) => (
                  <div key={p.logo} className={`${i !== press.length - 1 ? 'pb-6 border-b border-white/15' : ''}`}>
                    <p
                      className="text-[14px] font-black tracking-[0.3em] text-[#0276E2]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {p.logo}
                    </p>
                    <p
                      className="mt-3 text-[15px] leading-[1.6] italic text-white/90"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      &ldquo;{p.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications chips */}
            <div className="mt-6 border-2 border-black p-5 relative">
              <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#0276E2]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Compliance
              </p>

              <div className="flex flex-wrap gap-2">
                {['ISO 27001', 'SOC 2 Type II', 'GDPR', 'HIPAA', 'AWS Partner', 'GCP Partner', 'Azure Expert'].map(
                  (c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifeAndAwards
