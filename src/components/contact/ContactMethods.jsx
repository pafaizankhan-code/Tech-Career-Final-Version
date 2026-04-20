import React from 'react'

const channels = [
  {
    no: '01',
    title: 'Email Us',
    sub: 'Reply within 4 business hours',
    value: 'hello@techcareerit.com',
    cta: 'Compose Email',
    href: 'mailto:hello@techcareerit.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'Phone / WhatsApp',
    sub: 'Mon — Sat · 09:00 – 21:00 IST',
    value: '+91 98765 43210',
    cta: 'Dial Now',
    href: 'tel:+919876543210',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.9 1.37l.9 2.69a2 2 0 01-.45 2L8.5 10.5a11 11 0 005 5l1.44-1.13a2 2 0 012-.45l2.69.9A2 2 0 0121 16.72V19a2 2 0 01-2 2A16 16 0 013 5z" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Book a Call',
    sub: '30-min, with a senior strategist',
    value: 'cal.com/techcareer',
    cta: 'Pick a Slot',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    no: '04',
    title: 'Existing Client',
    sub: 'Support · billing · change requests',
    value: 'support@techcareerit.com',
    cta: 'Open a Ticket',
    href: 'mailto:support@techcareerit.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.1 9a3 3 0 115.7 1c0 2-3 2-3 4M12 17h.01" />
      </svg>
    ),
  },
]

const ContactMethods = () => {
  return (
    <section
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Ways to Reach Us
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Four doors. <span className="text-[#0276E2] italic">Always</span> open.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Pick the channel that suits you. Whichever you choose, a real person reads the other end.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
          {channels.map((c) => (
            <a
              key={c.no}
              href={c.href}
              className="group relative p-6 lg:p-8 border-r border-b border-black/10 bg-white hover:bg-black hover:text-white transition-colors duration-500"
            >
              <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-black/20 group-hover:border-[#0276E2] transition-colors"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-black/20 group-hover:border-[#0276E2] transition-colors"></span>

              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center border-2 border-black group-hover:border-[#0276E2] group-hover:bg-[#0276E2] transition-colors">
                  <div className="w-7 h-7">{c.icon}</div>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-[#0276E2] transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — {c.no}
                </span>
              </div>

              <h3
                className="text-[22px] lg:text-[26px] font-extrabold leading-[1.15] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {c.title}
              </h3>

              <p
                className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0276E2]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {c.sub}
              </p>

              <p className="mt-4 text-[14px] font-semibold text-black group-hover:text-white transition-colors break-all" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {c.value}
              </p>

              <div className="mt-6 pt-5 border-t border-black/10 group-hover:border-white/20 flex items-center justify-between transition-colors">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.25em]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {c.cta}
                </span>
                <span className="w-9 h-9 flex items-center justify-center bg-black text-white group-hover:bg-[#0276E2] transition-colors">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactMethods
