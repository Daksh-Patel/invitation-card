"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function DoorScene({ onComplete }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)

    setTimeout(() => {
      onComplete()
    }, 1800)
  }

  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center [perspective:1200px]'>
      {/* BUTTON */}
      {!open && (
        <Button
          onClick={handleOpen}
          className='absolute top-8 z-50 bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg rounded-full px-6'
        >
          Open Invitation
        </Button>
      )}

      {/* RIBBON */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={open ? { scaleX: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className='absolute w-[80%] h-3 bg-gradient-to-r from-pink-500 to-red-500 z-40 origin-center rounded-full shadow-md'
      />

      {/* DOORS */}
      <div className='flex w-full h-full'>
        {/* LEFT DOOR */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={open ? { rotateY: -100 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className='w-1/2 h-full bg-gradient-to-br from-[#8B4513] to-[#5a2d0c] origin-left'
        />

        {/* RIGHT DOOR */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={open ? { rotateY: 100 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className='w-1/2 h-full bg-gradient-to-br from-[#8B4513] to-[#5a2d0c] origin-right'
        />
      </div>
    </div>
  )
}
