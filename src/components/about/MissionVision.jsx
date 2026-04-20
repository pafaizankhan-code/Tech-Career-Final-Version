import React from 'react'

const MissionVision = () => {
  return (
    <section className="relative bg-black text-white py-20 lg:py-28 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#0276E2]"></span>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-[720px] mx-auto mb-14 lg:mb-20">
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-10 h-px bg-[#0276E2]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
              Mission & Vision
            </span>
            <span className="w-10 h-px bg-[#0276E2]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The <span className="text-[#0276E2] italic">why</span> behind everything we ship.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              kind: 'Mission',
              title: 'Make enterprise software feel like craft.',
              body:
                'To build reliable, beautiful, and honest software for organisations that care about the difference — and to teach the next generation of engineers to do the same.',
              bullets: [
                'Senior engineering, end-to-end',
                'Transparent scopes and invoices',
                'Architecture reviews, not guesswork',
              ],
              bg: 'bg-white text-black',
              accent: 'bg-[#0276E2]',
            },
            {
              kind: 'Vision',
              title: 'Be the partner serious teams call first.',
              body:
                'To be the quiet name behind the world\u2019s most trusted digital products — recognised not by our marketing, but by the longevity of the systems we leave behind.',
              bullets: [
                'One name across four continents',
                'Zero-bug-tolerance culture',
                'Compounding client relationships',
              ],
              bg: 'bg-[#0276E2] text-white',
              accent: 'bg-black',
            },
          ].map((card) => (
            <article
              key={card.kind}
              className={`relative ${card.bg} p-8 sm:p-10 lg:p-12 border-2 border-white/0 group`}
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] ${
                    card.kind === 'Mission' ? 'text-[#0276E2]' : 'text-white'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span className={`w-10 h-px ${card.accent}`}></span>
                  — {card.kind}
                </span>
                <span className={`w-10 h-10 ${card.accent} flex items-center justify-center`}>
                  <svg className={`w-4 h-4 ${card.kind === 'Mission' ? 'text-white' : 'text-white'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    {card.kind === 'Mission' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="3" />
                        <path strokeLinecap="round" d="M12 2a10 10 0 110 20 10 10 0 010-20zM2 12h3M19 12h3M12 2v3M12 19v3" />
                      </>
                    )}
                  </svg>
                </span>
              </div>

              <h3
                className="text-3xl lg:text-[40px] font-extrabold leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {card.title}
              </h3>

              <p
                className={`mt-6 text-[14px] lg:text-[15px] leading-[1.75] ${
                  card.kind === 'Mission' ? 'text-black/70' : 'text-white/85'
                }`}
              >
                {card.body}
              </p>

              <ul className="mt-8 pt-6 border-t-2 border-black/20 space-y-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[13px] font-semibold">
                    <span className={`w-5 h-5 ${card.accent} flex items-center justify-center shrink-0`}>
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Corner markers */}
              <span className={`pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 ${card.kind === 'Mission' ? 'border-[#0276E2]' : 'border-white'}`}></span>
              <span className={`pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 ${card.kind === 'Mission' ? 'border-[#0276E2]' : 'border-white'}`}></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVision
