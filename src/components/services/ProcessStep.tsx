"use client";

import { motion } from 'framer-motion'

interface ProcessStepProps {
  number: string
  title: string
  description: string
  index?: number
}

export default function ProcessStep({
  number,
  title,
  description,
  index = 0
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={{ y: -5 }}
      className="text-center group"
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.2 + 0.2,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="relative w-16 h-16 mx-auto mb-4"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
          {number}
        </div>
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.2 + 0.4,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="text-gray-700 group-hover:text-gray-900 transition-colors"
      >
        {description}
      </motion.p>
    </motion.div>
  )
} 