import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '250+', label: 'Projects Delivered' },
  { value: '80+', label: 'Global Clients' },
  { value: '98%', label: 'Client Retention' },
]

const techStack = [
  'React',
  'Node.js',
  'Python',
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  'Next.js',
  'MongoDB',
  'PostgreSQL',
  'TensorFlow',
  'GraphQL',
]

const Banner = () => {
  return (
    <section className="relative bg-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      ></div>

    

    
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 xl:pl-12 py-10 sm:py-16 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT — content */}
          <div className="lg:col-span-7 relative">
            {/* Friendly live chip */}
           
            {/* Headline */}
            <h1
              className="text-[40px] sm:text-[56px] lg:text-[76px] xl:text-[84px] font-extrabold text-black leading-[0.98] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Crafting
              <br />
              <span className="inline-flex items-baseline gap-3 sm:gap-5">
                <span className="text-[#0276E2] italic">Digital</span>
                <span className="hidden sm:inline-block w-12 lg:w-20 h-[3px] bg-black translate-y-[-14px]"></span>
              </span>
              <br />
              Excellence.
            </h1>

            {/* Friendlier subtitle */}
            <p
              className="mt-6 lg:mt-7 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.7] text-black/70"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A senior-only engineering studio helping ambitious teams ship
              <span className="text-black font-semibold"> production-ready software in weeks, not quarters.</span>
            </p>

            {/* Benefit checklist — scannable */}
            <ul
              className="mt-7 space-y-2.5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {[
                'Senior engineers on every project — no juniors.',
                'Fixed scope, fixed quote, no surprise invoices.',
                'ISO 27001 & SOC 2 Type II certified partner.',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[13px] sm:text-[14px] font-semibold text-black">
                  <span className="shrink-0 mt-0.5 w-5 h-5 bg-[#0276E2] text-white flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Primary + Secondary CTA */}
            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#0276E2] transition-colors duration-300"
              >
                Start a Project
                <span className="w-10 h-10 bg-[#0276E2] group-hover:bg-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white group-hover:text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 h-14 px-6 border-2 border-black text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Explore Our Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Quick service chips — user-friendly entry points */}
            <div className="mt-8 pt-6 border-t border-black/10">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50 mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Popular · Jump Straight In
              </p>
              <div
                className="flex flex-wrap gap-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {[
                  { label: 'Web Development', slug: 'web-development' },
                  { label: 'Mobile Apps', slug: 'mobile-apps' },
                  { label: 'Cloud & DevOps', slug: 'cloud-architecture' },
                  { label: 'AI / ML', slug: 'ai-ml' },
                  { label: 'UI / UX', slug: 'ui-ux-design' },
                ].map((c) => (
                  <Link
                    key={c.slug}
                    to={`/services/${c.slug}`}
                    className="group inline-flex items-center gap-1.5 px-3 h-9 border border-black/20 text-[11px] font-bold uppercase tracking-[0.15em] text-black hover:bg-[#0276E2] hover:border-[#0276E2] hover:text-white transition-colors"
                  >
                    {c.label}
                    <svg className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Friendly trust bar — inline */}
            <div className="mt-7 pt-5 border-t border-black/10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#0276E2]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </span>
                <span
                  className="text-[12px] font-bold text-black"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  4.9/5
                </span>
                <span
                  className="text-[11px] text-black/55"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  · 240+ reviews
                </span>
              </div>

              <span className="w-px h-4 bg-black/15 hidden sm:inline"></span>

              {/* Avatars */}
              <div className="flex items-center gap-2">
                <span className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="w-6 h-6 border-2 border-white bg-black flex items-center justify-center text-white font-bold text-[8px]"
                    >
                      {String.fromCharCode(64 + i)}
                    </span>
                  ))}
                  <span className="w-6 h-6 border-2 border-white bg-[#0276E2] flex items-center justify-center text-white font-bold text-[8px]">
                    80+
                  </span>
                </span>
                <span
                  className="text-[12px] font-semibold text-black"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  happy clients
                </span>
              </div>

              <span className="w-px h-4 bg-black/15 hidden sm:inline"></span>

              {/* Countries */}
              <span
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <svg className="w-3.5 h-3.5 text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
                </svg>
                14 countries
              </span>
            </div>
          </div>

          {/* RIGHT — signature impact composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative max-w-[480px] mx-auto lg:max-w-none">
              {/* Blueprint accents */}
              <span className="absolute -z-10 -top-5 -right-5 w-24 h-24 border-2 border-[#0276E2] hidden sm:block"></span>
              <span className="absolute -z-10 -bottom-6 -left-6 w-16 h-16 bg-black hidden sm:block"></span>

              {/* Hero impact card */}
              <div className="relative bg-black text-white p-6 sm:p-8 lg:p-10 border-2 border-black">
                <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2]"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2]"></span>

                {/* Top live row */}
                <div
                  className="flex items-center justify-between mb-6"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inset-0 rounded-full bg-[#0276E2] animate-ping opacity-75"></span>
                      <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#0276E2]"></span>
                    </span>
                    Live · Shipping Production
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                    Est. 2013
                  </span>
                </div>

                {/* Big metric */}
                <p
                  className="text-[84px] sm:text-[108px] lg:text-[140px] font-black leading-[0.85] tracking-tighter"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  250<span className="text-[#0276E2] italic">+</span>
                </p>

                <p
                  className="mt-3 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.3em] text-white"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Enterprise Projects Shipped
                </p>
                <p
                  className="mt-1 text-[12px] text-white/55"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Across 14 countries · 80+ active clients
                </p>

                {/* Mini stats grid */}
                <div className="mt-7 pt-6 border-t border-white/15 grid grid-cols-3 gap-0">
                  {[
                    { k: '12+', v: 'Years' },
                    { k: '98%', v: 'Retention' },
                    { k: '24/7', v: 'Support' },
                  ].map((s, i) => (
                    <div
                      key={s.v}
                      className={`${i !== 2 ? 'border-r border-white/15 pr-3' : 'pl-3'} ${i !== 0 ? 'pl-3' : ''}`}
                    >
                      <p
                        className="text-2xl sm:text-[26px] font-extrabold leading-none"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {s.k}
                        <span className="text-[#0276E2]">.</span>
                      </p>
                      <p
                        className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offset rating + certs card */}
              <div className="relative mt-4 lg:-mt-6 lg:ml-auto lg:mr-[-24px] lg:w-[90%] bg-white border-2 border-black p-5 shadow-[8px_8px_0_0_#0276E2]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3.5 h-3.5 text-[#0276E2]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p
                      className="text-[26px] font-extrabold leading-none text-black"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      4.9<span className="text-black/30">/5</span>
                    </p>
                    <p
                      className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-black/55 font-semibold"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      240+ verified reviews
                    </p>
                  </div>

                  <div
                    className="flex flex-col items-end gap-1.5 shrink-0"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    <span className="px-2.5 py-1 bg-[#0276E2] text-white text-[9px] font-bold uppercase tracking-[0.25em]">
                      ISO 27001
                    </span>
                    <span className="px-2.5 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-[0.25em]">
                      SOC 2 Type II
                    </span>
                    <span className="px-2.5 py-1 border border-black/70 text-black text-[9px] font-bold uppercase tracking-[0.25em]">
                      GDPR Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative border-t-2 border-b-2 border-black bg-white">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-white z-10 [mask-image:linear-gradient(to_right,black_40%,transparent)]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-white z-10 [mask-image:linear-gradient(to_left,black_40%,transparent)]"></div>

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-6 px-8 py-5 text-[13px] font-bold uppercase tracking-[0.3em] text-black/80"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {t}
                <span className="w-1.5 h-1.5 bg-[#0276E2] rounded-full"></span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Banner
