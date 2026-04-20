import React from 'react'

const PagePlaceholder = ({ title, subtitle }) => {
  return (
    <section className="min-h-[70vh] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0276E2] mb-4"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          — {title} Page
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black leading-[1.05]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {subtitle}
        </h2>
        <div className="mt-8 h-1 w-24 bg-[#0276E2]"></div>
      </div>
    </section>
  )
}

export default PagePlaceholder
