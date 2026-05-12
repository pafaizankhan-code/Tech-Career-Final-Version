'use client'

import React, { useEffect, useState, useRef } from 'react'
import logoImg from '../assets/logo.jpg'

let hasShownLoader = false

const DURATION = 2500

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

    const tick = (now) => {
      if (startTimeRef.current === null) startTimeRef.current = now
      const elapsed = now - startTimeRef.current
      const eased = 1 - Math.pow(1 - Math.min(1, elapsed / DURATION), 3)
      const pct = Math.min(100, eased * 100)
      setProgress(pct)

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setFadeOut(true), 350)
        setTimeout(() => {
          setVisible(false)
          document.body.style.overflow = ''
        }, 1100)
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

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white transition-opacity duration-[900ms] ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-label="Loading"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* 1px progress line at top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.06]">
        <div
          className="h-full bg-[#097CF4]"
          style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
        />
      </div>

      {/* Top-left brand mark */}
      <div
        className="absolute top-7 left-7 sm:top-9 sm:left-10 inline-flex items-center gap-2.5 animate-[preloaderFade_700ms_ease-out_both]"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="relative flex w-1.5 h-1.5">
          <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-70"></span>
          <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#097CF4]"></span>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/55">
          Tech Career
        </span>
      </div>

      {/* Top-right percentage */}
      <div
        className="absolute top-7 right-7 sm:top-9 sm:right-10 animate-[preloaderFade_700ms_ease-out_both]"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] tabular-nums text-black/55">
          {String(intPct).padStart(3, '0')} / 100
        </span>
      </div>

      {/* Centered logo with shimmer shine */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="relative inline-block overflow-hidden animate-[preloaderRise_900ms_150ms_cubic-bezier(0.2,0.7,0.2,1)_both]">
          <img
            src={logoImg.src}
            alt="Tech Career · IT Solution LLP"
            className="h-28 sm:h-26 lg:h-40 xl:h-54 w-auto object-contain block"
            draggable={false}
          />
          {/* Shine sweep */}
          <span
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(115deg, transparent 0%, transparent 35%, rgba(9,124,244,0.08) 45%, rgba(255,255,255,0.85) 50%, rgba(9,124,244,0.08) 55%, transparent 65%, transparent 100%)',
              transform: 'translateX(-100%)',
              animation: 'preloaderShine 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              mixBlendMode: 'screen',
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom-left status */}
      <div
        className="absolute bottom-7 left-7 sm:bottom-9 sm:left-10 animate-[preloaderFade_700ms_300ms_ease-out_both]"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/40">
          {progress < 100 ? 'Loading' : 'Ready'}
        </span>
      </div>

      {/* Bottom-right copyright */}
      <div
        className="absolute bottom-7 right-7 sm:bottom-9 sm:right-10 animate-[preloaderFade_700ms_300ms_ease-out_both]"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/40">
          © 2025
        </span>
      </div>

      <style>{`
        @keyframes preloaderFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes preloaderRise {
          from { opacity: 0; transform: translateY(14px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes preloaderShine {
          0%   { transform: translateX(-120%); }
          60%  { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </div>
  )
}

export default Preloader