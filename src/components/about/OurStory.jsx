'use client'

import React from 'react'

const OurStory = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT - narrative */}
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Our Story
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Built on <span className="text-[#097CF4] italic">craft</span>, not hype.
            </h2>

            <div className="mt-8 space-y-6 text-[15px] sm:text-[16px] leading-[1.8] text-black/75 max-w-[640px]">
              <p>
                Tech Career IT Solutions LLP was founded in 2025, out of a simple frustration -
                that small and mid-sized Indian businesses kept paying for websites and software
                that looked fine in a demo but fell apart two months after handover.
              </p>
              <p>
                So we set up a small, <span className="text-black font-semibold">founder-led studio at iHub, Ahmedabad</span> - focused on
                the work we love doing: clean websites, reliable e-commerce stores, custom CRM and
                HRMS tools, mobile apps, and the <span className="text-black font-semibold">digital marketing</span> that
                actually brings traffic in.
              </p>
              <p>
                We are new as a company. But we are not new to the craft - which is why our first
                clients get something most agencies stop offering after year three: direct access,
                honest estimates, and a team that finishes what it quotes.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t-2 border-black flex items-center gap-5">
              <span className="w-14 h-14 bg-[#097CF4] text-white flex items-center justify-center text-[14px] font-extrabold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                FP
              </span>
              <div>
                <p
                  className="text-[15px] font-extrabold text-black"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Faizan Pathan
                </p>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Founder · Tech Career IT Solutions LLP
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - quote pull card */}
          <aside className="lg:col-span-5">
            <div className="relative bg-black text-white p-8 lg:p-10 mt-2">
              <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#097CF4]"></span>
              <span
                className="absolute top-4 right-6 text-[140px] lg:text-[180px] leading-none font-black text-[#097CF4]/20 pointer-events-none select-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                &ldquo;
              </span>

              <p
                className="relative text-2xl lg:text-[30px] font-medium leading-[1.35]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                We would rather have ten happy first clients than a hundred half-finished ones.
                Every project right now is a flagship - because right now, every project is ours.
              </p>

              <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  - House Rule #1
                </span>
                <span className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 bg-[#097CF4]"></span>
                  ))}
                </span>
              </div>
            </div>

            {/* Stats beneath quote */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { k: '1:1', v: 'Founder Access' },
                { k: '< 24h', v: 'Reply Time' },
              ].map((s) => (
                <div key={s.v} className="border-2 border-black p-5 bg-white relative">
                  <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#097CF4]"></span>
                  <p
                    className="text-3xl font-extrabold text-black leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.k}
                    <span className="text-[#097CF4]">.</span>
                  </p>
                  <p
                    className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-black/60"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default OurStory