import React, { useState, useEffect, useRef, useMemo } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.jpg'

const categoryIcons = {
  dev: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l-4 8 4 8M16 4l4 8-4 8M14 3l-4 18" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a4 4 0 01-.88-7.9 5 5 0 019.9-1.06A4.5 4.5 0 1118 18H7z" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 110-20 10 10 0 016 18c-2 2-6 0-4-2s-1-4-2-4z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M14 7h7v7" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
}

// ── SERVICES MEGA MENU DATA (synced with src/data/services.js) ────────────────
const serviceCategories = [
  {
    key: 'development',
    group: 'Development',
    blurb: 'Websites, online stores and apps — built the way you would if you had the time.',
    icon: categoryIcons.dev,
    items: [
      { title: 'Web Development', desc: 'Business websites & web apps.', slug: 'web-development' },
      { title: 'E-commerce Stores', desc: 'Shopify & custom online stores.', slug: 'ecommerce' },
      { title: 'Mobile Applications', desc: 'iOS + Android cross-platform.', slug: 'mobile-apps' },
    ],
  },
  {
    key: 'custom-software',
    group: 'Custom Software',
    blurb: 'CRM, HRMS and internal tools shaped around how your team actually works.',
    icon: categoryIcons.cloud,
    items: [
      { title: 'Custom CRM & Tools', desc: 'CRM, dashboards & admin panels.', slug: 'custom-software' },
      { title: 'HRMS & Admin Portals', desc: 'Attendance, payroll, HR portals.', slug: 'hrms' },
    ],
  },
  {
    key: 'design',
    group: 'Design & Brand',
    blurb: 'UI / UX and brand identity that makes your product feel premium.',
    icon: categoryIcons.palette,
    items: [
      { title: 'UI / UX Design', desc: 'Wireframes, prototypes & UI.', slug: 'ui-ux-design' },
      { title: 'Brand & Logo Design', desc: 'Logos, identity & guidelines.', slug: 'brand-identity' },
    ],
  },
  {
    key: 'growth',
    group: 'Digital Marketing',
    blurb: 'SEO, Google Ads, Meta Ads and social — measurable monthly marketing.',
    icon: categoryIcons.trend,
    items: [
      { title: 'SEO & Organic Growth', desc: 'Technical SEO + content.', slug: 'digital-marketing' },
      { title: 'Google & Meta Ads', desc: 'Paid ads that pay back.', slug: 'paid-ads' },
      { title: 'Social Media Management', desc: 'Instagram · Facebook · LinkedIn.', slug: 'social-media' },
    ],
  },
  {
    key: 'care',
    group: 'Support & Care',
    blurb: 'Post-launch care — bug fixes, updates and growth work on a simple retainer.',
    icon: categoryIcons.care,
    items: [
      { title: 'Post-Launch Care', desc: 'Monthly retainer for updates.', slug: 'care-retainer' },
    ],
  },
]

// ── PRODUCTS MEGA MENU DATA ───────────────────────────────────────────────────
const products = [
  {
    key: 'learning-craft',
    name: 'Learning Craft',
    tagline: 'Learning Management Software Solution',
    category: 'Education Technology',
    period: '11 / 2024 – Present',
    description:
      'A comprehensive Learning Management System with role-based architecture supporting Students, Instructors and Super Admins. Features interactive learning experiences, course management, and performance analytics.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Socket.io'],
    features: [
      'Role-Based Access Control',
      'Interactive Course Management',
      'Real-time Progress Tracking',
    ],
    preview: 'lms',
    slug: 'learning-craft',
  },
  {
    key: 'medcare-hospital',
    name: 'Medcare Hospital',
    tagline: 'Hospital Management Software Solution',
    category: 'Healthcare',
    period: '05 / 2025 – Present',
    description:
      'A comprehensive hospital management system designed to streamline operations and improve patient care. Supports Doctors, Nurses, Admins and Laboratory staff with real-time dashboards, appointments, billing and emergency handling.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js', 'JWT'],
    features: [
      'Interactive Admin & Doctor Dashboards',
      'Patient & Inpatient Management',
      'Appointment Scheduling System',
    ],
    preview: 'hospital',
    slug: 'medcare-hospital',
  },
  {
    key: 'grocify',
    name: 'GROCIFY',
    tagline: 'Grocery Management Software Solution',
    category: 'Retail · POS',
    period: '2025',
    description:
      'A full-featured Grocery Management System tailored for supermarkets and retail chains. Supports product management, inventory tracking, sales & POS, order and supplier handling — with detailed reports and role-based access.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Redux Toolkit', 'Chart.js'],
    features: [
      'Centralized Dashboard Overview',
      'Product & Category Management',
      'Real-time Inventory Tracking',
    ],
    preview: 'grocery',
    slug: 'grocify',
  },
]

