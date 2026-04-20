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
          {/* LEFT — narrative */}
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Our Story
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Built on <span className="text-[#0276E2] italic">craft</span>, not hype.
            </h2>

            <div className="mt-8 space-y-6 text-[15px] sm:text-[16px] leading-[1.8] text-black/75 max-w-[640px]">
              <p>
                In 2013, two engineers rented a two-desk office in Ahmedabad with one idea — that
                software should be built the way a carpenter builds a cabinet: measured, labeled,
                and finished on all six sides.
              </p>
              <p>
                Twelve years later we are still that workshop at heart — only bigger. Our team of
                senior architects, designers, and engineers has shipped platforms for
                <span className="text-black font-semibold"> fintech unicorns, Fortune 500 logistics</span>,
                and <span className="text-black font-semibold">award-winning healthcare</span> clients across
                14 countries.
              </p>
              <p>
                We still resist the things that rot software — shortcut thinking, silent decisions,
                untested assumptions. And we still finish on all six sides.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t-2 border-black flex items-center gap-5">
              <span className="w-14 h-14 bg-[#0276E2] text-white flex items-center justify-center text-[14px] font-extrabold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                KP
              </span>
              <div>
                <p
                  className="text-[15px] font-extrabold text-black"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Karan Patel
                </p>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Founder & Managing Partner
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — quote pull card */}
          <aside className="lg:col-span-5">
            <div className="relative bg-black text-white p-8 lg:p-10 mt-2">
              <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#0276E2]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#0276E2]"></span>
              <span
                className="absolute top-4 right-6 text-[140px] lg:text-[180px] leading-none font-black text-[#0276E2]/20 pointer-events-none select-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                &ldquo;
              </span>

              <p
                className="relative text-2xl lg:text-[30px] font-medium leading-[1.35]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                We do not measure ourselves by what we ship. We measure ourselves by what still
                works a year after we ship it.
              </p>

              <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — House Rule #1
                </span>
                <span className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 bg-[#0276E2]"></span>
                  ))}
                </span>
              </div>
            </div>

            {/* Stats beneath quote */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { k: '98%', v: 'Client Retention' },
                { k: '24 / 7', v: 'Support SLA' },
              ].map((s) => (
                <div key={s.v} className="border-2 border-black p-5 bg-white relative">
                  <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#0276E2]"></span>
                  <p
                    className="text-3xl font-extrabold text-black leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.k}
                    <span className="text-[#0276E2]">.</span>
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
