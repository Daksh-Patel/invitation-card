"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function InvitationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='absolute inset-0 flex flex-col items-center justify-center p-4'
    >
      {/* FLOATING DECOR */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className='absolute top-6 text-xl'
      >
        ✨
      </motion.div>

      {/* CARD */}
      <div className='rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-md'>
        <Image
          src='/invitation.jpg'
          alt='Invitation'
          width={350}
          height={700}
          className='object-cover'
        />
      </div>

      {/* MUSIC */}
      <audio autoPlay loop>
        <source src='/music.mp3' />
      </audio>
    </motion.div>
  )
}
