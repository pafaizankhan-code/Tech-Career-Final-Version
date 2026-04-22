import React, { useEffect, useState } from 'react'

// Module-level flag so the preloader shows once per hard reload,
// not on every in-app navigation back to Home.
let hasShownLoader = false

const DURATION = 5000 // 5 seconds total
const STEPS = 100
const TICK = DURATION / STEPS // 50ms per integer step — perfectly smooth counting

const services = ['Web Development', 'E-commerce', 'CRM & HRMS', 'Mobile Apps', 'Digital Marketing']

const Preloader = () => {
  const [visible, setVisible] = useState(!hasShownLoader)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [serviceIndex, setServiceIndex] = useState(0)

  useEffect(() => {
    if (!visible) return
    hasShownLoader = true
    document.body.style.overflow = 'hidden'

    // Every integer 0 → 100 is displayed for exactly TICK ms — smoothest possible count.
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => setFadeOut(true), 300)
          setTimeout(() => {
            setVisible(false)
            document.body.style.overflow = ''
          }, 1100)
          return 100
        }
        return p + 1
      })
    }, TICK)

    // Rotate the service ticker ~7 times across the 5s load (~700ms each).
    const serviceTimer = setInterval(() => {
      setServiceIndex((i) => (i + 1) % services.length)
    }, 700)

    return () => {
      clearInterval(progressTimer)
      clearInterval(serviceTimer)
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  const displayProgress = progress

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white transition-opacity duration-800 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
      role="status"
      aria-label="Loading"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Blueprint corner markers */}
      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#097CF4] hidden sm:block"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#097CF4] hidden sm:block"></span>
      <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#097CF4] hidden sm:block"></span>
      <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#097CF4] hidden sm:block"></span>

      {/* Top brand signature */}
      <div
        className="absolute top-0 left-0 right-0 px-6 sm:px-10 pt-5 sm:pt-6 flex items-center justify-between text-black/50 animate-[preloadFade_500ms_ease-out_both]"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-70"></span>
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#097CF4]"></span>
          </span>
          Tech Career · IT Solution LLP
        </span>
        <span className="hidden sm:inline text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-black/30">
          Est. 2025 · Ahmedabad
        </span>
      </div>

      {/* Centered stack — big counter + ticker */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        {/* Tiny label above counter */}
        <p
          className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.5em] text-[#097CF4] mb-4 sm:mb-6 animate-[preloadFade_600ms_ease-out_both]"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          — Preparing
        </p>

        {/* Giant counter — the hero element */}
        <div
          className="relative leading-none animate-[preloadFade_700ms_100ms_ease-out_both]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span
            className="font-extrabold text-black tabular-nums tracking-[-0.05em]"
            style={{ fontSize: 'clamp(120px, 28vw, 280px)' }}
          >
            {String(displayProgress).padStart(2, '0')}
          </span>
          <span
            className="absolute top-2 font-black text-[#097CF4]"
            style={{ fontSize: 'clamp(30px, 6vw, 60px)' }}
          >
            %
          </span>
        </div>

        {/* Horizontal divider rule */}
        <div className="mt-4 sm:mt-6 w-24 h-px bg-black/15 animate-[preloadFade_600ms_300ms_ease-out_both]"></div>

        {/* Rotating service ticker */}
        <div
          className="mt-4 sm:mt-5 h-5 overflow-hidden text-center animate-[preloadFade_600ms_400ms_ease-out_both]"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <p
            key={serviceIndex}
            className="text-[11px] sm:text-[12px] font-bold tracking-[0.32em] uppercase text-black/70 animate-[preloadSlide_400ms_ease_both]"
          >
            {services[serviceIndex]}
          </p>
        </div>

        {/* Brand wordmark below */}
        <h1
          className="mt-10 sm:mt-14 text-center font-extrabold text-black leading-[0.9] tracking-[-0.02em] animate-[preloadFade_700ms_500ms_ease-out_both]"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(22px, 3vw, 32px)',
          }}
        >
          Tech <span className="text-[#097CF4] italic">Career</span>
          <span className="text-[#097CF4]">.</span>
        </h1>
      </div>

      {/* Bottom status bar */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-5 sm:pb-6 flex items-end justify-between text-black/55 animate-[preloadFade_700ms_650ms_ease-out_both]"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">
          {displayProgress < 30
            ? 'Initialising'
            : displayProgress < 65
            ? 'Compiling assets'
            : displayProgress < 95
            ? 'Finalising'
            : 'Ready'}
        </span>
        <span className="hidden sm:inline text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-black/35">
          v 1.0 · 2025
        </span>
      </div>

      {/* Full-width progress line at the very bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/[0.06] overflow-hidden">
        <div
          className="h-full bg-[#097CF4] transition-[width] duration-100 ease-linear"
          style={{ width: `${displayProgress}%` }}
        ></div>
        {/* Moving highlight */}
        <div
          className="absolute top-0 h-full w-10 bg-gradient-to-r from-transparent via-white/80 to-transparent transition-[left] duration-100 ease-linear"
          style={{ left: `calc(${displayProgress}% - 40px)` }}
        ></div>
      </div>

      <style>{`
        @keyframes preloadFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes preloadSlide {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Preloader
