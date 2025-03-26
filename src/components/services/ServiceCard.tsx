"use client";

import { motion } from 'framer-motion'
import AnimatedIcon from '../ui/AnimatedIcon'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  features: string[]
  index?: number
}

export default function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  features,
  index = 0
}: ServiceCardProps) {
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
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <AnimatedIcon 
        icon={icon} 
        className="mb-6"
        delay={index * 0.2}
      />
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.2 }}
        className="text-2xl font-bold mb-2 text-gray-900"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="text-blue-600 font-semibold mb-4"
      >
        {subtitle}
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.4 }}
        className="text-gray-700 mb-6"
      >
        {description}
      </motion.p>
      <motion.ul 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.5 }}
        className="space-y-3"
      >
        {features.map((feature, i) => (
          <motion.li 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
            className="flex items-start text-gray-700"
          >
            <span className="mr-2">•</span>
            {feature}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
} 