import React from 'react'
import { Link } from 'react-router-dom'

const LegalLayout = ({ breadcrumb, eyebrow, title, intro, lastUpdated, sections }) => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* ─── HERO ──────────────────────────────────────── */}
      <section className="relative bg-white pt-20 lg:pt-28 pb-12 lg:pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        ></div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <nav
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-black/50 mb-10"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <Link to="/" className="hover:text-[#097CF4]">Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">{breadcrumb}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-10 h-px bg-[#097CF4]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                  {eyebrow}
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-[88px] xl:text-[96px] font-extrabold text-black leading-[0.98] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-[#097CF4] italic">{title.split(' ').slice(-1).join('')}</span>
              </h1>

              <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.7] text-black/70 max-w-[720px]">
                {intro}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="relative bg-black text-white p-6 lg:p-7 shadow-[10px_10px_0_0_#097CF4]">
                <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — Last Updated
                </p>
                <p
                  className="text-[24px] font-extrabold leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {lastUpdated}
                </p>
                <p className="mt-4 text-[12px] leading-[1.6] text-white/70">
                  Questions? Reach us at{' '}
                  <a
                    href="mailto:inquiry.techcareer@gmail.com"
                    className="text-[#097CF4] hover:underline font-semibold"
                  >
                    inquiry.techcareer@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ───────────────────────────────────── */}
      <section className="relative bg-white pb-20 lg:pb-28 overflow-hidden">
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Sticky TOC */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-10 h-px bg-[#097CF4]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                  On This Page
                </span>
              </div>
              <ul className="space-y-2 border-l-2 border-black/10 pl-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-start gap-3 py-1.5 text-[12px] font-semibold text-black/70 hover:text-[#097CF4] transition-colors"
                    >
                      <span className="text-[10px] font-bold text-[#097CF4] mt-0.5 w-5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-[1.4]">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Policy body */}
            <article className="lg:col-span-8 space-y-12">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      — {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-black leading-[1.15] tracking-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {s.title}
                    </h2>
                  </div>
                  <div className="space-y-4 text-[15px] leading-[1.75] text-black/75 pl-0 sm:pl-8">
                    {s.body}
                  </div>
                </section>
              ))}
            </article>
          </div>

          {/* CTA strip */}
          <div className="mt-20 lg:mt-28 relative border-2 border-black p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
            <span className="absolute -top-3 -left-3 w-6 h-6 bg-[#097CF4]"></span>
            <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-black bg-white"></span>

            <div className="flex-1">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Need Clarification?
              </p>
              <h4
                className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-black leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Have a question about this policy? <span className="italic text-[#097CF4]">Let's talk.</span>
              </h4>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors shrink-0"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Contact Us
              <span className="w-10 h-10 bg-[#097CF4] group-hover:bg-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white group-hover:text-[#097CF4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LegalLayout
