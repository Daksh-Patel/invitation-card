/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, delay },
})

function Petal({ style, delay, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, rotate: 0 }}
      animate={{ opacity: [0, 0.7, 0.7, 0], y: 140, rotate: 360 }}
      transition={{
        duration: 5 + Math.random() * 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 4,
      }}
      style={{
        position: "absolute",
        width: 9,
        height: 9,
        borderRadius: "50% 0 50% 0",
        background: color,
        pointerEvents: "none",
        ...style,
      }}
    />
  )
}

function Star({ style, delay }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.8, 1], opacity: [0.35, 1, 0.35] }}
      transition={{ duration: 2.5 + Math.random(), delay, repeat: Infinity }}
      style={{
        position: "absolute",
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "radial-gradient(circle, #ffe082, #f9a825)",
        boxShadow: "0 0 7px 2px rgba(255,215,0,0.55)",
        pointerEvents: "none",
        ...style,
      }}
    />
  )
}

function Divider({ width = 240 }) {
  const cx = width / 2
  return (
    <svg width={width} height='20' viewBox={`0 0 ${width} 20`} fill='none'>
      <line
        x1='0'
        y1='10'
        x2={cx - 30}
        y2='10'
        stroke='#b8860b'
        strokeWidth='0.8'
        strokeDasharray='4 3'
      />
      <circle cx={cx - 14} cy='10' r='3' fill='#c9a84c' opacity='0.7' />
      <path
        d={`M${cx} 3 L${cx + 7} 10 L${cx} 17 L${cx - 7} 10 Z`}
        fill='#b8860b'
        opacity='0.9'
      />
      <circle cx={cx + 14} cy='10' r='3' fill='#c9a84c' opacity='0.7' />
      <line
        x1={cx + 30}
        y1='10'
        x2={width}
        y2='10'
        stroke='#b8860b'
        strokeWidth='0.8'
        strokeDasharray='4 3'
      />
    </svg>
  )
}

function Corner({ flip, flipY }) {
  return (
    <svg
      width='84'
      height='84'
      viewBox='0 0 84 84'
      fill='none'
      style={{
        transform: `${flip ? "scaleX(-1)" : ""} ${flipY ? "scaleY(-1)" : ""}`,
      }}
    >
      <path
        d='M6 78 Q28 44 78 6'
        stroke='#b8860b'
        strokeWidth='1'
        opacity='0.32'
      />
      <path
        d='M6 78 Q16 52 38 36'
        stroke='#d4a843'
        strokeWidth='0.8'
        opacity='0.42'
      />
      <circle cx='13' cy='71' r='3.5' fill='#e8c97e' opacity='0.55' />
      <circle cx='26' cy='56' r='2.5' fill='#d4a843' opacity='0.5' />
      <circle cx='42' cy='40' r='3' fill='#c9a84c' opacity='0.5' />
      <circle cx='58' cy='24' r='2' fill='#e8c97e' opacity='0.4' />
      <circle cx='71' cy='11' r='3.5' fill='#e8c97e' opacity='0.55' />
      <path
        d='M20 62 Q28 52 36 56 Q28 64 20 62Z'
        fill='#b8860b'
        opacity='0.28'
      />
      <path
        d='M50 30 Q58 20 66 24 Q58 32 50 30Z'
        fill='#b8860b'
        opacity='0.26'
      />
    </svg>
  )
}

