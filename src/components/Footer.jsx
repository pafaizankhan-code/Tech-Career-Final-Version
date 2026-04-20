import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: '/services' },
      { label: 'Mobile Apps', to: '/services' },
      { label: 'Custom Software', to: '/services' },
      { label: 'Cloud & DevOps', to: '/services' },
      { label: 'AI / ML Solutions', to: '/services' },
      { label: 'Cybersecurity', to: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Work', to: '/portfolio' },
      { label: 'Careers', to: '/careers' },
      { label: 'Process', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Press Kit', to: '/about' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog & Insights', to: '/' },
      { label: 'Case Studies', to: '/portfolio' },
      { label: 'Whitepapers', to: '/' },
      { label: 'Developer Hub', to: '/' },
      { label: 'Support Centre', to: '/contact' },
      { label: 'Status', to: '/' },
    ],
  },
]

const socials = [
  { label: 'LinkedIn', short: 'in' },
  { label: 'Twitter', short: 'X' },
  { label: 'Facebook', short: 'f' },
  { label: 'Instagram', short: 'ig' },
  { label: 'GitHub', short: 'gh' },
  { label: 'Dribbble', short: 'db' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative bg-black text-white overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      {/* Top accent strip */}
      <div className="relative h-[4px] flex">
        <div className="flex-1 bg-[#0276E2]"></div>
        <div className="w-32 bg-white"></div>
        <div className="flex-1 bg-[#0276E2]"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-8">
        {/* Big signature headline */}
        <div className="pb-12 lg:pb-16 border-b border-white/15">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div
                className="inline-flex items-center gap-3 mb-5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-8 h-px bg-[#0276E2]"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                  Tech Career IT Solutions LLP
                </span>
              </div>
              <h3
                className="text-3xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Let's engineer the next <br className="hidden sm:block" />
                <span className="text-[#0276E2] italic">chapter</span> together.
              </h3>
            </div>

            <Link
              to="/contact"
              className="group self-start lg:self-end inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-[#0276E2] text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#0276E2] transition-colors shrink-0"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Start a Project
              <span className="w-10 h-10 bg-white group-hover:bg-[#0276E2] flex items-center justify-center transition-colors">
                <svg
                  className="w-4 h-4 text-[#0276E2] group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-white flex items-center justify-center relative overflow-hidden">
                  <span
                    className="text-black font-black text-xl tracking-tighter relative z-10"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    TC
                  </span>
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-[#0276E2]"></span>
                  <span className="absolute bottom-0 right-0 w-[3px] h-full bg-[#0276E2]"></span>
                </div>
                <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#0276E2]"></span>
              </div>
              <div className="leading-none">
                <h1
                  className="text-white text-[18px] font-extrabold tracking-tight leading-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Tech <span className="text-[#0276E2] italic">Career</span>
                </h1>
                <p
                  className="text-[9px] text-white/60 font-semibold tracking-[0.3em] uppercase mt-1.5"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  IT Solutions LLP
                </p>
              </div>
            </Link>

            <p className="mt-6 text-[14px] leading-[1.7] text-white/65 max-w-[360px]">
              An enterprise IT partner for ambitious teams — designing, building, and scaling
              software that earns trust from boardroom to production.
            </p>

            {/* Offices */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { city: 'Ahmedabad · HQ', address: '4th Floor, Aarush Plaza, SG Highway, 380015' },
                { city: 'Bengaluru', address: 'WeWork Prestige, Cunningham Road, 560052' },
              ].map((o) => (
                <div key={o.city}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0276E2]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    — {o.city}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-white/60">{o.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <nav key={col.title}>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-5"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="group inline-flex items-center gap-2 text-[13px] text-white/75 hover:text-[#0276E2] transition-colors"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        <span className="w-0 h-px bg-[#0276E2] group-hover:w-3 transition-all"></span>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Newsletter
            </p>
            <h4
              className="text-[22px] font-extrabold text-white leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Field notes from the engineering floor.
            </h4>
            <p className="mt-3 text-[12px] leading-[1.6] text-white/60">
              One short essay a month on building reliable software. No fluff, no sales.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 min-w-0 h-12 px-4 bg-white/5 border-2 border-white/20 text-white placeholder:text-white/40 text-[13px] focus:border-[#0276E2] outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 w-12 h-12 bg-[#0276E2] text-white flex items-center justify-center hover:bg-white hover:text-[#0276E2] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>

            {/* Certifications */}
            <div className="mt-8 pt-6 border-t border-white/15">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {['ISO 27001', 'SOC 2', 'AWS Partner', 'Google Cloud'].map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 border border-white/20 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Socials strip */}
        <div className="py-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Follow Us
            </span>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-[10px] font-bold hover:bg-[#0276E2] hover:border-[#0276E2] transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {s.short.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-white/50">
            <span className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#0276E2] animate-ping opacity-75"></span>
                <span className="relative inline-flex rounded-full w-2 h-2 bg-[#0276E2]"></span>
              </span>
              All Systems Operational
            </span>
            <span className="w-px h-3 bg-white/20"></span>
            <span>v 4.2.1</span>
          </div>
        </div>
      </div>

      {/* Mega wordmark */}
      <div className="relative border-t border-white/15 overflow-hidden select-none">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-6">
          <p
            className="text-[60px] sm:text-[110px] md:text-[160px] lg:text-[200px] font-black leading-none tracking-[-0.04em] text-white/[0.06] whitespace-nowrap"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            TECH <span className="italic text-[#0276E2]/30">CAREER.</span>
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative bg-[#0276E2] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          <p className="font-semibold">
            © {year} Tech Career IT Solutions LLP — All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/" className="hover:underline">Privacy</Link>
            <Link to="/" className="hover:underline">Terms</Link>
            <Link to="/" className="hover:underline">Cookies</Link>
            <Link to="/" className="hover:underline">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
