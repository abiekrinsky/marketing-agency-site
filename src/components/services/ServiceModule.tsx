"use client";

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import AnimatedIcon from '../ui/AnimatedIcon'

interface ServiceModuleProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: React.ReactNode
  image: string
  index: number
  isReversed?: boolean
}

export default function ServiceModule({
  title,
  subtitle,
  description,
  features,
  icon,
  image,
  index,
  isReversed = false
}: ServiceModuleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`min-h-screen flex items-center py-20 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="inline-block">
              <AnimatedIcon icon={icon} className="text-4xl text-blue-600" />
            </div>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              {title}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-600 font-semibold"
            >
              {subtitle}
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700"
            >
              {description}
            </motion.p>
            <motion.ul 
              variants={itemVariants}
              className="space-y-4"
            >
              {features.map((feature, i) => (
                <motion.li 
                  key={i}
                  variants={itemVariants}
                  className="flex items-start text-gray-700"
                >
                  <span className="mr-2 text-blue-600">•</span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 