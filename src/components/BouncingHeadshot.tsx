'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BouncingHeadshot() {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }}
    >
      <div className="relative h-48 w-48 overflow-hidden rounded-full bg-white/10 backdrop-blur-md">
        <Image
          src="/images/abie-headshot.jpeg"
          alt="Abie&apos;s headshot"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  )
} 