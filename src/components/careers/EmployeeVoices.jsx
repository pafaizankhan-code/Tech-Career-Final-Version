import React from 'react'

const cards = [
  {
    initials: 'FP',
    accent: 'blue',
    name: 'Faizan Pathan',
    role: 'Founder',
    quote:
      'I am hiring people I would have wanted to work for when I was starting out. That is the whole hiring bar — no jargon, no ego, no fake urgency. If you like building real things for real clients, this is a good place to be.',
  },
  {
    initials: 'We',
    accent: 'black',
    name: 'What To Expect',
    role: 'Week 1',
    quote:
      'In your first week you ship something small to a real project, meet the founder one-on-one, pair-program on an existing codebase, and get walked through how we scope and deliver. No three-month onboarding slide deck.',
  },
  {
    initials: 'We',
    accent: 'blue',
    name: 'Honest Warning',
    role: 'New Studio',
    quote:
      'We are new. You will sometimes be the only designer or the only developer on a project. If that sounds exciting, you will thrive here. If you need a 200-person org to hide inside, this is not it — and that is OK.',
  },
]

const stats = [
  { k: 'iHub', v: 'Ahmedabad Base', sub: 'University Area · 380015' },
  { k: 'Direct', v: 'To the Founder', sub: 'No HR layer · no middle manager' },
  { k: 'Real', v: 'Client Work', sub: 'Day one · no sandbox tasks' },
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
                A Note on Culture
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              An honest pitch <span className="text-[#0276E2] italic">from the founder.</span>
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We have no employees yet — so instead of fake testimonials, here is what the founder,
            your first week, and the tradeoffs actually look like.
          </p>
        </div>

        {/* Founder + expectation cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((v, i) => (
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

              <div className="mb-5">
                <span
                  className="inline-flex items-center px-3 py-1.5 bg-[#0276E2] text-white text-[10px] font-bold uppercase tracking-[0.25em]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {v.role}
                </span>
              </div>

              <p
                className="relative text-[17px] sm:text-[19px] leading-[1.5] font-medium italic min-h-[160px]"
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
                    Tech Career IT Solutions LLP
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Commitment strip */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-[#0276E2] text-white p-6 sm:p-8 relative">
            <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-white"></span>
            <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-white"></span>

            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — What We Commit To
            </p>
            <h3
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Small team. <span className="text-black italic">Clear</span> terms.
            </h3>
            <p className="mt-5 text-[14px] leading-[1.7] text-white/85 max-w-[420px]">
              We won't pretend to be bigger than we are. What we can promise: a fair offer in
              writing, direct access to the founder, and a clean exit policy if it ever turns out
              not to be a fit.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 border-2 border-black">
            {stats.map((p, i) => (
              <div
                key={p.v}
                className={`py-8 px-6 ${
                  i !== stats.length - 1 ? 'sm:border-r-2 border-black' : ''
                } ${i < 2 ? 'border-b-2 sm:border-b-0 border-black' : ''}`}
              >
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-black leading-none"
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
