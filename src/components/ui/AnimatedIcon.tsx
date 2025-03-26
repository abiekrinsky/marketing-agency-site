"use client";

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedIconProps {
  icon: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedIcon({ icon, className = "", delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10
        }
      }}
      transition={{ 
        duration: 0.3,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        {icon}
      </div>
    </motion.div>
  )
} 