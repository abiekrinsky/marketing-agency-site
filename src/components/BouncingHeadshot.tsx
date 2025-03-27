'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function BouncingHeadshot() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleInteraction = () => {
      setIsVisible(true)
    }

    // Handle scroll
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true)
      }
    }

    // Handle click anywhere on the page
    const handleClick = () => {
      setIsVisible(true)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('click', handleClick)
    window.addEventListener('touchstart', handleClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchstart', handleClick)
    }
  }, [])

  // Transform scroll position to various animations
  const y = useTransform(scrollY, [0, 100], [0, -20])
  const opacity = useTransform(scrollY, [0, 100], [0.8, 1])
  const scale = useTransform(scrollY, [0, 100], [0.95, 1])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1,
        y: [0, -20, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          ease: "easeOut"
        },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }
      }}
      style={{ 
        y,
        opacity,
        scale,
      }}
      className="relative w-full h-full rounded-full overflow-hidden"
    >
      <Image
        src="/images/abie-headshot.jpeg"
        alt="Abie Krinsky - Digital Marketing Expert"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  )
} 