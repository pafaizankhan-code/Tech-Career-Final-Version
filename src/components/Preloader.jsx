import React, { useEffect, useState } from 'react'

// Module-level flag so the preloader shows once per hard reload,
// not on every in-app navigation back to Home.
let hasShownLoader = false

const DURATION = 5000 // 5 seconds

const statusMessages = [
  { label: 'Booting', sub: 'Initialising core assets' },
  { label: 'Compiling', sub: 'Preparing components' },
  { label: 'Optimising', sub: 'Tuning performance profile' },
  { label: 'Finalising', sub: 'Crafting your experience' },
  { label: 'Ready', sub: 'Welcome to Tech Career' },
]

const techRotation = [
  'React · Next.js · TypeScript',
  'AWS · Azure · Kubernetes',
  'AI · ML · LangChain',
  'ISO 27001 · SOC 2 · GDPR',
]

const Preloader = () => {
  const [visible, setVisible] = useState(!hasShownLoader)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [techIndex, setTechIndex] = useState(0)

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
          setTimeout(() => setFadeOut(true), 250)
          setTimeout(() => {
            setVisible(false)
            document.body.style.overflow = ''
          }, 900)
          return 100
        }
        return next
      })
    }, tick)

    const messageTimer = setInterval(() => {
      setMessageIndex((i) => Math.min(i + 1, statusMessages.length - 1))
    }, DURATION / statusMessages.length)

    const techTimer = setInterval(() => {
      setTechIndex((i) => (i + 1) % techRotation.length)
    }, 1100)

    return () => {
      clearInterval(progressTimer)
      clearInterval(messageTimer)
      clearInterval(techTimer)
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  const currentMessage = statusMessages[messageIndex]
  const displayProgress = Math.min(100, Math.floor(progress))

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
      role="status"
      aria-label="Loading"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      ></div>

      {/* Blueprint corner markers */}
      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#0276E2]"></span>

      {/* Edge ticks — blueprint measurement marks */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 hidden md:flex">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className={`flex-1 ${i % 5 === 0 ? 'bg-[#0276E2]' : 'bg-white/15'}`}></span>
        ))}
      </div>

      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 px-6 sm:px-10 pt-6 lg:pt-8 flex items-center justify-between text-white"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">
          Loading · v 4.2.1
        </span>
        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#0276E2]">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-[#0276E2] animate-ping opacity-75"></span>
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#0276E2]"></span>
          </span>
          Live · 2026
        </span>
      </div>

      {/* Main content */}
      <div className="relative min-h-full flex flex-col items-center justify-center px-6 py-20">
        {/* Monogram */}
      

        {/* Brand name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-[92px] font-extrabold text-white leading-[0.95] tracking-[-0.02em] text-center animate-[preloadFade_700ms_150ms_cubic-bezier(0.22,0.9,0.35,1)_both]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Tech <span className="text-[#0276E2] italic">Career</span>
        </h1>
        <p
          className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.5em] text-white/60 animate-[preloadFade_700ms_300ms_cubic-bezier(0.22,0.9,0.35,1)_both]"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          IT Solutions LLP · Established 2013
        </p>

        {/* Progress section */}
        <div className="mt-12 lg:mt-16 w-full max-w-[520px] animate-[preloadFade_700ms_450ms_cubic-bezier(0.22,0.9,0.35,1)_both]">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — {currentMessage.label}
              </p>
              <p
                className="mt-1 text-[11px] text-white/55 uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {currentMessage.sub}
              </p>
            </div>
            <p
              className="text-[44px] sm:text-[56px] font-extrabold leading-none text-white tabular-nums"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {String(displayProgress).padStart(2, '0')}
              <span className="text-[#0276E2]">%</span>
            </p>
          </div>

          {/* Progress bar */}
          <div className="h-[3px] bg-white/10 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#0276E2] transition-[width] duration-100 ease-linear"
              style={{ width: `${displayProgress}%` }}
            ></div>
            <div
              className="absolute top-0 h-full w-px bg-white transition-[left] duration-100 ease-linear"
              style={{ left: `${displayProgress}%` }}
            ></div>
          </div>

          {/* Segment indicator */}
          <div className="mt-6 flex items-center gap-2">
            {statusMessages.map((m, i) => (
              <div key={m.label} className="flex-1 flex items-center gap-2">
                <span
                  className={`h-[3px] flex-1 transition-all duration-500 ${
                    i < messageIndex
                      ? 'bg-[#0276E2]'
                      : i === messageIndex
                      ? 'bg-[#0276E2]/60'
                      : 'bg-white/10'
                  }`}
                ></span>
                <span
                  className={`text-[9px] font-bold tracking-[0.25em] transition-colors ${
                    i <= messageIndex ? 'text-white/80' : 'text-white/30'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Rotating tech stack */}
          <div
            className="mt-8 h-5 overflow-hidden text-center"
            style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}
          >
            <p
              key={techIndex}
              className="text-[11px] font-bold tracking-[0.25em] text-white/50 uppercase animate-[preloadSlide_400ms_ease_both]"
            >
              {techRotation[techIndex]}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-6 lg:pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-white"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/55">
          Best IT Company · Australia
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/55">
          ISO 27001 · SOC 2 · GDPR Ready
        </span>
      </div>

      <style>{`
        @keyframes preloadFade {
          from { opacity: 0; transform: translateY(14px); }
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
