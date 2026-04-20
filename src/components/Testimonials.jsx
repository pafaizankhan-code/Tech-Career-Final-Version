import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      'Tech Career did not just deliver a product — they delivered a point of view. Every sprint demo sharpened our thinking, and the final platform is genuinely the cleanest codebase our team has inherited.',
    name: 'Priya Nair',
    role: 'VP Engineering',
    company: 'Nexora Analytics',
    initials: 'PN',
    accent: 'blue',
  },
  {
    id: 2,
    rating: 5,
    quote:
      'We briefed them on a Monday and had a working prototype on the Thursday of the following week. Six weeks later, we were on the App Store at 4.9 stars. Rare to find a partner that moves at founder speed.',
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    company: 'Finlytic Banking',
    initials: 'AM',
    accent: 'black',
  },
  {
    id: 3,
    rating: 5,
    quote:
      'Migrating seven production regions to Kubernetes without a single minute of downtime — and with rollback runbooks we actually trust — is the kind of outcome you plan a year for. They did it in a quarter.',
    name: 'Lena Müller',
    role: 'CTO',
    company: 'Orbital Logistics',
    initials: 'LM',
    accent: 'blue',
  },
  {
    id: 4,
    rating: 5,
    quote:
      'SOC 2 Type II inside a single quarter — without slowing our product roadmap. The audit partner literally asked who wrote our runbooks. Worth every rupee.',
    name: 'Dr. Rahul Iyer',
    role: 'Head of Security',
    company: 'Aegis Healthcare',
    initials: 'RI',
    accent: 'black',
  },
]

const logos = ['NEXORA', 'FINLYTIC', 'ORBITAL', 'SENTIO', 'LINEA', 'AEGIS']

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="testimonials"
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
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Testimonials
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Words from teams we have{' '}
              <span className="text-[#0276E2] italic">stood beside.</span>
            </h2>
          </div>

          <div
            className="flex items-center gap-3 shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <button
              onClick={() => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/60 px-2">
              <span className="text-black">{String(active + 1).padStart(2, '0')}</span>
              <span className="mx-1 text-black/30">/</span>
              {String(testimonials.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => setActive((i) => (i + 1) % testimonials.length)}
              className="w-12 h-12 border-2 border-black bg-black text-white flex items-center justify-center hover:bg-[#0276E2] hover:border-[#0276E2] transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Feature quote */}
          <article
            key={t.id}
            className="relative lg:col-span-8 border-2 border-black bg-white p-8 sm:p-10 lg:p-14 animate-[fadeUp_0.4s_ease_both]"
          >
            <span className="pointer-events-none absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#0276E2]"></span>
            <span className="pointer-events-none absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#0276E2]"></span>
            <span className="pointer-events-none absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#0276E2]"></span>
            <span className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#0276E2]"></span>

            {/* Huge quote mark */}
            <span
              className="absolute top-6 right-8 lg:top-10 lg:right-12 text-[120px] lg:text-[180px] leading-none font-black text-[#0276E2]/10 select-none pointer-events-none"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              &ldquo;
            </span>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#0276E2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
              ))}
              <span
                className="ml-3 text-[10px] font-bold uppercase tracking-[0.3em] text-black/60"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                5.0 · Verified Client
              </span>
            </div>

            <p
              className="relative text-2xl sm:text-3xl lg:text-[38px] font-medium text-black leading-[1.35] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-8 lg:mt-10 pt-6 border-t-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className={`w-14 h-14 flex items-center justify-center text-white text-[15px] font-extrabold border-2 ${
                    t.accent === 'blue' ? 'bg-[#0276E2] border-[#0276E2]' : 'bg-black border-black'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {t.initials}
                </span>
                <div>
                  <p
                    className="text-[17px] font-extrabold text-black leading-tight"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[12px] text-black/60 mt-0.5">
                    {t.role} · <span className="text-[#0276E2] font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 transition-all ${
                      i === active ? 'w-8 bg-[#0276E2]' : 'w-3 bg-black/20 hover:bg-black/40'
                    }`}
                    aria-label={`View testimonial ${i + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </article>

          {/* Side stack — rating card + mini testimonials */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Rating stat card */}
            <div className="bg-black text-white p-6 sm:p-8 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Client Score
              </p>

              <div className="flex items-baseline gap-3">
                <p
                  className="text-[68px] lg:text-[84px] font-extrabold leading-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  4.9
                  <span className="text-[#0276E2]">/</span>
                  <span className="text-white/40">5</span>
                </p>
              </div>

              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#0276E2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p
                className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/60"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Based on 240+ verified reviews <br /> across Clutch · GoodFirms · Google
              </p>
            </div>

            {/* Mini testimonial chips */}
            <div className="border-2 border-black bg-white p-6 flex-1 relative">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Jump To
              </p>

              <ul className="divide-y divide-black/10">
                {testimonials.map((tm, i) => (
                  <li key={tm.id}>
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full text-left py-3 flex items-center gap-3 transition-colors ${
                        i === active ? 'text-[#0276E2]' : 'text-black hover:text-[#0276E2]'
                      }`}
                    >
                      <span
                        className={`shrink-0 w-8 h-8 flex items-center justify-center text-[10px] font-extrabold border-2 ${
                          i === active
                            ? 'bg-[#0276E2] border-[#0276E2] text-white'
                            : 'bg-white border-black text-black'
                        }`}
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {tm.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-[13px] font-bold truncate"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {tm.name}
                        </p>
                        <p className="text-[11px] text-black/50 truncate">{tm.company}</p>
                      </div>
                      {i === active && <span className="w-1.5 h-1.5 rounded-full bg-[#0276E2]"></span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Client logos marquee */}
        <div className="mt-16 lg:mt-20 relative border-t-2 border-b-2 border-black bg-white">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-white z-10 [mask-image:linear-gradient(to_right,black_40%,transparent)]"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-white z-10 [mask-image:linear-gradient(to_left,black_40%,transparent)]"></div>

          <div className="flex overflow-hidden">
            <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap">
              {[...logos, ...logos].map((l, i) => (
                <span
                  key={i}
                  className="flex items-center gap-6 px-8 py-6 text-[15px] sm:text-[18px] font-black tracking-[0.35em] text-black/80"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {l}
                  <span className="w-1.5 h-1.5 bg-[#0276E2] rounded-full"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
