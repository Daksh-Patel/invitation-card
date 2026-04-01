"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

/* ── Shared door text styles injected once ── */
const DOOR_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Gujarati:wght@400;700&family=Noto+Sans+Gujarati:wght@400;600&display=swap');

  @keyframes goldShimmer {
    0%   { background-position: -300px 0; }
    100% { background-position: 300px 0; }
  }
  @keyframes subtlePulse {
    0%, 100% { opacity: 0.82; }
    50%       { opacity: 1; }
  }
  @keyframes starSpin {
    0%   { transform: rotate(0deg) scale(1); }
    50%  { transform: rotate(180deg) scale(1.3); }
    100% { transform: rotate(360deg) scale(1); }
  }

  .door-star {
    font-size: 13px;
    color: #ffe082;
    animation: starSpin 4s linear infinite;
    display: inline-block;
    text-shadow: 0 0 8px rgba(255,210,60,0.9);
    line-height: 1;
  }

  .door-swagat {
    font-family: 'Noto Sans Gujarati', sans-serif;
    font-size: clamp(9px, 1.5vw, 13px);
    font-weight: 600;
    letter-spacing: 0.12em;
    color: #ffe082;
    text-shadow: 0 1px 6px rgba(0,0,0,0.7);
    animation: subtlePulse 3s ease-in-out infinite;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .door-divider {
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,210,60,0.5), transparent);
    margin: 5px 0;
  }

  .door-title {
    font-family: 'Noto Serif Gujarati', serif;
    font-size: clamp(12px, 2.4vw, 20px);
    font-weight: 700;
    text-align: center;
    line-height: 1.25;
    background: linear-gradient(90deg, #ffe8a0 0%, #fff5cc 40%, #f9c646 70%, #ffe8a0 100%);
    background-size: 300px 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: goldShimmer 3.5s linear infinite;
    filter: drop-shadow(0 1px 4px rgba(0,0,0,0.55));
  }

  .door-name {
    font-family: 'Noto Serif Gujarati', serif;
    font-size: clamp(10px, 1.8vw, 15px);
    font-weight: 400;
    color: rgba(255, 235, 180, 0.92);
    text-align: center;
    letter-spacing: 0.06em;
    text-shadow: 0 1px 5px rgba(0,0,0,0.65);
    animation: subtlePulse 4s ease-in-out infinite;
    margin-top: 2px;
  }

  .door-ornament {
    font-family: 'Noto Serif Gujarati', serif;
    font-size: clamp(9px, 1.4vw, 12px);
    color: rgba(255,210,80,0.65);
    letter-spacing: 0.18em;
    margin-top: 6px;
    animation: subtlePulse 5s ease-in-out infinite;
  }
`

/* ── Door panel text ── */
function DoorText() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        padding: "10px 6px",
      }}
    >
      {/* ✦ સ્વાગત છે ✦ */}
      <div className='door-swagat'>
        <span className='door-star'>✦</span>॥ શ્રી ગણેશાય નમઃ ॥
        <span className='door-star' style={{ animationDelay: "2s" }}>
          ✦
        </span>
      </div>

      <div className='door-divider' />

      {/* સીમંત સંસ્કાર */}
      <div className='door-title'>
        સીમંત
        <br />
        સંસ્કાર
      </div>

      <div className='door-divider' />

      {/* અ.સૌ. કાજલ */}
      <div className='door-name'>અ.સૌ. કાજલ</div>

      {/* bottom ornament */}
      <div className='door-ornament'>· · ·</div>
    </div>
  )
}

/* ════════════════════════════════════════════════════ */
export default function DoorScene({ onComplete }) {
  const [open, setOpen] = useState(false)
  const audioRef = useRef(null)

  const handleOpen = () => {
    audioRef.current?.play()
    setOpen(true)
    setTimeout(() => {
      onComplete()
    }, 2200)
  }

  /* Shared top-panel style */
  const topPanelStyle = {
    position: "absolute",
    top: "8%",
    left: "10%",
    right: "10%",
    height: "36%",
    border: "2.5px solid rgba(255,200,100,0.30)",
    borderRadius: "4px",
    boxShadow:
      "inset 0 3px 14px rgba(0,0,0,0.45), 0 0 14px rgba(255,200,80,0.1)",
    background: "rgba(0,0,0,0.20)",
    overflow: "hidden",
  }

  /* Shared bottom-panel style */
  const bottomPanelStyle = {
    position: "absolute",
    top: "52%",
    left: "10%",
    right: "10%",
    height: "36%",
    border: "2.5px solid rgba(255,200,100,0.18)",
    borderRadius: "4px",
    boxShadow: "inset 0 3px 10px rgba(0,0,0,0.35)",
    background: "rgba(0,0,0,0.12)",
  }

  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center [perspective:1500px] overflow-hidden bg-gradient-to-br from-[#fdf6f0] via-[#fff] to-[#f3e8ff]'>
      <style>{DOOR_STYLES}</style>

      {/* 🔊 MUSIC */}
      <audio ref={audioRef} loop>
        <source src='/music.mp3' />
      </audio>

      {/* ✨ BACKGROUND GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.25),transparent_70%)]'
      />

      {/* ✨ FLOATING PARTICLES */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={open ? { y: -200, opacity: [0, 1, 0] } : {}}
          transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
          className='absolute w-1 h-1 bg-yellow-400 rounded-full'
          style={{ left: `${(i * 8.3) % 100}%` }}
        />
      ))}

      {/* ── OPEN BUTTON ── */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className='absolute bottom-10 z-50'
        >
          <Button
            onClick={handleOpen}
            className='px-8 py-6 text-lg rounded-full
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              shadow-xl hover:scale-105 transition-all duration-300'
          >
            ✨ Open Invitation
          </Button>
        </motion.div>
      )}

      {/* 🎀 RIBBON */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={open ? { opacity: 0, scaleY: 0 } : {}}
        transition={{ duration: 0.4 }}
        className='absolute inset-0 flex items-center justify-center z-40 pointer-events-none'
        style={{ transformOrigin: "center" }}
      >
        {/* Horizontal band */}
        <div
          className='absolute w-full'
          style={{
            height: "52px",
            background:
              "linear-gradient(180deg, #e8365d 0%, #c0143a 45%, #e8365d 100%)",
            boxShadow: "0 4px 24px rgba(192,20,58,0.45)",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div
            className='absolute inset-0'
            style={{
              background:
                "linear-gradient(180deg,rgba(255,255,255,0.18) 0%,transparent 40%,transparent 60%,rgba(255,255,255,0.10) 100%)",
            }}
          />
          <div className='absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 opacity-80' />
          <div className='absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 opacity-80' />
        </div>

        {/* Vertical band */}
        <div
          className='absolute h-full'
          style={{
            width: "52px",
            background:
              "linear-gradient(90deg, #e8365d 0%, #c0143a 45%, #e8365d 100%)",
            boxShadow: "4px 0 24px rgba(192,20,58,0.45)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            className='absolute inset-0'
            style={{
              background:
                "linear-gradient(90deg,rgba(255,255,255,0.18) 0%,transparent 40%,transparent 60%,rgba(255,255,255,0.10) 100%)",
            }}
          />
          <div className='absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-yellow-300 via-yellow-100 to-yellow-300 opacity-80' />
          <div className='absolute top-0 bottom-0 right-0 w-[3px] bg-gradient-to-b from-yellow-300 via-yellow-100 to-yellow-300 opacity-80' />
        </div>

        {/* 🎀 BOW SVG */}
        <div
          className='absolute z-50'
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            width='110'
            height='80'
            viewBox='0 0 110 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <ellipse
              cx='28'
              cy='40'
              rx='26'
              ry='14'
              transform='rotate(-20 28 40)'
              fill='url(#bowLeft)'
              stroke='#8B0021'
              strokeWidth='1.5'
            />
            <ellipse
              cx='28'
              cy='40'
              rx='18'
              ry='8'
              transform='rotate(-20 28 40)'
              fill='none'
              stroke='rgba(255,255,255,0.18)'
              strokeWidth='2'
            />
            <ellipse
              cx='82'
              cy='40'
              rx='26'
              ry='14'
              transform='rotate(20 82 40)'
              fill='url(#bowRight)'
              stroke='#8B0021'
              strokeWidth='1.5'
            />
            <ellipse
              cx='82'
              cy='40'
              rx='18'
              ry='8'
              transform='rotate(20 82 40)'
              fill='none'
              stroke='rgba(255,255,255,0.18)'
              strokeWidth='2'
            />
            <path
              d='M55 44 Q38 62 28 72 Q34 64 36 58 Z'
              fill='url(#tailL)'
              stroke='#8B0021'
              strokeWidth='1'
            />
            <path
              d='M55 44 Q72 62 82 72 Q76 64 74 58 Z'
              fill='url(#tailR)'
              stroke='#8B0021'
              strokeWidth='1'
            />
            <ellipse
              cx='55'
              cy='40'
              rx='12'
              ry='10'
              fill='url(#knot)'
              stroke='#8B0021'
              strokeWidth='1.5'
            />
            <ellipse
              cx='55'
              cy='40'
              rx='6'
              ry='5'
              fill='rgba(255,255,255,0.15)'
            />
            <circle cx='55' cy='38' r='2' fill='rgba(255,230,100,0.6)' />
            <defs>
              <radialGradient id='bowLeft' cx='40%' cy='35%' r='70%'>
                <stop offset='0%' stopColor='#ff6b8a' />
                <stop offset='60%' stopColor='#e8365d' />
                <stop offset='100%' stopColor='#8B0021' />
              </radialGradient>
              <radialGradient id='bowRight' cx='60%' cy='35%' r='70%'>
                <stop offset='0%' stopColor='#ff6b8a' />
                <stop offset='60%' stopColor='#e8365d' />
                <stop offset='100%' stopColor='#8B0021' />
              </radialGradient>
              <radialGradient id='knot' cx='40%' cy='30%' r='80%'>
                <stop offset='0%' stopColor='#ff8fab' />
                <stop offset='100%' stopColor='#c0143a' />
              </radialGradient>
              <linearGradient
                id='tailL'
                x1='55'
                y1='44'
                x2='28'
                y2='72'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0%' stopColor='#e8365d' />
                <stop offset='100%' stopColor='#8B0021' />
              </linearGradient>
              <linearGradient
                id='tailR'
                x1='55'
                y1='44'
                x2='82'
                y2='72'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0%' stopColor='#e8365d' />
                <stop offset='100%' stopColor='#8B0021' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* 💥 RIBBON BURST */}
      {open && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className='absolute w-20 h-20 bg-pink-400 rounded-full z-40'
          style={{ filter: "blur(16px)" }}
        />
      )}

      {/* ── DOORS ── */}
      <div className='flex w-full h-full z-30'>
        {/* LEFT DOOR */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={open ? { rotateY: -110 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          className='relative w-1/2 h-full origin-left overflow-hidden'
          style={{
            background:
              "linear-gradient(135deg, #d4a96a 0%, #b07d3a 25%, #8b5e2a 50%, #6b4218 75%, #4a2c0e 100%)",
            boxShadow:
              "inset -12px 0 40px rgba(0,0,0,0.55), inset 4px 0 20px rgba(255,200,120,0.12)",
          }}
        >
          {/* Wood grain */}
          {[10, 22, 35, 50, 64, 78, 90].map((pos) => (
            <div
              key={pos}
              className='absolute inset-y-0'
              style={{
                left: `${pos}%`,
                width: "1px",
                background:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,0.18) 20%,rgba(0,0,0,0.22) 80%,transparent)",
              }}
            />
          ))}

          {/* TOP PANEL — with DoorText */}
          <div style={topPanelStyle}>
            {/* inner subtle border */}
            <div
              style={{
                position: "absolute",
                inset: 4,
                border: "1px solid rgba(255,200,80,0.12)",
                borderRadius: 2,
                pointerEvents: "none",
              }}
            />
            <DoorText />
          </div>

          {/* BOTTOM PANEL — decorative only */}
          <div style={bottomPanelStyle} />

          {/* Knob */}
          <div
            className='absolute'
            style={{
              right: "7%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #ffe08a, #c8860a 60%, #7a4d00)",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,230,100,0.5)",
            }}
          />
        </motion.div>

        {/* RIGHT DOOR */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={open ? { rotateY: 110 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          className='relative w-1/2 h-full origin-right overflow-hidden'
          style={{
            background:
              "linear-gradient(225deg, #d4a96a 0%, #b07d3a 25%, #8b5e2a 50%, #6b4218 75%, #4a2c0e 100%)",
            boxShadow:
              "inset 12px 0 40px rgba(0,0,0,0.55), inset -4px 0 20px rgba(255,200,120,0.12)",
          }}
        >
          {/* Wood grain */}
          {[10, 22, 35, 50, 64, 78, 90].map((pos) => (
            <div
              key={pos}
              className='absolute inset-y-0'
              style={{
                left: `${pos}%`,
                width: "1px",
                background:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,0.18) 20%,rgba(0,0,0,0.22) 80%,transparent)",
              }}
            />
          ))}

          {/* TOP PANEL — with DoorText */}
          <div style={topPanelStyle}>
            <div
              style={{
                position: "absolute",
                inset: 4,
                border: "1px solid rgba(255,200,80,0.12)",
                borderRadius: 2,
                pointerEvents: "none",
              }}
            />
            <DoorText />
          </div>

          {/* BOTTOM PANEL — decorative only */}
          <div style={bottomPanelStyle} />

          {/* Knob */}
          <div
            className='absolute'
            style={{
              left: "7%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #ffe08a, #c8860a 60%, #7a4d00)",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,230,100,0.5)",
            }}
          />
        </motion.div>
      </div>

      {/* 🌟 LIGHT REVEAL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 1 }}
        className='absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-pink-100 z-10'
      />
    </div>
  )
}
