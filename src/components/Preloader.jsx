import React, { useEffect, useState, useRef } from 'react'

// Module-level flag so the preloader shows once per hard reload
let hasShownLoader = false

const DURATION = 4000 // 4s — smoother & quicker than before

const Preloader = () => {
  const [visible, setVisible] = useState(!hasShownLoader)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const startTimeRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!visible) return
    hasShownLoader = true
    document.body.style.overflow = 'hidden'

    // requestAnimationFrame — buttery smooth, syncs to display refresh
    const tick = (now) => {
      if (startTimeRef.current === null) startTimeRef.current = now
      const elapsed = now - startTimeRef.current
      const pct = Math.min(100, (elapsed / DURATION) * 100)
      setProgress(pct)

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setFadeOut(true), 200)
        setTimeout(() => {
          setVisible(false)
          document.body.style.overflow = ''
        }, 1000)
      }
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  const intPct = Math.floor(progress)
  const status =
    progress < 30 ? 'Loading' :
    progress < 65 ? 'Almost there' :
    progress < 95 ? 'Finalising' : 'Ready'

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
      role="status"
      aria-label="Loading"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Minimal corner markers — thin black */}
      <span className="pointer-events-none absolute top-6 left-6 w-3 h-3 border-t border-l border-black hidden sm:block"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-3 h-3 border-t border-r border-black hidden sm:block"></span>
      <span className="pointer-events-none absolute bottom-6 left-6 w-3 h-3 border-b border-l border-black hidden sm:block"></span>
      <span className="pointer-events-none absolute bottom-6 right-6 w-3 h-3 border-b border-r border-black hidden sm:block"></span>

      {/* Top brand strip */}
      <div
        className="absolute top-0 left-0 right-0 px-6 sm:px-10 pt-5 sm:pt-6 flex items-center justify-between text-black/50"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-70"></span>
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#097CF4]"></span>
          </span>
          Tech Career · IT Solutions LLP
        </span>
        <span className="hidden sm:inline text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-black/30">
          Est. 2025 · Ahmedabad
        </span>
      </div>

      {/* Center stage — BRAND IS THE HERO */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        {/* Tiny label above wordmark */}
        <p
          className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.55em] text-black/35 mb-7 sm:mb-9 animate-[loaderFade_700ms_ease-out_both]"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          — Loading
        </p>

        {/* Massive brand wordmark — the hero */}
        <h1
          className="font-extrabold text-black leading-none tracking-[-0.04em] mb-8 sm:mb-10 animate-[loaderFade_700ms_150ms_ease-out_both]"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(56px, 11vw, 120px)',
          }}
        >
          Tech <span className="italic text-[#097CF4]">Career</span>
          <span className="text-[#097CF4]">.</span>
        </h1>

        {/* Thin elegant progress line */}
        <div className="relative animate-[loaderFade_600ms_300ms_ease-out_both]">
          <div className="w-[260px] sm:w-[380px] h-px bg-black/10 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#097CF4]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Tiny tick marks at the ends */}
          <div className="absolute -top-1 left-0 w-1.5 h-1.5 bg-black/40"></div>
          <div className="absolute -top-1 right-0 w-1.5 h-1.5 bg-black/40"></div>
        </div>

        {/* Tiny progress numbers — monospace feel */}
        <div
          className="mt-5 sm:mt-6 flex items-center gap-3 text-black/40 animate-[loaderFade_600ms_400ms_ease-out_both]"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <span className="text-[11px] font-bold tracking-[0.3em] tabular-nums text-black/70">
            {String(intPct).padStart(3, '0')}
          </span>
          <span className="text-[11px] font-bold text-black/25">/</span>
          <span className="text-[11px] font-bold tracking-[0.3em] tabular-nums">
            100
          </span>
        </div>
      </div>

      {/* Bottom strip — version + dynamic status */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-5 sm:pb-6 flex items-end justify-between text-black/45"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">
          v 1.0 · 2025
        </span>
        <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">
          <span className="w-1 h-1 rounded-full bg-[#097CF4]"></span>
          {status}
        </span>
      </div>

      <style>{`
        @keyframes loaderFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Preloader
