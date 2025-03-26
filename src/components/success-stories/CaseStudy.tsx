"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedIcon from '../ui/AnimatedIcon'

interface CaseStudyProps {
  title: string
  description: string
  metrics: { label: string; value: string }[]
  image: string
  testimonial: {
    quote: string
    author: string
    role: string
  }
  index?: number
}

export default function CaseStudy({
  title,
  description,
  metrics,
  image,
  testimonial,
  index = 0
}: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.2 }}
            className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.3 }}
            className="text-gray-700 mb-6"
          >
            {description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.4 }}
            className="grid grid-cols-3 gap-4 mb-6"
          >
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                className="group-hover:bg-blue-50 p-4 rounded-lg transition-colors"
              >
                <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">{metric.value}</div>
                <div className="text-sm text-gray-700">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-gray-700 italic mb-4 relative">"{testimonial.quote}"</p>
            <div className="relative">
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-gray-700">{testimonial.role}</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.6 }}
          className="relative h-[400px] md:h-auto overflow-hidden group"
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
    </motion.div>
  )
} 