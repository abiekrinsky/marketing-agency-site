"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceModuleProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: React.ReactNode
  image: string
  isReversed?: boolean
  link: string
  gradient: string
}

export default function ServiceModule({
  title,
  subtitle,
  description,
  features,
  icon,
  image,
  isReversed = false,
  link,
  gradient
}: ServiceModuleProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className={`grid lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
        {/* Content Section */}
        <div className="relative z-10 p-8 lg:p-12">
          <div className="mb-6 flex items-center gap-3">
            <motion.div 
              className="rounded-lg p-2 text-blue-600"
              animate={{
                backgroundColor: [
                  'rgb(228, 238, 253)',
                  'rgb(45, 92, 242)',
                  'rgb(228, 238, 253)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.5, 1]
              }}
            >
              {icon}
            </motion.div>
            <span className="text-sm font-medium text-blue-600">{subtitle}</span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mb-6 text-lg text-gray-600">{description}</p>
          
          <ul className="mb-8 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <Link 
            href={link}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            Learn More
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative h-[300px] lg:h-full">
          <div className={`absolute inset-0 ${gradient}`} />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
} 