import React from 'react'

const clients = [
  'NEXORA', 'FINLYTIC', 'ORBITAL', 'SENTIO', 'LINEA', 'AEGIS',
  'PLEXA', 'QUANTUM', 'STRATA', 'PLUTUS', 'LUMEN', 'MEDLY',
  'GRADELY', 'CARTA', 'REELCAST', 'OCTAVE',
]

const regions = [
  { k: '45', v: 'India' },
  { k: '22', v: 'North America' },
  { k: '12', v: 'Europe' },
  { k: '8', v: 'Middle East' },
  { k: '5', v: 'APAC' },
]

const ClientsShowcase = () => {
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
        <div className="max-w-[860px] mx-auto text-center mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-10 h-px bg-[#0276E2]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
              Client Roster
            </span>
            <span className="w-10 h-px bg-[#0276E2]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Eighty teams.{' '}
            <span className="text-[#0276E2] italic">Fourteen</span> countries.
          </h2>

          <p
            className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70 max-w-[620px] mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A selection of the organisations that have trusted us with their most important systems.
          </p>
        </div>

        {/* Client logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-black/10">
          {clients.map((c, i) => (
            <div
              key={c}
              className={`group relative h-24 sm:h-28 lg:h-32 flex items-center justify-center border-r border-b border-black/10 bg-white hover:bg-black transition-colors duration-500 ${
                i === 2 || i === 9 ? 'bg-black/[0.02]' : ''
              }`}
            >
              <span className="pointer-events-none absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t-2 border-l-2 border-black/15 group-hover:border-[#0276E2] transition-colors"></span>
              <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b-2 border-r-2 border-black/15 group-hover:border-[#0276E2] transition-colors"></span>

              <span
                className="text-[14px] sm:text-[15px] lg:text-[17px] font-black tracking-[0.3em] text-black/80 group-hover:text-white transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {c}
              </span>
            </div>
          ))}
        </div>

        {/* Regional breakdown */}
        <div className="mt-14 lg:mt-16 border-2 border-black p-6 sm:p-8 lg:p-10 relative">
          <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#0276E2]"></span>
          <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#0276E2]"></span>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
            <div className="shrink-0">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — By Region
              </p>
              <h3
                className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-black leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A genuinely <span className="text-[#0276E2] italic">global</span> book.
              </h3>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-4 lg:gap-2">
              {regions.map((r, i) => (
                <div
                  key={r.v}
                  className={`py-4 lg:py-5 lg:px-5 ${
                    i !== regions.length - 1 ? 'lg:border-r border-black/15' : ''
                  }`}
                >
                  <p
                    className="text-4xl lg:text-[44px] font-extrabold text-black leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {r.k}
                    <span className="text-[#0276E2]">.</span>
                  </p>
                  <p
                    className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-black/60"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {r.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-12 relative border-t-2 border-b-2 border-black bg-white">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-white z-10 [mask-image:linear-gradient(to_right,black_40%,transparent)]"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-white z-10 [mask-image:linear-gradient(to_left,black_40%,transparent)]"></div>

          <div className="flex overflow-hidden">
            <div className="flex animate-[marquee_32s_linear_infinite] whitespace-nowrap">
              {[...clients, ...clients].map((c, i) => (
                <span
                  key={i}
                  className="flex items-center gap-6 px-8 py-5 text-[13px] font-black tracking-[0.35em] text-black/80"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {c}
                  <span className="w-1.5 h-1.5 bg-[#0276E2]"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default ClientsShowcase
