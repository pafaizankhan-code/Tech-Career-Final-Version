import React from 'react'
import { Link } from 'react-router-dom'

const capabilities = [
  'Websites',
  'E-commerce',
  'Mobile Apps',
  'Custom CRM',
  'HRMS',
  'UI / UX',
  'SEO',
  'Social Media',
  'Google Ads',
  'Shopify',
  'WordPress',
  'React',
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
            {/* New-studio chip */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 h-8 border-2 border-black text-black"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-[#0276E2] animate-ping opacity-75"></span>
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#0276E2]"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                New Studio · Open for Projects
              </span>
            </div>

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

            {/* Subtitle */}
            <p
              className="mt-6 lg:mt-7 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.7] text-black/70"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A founder-led studio in Ahmedabad building
              <span className="text-black font-semibold"> websites, e-commerce stores, custom CRM / HRMS and mobile apps </span>
              for ambitious teams — with transparent pricing and direct access to the people writing the code.
            </p>

            {/* Benefit checklist */}
            <ul
              className="mt-7 space-y-2.5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {[
                'Founder-led attention on every project.',
                'Fixed scope, fixed quote — no surprise invoices.',
                'Modern stack · clean code · built to scale.',
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
                to="/services"
                className="group inline-flex items-center gap-3 h-14 px-6 border-2 border-black text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-300"
              >
                See What We Build
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Quick service chips */}
            <div className="mt-8 pt-6 border-t border-black/10">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50 mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                What We Do · Jump Straight In
              </p>
              <div
                className="flex flex-wrap gap-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {[
                  { label: 'Web Development', slug: 'web-development' },
                  { label: 'E-commerce', slug: 'ecommerce' },
                  { label: 'CRM / HRMS', slug: 'custom-software' },
                  { label: 'Mobile Apps', slug: 'mobile-apps' },
                  { label: 'Digital Marketing', slug: 'digital-marketing' },
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

            {/* Honest trust bar */}
            <div className="mt-7 pt-5 border-t border-black/10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {/* Location */}
              <span
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <svg className="w-3.5 h-3.5 text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                iHub · Ahmedabad, India
              </span>

              <span className="w-px h-4 bg-black/15 hidden sm:inline"></span>

              {/* Reply time */}
              <span
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <svg className="w-3.5 h-3.5 text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                </svg>
                Reply within 24 hours
              </span>

              <span className="w-px h-4 bg-black/15 hidden sm:inline"></span>

              {/* Founder-led */}
              <span
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <svg className="w-3.5 h-3.5 text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87m10-4a4 4 0 10-8 0 4 4 0 008 0z" />
                </svg>
                Founder-led team
              </span>
            </div>
          </div>

          {/* RIGHT — honest impact composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative max-w-[480px] mx-auto lg:max-w-none">
              {/* Blueprint accents */}
              <span className="absolute -z-10 -top-5 -right-5 w-24 h-24 border-2 border-[#0276E2] hidden sm:block"></span>
              <span className="absolute -z-10 -bottom-6 -left-6 w-16 h-16 bg-black hidden sm:block"></span>

              {/* Hero card — availability / invitation */}
              <div className="relative bg-black text-white p-6 sm:p-8 lg:p-10 border-2 border-black">
                <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2]"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2]"></span>

                <div
                  className="flex items-center justify-between mb-6"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inset-0 rounded-full bg-[#0276E2] animate-ping opacity-75"></span>
                      <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#0276E2]"></span>
                    </span>
                    Taking New Projects
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                    Ahmedabad · India
                  </span>
                </div>

                {/* Brand stamp */}
                <p
                  className="text-[56px] sm:text-[72px] lg:text-[88px] font-black leading-[0.9] tracking-tighter"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Tech
                  <br />
                  Career<span className="text-[#0276E2] italic">.</span>
                </p>

                <p
                  className="mt-5 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.3em] text-white"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  IT Solutions LLP
                </p>
                <p
                  className="mt-2 text-[12px] text-white/55 max-w-[320px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Web development, e-commerce, custom software & digital marketing — built the way you would if you had the time.
                </p>

                {/* Mini commitments grid */}
                <div className="mt-7 pt-6 border-t border-white/15 grid grid-cols-3 gap-0">
                  {[
                    { k: '100%', v: 'Founder Led' },
                    { k: '24h', v: 'Reply SLA' },
                    { k: '1:1', v: 'Direct Access' },
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

              {/* Offset contact card */}
              <div className="relative mt-4 lg:-mt-6 lg:ml-auto lg:mr-[-24px] lg:w-[90%] bg-white border-2 border-black p-5 shadow-[8px_8px_0_0_#0276E2]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-2"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      — Talk to us
                    </p>
                    <a
                      href="mailto:inquiry.techcareer@gmail.com"
                      className="block text-[15px] font-extrabold text-black hover:text-[#0276E2] transition-colors break-all"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      inquiry.techcareer@gmail.com
                    </a>
                    <a
                      href="tel:+917096608771"
                      className="mt-1 inline-block text-[13px] font-semibold text-black/70 hover:text-[#0276E2]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      +91 70966 08771
                    </a>
                  </div>

                  <div
                    className="flex flex-col items-end gap-1.5 shrink-0"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    <span className="px-2.5 py-1 bg-[#0276E2] text-white text-[9px] font-bold uppercase tracking-[0.25em]">
                      Free Consult
                    </span>
                    <span className="px-2.5 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-[0.25em]">
                      NDA Ready
                    </span>
                    <span className="px-2.5 py-1 border border-black/70 text-black text-[9px] font-bold uppercase tracking-[0.25em]">
                      GST Invoice
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capability marquee */}
      <div className="relative border-t-2 border-b-2 border-black bg-white">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-white z-10 [mask-image:linear-gradient(to_right,black_40%,transparent)]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-white z-10 [mask-image:linear-gradient(to_left,black_40%,transparent)]"></div>

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...capabilities, ...capabilities].map((t, i) => (
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
