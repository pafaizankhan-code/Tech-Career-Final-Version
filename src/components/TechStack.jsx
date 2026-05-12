'use client'

import React, { useState } from 'react'
import { Link } from '../lib/router-compat'

// ---------- Inline brand-mark SVGs (simplified, no external assets) ----------
const Mark = ({ children, color }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const ICONS = {
  react: (c) => (
    <Mark color={c}>
      <circle cx="16" cy="16" r="2.4" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)" />
    </Mark>
  ),
  next: (c) => (
    <Mark color={c}>
      <circle cx="16" cy="16" r="11" />
      <path d="M11 10v12M11 10l11 14" />
    </Mark>
  ),
  tailwind: (c) => (
    <Mark color={c}>
      <path d="M5 13c2-4 5-4 8-2 2 1.5 3.5 1.5 5.5 0M9 21c2-4 5-4 8-2 2 1.5 3.5 1.5 5.5 0" />
    </Mark>
  ),
  ts: (c) => (
    <Mark color={c}>
      <rect x="4" y="4" width="24" height="24" rx="2" />
      <path d="M10 14h7M13.5 14v9M19 22c.8.8 2 1.2 3.2 1 1.5-.2 2.3-1.1 2.3-2.2 0-2.5-5-1.7-5-4 0-1 .8-1.8 2.2-1.8 1 0 2 .3 2.5.8" />
    </Mark>
  ),
  vue: (c) => (
    <Mark color={c}>
      <path d="M3 6h6l7 12 7-12h6L16 28z" />
      <path d="M11 6l5 8 5-8" />
    </Mark>
  ),
  node: (c) => (
    <Mark color={c}>
      <path d="M16 3l11 6.5v13L16 29 5 22.5v-13z" />
      <path d="M12 19c0 1.5 1 2 2.5 2s2.5-.5 2.5-2v-7M21 13c-.5-1-1.5-1.5-3-1.5s-3 .8-3 2c0 2.5 6 1.5 6 4 0 1.2-1.5 2-3 2s-2.7-.5-3-1.5" />
    </Mark>
  ),
  express: (c) => (
    <Mark color={c}>
      <path d="M3 16h18a5 5 0 00-9.5-2M3 16a9 9 0 0016.5 5" />
    </Mark>
  ),
  python: (c) => (
    <Mark color={c}>
      <path d="M16 3c-4 0-7 1.5-7 5v4h7M9 12H6c-2 0-3 2-3 5s1 5 3 5h3M16 29c4 0 7-1.5 7-5v-4h-7M23 20h3c2 0 3-2 3-5s-1-5-3-5h-3" />
      <circle cx="13" cy="7" r="0.5" fill={c} />
      <circle cx="19" cy="25" r="0.5" fill={c} />
    </Mark>
  ),
  laravel: (c) => (
    <Mark color={c}>
      <path d="M3 9l6-3 6 3v9l6 3 6-3v-9l-6-3M3 9v9l6 3M3 9l6 3 6-3M9 21l6-3 6 3M15 12v9" />
    </Mark>
  ),
  dotnet: (c) => (
    <Mark color={c}>
      <path d="M5 8h4v16M9 8l8 16V8h4M5 26h4M19 26h4" />
    </Mark>
  ),
  rn: (c) => (
    <Mark color={c}>
      <ellipse cx="16" cy="16" rx="11" ry="4.5" />
      <ellipse cx="16" cy="16" rx="11" ry="4.5" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.5" transform="rotate(120 16 16)" />
      <circle cx="16" cy="16" r="1.6" fill={c} />
    </Mark>
  ),
  flutter: (c) => (
    <Mark color={c}>
      <path d="M20 3L7 16l4 4L24 7zM11 20l5 5h7l-8.5-8.5z" />
    </Mark>
  ),
  swift: (c) => (
    <Mark color={c}>
      <path d="M22 5c2 5 3 11 0 17-4 7-12 8-18 5 4 1 9 0 13-3-5-1-9-5-12-9 4 3 8 5 13 5-3-3-6-7-7-12 4 4 8 7 13 8-1-3-3-7-2-11z" />
    </Mark>
  ),
  kotlin: (c) => (
    <Mark color={c}>
      <path d="M5 5h14L5 19V5zM5 19l14-14h8L13 19l14 8H5V19z" />
    </Mark>
  ),
  postgres: (c) => (
    <Mark color={c}>
      <ellipse cx="16" cy="10" rx="11" ry="4" />
      <path d="M5 10v12c0 2.2 5 4 11 4s11-1.8 11-4V10" />
      <path d="M5 16c0 2.2 5 4 11 4s11-1.8 11-4" />
    </Mark>
  ),
  mongo: (c) => (
    <Mark color={c}>
      <path d="M16 3c-2 5-7 8-7 14s3 10 7 12c4-2 7-6 7-12s-5-9-7-14z" />
      <path d="M16 5v24" />
    </Mark>
  ),
  mysql: (c) => (
    <Mark color={c}>
      <ellipse cx="16" cy="9" rx="11" ry="4" />
      <path d="M5 9v14c0 2.2 5 4 11 4s11-1.8 11-4V9" />
      <path d="M20 22l5 5M22 25l3-3" />
    </Mark>
  ),
  redis: (c) => (
    <Mark color={c}>
      <ellipse cx="16" cy="9" rx="11" ry="4" />
      <ellipse cx="16" cy="16" rx="11" ry="4" />
      <ellipse cx="16" cy="23" rx="11" ry="4" />
    </Mark>
  ),
  firebase: (c) => (
    <Mark color={c}>
      <path d="M6 24L13 4l5 9 4-5 4 16zM6 24l16-8 4 8z" />
    </Mark>
  ),
  docker: (c) => (
    <Mark color={c}>
      <rect x="4" y="14" width="4" height="4" />
      <rect x="9" y="14" width="4" height="4" />
      <rect x="14" y="14" width="4" height="4" />
      <rect x="9" y="9" width="4" height="4" />
      <rect x="14" y="9" width="4" height="4" />
      <rect x="14" y="4" width="4" height="4" />
      <path d="M3 19c2 4 7 6 12 6s10-2 13-7c-2 1-5 1-7 0" />
    </Mark>
  ),
  aws: (c) => (
    <Mark color={c}>
      <path d="M5 14c2-4 6-6 11-6s9 2 11 6M5 19c1 5 6 8 11 8s10-3 11-8" />
      <circle cx="11" cy="14" r="1.5" fill={c} />
      <circle cx="21" cy="14" r="1.5" fill={c} />
    </Mark>
  ),
  vercel: (c) => (
    <Mark color={c}>
      <path d="M16 5l13 22H3z" />
    </Mark>
  ),
  github: (c) => (
    <Mark color={c}>
      <path d="M16 3c-7 0-13 6-13 13 0 6 4 11 9 12 .7.1 1-.3 1-.7v-2.5c-3.5.8-4.3-1.7-4.3-1.7-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.8-1.7-2.8-.3-5.7-1.4-5.7-6.3 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.6.1-3.3 0 0 1.1-.3 3.5 1.3 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.4-1.6 3.5-1.3 3.5-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.4 0 4.9-2.9 6-5.7 6.3.5.4.9 1.2.9 2.4v3.6c0 .4.3.8 1 .7 5-1 9-6 9-12 0-7-6-13-13-13z" />
    </Mark>
  ),
  nginx: (c) => (
    <Mark color={c}>
      <path d="M16 3L4 10v12l12 7 12-7V10z" />
      <path d="M11 22V12l10 12V12" />
    </Mark>
  ),
  figma: (c) => (
    <Mark color={c}>
      <path d="M12 4h4a4 4 0 010 8h-4zM16 12h4a4 4 0 010 8h-4zM12 12h4v8a4 4 0 11-4-4 0v-4zM12 4h-4a4 4 0 000 8h4z" />
      <circle cx="20" cy="16" r="4" />
    </Mark>
  ),
  xd: (c) => (
    <Mark color={c}>
      <rect x="4" y="4" width="24" height="24" rx="3" />
      <path d="M11 11l10 10M21 11L11 21" />
    </Mark>
  ),
  ps: (c) => (
    <Mark color={c}>
      <rect x="4" y="4" width="24" height="24" rx="3" />
      <path d="M11 21V11h4a3 3 0 010 6h-4M19 18c.5.8 1.5 1.2 2.5 1.2 1.2 0 2-.6 2-1.4 0-1.8-4-1.2-4-3 0-.8.8-1.4 2-1.4 1 0 1.8.3 2.2.9" />
    </Mark>
  ),
  ai: (c) => (
    <Mark color={c}>
      <rect x="4" y="4" width="24" height="24" rx="3" />
      <path d="M10 22l4-12 4 12M11.5 18h5M22 11v11M22 8.5v.5" />
    </Mark>
  ),
}