function InfoPill({ label, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{
          background: "linear-gradient(135deg, #6b3fa0, #9b5fcf)",
          borderRadius: 999,
          padding: "6px 22px",
          boxShadow: "0 4px 14px rgba(107,63,160,0.35)",
          cursor: "default",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 13,
            fontFamily: "'Noto Sans Gujarati', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
      </motion.div>
      <div
        style={{
          color: "#3d1f6e",
          fontSize: 13.5,
          fontFamily: "'Noto Sans Gujarati', sans-serif",
          textAlign: "center",
          lineHeight: 1.8,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function InvitationCard() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const petals = [
    { left: "6%", top: "4%", color: "#f9a8d4", delay: 0 },
    { left: "16%", top: "2%", color: "#c084fc", delay: 0.9 },
    { left: "70%", top: "3%", color: "#86efac", delay: 1.5 },
    { left: "84%", top: "7%", color: "#fde68a", delay: 0.3 },
    { left: "93%", top: "18%", color: "#f9a8d4", delay: 2.1 },
    { left: "4%", top: "32%", color: "#c084fc", delay: 1.3 },
    { left: "96%", top: "42%", color: "#86efac", delay: 0.6 },
    { left: "10%", top: "58%", color: "#fde68a", delay: 1.9 },
    { left: "88%", top: "62%", color: "#f9a8d4", delay: 0.8 },
    { left: "2%", top: "72%", color: "#c084fc", delay: 2.5 },
    { left: "91%", top: "78%", color: "#86efac", delay: 1.7 },
    { left: "46%", top: "1%", color: "#fde68a", delay: 1.1 },
    { left: "30%", top: "95%", color: "#c084fc", delay: 0.4 },
    { left: "60%", top: "93%", color: "#f9a8d4", delay: 1.4 },
  ]

  const stars = [
    { left: "22%", top: "7%", delay: 0 },
    { left: "63%", top: "11%", delay: 0.7 },
    { left: "80%", top: "28%", delay: 1.5 },
    { left: "9%", top: "44%", delay: 0.4 },
    { left: "91%", top: "53%", delay: 1.2 },
    { left: "38%", top: "87%", delay: 0.9 },
    { left: "74%", top: "84%", delay: 1.8 },
    { left: "50%", top: "5%", delay: 2.2 },
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf6f0 0%, #f5f0ff 50%, #e8f7f0 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@300;400;500;600;700&family=Noto+Serif+Gujarati:wght@400;600;700&display=swap');
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 32px 80px rgba(107,63,160,0.15), 0 8px 24px rgba(0,0,0,0.07); }
          50%      { box-shadow: 0 32px 100px rgba(107,63,160,0.30), 0 8px 40px rgba(255,200,100,0.12); }
        }
        @keyframes spinBorder {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Ambient orbs */}
      {[
        {
          w: 400,
          h: 400,
          top: -80,
          left: -100,
          color: "rgba(180,120,255,0.22)",
          dur: 6,
          delay: 0,
        },
        {
          w: 320,
          h: 320,
          bottom: -40,
          right: -80,
          color: "rgba(255,200,100,0.18)",
          dur: 7,
          delay: 1,
        },
        {
          w: 260,
          h: 260,
          bottom: 100,
          left: 30,
          color: "rgba(100,220,180,0.16)",
          dur: 5,
          delay: 2,
        },
      ].map((o, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: o.dur, repeat: Infinity, delay: o.delay }}
          style={{
            position: "absolute",
            width: o.w,
            height: o.h,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
            top: o.top,
            left: o.left,
            bottom: o.bottom,
            right: o.right,
            pointerEvents: "none",
          }}
        />
      ))}

      {petals.map((p, i) => (
        <Petal
          key={i}
          style={{ left: p.left, top: p.top }}
          color={p.color}
          delay={p.delay}
        />
      ))}
      {stars.map((s, i) => (
        <Star key={i} style={{ left: s.left, top: s.top }} delay={s.delay} />
      ))}

      {/* ══ CARD ══ */}
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 430,
          borderRadius: 26,
          background:
            "linear-gradient(160deg,#fffef9 0%,#fdf6ff 60%,#f0fdf4 100%)",
          animation: "pulseGlow 4s ease-in-out infinite",
          overflow: "hidden",
          padding: "0 0 28px",
        }}
      >
        {/* Top animated border */}
        <div
          style={{
            height: 5,
            background:
              "linear-gradient(90deg,#c084fc,#f9a8d4,#fde68a,#86efac,#c084fc)",
            backgroundSize: "300%",
            animation: "spinBorder 4s linear infinite",
          }}
        />

        {/* Corner decorations */}
        <div
          style={{
            position: "absolute",
            top: 5,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <Corner />
        </div>
        <div
          style={{
            position: "absolute",
            top: 5,
            right: 0,
            pointerEvents: "none",
          }}
        >
          <Corner flip />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 5,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <Corner flipY />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 5,
            right: 0,
            pointerEvents: "none",
          }}
        >
          <Corner flip flipY />
        </div>

        <div style={{ padding: "28px 28px 0" }}>
          {/* ॥ Shri Ganeshay Namah ॥ */}
          <motion.div
            {...fadeIn(0.3)}
            style={{ textAlign: "center", marginBottom: 10 }}
          >
            <span
              style={{
                fontFamily: "'Noto Serif Gujarati',serif",
                fontSize: 13.5,
                fontWeight: 600,
                letterSpacing: "0.1em",
                background: "linear-gradient(90deg,#6b3fa0,#b8860b,#6b3fa0)",
                backgroundSize: "300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 4s linear infinite",
              }}
            >
              ॥ શ્રી ગણેશાય નમઃ ॥
            </span>
          </motion.div>

          {/* Safety pin icon */}
          <motion.div
            {...fadeIn(0.5)}
            animate={{ rotate: [0, 12, -12, 0], y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
            style={{ textAlign: "center", fontSize: 26, marginBottom: 6 }}
          >
            🧷
          </motion.div>

          {/* Main Title */}
          <motion.div
            {...fadeUp(0.6)}
            style={{ textAlign: "center", lineHeight: 1.05, marginBottom: 6 }}
          >
            {["સીમંત", "સંસ્કાર"].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.7 + i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "'Noto Serif Gujarati',serif",
                  fontSize: i === 0 ? 54 : 50,
                  fontWeight: 700,
                  background:
                    i === 0
                      ? "linear-gradient(135deg,#7b2ff7 0%,#c084fc 45%,#b8860b 80%)"
                      : "linear-gradient(135deg,#b8860b 0%,#f9a825 45%,#7b2ff7 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 10px rgba(107,63,160,0.28))",
                }}
              >
                {word}
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            {...fadeIn(1.0)}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            <Divider width={200} />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            {...fadeUp(1.05)}
            style={{ textAlign: "center", marginBottom: 6 }}
          >
            <span
              style={{
                fontFamily: "'Noto Sans Gujarati',sans-serif",
                fontSize: 14,
                color: "#666",
                letterSpacing: "0.03em",
              }}
            >
              ચિ. બોની ના ધર્મપત્ની
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            {...fadeUp(1.15)}
            style={{ textAlign: "center", marginBottom: 6 }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 10px rgba(107,63,160,0)",
                  "0 0 28px rgba(107,63,160,0.55)",
                  "0 0 10px rgba(107,63,160,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                fontFamily: "'Noto Serif Gujarati',serif",
                fontSize: 36,
                fontWeight: 700,
                background: "linear-gradient(90deg,#6b3fa0,#9b5fcf,#b8860b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              અ.સૌ. કાજલ
            </motion.span>
          </motion.div>

          {/* Stars row */}
          <motion.div
            {...fadeIn(1.2)}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginBottom: 14,
              fontSize: 14,
            }}
          >
            {["✦", "♥", "✦"].map((s, i) => (
              <motion.span
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                style={{ color: i === 1 ? "#e879f9" : "#b8860b" }}
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            {...fadeIn(1.25)}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Divider width={160} />
          </motion.div>

          {/* Greeting */}
          <motion.div
            {...fadeUp(1.3)}
            style={{ textAlign: "center", marginBottom: 14 }}
          >
            <span
              style={{
                fontFamily: "'Noto Sans Gujarati',sans-serif",
                fontSize: 15,
                color: "#4a2c7a",
                fontWeight: 700,
              }}
            >
              સ્નેહી શ્રી,
            </span>
          </motion.div>

          {/* Body paragraph */}
          <motion.div {...fadeUp(1.4)}>
            <div
              style={{
                fontFamily: "'Noto Sans Gujarati',sans-serif",
                fontSize: 13.5,
                color: "#3a2a55",
                lineHeight: 1.9,
                textAlign: "center",
                padding: "16px 10px",
                background: "rgba(180,120,255,0.06)",
                borderRadius: 14,
                border: "1px solid rgba(180,120,255,0.14)",
                marginBottom: 22,
              }}
            >
              સહર્ષ સાથે જણાવવાનું કે અમારી કુળદેવી શ્રી ઉમિયા માતાજીની અસીમ
              કૃપાથી અ.સૌ. મધુબેન તથા રાજેશભાઈ મણીલાલ પટેલ ના સુપુત્ર ચિ. બોની
              ના ધર્મપત્ની અ.સૌ. કાજલ ના સીમંત વિધિનો શુભ મંગળ પ્રસંગ સંવત ૨૦૮૨
              વૈશાખ સુદ દશમ, રવિવાર તા. ૨૬/૦૪/૨૦૨૬ સવારે ૧૦:૦૦ કલાકે રાખેલ છે.
              તો આ શુભ પ્રસંગે અમારા પુત્રવધૂને આશીર્વાદ આપવા પધારી શોભામાં
              અભિવૃદ્ધિ કરશોજી.
            </div>
          </motion.div>

          {/* Info pills grid */}
          <motion.div
            {...fadeUp(1.55)}
            className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5'
          >
            <InfoPill label='ભોજન સમારંભ'>
              તા. ૨૬/૦૪/૨૦૨૬,
              <br />
              બપોરે ૧૧:૩૦ કલાકે
            </InfoPill>

            <InfoPill label='શુભ સ્થળ'>
              સંસ્કાર ભવનની વાડી,
              <br />
              કલ્યાણપુરા - ઊંઝા
            </InfoPill>
          </motion.div>

          {/* Divider */}
          <motion.div
            {...fadeIn(1.65)}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Divider width={180} />
          </motion.div>

          {/* Nimantrak pill */}
          <motion.div
            {...fadeUp(1.7)}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              style={{
                background: "linear-gradient(135deg,#6b3fa0,#9b5fcf)",
                borderRadius: 999,
                padding: "7px 32px",
                boxShadow: "0 4px 18px rgba(107,63,160,0.38)",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "'Noto Sans Gujarati',sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                નિમંત્રક
              </span>
            </motion.div>
          </motion.div>

          {/* Host details */}
          <motion.div {...fadeUp(1.8)}>
            <div
              style={{
                fontFamily: "'Noto Sans Gujarati',sans-serif",
                fontSize: 13.5,
                color: "#3a2a55",
                lineHeight: 1.9,
                textAlign: "center",
                padding: "16px 10px",
                background: "rgba(180,120,255,0.05)",
                borderRadius: 14,
                border: "1px solid rgba(180,120,255,0.12)",
              }}
            >
              <div
                style={{ fontWeight: 700, fontSize: 14.5, color: "#3d1f6e" }}
              >
                પટેલ રાજેશભાઈ મણીલાલ (ઉમતાવાળા)
              </div>
              <div style={{ color: "#5a4080", marginTop: 3 }}>
                સ્વ. પટેલ જોઈતારામ પ્રભુદાસ (સુરતી) સહ પરિવાર
              </div>
              <div style={{ marginTop: 5, color: "#4a3570", fontSize: 13 }}>
                સરનામું: ૨૨, અંબિકા સોસાયટી,
                <br />
                ઉમિયા માતાની પાછળ - ઊંઝા.
              </div>

              {/* Phone numbers */}
              <motion.div
                style={{
                  marginTop: 12,
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {["9978216995", "95108 36273"].map((num, i) => (
                  <motion.span
                    key={num}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2 + i * 0.2 }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 4px 16px rgba(107,63,160,0.4)",
                    }}
                    style={{
                      background: "linear-gradient(135deg,#6b3fa0,#9b5fcf)",
                      color: "#fff",
                      borderRadius: 9,
                      padding: "5px 14px",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      boxShadow: "0 2px 10px rgba(107,63,160,0.28)",
                      cursor: "default",
                    }}
                  >
                    📱 {num}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom animated border */}
        <div
          style={{
            marginTop: 24,
            height: 5,
            background:
              "linear-gradient(90deg,#86efac,#fde68a,#f9a8d4,#c084fc,#86efac)",
            backgroundSize: "300%",
            animation: "spinBorder 4s linear infinite",
          }}
        />
      </motion.div>

      <audio autoPlay loop>
        <source src='/music.mp3' />
      </audio>
    </div>
  )
}
