"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

interface CaseStudyProps {
  title: string
  description: string
  metrics: {
    label: string
    value: string
  }[]
  image: string
  isReversed?: boolean
}

export default function CaseStudy({
  title,
  description,
  metrics,
  image,
  isReversed = false
}: CaseStudyProps) {
  return (
    <div className={`flex min-h-screen items-center py-20 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              {title}
            </h2>
            <p className="text-lg text-gray-700">
              {description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                >
                  <p className="text-4xl font-bold text-blue-600">
                    {metric.value}
                  </p>
                  <p className="text-lg text-gray-600">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[400px] overflow-hidden rounded-2xl lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />
            <Image
              src={image}
              alt={`${title} case study`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 