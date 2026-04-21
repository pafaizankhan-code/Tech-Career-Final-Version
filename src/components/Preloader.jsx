import React, { useEffect, useState } from 'react'

// Module-level flag so the preloader shows once per hard reload,
// not on every in-app navigation back to Home.
let hasShownLoader = false

const DURATION = 1400

const Preloader = () => {
  const [visible, setVisible] = useState(!hasShownLoader)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (!visible) return
    hasShownLoader = true
    document.body.style.overflow = 'hidden'

    const tick = 30
    const increment = 100 / (DURATION / tick)

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        const next = p + increment
        if (next >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => setFadeOut(true), 200)
          setTimeout(() => {
            setVisible(false)
            document.body.style.overflow = ''
          }, 800)
          return 100
        }
        return next
      })
    }, tick)

    return () => {
      clearInterval(progressTimer)
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  const displayProgress = Math.min(100, Math.floor(progress))

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
      {/* Centered brand + progress */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        {/* Logo mark */}
        <div className="relative animate-[preloadFade_600ms_ease-out_both]">
          <div className="w-14 h-14 bg-black flex items-center justify-center">
            <span
              className="text-white font-black text-[22px] tracking-tighter"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              TC
            </span>
          </div>
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#097CF4]"></span>
        </div>

        {/* Brand name */}
        <h1
          className="mt-7 text-[38px] sm:text-[44px] font-extrabold text-black leading-none tracking-tight animate-[preloadFade_600ms_120ms_ease-out_both]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Tech <span className="text-[#097CF4] italic">Career</span>
        </h1>
        <p
          className="mt-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.4em] text-black/45 animate-[preloadFade_600ms_220ms_ease-out_both]"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          IT Solutions LLP
        </p>

        {/* Progress */}
        <div className="mt-12 w-full max-w-[260px] animate-[preloadFade_600ms_340ms_ease-out_both]">
          <div className="h-px bg-black/10 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#097CF4] transition-[width] duration-100 ease-linear"
              style={{ width: `${displayProgress}%` }}
            ></div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span
              className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/45"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Loading
            </span>
            <span
              className="text-[10px] font-bold tracking-[0.2em] text-black/60 tabular-nums"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {String(displayProgress).padStart(2, '0')}%
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes preloadFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Preloader
