import React from 'react'

const values = [
  {
    no: '01',
    title: 'Craft Over Speed',
    desc: 'We ship fast, but we ship right — tested, documented, reviewed. A website we hand over today should still feel good six months in.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'Truth Over Theatre',
    desc: 'Honest quotes, real weekly progress, and straight answers. If something will slip, you hear it from us before the deadline — not after.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Ownership as Default',
    desc: 'Every engineer treats the product like it is theirs — because while we build it, it is.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    no: '04',
    title: 'Learn in the Open',
    desc: 'We explain decisions in plain language — not jargon or buzzwords. You should understand what we are building, and why, even if you are non-technical.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M4 4h16v12H4zM4 8h16" />
      </svg>
    ),
  },
  {
    no: '05',
    title: 'Respect Compound Interest',
    desc: 'Small, consistent improvements beat dramatic rewrites. We keep the base strong.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
      </svg>
    ),
  },
  {
    no: '06',
    title: 'People Before Process',
    desc: 'Process is scaffolding, not the building. Great people with good judgement beat any playbook.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-2a4 4 0 00-3-3.87M7 20v-2a4 4 0 013-3.87m5-5a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

const CoreValues = () => {
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
                Core Values
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Six <span className="text-[#097CF4] italic">principles</span> that hire, fire, and guide us.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Not slogans on a wall — these are the filters we actually use when we ship, when we hire, and when we choose which projects to take on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
          {values.map((v) => (
            <article
              key={v.no}
              className="group relative p-8 lg:p-10 border-r border-b border-black/10 bg-white hover:bg-black hover:text-white transition-colors duration-500"
            >
              <span className="pointer-events-none absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-black/20 group-hover:border-[#097CF4] transition-colors"></span>
              <span className="pointer-events-none absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-black/20 group-hover:border-[#097CF4] transition-colors"></span>

              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center border-2 border-black group-hover:border-[#097CF4] group-hover:bg-[#097CF4] transition-colors">
                  <div className="w-7 h-7">{v.icon}</div>
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-[#097CF4] transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — {v.no}
                </span>
              </div>

              <h3
                className="text-[24px] lg:text-[28px] font-extrabold leading-[1.15] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {v.title}
              </h3>

              <span className="block h-[2px] bg-[#097CF4] mt-4 mb-5 w-10 group-hover:w-20 transition-all duration-500"></span>

              <p className="text-[14px] leading-[1.7] text-black/65 group-hover:text-white/70 transition-colors">
                {v.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
