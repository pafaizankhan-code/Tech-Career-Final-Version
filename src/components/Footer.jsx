'use client'

import React, { useState } from 'react'
import { Link } from '../lib/router-compat'
import footerLogoImg from '../assets/logofotter.png'

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
}

const LinkedinIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const FacebookIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const GithubIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const DribbbleIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
  </svg>
)

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
  { label: 'LinkedIn', Icon: LinkedinIcon, href: 'https://www.linkedin.com' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com' },
  { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com' },
  { label: 'GitHub', Icon: GithubIcon, href: 'https://github.com' },
  { label: 'Dribbble', Icon: DribbbleIcon, href: 'https://dribbble.com' },
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
        <div className="flex-1 bg-[#097CF4]"></div>
        <div className="w-32 bg-white"></div>
        <div className="flex-1 bg-[#097CF4]"></div>
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
                <span className="w-8 h-px bg-[#097CF4]"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                  Tech Career IT Solutions LLP
                </span>
              </div>
              <h3
                className="text-3xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Let's engineer the next <br className="hidden sm:block" />
                <span className="text-[#097CF4] italic">chapter</span> together.
              </h3>
            </div>

            <Link
              to="/contact"
              className="group self-start lg:self-end inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-[#097CF4] text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#097CF4] transition-colors shrink-0"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Start a Project
              <span className="w-10 h-10 bg-white group-hover:bg-[#097CF4] flex items-center justify-center transition-colors">
                <svg
                  className="w-4 h-4 text-[#097CF4] group-hover:text-white"
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
            <Link
              to="/"
              className="inline-flex items-center shrink-0 group"
              aria-label="Tech Career IT Solution LLP · Home"
            >
              <img
                src={footerLogoImg.src}
                alt="Tech Career IT Solution LLP"
                className="h-16 lg:h-[90px]  w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </Link>

            <p className="mt-6 text-[14px] leading-[1.7] text-white/65 max-w-[360px]">
              An enterprise IT partner for ambitious teams — designing, building, and scaling
              software that earns trust from boardroom to production.
            </p>

            {/* Offices */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { city: 'Ahmedabad · HQ', address: '4th Floor, Aarush Plaza, SG Highway, 380015' },
              ].map((o) => (
                <div key={o.city}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#097CF4]"
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
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-5"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="group inline-flex items-center gap-2 text-[13px] text-white/75 hover:text-[#097CF4] transition-colors"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        <span className="w-0 h-px bg-[#097CF4] group-hover:w-3 transition-all"></span>
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
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-5"
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
                className="flex-1 min-w-0 h-12 px-4 bg-white/5 border-2 border-white/20 text-white placeholder:text-white/40 text-[13px] focus:border-[#097CF4] outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 w-12 h-12 bg-[#097CF4] text-white flex items-center justify-center hover:bg-white hover:text-[#097CF4] transition-colors"
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
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/75 hover:text-white hover:bg-[#097CF4] hover:border-[#097CF4] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-white/50">
            <span className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-75"></span>
                <span className="relative inline-flex rounded-full w-2 h-2 bg-[#097CF4]"></span>
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
            TECH <span className="italic text-[#097CF4]/30">CAREER.</span>
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative bg-[#097CF4] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          <p className="font-semibold">
            © {year} Tech Career IT Solutions LLP — All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <Link to="/cookies" className="hover:underline">Cookies</Link>
            <Link to="/sitemap" className="hover:underline">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer