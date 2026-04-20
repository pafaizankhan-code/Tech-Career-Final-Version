import React from 'react'

const milestones = [
  { year: '2013', title: 'Founded', desc: 'Two engineers, a two-desk office in Ahmedabad, and one conviction.', metric: '02', metricLabel: 'Founders' },
  { year: '2016', title: 'First Fortune 500', desc: '14-month digital transformation for a global logistics leader.', metric: '1st', metricLabel: 'F500 Client' },
  { year: '2019', title: 'Bengaluru Office', desc: 'Crossed 50 engineers and opened our second office in India.', metric: '50+', metricLabel: 'Team' },
  { year: '2022', title: 'ISO 27001 Certified', desc: 'Formalised our security-first posture with dual certification.', metric: '100%', metricLabel: 'Audit Pass' },
  { year: '2024', title: '80+ Clients Milestone', desc: 'Crossed 80 active client partnerships across 14 countries.', metric: '14', metricLabel: 'Countries' },
  { year: '2026', title: 'Twelve Years Strong', desc: 'Still independent. Still bootstrapped. Still shipping craft.', metric: '12', metricLabel: 'Years' },
]

const Milestones = () => {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
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
        <div className="max-w-[860px] mx-auto text-center mb-14 lg:mb-20">
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-10 h-px bg-[#0276E2]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
              Milestones
            </span>
            <span className="w-10 h-px bg-[#0276E2]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Twelve years, one{' '}
            <span className="text-[#0276E2] italic">honest</span> line.
          </h2>

          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70 max-w-[620px] mx-auto">
            A decade-plus of compounding decisions — and the moments that defined how we work today.
          </p>
        </div>

        {/* Desktop horizontal rail */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[38px] left-0 right-0 h-px bg-black/15"></div>
          <div className="absolute top-[38px] left-0 h-px bg-[#0276E2]" style={{ width: '83%' }}></div>

          <div className="grid grid-cols-6 gap-5">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative group">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <span className={`relative z-10 w-20 h-20 flex items-center justify-center border-2 font-extrabold text-[17px] ${
                      i < 5 ? 'bg-[#0276E2] border-[#0276E2] text-white' : 'bg-white border-black text-black'
                    }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {m.year}
                    </span>
                    <span className={`absolute left-1/2 -translate-x-1/2 -bottom-[14px] w-3 h-3 border-2 ${
                      i < 5 ? 'bg-[#0276E2] border-[#0276E2]' : 'bg-white border-black'
                    }`}></span>
                  </div>
                </div>

                <div className="border-2 border-black bg-white p-5 relative transition-colors group-hover:border-[#0276E2]">
                  <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#0276E2]"></span>
                  <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#0276E2]"></span>

                  <p
                    className="text-[32px] font-extrabold text-black leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {m.metric}
                    <span className="text-[#0276E2]">.</span>
                  </p>
                  <p
                    className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-black/50"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {m.metricLabel}
                  </p>

                  <h3
                    className="mt-4 text-[17px] font-extrabold text-black leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.55] text-black/60">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-black/15"></div>

          <div className="space-y-5">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative pl-16">
                <span className={`absolute left-0 top-0 w-12 h-12 flex items-center justify-center border-2 text-[12px] font-extrabold ${
                  i === 0 ? 'bg-[#0276E2] border-[#0276E2] text-white' : 'bg-white border-black text-black'
                }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {m.year}
                </span>

                <div className="border-2 border-black bg-white p-5 relative">
                  <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#0276E2]"></span>
                  <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#0276E2]"></span>

                  <div className="flex items-baseline justify-between mb-2">
                    <h3
                      className="text-[20px] font-extrabold text-black leading-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-[22px] font-extrabold text-black leading-none"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {m.metric}
                      <span className="text-[#0276E2]">.</span>
                    </p>
                  </div>
                  <p className="text-[13px] leading-[1.6] text-black/60">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Milestones