// Visual mockups for the product mega menu
const ProductVisual = ({ type }) => {
  if (type === 'lms') {
    return (
      <div className="relative w-full h-full bg-[#097CF4] overflow-hidden">
        <div className="absolute inset-4 bg-white border-2 border-black flex flex-col">
          <div className="flex items-center gap-1 px-3 py-2 border-b-2 border-black">
            <span className="w-2 h-2 rounded-full bg-black/30"></span>
            <span className="w-2 h-2 rounded-full bg-black/30"></span>
            <span className="w-2 h-2 rounded-full bg-[#097CF4]"></span>
            <span className="ml-2 text-[8px] font-bold tracking-widest text-black/50 uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              learningcraft.io
            </span>
          </div>
          <div className="flex-1 p-3 grid grid-cols-4 gap-2 min-h-0">
            <div className="col-span-1 bg-black/[0.04] p-2 space-y-1.5">
              <div className="h-1.5 w-3/4 bg-black"></div>
              <div className="h-1 w-4/5 bg-[#097CF4]"></div>
              <div className="h-1 w-3/5 bg-black/30"></div>
              <div className="h-1 w-4/5 bg-black/30"></div>
              <div className="h-1 w-2/3 bg-black/30"></div>
            </div>
            <div className="col-span-3 space-y-2">
              <div className="h-1.5 w-1/2 bg-black"></div>
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="border-2 border-black p-1.5 bg-white">
                    <div className={`h-5 ${i === 1 ? 'bg-[#097CF4]' : 'bg-black/80'} mb-1`}></div>
                    <div className="h-1 w-2/3 bg-black/60"></div>
                    <div className="h-1 w-1/2 bg-[#097CF4] mt-1"></div>
                  </div>
                ))}
              </div>
              <div className="border-2 border-black p-2">
                <div className="h-1 w-1/3 bg-black/60 mb-1.5"></div>
                <div className="h-2 bg-black/10 relative">
                  <div className="absolute left-0 top-0 h-full bg-[#097CF4]" style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'hospital') {
    return (
      <div className="relative w-full h-full bg-black overflow-hidden">
        <div className="absolute inset-4 bg-white border-2 border-white flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b-2 border-black">
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 bg-[#097CF4] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" d="M12 6v12M6 12h12" />
                </svg>
              </span>
              <span className="text-[8px] font-bold tracking-widest text-black uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Medcare
              </span>
            </div>
            <span className="text-[7px] font-bold tracking-widest text-[#097CF4] uppercase">Live</span>
          </div>
          <div className="flex-1 p-3 grid grid-cols-3 gap-2 min-h-0">
            <div className="space-y-2">
              {['Patients', 'Appts', 'Billing'].map((l, i) => (
                <div key={l} className="border-2 border-black p-1.5">
                  <div className="text-[7px] font-bold tracking-widest text-black/50 uppercase mb-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {l}
                  </div>
                  <div className={`text-[11px] font-black ${i === 0 ? 'text-[#097CF4]' : 'text-black'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                    {[412, 87, '₹2.1L'][i]}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 space-y-2">
              <div className="border-2 border-black p-2 h-full flex flex-col">
                <div className="text-[7px] font-bold tracking-widest text-black/50 uppercase mb-1.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Today's Queue
                </div>
                <div className="space-y-1 flex-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 ${i === 0 ? 'bg-[#097CF4]' : i === 1 ? 'bg-black' : 'bg-black/40'}`}></span>
                      <span className="flex-1 h-1 bg-black/30"></span>
                      <span className="h-1 w-6 bg-black/60"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'grocery') {
    return (
      <div className="relative w-full h-full bg-[#097CF4] overflow-hidden">
        <div className="absolute inset-4 bg-white border-2 border-black flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b-2 border-black">
            <span className="text-[9px] font-black tracking-widest text-black uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              GROCIFY<span className="text-[#097CF4]">.</span>
            </span>
            <div className="flex gap-1">
              <span className="h-3 w-6 bg-[#097CF4]"></span>
              <span className="h-3 w-6 bg-black"></span>
            </div>
          </div>
          <div className="flex-1 p-3 grid grid-cols-4 gap-1.5 min-h-0">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="border-2 border-black p-1 bg-white">
                <div className={`h-6 ${i % 3 === 0 ? 'bg-[#097CF4]/20' : i % 3 === 1 ? 'bg-black/10' : 'bg-[#097CF4]/10'} border border-black/20`}></div>
                <div className="mt-0.5 h-1 w-3/4 bg-black/60"></div>
                <div className="mt-0.5 flex items-center justify-between">
                  <span className="h-1 w-3 bg-black"></span>
                  <span className="h-2 w-3 bg-[#097CF4]"></span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-3 py-1.5 border-t-2 border-black flex items-center justify-between">
            <span className="text-[7px] font-bold tracking-widest text-black/60 uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Cart · 4 items
            </span>
            <span className="h-2.5 w-10 bg-[#097CF4]"></span>
          </div>
        </div>
      </div>
    )
  }

  return <div className="w-full h-full bg-[#097CF4]"></div>
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', mega: serviceCategories, megaType: 'services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const searchIndex = [
  { title: 'Web Development', tag: 'Service', to: '/services/web-development' },
  { title: 'E-commerce Stores', tag: 'Service', to: '/services/ecommerce' },
  { title: 'Mobile App Development', tag: 'Service', to: '/services/mobile-apps' },
  { title: 'Custom CRM & Tools', tag: 'Service', to: '/services/custom-software' },
  { title: 'HRMS & Admin Portals', tag: 'Service', to: '/services/hrms' },
  { title: 'UI / UX Design', tag: 'Service', to: '/services/ui-ux-design' },
  { title: 'Brand & Logo Design', tag: 'Service', to: '/services/brand-identity' },
  { title: 'SEO & Organic Growth', tag: 'Service', to: '/services/digital-marketing' },
  { title: 'Google & Meta Ads', tag: 'Service', to: '/services/paid-ads' },
  { title: 'Social Media Management', tag: 'Service', to: '/services/social-media' },
  { title: 'Post-Launch Care', tag: 'Service', to: '/services/care-retainer' },
  { title: 'Learning Craft', tag: 'Product', to: '/portfolio' },
  { title: 'Medcare Hospital', tag: 'Product', to: '/portfolio' },
  { title: 'GROCIFY', tag: 'Product', to: '/portfolio' },
  { title: 'About Us', tag: 'Page', to: '/about' },
  { title: 'Our Portfolio', tag: 'Page', to: '/portfolio' },
  { title: 'Careers & Hiring', tag: 'Page', to: '/careers' },
  { title: 'Contact Us', tag: 'Page', to: '/contact' },
]

const popularSearches = [
  'Website',
  'E-commerce',
  'Mobile App',
  'Custom CRM',
  'HRMS',
  'SEO',
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [time, setTime] = useState('')
  const [megaOpen, setMegaOpen] = useState(false)
  const [megaCategory, setMegaCategory] = useState(0)
  const [activeProduct, setActiveProduct] = useState(0)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const searchInputRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const activeMegaLink = useMemo(
    () => navLinks.find((l) => l.label === megaOpen && l.mega),
    [megaOpen]
  )

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const top = window.scrollY
      setScrolled(top > 20)
      const total = h.scrollHeight - h.clientHeight
      setProgress(total > 0 ? (top / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime(
        d.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        })
      )
    }
    tick()
    const i = setInterval(tick, 30000)
    return () => clearInterval(i)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
    setSearchOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, searchOpen])

  useEffect(() => {
    setMegaCategory(0)
    setActiveProduct(0)
  }, [megaOpen])

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50)
      setQuery('')
      setActiveIdx(0)
    }
  }, [searchOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setMenuOpen(false)
        setMegaOpen(false)
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return searchIndex
      .filter((r) => r.title.toLowerCase().includes(q) || r.tag.toLowerCase().includes(q))
      .slice(0, 8)
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (results.length > 0) {
      navigate(results[activeIdx]?.to || results[0].to)
      setSearchOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    if (!results.length) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx((i) => (i + 1) % results.length)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx((i) => (i - 1 + results.length) % results.length)
    }
  }

  const highlight = (text) => {
    const q = query.trim()
    if (!q) return text
    const i = text.toLowerCase().indexOf(q.toLowerCase())
    if (i === -1) return text
    return (
      <>
        {text.slice(0, i)}
        <span className="bg-[#097CF4]/15 text-[#097CF4] font-bold">{text.slice(i, i + q.length)}</span>
        {text.slice(i + q.length)}
      </>
    )
  }

  return (
    <>
    {/* Mega-menu backdrop — dims the page but stays BELOW the header */}
    <div
      className={`hidden lg:block fixed left-0 right-0 bottom-0 z-40 bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 ${
        activeMegaLink ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ top: '130px' }}
      onClick={() => setMegaOpen(false)}
      aria-hidden="true"
    />

    <header className="sticky top-0 z-50 w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Top utility bar */}
      <div className="hidden md:block bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-9 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-75"></span>
                <span className="relative inline-flex rounded-full w-2 h-2 bg-[#097CF4]"></span>
              </span>
              <span className="font-semibold">Open for First Projects · 2026</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-2 text-white/60">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M12 22a10 10 0 110-20 10 10 0 010 20z" />
              </svg>
              IST {time}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:inquiry.techcareer@gmail.com" className="hover:text-[#097CF4] transition-colors hidden lg:inline">
              inquiry.techcareer@gmail.com
            </a>
            <span className="hidden lg:inline w-px h-3 bg-white/20"></span>
            <a href="tel:+917096608771" className="hover:text-[#097CF4] transition-colors">
              +91 70966 08771
            </a>
            <span className="w-px h-3 bg-white/20"></span>
            <div className="flex items-center gap-4 text-[10px]">
              <a href="https://www.instagram.com/techcareer.llp" className="hover:text-[#097CF4] transition-colors">
                IG
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`relative bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border-b border-black/10'
            : 'border-b border-black/5'
        }`}
      >
       

        <div className="max-w-[1440px] mx-auto px-3 lg:px-10 flex items-center justify-between h-[76px] lg:h-[92px]">
          {/* Logo — official brand image */}
          <Link
            to="/"
            className="flex items-center shrink-0 group"
            onClick={() => setMegaOpen(false)}
            aria-label="Tech Career IT Solution LLP · Home"
          >
            <img
              src={logoImg}
              alt="Tech Career IT Solution LLP"
              className="h-11 lg:h-[60px] w-auto object-contain transition-transform duration-500 "
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={(e) => {
                    if (link.mega) {
                      e.preventDefault()
                      setMegaOpen(megaOpen === link.label ? false : link.label)
                    } else {
                      setMegaOpen(false)
                    }
                  }}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-1.5 px-3 xl:px-4 h-[92px] text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors cursor-pointer ${
                      isActive || megaOpen === link.label ? 'text-[#097CF4]' : 'text-black hover:text-[#097CF4]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {link.mega && (
                        <svg
                          className={`w-2.5 h-2.5 transition-transform duration-300 ${
                            megaOpen === link.label ? 'rotate-180' : ''
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                        </svg>
                      )}
                      <span
                        className={`absolute left-3 xl:left-4 right-3 xl:right-4 bottom-0 h-[3px] bg-[#097CF4] transition-all duration-500 origin-left ${
                          isActive || megaOpen === link.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="inline-flex w-11 h-11 lg:w-12 lg:h-12 items-center justify-center text-black hover:text-[#097CF4] border border-black/10 hover:border-[#097CF4] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m20 20-3.5-3.5" />
              </svg>
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-3 h-11 lg:h-12 pl-5 lg:pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors duration-300 group"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Start a Project
              <span className="w-8 h-8 lg:w-9 lg:h-9 bg-[#097CF4] group-hover:bg-white flex items-center justify-center transition-colors">
                <svg
                  className="w-3.5 h-3.5 text-white group-hover:text-[#097CF4] transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center gap-2 h-11 sm:h-12 px-3 sm:px-4 bg-black text-white"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <div className="flex flex-col gap-[4px]">
                <span
                  className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                    menuOpen ? 'translate-y-[6px] rotate-45' : ''
                  }`}
                ></span>
                <span
                  className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                    menuOpen ? '-translate-y-[6px] -rotate-45' : ''
                  }`}
                ></span>
              </div>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em] hidden sm:inline"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {menuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>

        <div className="relative h-[2px] bg-black/10">
          <div
            className="absolute left-0 top-0 h-full bg-[#097CF4] transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Full-width MEGA MENU — redesigned, lighter, premium */}
        <div
          className={`hidden lg:block absolute left-0 right-0 top-full z-20 bg-white border-t border-black/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 origin-top ${
            activeMegaLink
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          {/* Thin accent bar on top */}
          <span className="block h-[2px] bg-gradient-to-r from-[#097CF4] via-black to-[#097CF4]"></span>

          {/* ── SERVICES MEGA MENU ─────────────────────────── */}
          {activeMegaLink && activeMegaLink.megaType === 'services' && (
            <div className="relative bg-white">
              {/* Subtle dot background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              ></div>

              <div className="relative max-w-[1440px] mx-auto grid grid-cols-12 gap-0">
                {/* LEFT — practice list */}
                <aside className="col-span-3 py-8 pl-10 pr-4 border-r border-black/10">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#097CF4]/10 text-[#097CF4] text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-60"></span>
                      <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#097CF4]"></span>
                    </span>
                    Explore Services
                  </div>

                  <h3
                    className="text-[24px] font-extrabold leading-[1.1] text-black mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    What would you <br />
                    like to <span className="italic text-[#097CF4]">build?</span>
                  </h3>

                  <ul className="space-y-1">
                    {activeMegaLink.mega.map((cat, ci) => {
                      const isActive = megaCategory === ci
                      return (
                        <li key={cat.group}>
                          <button
                            type="button"
                            onMouseEnter={() => setMegaCategory(ci)}
                            onClick={() => setMegaCategory(ci)}
                            className={`group w-full text-left flex items-center gap-3 pl-3 pr-2 py-3 rounded-[2px] transition-all cursor-pointer relative ${
                              isActive
                                ? 'bg-[#097CF4]/[0.06] text-[#097CF4]'
                                : 'text-black/75 hover:bg-black/[0.03] hover:text-black'
                            }`}
                          >
                            {isActive && (
                              <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#097CF4]"></span>
                            )}
                            <span
                              className={`w-9 h-9 flex items-center justify-center shrink-0 transition-colors rounded-[2px] ${
                                isActive
                                  ? 'bg-[#097CF4] text-white'
                                  : 'bg-black/[0.04] text-black/60 group-hover:bg-[#097CF4]/10 group-hover:text-[#097CF4]'
                              }`}
                            >
                              <div className="w-4 h-4">{cat.icon}</div>
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-bold leading-tight">
                                {cat.group}
                              </p>
                              <p className={`text-[10px] mt-0.5 font-medium truncate ${isActive ? 'text-[#097CF4]/70' : 'text-black/40'}`}>
                                {cat.items.length} offering{cat.items.length > 1 ? 's' : ''}
                              </p>
                            </div>
                            <svg
                              className={`w-3.5 h-3.5 shrink-0 transition-all ${
                                isActive ? 'text-[#097CF4] opacity-100' : 'text-black/30 opacity-0 group-hover:opacity-100'
                              }`}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </li>
                      )
                    })}
                  </ul>

                  <Link
                    to="/services"
                    className="group mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:text-[#097CF4] transition-colors pl-3"
                  >
                    View All Services
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </aside>

                {/* MIDDLE — service cards */}
                <div className="col-span-6 py-8 px-8">
                  <div className="mb-6 flex items-end justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-1.5">
                        {activeMegaLink.mega[megaCategory].group}
                      </p>
                      <h4
                        className="text-[22px] font-extrabold leading-tight text-black"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {activeMegaLink.mega[megaCategory].blurb}
                      </h4>
                    </div>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                      0{megaCategory + 1} / 0{activeMegaLink.mega.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {activeMegaLink.mega[megaCategory].items.map((it, ii) => (
                      <Link
                        key={it.title}
                        to={it.slug ? `/services/${it.slug}` : '/services'}
                        className="group/item relative p-5 bg-white border border-black/10 hover:border-[#097CF4] hover:shadow-[0_12px_30px_-10px_rgba(2,118,226,0.25)] transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-10 h-10 flex items-center justify-center bg-black/[0.04] text-black/70 group-hover/item:bg-[#097CF4] group-hover/item:text-white transition-colors shrink-0">
                            <div className="w-5 h-5">{activeMegaLink.mega[megaCategory].icon}</div>
                          </span>
                          <div className="min-w-0 flex-1">
                            <h5
                              className="text-[15px] font-extrabold leading-tight text-black group-hover/item:text-[#097CF4] transition-colors"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              {it.title}
                            </h5>
                            <p
                              className="mt-1.5 text-[12px] leading-[1.55] text-black/55"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {it.desc}
                            </p>
                          </div>
                        </div>
                        <span className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center text-black/30 group-hover/item:text-[#097CF4] transition-all opacity-0 group-hover/item:opacity-100">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* RIGHT — spotlight / CTA */}
                <aside className="col-span-3 relative bg-gradient-to-br from-black via-black to-[#0a1a2e] text-white py-8 px-8 overflow-hidden">
                  {/* Decorative accent */}
                  <span className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#097CF4]/20 blur-3xl pointer-events-none"></span>
                  <span className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-[#097CF4]/10 blur-3xl pointer-events-none"></span>

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#097CF4]/15 text-[#097CF4] text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
                      — Founder-Led
                    </div>

                    <h4
                      className="text-[26px] font-extrabold leading-[1.1] mb-3"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Not sure which <span className="italic text-[#097CF4]">service</span> fits?
                    </h4>

                    <p className="text-[13px] leading-[1.65] text-white/70 mb-6">
                      Tell us the problem — one of the founders will scope the right thing on a free 30-minute call. No sales pressure, just an honest quote.
                    </p>

                    <Link
                      to="/contact"
                      className="group/cta w-full inline-flex items-center justify-between gap-3 h-12 pl-4 pr-2 bg-[#097CF4] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#097CF4] transition-colors"
                    >
                      Book a Free Call
                      <span className="w-9 h-9 bg-white group-hover/cta:bg-[#097CF4] flex items-center justify-center transition-colors">
                        <svg
                          className="w-3.5 h-3.5 text-[#097CF4] group-hover/cta:text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </span>
                    </Link>

                    <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-[11px]">
                      <a
                        href="mailto:inquiry.techcareer@gmail.com"
                        className="flex items-center gap-3 text-white/80 hover:text-[#097CF4] transition-colors break-all"
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-white/5 shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
                          </svg>
                        </span>
                        <span className="font-semibold text-[11px]">inquiry.techcareer@gmail.com</span>
                      </a>
                      <a
                        href="tel:+917096608771"
                        className="flex items-center gap-3 text-white/80 hover:text-[#097CF4] transition-colors"
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-white/5 shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.9 1.37l.9 2.69a2 2 0 01-.45 2L8.5 10.5a11 11 0 005 5l1.44-1.13a2 2 0 012-.45l2.69.9A2 2 0 0121 16.72V19a2 2 0 01-2 2A16 16 0 013 5z" />
                          </svg>
                        </span>
                        <span className="font-semibold text-[12px]">+91 70966 08771</span>
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          )}

          {/* ── PRODUCTS MEGA MENU ─────────────────────────── */}
          {activeMegaLink && activeMegaLink.megaType === 'products' && (
            <div className="relative bg-white">
              {/* Subtle grid background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.035]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              ></div>

              <div className="relative max-w-[1440px] mx-auto grid grid-cols-12 gap-0">
                {/* LEFT — product tabs */}
                <aside className="col-span-4 py-8 pl-10 pr-6 border-r border-black/10">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#097CF4]/10 text-[#097CF4] text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
                    <span className="w-1.5 h-1.5 bg-[#097CF4]"></span>
                    Our Products
                  </div>

                  <h3
                    className="text-[24px] font-extrabold leading-[1.1] text-black mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Software we <br />
                    have <span className="italic text-[#097CF4]">already built.</span>
                  </h3>

                  <ul className="space-y-3">
                    {products.map((p, pi) => {
                      const isActive = activeProduct === pi
                      return (
                        <li key={p.key}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveProduct(pi)}
                            onClick={() => setActiveProduct(pi)}
                            className={`group w-full text-left flex items-center gap-4 p-3 transition-all cursor-pointer border relative ${
                              isActive
                                ? 'border-[#097CF4] bg-[#097CF4]/[0.04] shadow-[0_8px_24px_-12px_rgba(2,118,226,0.35)]'
                                : 'border-black/10 bg-white hover:border-black/30'
                            }`}
                          >
                            <span
                              className={`w-12 h-12 flex items-center justify-center font-black text-[14px] shrink-0 transition-colors ${
                                isActive
                                  ? 'bg-[#097CF4] text-white'
                                  : 'bg-black text-white group-hover:bg-[#097CF4]'
                              }`}
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                              0{pi + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isActive ? 'text-[#097CF4]' : 'text-black/45'}`}>
                                  {p.category}
                                </span>
                                <span className="text-[9px] font-medium text-black/35">·</span>
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                                  {p.period}
                                </span>
                              </div>
                              <p
                                className={`text-[17px] font-extrabold leading-tight truncate ${isActive ? 'text-[#097CF4]' : 'text-black'}`}
                                style={{ fontFamily: 'Playfair Display, serif' }}
                              >
                                {p.name}
                              </p>
                              <p className="text-[11px] text-black/55 mt-0.5 truncate">
                                {p.tagline}
                              </p>
                            </div>
                            <svg
                              className={`w-4 h-4 shrink-0 transition-transform ${
                                isActive ? 'text-[#097CF4] translate-x-0' : 'text-black/25 -translate-x-1 group-hover:translate-x-0'
                              }`}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </li>
                      )
                    })}
                  </ul>

                  <Link
                    to="/portfolio"
                    className="group mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:text-[#097CF4] transition-colors"
                  >
                    View Full Portfolio
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </aside>

                {/* RIGHT — product detail */}
                <div className="col-span-8 bg-white">
                  {(() => {
                    const p = products[activeProduct]
                    return (
                      <div className="animate-[fadeIn_0.3s_ease-out]">
                        {/* Top hero strip */}
                        <div className="px-10 pt-8 pb-6 border-b border-black/10">
                          <div className="flex items-start justify-between gap-6">
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap mb-3">
                                <span className="px-2.5 py-1 bg-[#097CF4] text-white text-[10px] font-bold uppercase tracking-[0.25em]">
                                  {p.category}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50">
                                  {p.period}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 text-[9px] font-bold uppercase tracking-[0.2em]">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                  Live
                                </span>
                              </div>
                              <h3
                                className="text-[34px] font-extrabold text-black leading-[1.05] tracking-tight"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                              >
                                {p.name}
                                <span className="text-[#097CF4]">.</span>
                              </h3>
                              <p
                                className="mt-1 text-[14px] font-semibold text-[#097CF4] uppercase tracking-[0.15em]"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                              >
                                {p.tagline}
                              </p>
                            </div>
                            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                              0{activeProduct + 1} / 0{products.length}
                            </span>
                          </div>
                        </div>

                        {/* Content + visual */}
                        <div className="grid grid-cols-12 gap-0">
                          {/* Content */}
                          <div className="col-span-7 px-10 py-7 border-r border-black/10">
                            <p
                              className="text-[13px] leading-[1.7] text-black/70 mb-6"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {p.description}
                            </p>

                            <div className="mb-6">
                              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2.5">
                                — Tech Stack
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {p.technologies.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2.5 py-1 bg-black/[0.04] text-[10px] font-bold uppercase tracking-[0.15em] text-black/75"
                                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mb-6">
                              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2.5">
                                — Key Features
                              </p>
                              <ul className="space-y-2">
                                {p.features.map((f) => (
                                  <li
                                    key={f}
                                    className="flex items-start gap-2.5 text-[12px] font-semibold text-black/80"
                                  >
                                    <span className="w-4 h-4 bg-[#097CF4]/10 text-[#097CF4] flex items-center justify-center shrink-0 mt-0.5">
                                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </span>
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex items-center gap-3">
                              <Link
                                to="/portfolio"
                                className="group/cta inline-flex items-center gap-2 h-11 pl-4 pr-2 bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors"
                              >
                                View Details
                                <span className="w-8 h-8 bg-[#097CF4] group-hover/cta:bg-white flex items-center justify-center transition-colors">
                                  <svg className="w-3 h-3 text-white group-hover/cta:text-[#097CF4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                  </svg>
                                </span>
                              </Link>
                              <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 h-11 px-4 border border-black/20 text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:border-black hover:bg-black hover:text-white transition-colors"
                              >
                                Request Demo
                              </Link>
                            </div>
                          </div>

                          {/* Visual preview */}
                          <div className="col-span-5 relative bg-gradient-to-br from-[#0a1a2e] to-black min-h-[360px]">
                            <ProductVisual type={p.preview} />
                            {/* Subtle corner markers */}
                            <span className="pointer-events-none absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/40 z-10"></span>
                            <span className="pointer-events-none absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/40 z-10"></span>
                            <span className="pointer-events-none absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/40 z-10"></span>
                            <span className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/40 z-10"></span>
                          </div>
                        </div>
                      </div>
                    )
                  })()}
                </div>
              </div>
            </div>
          )}

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(4px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </div>

      {/* ── MOBILE MENU OVERLAY ─────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Mobile menu top bar — explicit close */}
          <div className="sticky top-0 z-10 bg-white border-b-2 border-black flex items-center justify-between px-5 h-[64px]">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 bg-black flex items-center justify-center">
                  <span
                    className="text-white font-black text-[15px] tracking-tighter"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    TC
                  </span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#097CF4]"></span>
              </div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Menu
              </p>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center gap-2 h-10 px-3 bg-black text-white hover:bg-[#097CF4] transition-colors"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                Close
              </span>
            </button>
          </div>

          <div className="px-6 pt-8 pb-6 border-b border-black/10">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — Navigation
            </p>
            <h3
              className="text-3xl font-extrabold text-black"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Where would you like to <span className="text-[#097CF4] italic">go</span>?
            </h3>
          </div>

          {/* Search shortcut inside mobile menu */}
          <div className="px-6 pt-4">
            <button
              onClick={() => {
                setMenuOpen(false)
                setTimeout(() => setSearchOpen(true), 250)
              }}
              className="w-full flex items-center gap-3 h-12 px-4 bg-black/5 hover:bg-black/10 text-black transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m20 20-3.5-3.5" />
              </svg>
              <span
                className="text-[12px] font-semibold tracking-[0.15em] uppercase text-black/60"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Search services, products, pages…
              </span>
            </button>
          </div>

          <nav className="px-6 py-2">
            {navLinks.map((link, i) => {
              const isExpanded = mobileExpanded === link.label
              return (
                <div
                  key={link.label}
                  className={`border-b border-black/10 last:border-0 transition-all duration-500 ${
                    menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                >
                  <div className="flex items-center justify-between py-5 group">
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `flex-1 text-[26px] sm:text-[32px] font-extrabold tracking-tight ${
                          isActive ? 'text-[#097CF4] italic' : 'text-black'
                        }`
                      }
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {link.label}
                    </NavLink>

                    {link.mega ? (
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                        aria-label={`Toggle ${link.label} sub-menu`}
                        className={`w-10 h-10 flex items-center justify-center border transition-colors ${
                          isExpanded
                            ? 'border-[#097CF4] bg-[#097CF4] text-white'
                            : 'border-black text-black'
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                    ) : (
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                          `w-10 h-10 flex items-center justify-center border transition-colors ${
                            isActive
                              ? 'border-[#097CF4] bg-[#097CF4] text-white'
                              : 'border-black text-black'
                          }`
                        }
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </NavLink>
                    )}
                  </div>

                  {/* Mobile mega accordion */}
                  {link.mega && (
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                        isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-6 space-y-5">
                        {link.megaType === 'services' &&
                          link.mega.map((col) => (
                            <div key={col.group} className="pl-3 border-l-2 border-[#097CF4]">
                              <p
                                className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#097CF4] mb-3"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                              >
                                {col.group}
                              </p>
                              <ul className="space-y-2">
                                {col.items.map((it) => (
                                  <li key={it.title}>
                                    <Link
                                      to={it.slug ? `/services/${it.slug}` : '/services'}
                                      className="group/mi flex items-start justify-between gap-3 py-2"
                                    >
                                      <div>
                                        <p
                                          className="text-[15px] font-bold text-black group-hover/mi:text-[#097CF4] transition-colors"
                                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                        >
                                          {it.title}
                                        </p>
                                        <p className="text-[12px] text-black/55 mt-0.5">{it.desc}</p>
                                      </div>
                                      <svg
                                        className="w-4 h-4 shrink-0 mt-1 text-black/40 group-hover/mi:text-[#097CF4] transition-colors"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                      </svg>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                     
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="px-6 py-8 bg-black text-white">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-between gap-3 h-14 px-5 bg-[#097CF4] text-white text-[12px] font-bold uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Start a Project
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>

            <div className="grid grid-cols-1 gap-4 text-[11px]">
              <div>
                <p className="text-white/50 uppercase tracking-[0.2em] text-[10px] mb-2">Email</p>
                <a href="mailto:inquiry.techcareer@gmail.com" className="font-bold hover:text-[#097CF4] break-all">
                  inquiry.techcareer@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/50 uppercase tracking-[0.2em] text-[10px] mb-2">Phone / WhatsApp</p>
                <a href="tel:+917096608771" className="font-bold hover:text-[#097CF4]">
                  +91 70966 08771
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-6 pt-6 border-t border-white/10 text-[10px] uppercase tracking-[0.2em]">
              <span className="text-white/50">Follow:</span>
              <a
                href="https://www.instagram.com/techcareer.llp"
                className="hover:text-[#097CF4] font-bold"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          searchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        ></div>

        <div
          className={`relative max-w-[720px] mx-4 sm:mx-auto mt-16 sm:mt-24 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-300 ${
            searchOpen ? 'translate-y-0' : '-translate-y-6'
          }`}
        >
          <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#097CF4]"></span>

          <form onSubmit={handleSubmit} className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-black/10">
            <svg className="w-5 h-5 text-[#097CF4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveIdx(0)
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search services, products, pages…"
              className="flex-1 bg-transparent outline-none text-[15px] sm:text-[17px] font-medium text-black placeholder:text-black/40"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 hover:text-[#097CF4]"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="hidden sm:inline-flex items-center gap-1 px-2 py-1 border border-black/10 text-[10px] font-bold uppercase tracking-[0.15em] text-black/60 hover:text-[#097CF4] hover:border-[#097CF4] transition-colors"
            >
              Esc
            </button>
          </form>

          <div className="max-h-[60vh] overflow-y-auto">
            {!query && (
              <div className="p-5 sm:p-6">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50 mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setQuery(p)
                        searchInputRef.current?.focus()
                      }}
                      className="px-3 py-2 text-[12px] font-semibold border border-black/10 text-black hover:border-[#097CF4] hover:text-[#097CF4] transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50 mt-6 mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Quick Links
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {searchIndex
                    .filter((r) => r.tag === 'Page')
                    .map((r) => (
                      <Link
                        key={r.title}
                        to={r.to}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 border border-black/10 hover:border-[#097CF4] hover:text-[#097CF4] transition-colors text-[13px] font-semibold text-black"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {r.title}
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ))}
                </div>
              </div>
            )}

            {query && results.length > 0 && (
              <ul className="py-2">
                {results.map((r, idx) => (
                  <li key={r.title}>
                    <Link
                      to={r.to}
                      onClick={() => setSearchOpen(false)}
                      onMouseEnter={() => setActiveIdx(idx)}
                      className={`flex items-center justify-between gap-3 px-5 sm:px-6 py-3 transition-colors ${
                        idx === activeIdx ? 'bg-[#097CF4]/5' : 'hover:bg-black/[0.03]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`w-8 h-8 flex items-center justify-center shrink-0 ${
                            idx === activeIdx ? 'bg-[#097CF4] text-white' : 'bg-black/5 text-black/60'
                          } transition-colors`}
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 22a10 10 0 110-20 10 10 0 010 20z" />
                          </svg>
                        </span>
                        <div className="min-w-0">
                          <p
                            className="text-[14px] font-bold text-black truncate"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {highlight(r.title)}
                          </p>
                          <p className="text-[11px] text-black/50 uppercase tracking-[0.2em] mt-0.5">
                            {r.tag}
                          </p>
                        </div>
                      </div>
                      <svg
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          idx === activeIdx ? 'text-[#097CF4]' : 'text-black/30'
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {query && results.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-[14px] text-black/60" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  No results for <span className="font-bold text-black">"{query}"</span>
                </p>
                <Link
                  to="/contact"
                  onClick={() => setSearchOpen(false)}
                  className="inline-flex items-center gap-2 mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#097CF4]"
                >
                  Request a Custom Service
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-3 bg-black text-white text-[10px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 border border-white/30 text-[9px]">↑↓</kbd>
                <span className="text-white/60">Navigate</span>
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 border border-white/30 text-[9px]">↵</kbd>
                <span className="text-white/60">Open</span>
              </span>
            </div>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 border border-white/30 text-[9px]">Ctrl + K</kbd>
              <span className="text-white/60 hidden sm:inline">Toggle</span>
            </span>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
