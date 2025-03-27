'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export default function BouncingHeadshot() {
  const ref = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !hasScrolled) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const y = useTransform(
    scrollY,
    [0, 300],
    [0, -30]
  )

  return (
    <motion.div
      ref={ref}
      className={`fixed right-8 top-[45%] z-10 transition-opacity duration-500 ${
        hasScrolled ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ y }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="relative h-48 w-48 overflow-hidden rounded-full bg-white/10 backdrop-blur-md">
        <Image
          src="/images/abie-headshot.jpeg"
          alt="Abie's headshot"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  )
} 