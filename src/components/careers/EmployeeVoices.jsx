import React from 'react'

const voices = [
  {
    initials: 'MS',
    accent: 'blue',
    name: 'Meera Shah',
    role: 'Staff Engineer · 4 yrs',
    quote:
      'I joined to build one platform. I stayed because I was trusted to own an entire practice by year two. That never happens at the big shops.',
  },
  {
    initials: 'RT',
    accent: 'black',
    name: 'Rahim Tariq',
    role: 'Principal Architect · 6 yrs',
    quote:
      'The no-meeting Wednesdays are real. I have shipped more meaningful code here in a quarter than in four years at my previous role.',
  },
  {
    initials: 'AP',
    accent: 'blue',
    name: 'Ananya Pillai',
    role: 'Lead Designer · 3 yrs',
    quote:
      'Design is treated like a discipline, not a decoration. Our design system is read by engineers, and engineers are in our design reviews.',
  },
]

const perks = [
  { k: '4.9', v: 'Glassdoor Score', sub: 'Based on 86 reviews' },
  { k: '96%', v: 'Would Recommend', sub: 'To an engineer friend' },
  { k: '3.8 yrs', v: 'Avg. Tenure', sub: 'Industry avg: 1.9 yrs' },
]

const EmployeeVoices = () => {
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Employee Voices
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Unedited, from the <span className="text-[#0276E2] italic">people</span> who stayed.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We didn't write these. We just asked three long-tenured teammates one question — "why
            are you still here?"
          </p>
        </div>

        {/* Voice cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {voices.map((v, i) => (
            <article
              key={v.name}
              className={`relative border-2 border-black bg-white p-6 sm:p-8 transition-colors hover:bg-black hover:text-white group ${
                i === 1 ? 'md:translate-y-0 lg:-translate-y-6' : ''
              }`}
            >
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2]"></span>

              <span
                className="absolute top-4 right-6 text-[100px] leading-none font-black text-[#0276E2]/15 group-hover:text-[#0276E2]/30 pointer-events-none select-none transition-colors"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                &ldquo;
              </span>

              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-[#0276E2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p
                className="relative text-[18px] sm:text-[20px] leading-[1.45] font-medium italic min-h-[160px]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                &ldquo;{v.quote}&rdquo;
              </p>

              <div className="mt-8 pt-5 border-t-2 border-black group-hover:border-white/30 transition-colors flex items-center gap-3">
                <span
                  className={`w-12 h-12 flex items-center justify-center text-white text-[13px] font-extrabold border-2 ${
                    v.accent === 'blue' ? 'bg-[#0276E2] border-[#0276E2]' : 'bg-black border-black group-hover:bg-white group-hover:text-black'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {v.initials}
                </span>
                <div>
                  <p
                    className="text-[14px] font-extrabold"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {v.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-black/50 group-hover:text-white/60 transition-colors">
                    {v.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Rating strip */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-[#0276E2] text-white p-6 sm:p-8 relative">
            <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-white"></span>
            <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-white"></span>

            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — The Numbers
            </p>
            <h3
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Good places to work keep <span className="text-black italic">good</span> people.
            </h3>
            <p className="mt-5 text-[14px] leading-[1.7] text-white/85 max-w-[420px]">
              We didn't optimise for hype — we optimised for a team that stays. The numbers below
              reflect that choice.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 border-2 border-black">
            {perks.map((p, i) => (
              <div
                key={p.v}
                className={`py-8 px-6 ${
                  i !== perks.length - 1 ? 'sm:border-r-2 border-black' : ''
                } ${i < 2 ? 'border-b-2 sm:border-b-0 border-black' : ''}`}
              >
                <p
                  className="text-4xl sm:text-5xl font-extrabold text-black leading-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {p.k}
                  <span className="text-[#0276E2]">.</span>
                </p>
                <p
                  className="mt-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {p.v}
                </p>
                <p className="mt-1 text-[11px] text-black/55">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmployeeVoices
