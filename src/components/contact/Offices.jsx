import React, { useState } from 'react'

const offices = [
  {
    id: 'ahmedabad',
    city: 'Ahmedabad',
    role: 'Studio Headquarters',
    address: 'iHub, University Area,\nAhmedabad, Gujarat\n380015 · India',
    phone: '+91 70966 08771',
    email: 'inquiry.techcareer@gmail.com',
    hours: 'Mon — Sat · 10:00 – 20:00 IST',
    coords: '23.0225° N · 72.5714° E',
  },
  {
    id: 'remote',
    city: 'Remote',
    role: 'Pan-India Delivery',
    address: 'We work with clients across India\non email, WhatsApp & Google Meet\nNo office visit required',
    phone: '+91 70966 08771',
    email: 'inquiry.techcareer@gmail.com',
    hours: 'Mon — Sat · IST hours',
    coords: 'Pan-India · Remote-First',
  },
]

const MapVisual = ({ active }) => (
  <div className={`relative w-full h-full overflow-hidden ${active === 'ahmedabad' ? 'bg-[#097CF4]' : active === 'bengaluru' ? 'bg-black' : 'bg-[#097CF4]'} transition-colors duration-500`}>
    {/* Grid lines */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    ></div>
    {/* Diagonal guides */}
    <svg className="absolute inset-0 w-full h-full text-white/20" viewBox="0 0 400 300" preserveAspectRatio="none">
      <path d="M0 80 Q 200 40 400 120" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
      <path d="M0 180 Q 200 230 400 160" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
      <path d="M60 0 Q 40 150 100 300" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
      <path d="M300 0 Q 330 150 280 300" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
    </svg>

    {/* Region markers */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Radiating pulses */}
        <span className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full border-2 border-white animate-ping opacity-60"></span>
        <span className="absolute inset-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full border-2 border-white opacity-80"></span>

        {/* Pin */}
        <div className="relative w-14 h-14 bg-white text-black flex items-center justify-center border-2 border-black">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
      </div>
    </div>

    {/* Corner coordinates */}
    <span className="absolute top-3 left-3 text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase" style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}>
      N · 00.00° · E 00.00°
    </span>
    <span className="absolute bottom-3 right-3 text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase" style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}>
      ZOOM · 12x
    </span>
  </div>
)

const Offices = () => {
  const [active, setActive] = useState('ahmedabad')
  const current = offices.find((o) => o.id === active) || offices[0]

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
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Our Offices
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              One studio. <span className="text-[#097CF4] italic">All</span> of India.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Drop in at iHub for a chai and a whiteboard session if you are near Ahmedabad —
            or work with us remotely from anywhere in India. Both work equally well.
          </p>
        </div>

        {/* City tabs */}
        <div
          className="grid grid-cols-2 border-2 border-black mb-8"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          {offices.map((o, i) => {
            const isActive = active === o.id
            return (
              <button
                key={o.id}
                onClick={() => setActive(o.id)}
                className={`text-left p-5 transition-colors ${
                  isActive ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'
                } ${i !== offices.length - 1 ? 'border-r-2 border-black' : ''}`}
              >
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-2 ${
                    isActive ? 'text-[#097CF4]' : 'text-[#097CF4]'
                  }`}
                >
                  {o.role}
                </p>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {o.city}
                </h3>
                <p className={`mt-2 text-[11px] ${isActive ? 'text-white/60' : 'text-black/55'}`}>
                  {o.coords}
                </p>
              </button>
            )
          })}
        </div>

        {/* Active office card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-black">
          {/* Map visual */}
          <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto border-b-2 lg:border-b-0 lg:border-r-2 border-black relative">
            <MapVisual active={active} />

            {/* Floating chip with city name */}
            <div className="absolute top-6 left-6 bg-white border-2 border-black px-4 py-2">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#097CF4]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                — Visiting
              </p>
              <p className="text-[16px] font-extrabold text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
                {current.city}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — {current.role}
            </p>

            <h3
              className="text-3xl lg:text-[40px] font-extrabold text-black leading-tight tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {current.city} <span className="text-[#097CF4] italic">Studio</span>
            </h3>

            <dl
              className="mt-8 space-y-4 text-[13px] flex-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <div className="pb-4 border-b border-black/10">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-black/50 mb-2">Address</dt>
                <dd className="font-semibold text-black whitespace-pre-line leading-relaxed">
                  {current.address}
                </dd>
              </div>

              <div className="pb-4 border-b border-black/10 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-black/50 mb-2">Phone</dt>
                  <dd>
                    <a href={`tel:${current.phone.replace(/\s/g, '')}`} className="font-bold text-black hover:text-[#097CF4] transition-colors">
                      {current.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-black/50 mb-2">Email</dt>
                  <dd>
                    <a href={`mailto:${current.email}`} className="font-bold text-black hover:text-[#097CF4] transition-colors break-all">
                      {current.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="pb-4 border-b border-black/10">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-black/50 mb-2">Hours</dt>
                <dd className="font-semibold text-black flex items-center gap-2">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-75"></span>
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-[#097CF4]"></span>
                  </span>
                  {current.hours}
                </dd>
              </div>
            </dl>

            <a
              href="#"
              className="group mt-6 inline-flex items-center justify-between gap-3 h-14 pl-5 pr-2 bg-[#097CF4] text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Get Directions
              <span className="w-10 h-10 bg-white group-hover:bg-[#097CF4] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-[#097CF4] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offices
