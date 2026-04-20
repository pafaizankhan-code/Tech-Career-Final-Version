import React from 'react'

const industries = [
  {
    no: '01',
    name: 'Fintech & Banking',
    count: '48 Projects',
    clients: ['Finlytic', 'Plutus Bank', 'Ledgr'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    no: '02',
    name: 'Healthcare',
    count: '32 Projects',
    clients: ['Aegis', 'Medly', 'Klaris Bio'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12M12 22a10 10 0 110-20 10 10 0 010 20z" />
      </svg>
    ),
  },
  {
    no: '03',
    name: 'Logistics & Supply',
    count: '26 Projects',
    clients: ['Orbital', 'TransNet', 'Carta Flow'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h13l5 5v5a2 2 0 01-2 2h-1M3 7v10a2 2 0 002 2h1M3 7l2-3h10M8 19a2 2 0 11-4 0 2 2 0 014 0zM20 19a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    no: '04',
    name: 'SaaS & Enterprise',
    count: '64 Projects',
    clients: ['Nexora', 'Plexa HR', 'Stridr'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M8 4v14M16 4v14" />
      </svg>
    ),
  },
  {
    no: '05',
    name: 'E-Commerce & Retail',
    count: '38 Projects',
    clients: ['Linea', 'Market Nest', 'Loom & Co.'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.5 3M5.5 6h15L18 14H7m-1.5-8L7 14m0 0a2 2 0 100 4 2 2 0 000-4zm10 4a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    no: '06',
    name: 'Education & EdTech',
    count: '22 Projects',
    clients: ['LearnLoop', 'Gradely', 'Axiom Labs'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7M5 11v6a2 2 0 001 1.7l5 2.8a2 2 0 002 0l5-2.8a2 2 0 001-1.7v-6" />
      </svg>
    ),
  },
  {
    no: '07',
    name: 'Media & Entertainment',
    count: '18 Projects',
    clients: ['Strata', 'Reelcast', 'Octave'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polygon strokeLinecap="round" strokeLinejoin="round" points="10 8 16 12 10 16" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    no: '08',
    name: 'Government & Public',
    count: '12 Projects',
    clients: ['Civic Nexus', 'GovWave', 'UrbanOS'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18M5 22V10l7-5 7 5v12M9 22V13h6v9" />
      </svg>
    ),
  },
]

const Industries = () => {
  return (
    <section
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

      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#0276E2]"></span>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Industries Served
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Eight verticals.{' '}
              <span className="text-[#0276E2] italic">One</span> standard of craft.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-white/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Enterprise software has no shortcuts — but there are patterns. We have shipped them all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15">
          {industries.map((ind) => (
            <article
              key={ind.no}
              className="group relative p-6 lg:p-7 border-r border-b border-white/15 transition-colors hover:bg-[#0276E2]"
            >
              <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-white/30 group-hover:border-white transition-colors"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-white/30 group-hover:border-white transition-colors"></span>

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border-2 border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#0276E2] transition-colors">
                  <div className="w-6 h-6">{ind.icon}</div>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — {ind.no}
                </span>
              </div>

              <h3
                className="text-[20px] lg:text-[22px] font-extrabold leading-[1.15] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {ind.name}
              </h3>

              <p
                className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0276E2] group-hover:text-white transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {ind.count}
              </p>

              <div className="mt-5 pt-4 border-t border-white/15 group-hover:border-white/30 transition-colors">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 mb-2 group-hover:text-white/70 transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Select Clients
                </p>
                <ul
                  className="text-[12px] text-white/80 space-y-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {ind.clients.map((c) => (
                    <li key={c} className="flex items-center gap-2 font-semibold">
                      <span className="w-1 h-1 bg-[#0276E2] group-hover:bg-white transition-colors"></span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