// ---------- Stack data ----------
const CATEGORIES = [
  {
    key: 'frontend',
    label: 'Frontend',
    desc: 'Pixel-perfect interfaces that load fast, feel snappy and rank well on Google.',
    items: [
      { name: 'React', use: 'Component-driven UIs', icon: 'react' },
      { name: 'Next.js', use: 'SSR & SEO sites', icon: 'next' },
      { name: 'Vue.js', use: 'Lightweight dashboards', icon: 'vue' },
      { name: 'TypeScript', use: 'Type-safe code', icon: 'ts' },
      { name: 'Tailwind CSS', use: 'Design-system styling', icon: 'tailwind' },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    desc: 'Robust APIs and server logic that scale from your first user to your hundred-thousandth.',
    items: [
      { name: 'Node.js', use: 'Realtime APIs', icon: 'node' },
      { name: 'Express', use: 'REST services', icon: 'express' },
      { name: 'Python / Django', use: 'Data-heavy backends', icon: 'python' },
      { name: 'PHP / Laravel', use: 'Classic CMS & ERP', icon: 'laravel' },
      { name: '.NET', use: 'Enterprise systems', icon: 'dotnet' },
    ],
  },
  {
    key: 'mobile',
    label: 'Mobile',
    desc: 'iOS and Android apps from one codebase — or fully native when performance demands it.',
    items: [
      { name: 'React Native', use: 'Cross-platform apps', icon: 'rn' },
      { name: 'Flutter', use: 'Pixel-perfect apps', icon: 'flutter' },
      { name: 'Swift', use: 'Native iOS', icon: 'swift' },
      { name: 'Kotlin', use: 'Native Android', icon: 'kotlin' },
    ],
  },
  {
    key: 'database',
    label: 'Database',
    desc: 'The right datastore for the job — relational, document, key-value or realtime.',
    items: [
      { name: 'PostgreSQL', use: 'Relational data', icon: 'postgres' },
      { name: 'MongoDB', use: 'Flexible documents', icon: 'mongo' },
      { name: 'MySQL', use: 'CMS & e-commerce', icon: 'mysql' },
      { name: 'Redis', use: 'Cache & queues', icon: 'redis' },
      { name: 'Firebase', use: 'Realtime sync', icon: 'firebase' },
    ],
  },
  {
    key: 'devops',
    label: 'DevOps',
    desc: 'Ship daily, sleep nightly — automated deploys, monitoring and zero-downtime releases.',
    items: [
      { name: 'Docker', use: 'Containerised apps', icon: 'docker' },
      { name: 'AWS', use: 'Cloud infrastructure', icon: 'aws' },
      { name: 'Vercel', use: 'Edge deploys', icon: 'vercel' },
      { name: 'GitHub Actions', use: 'CI / CD pipelines', icon: 'github' },
      { name: 'Nginx', use: 'Reverse proxy', icon: 'nginx' },
    ],
  },
  {
    key: 'design',
    label: 'Design',
    desc: 'Wireframes, prototypes and brand systems crafted before a single line of code is written.',
    items: [
      { name: 'Figma', use: 'UI / UX design', icon: 'figma' },
      { name: 'Adobe XD', use: 'Prototyping', icon: 'xd' },
      { name: 'Photoshop', use: 'Image craft', icon: 'ps' },
      { name: 'Illustrator', use: 'Brand & vector', icon: 'ai' },
    ],
  },
]

const STATS = [
  { value: '6+', label: 'Years Building' },
  { value: '120+', label: 'Projects Shipped' },
  { value: '25+', label: 'Tools Mastered' },
  { value: '99.9%', label: 'Uptime Track Record' },
]

const TechStack = () => {
  const [active, setActive] = useState('frontend')
  const [hovered, setHovered] = useState(null)
  const current = CATEGORIES.find((c) => c.key === active)

  return (
    <section
      id="tech-stack"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      {/* Floating decorative blueprint marks */}
      <span className="hidden lg:block absolute top-24 right-10 w-12 h-12 border-2 border-[#097CF4]/30 rotate-12 pointer-events-none"></span>
      <span className="hidden lg:block absolute bottom-32 left-10 w-8 h-8 bg-[#097CF4]/10 pointer-events-none"></span>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div className="max-w-[760px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Our Tech Stack
              </span>
              <span className="w-10 h-px bg-[#097CF4]"></span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The tools we{' '}
              <span className="text-[#097CF4] italic">trust</span> to build
              great products.
            </h2>

            <p
              className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We pick technology by fit, not by trend. Here is the modern stack
              we use every day to ship websites, apps, dashboards and stores
              that actually perform.
            </p>
          </div>

          <Link
            to="/services"
            className="group self-start lg:self-end inline-flex items-center gap-3 h-12 px-6 border-2 border-black text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            See What We Build
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Main split: category nav + items grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT — Category nav */}
          <aside className="lg:col-span-4">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — Categories
            </div>

            <ul className="border-t border-black/10">
              {CATEGORIES.map((cat, idx) => {
                const isActive = active === cat.key
                return (
                  <li key={cat.key} className="border-b border-black/10">
                    <button
                      onClick={() => setActive(cat.key)}
                      onMouseEnter={() => setActive(cat.key)}
                      className={`group w-full text-left flex items-center justify-between gap-4 py-5 px-1 transition-colors duration-300 ${
                        isActive ? 'text-black' : 'text-black/55 hover:text-black'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      <span className="flex items-center gap-5">
                        <span
                          className={`text-[11px] font-bold tracking-[0.3em] transition-colors duration-300 ${
                            isActive ? 'text-[#097CF4]' : 'text-black/30'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="text-[18px] sm:text-[22px] font-extrabold tracking-tight"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {cat.label}
                        </span>
                      </span>

                      <span
                        className={`flex items-center justify-center w-8 h-8 transition-all duration-300 ${
                          isActive
                            ? 'bg-[#097CF4] text-white translate-x-0 opacity-100'
                            : 'bg-black/5 text-black/40 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </aside>

          {/* RIGHT — Active category panel */}
          <div className="lg:col-span-8">
            {/* Panel header */}
            <div className="border-2 border-black p-6 sm:p-8 mb-6 relative">
              <span className="absolute -top-3 -left-3 w-6 h-6 bg-[#097CF4]"></span>
              <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-black bg-white"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — {current.label} Stack
              </p>
              <h3
                className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-black leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {current.desc}
              </h3>
            </div>

            {/* Item grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-l border-black/10">
              {current.items.map((item, i) => {
                const isHovered = hovered === `${active}-${i}`
                return (
                  <article
                    key={item.name}
                    onMouseEnter={() => setHovered(`${active}-${i}`)}
                    onMouseLeave={() => setHovered(null)}
                    className={`group relative p-5 sm:p-6 border-r border-b border-black/10 transition-colors duration-500 ${
                      isHovered ? 'bg-black text-white' : 'bg-white text-black'
                    }`}
                  >
                    {/* Corner blueprint markers */}
                    <span
                      className={`pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 transition-colors duration-500 ${
                        isHovered ? 'border-[#097CF4]' : 'border-black/15'
                      }`}
                    ></span>
                    <span
                      className={`pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 transition-colors duration-500 ${
                        isHovered ? 'border-[#097CF4]' : 'border-black/15'
                      }`}
                    ></span>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 mb-4 transition-colors duration-500 ${
                        isHovered
                          ? 'border-[#097CF4] bg-[#097CF4]/10'
                          : 'border-black/15 group-hover:border-[#097CF4]'
                      }`}
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8">
                        {ICONS[item.icon] && ICONS[item.icon](isHovered ? '#097CF4' : '#000')}
                      </div>
                    </div>

                    {/* Name */}
                    <h4
                      className="text-[16px] sm:text-[18px] font-extrabold tracking-tight leading-snug"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.name}
                    </h4>

                    {/* Accent underline */}
                    <span
                      className={`block h-[2px] bg-[#097CF4] mt-2 mb-3 transition-all duration-500 ${
                        isHovered ? 'w-12' : 'w-6'
                      }`}
                    ></span>

                    {/* Use case */}
                    <p
                      className={`text-[11px] sm:text-[12px] uppercase tracking-[0.15em] font-medium transition-colors duration-500 ${
                        isHovered ? 'text-white/70' : 'text-black/55'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {item.use}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default TechStack