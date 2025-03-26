"use client";

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ServiceCarouselProps {
  services: {
    title: string
    subtitle: string
    icon: React.ReactNode
    successStory: {
      title: string
      description: string
      image: string
      metrics: string
    }
  }[]
  onServiceClick: (index: number) => void
}

export default function ServiceCarousel({ services, onServiceClick }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Create a duplicated array for seamless infinite scroll
  const duplicatedServices = [...services, ...services]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 150000) // 150 seconds for one full rotation
    return () => clearInterval(timer)
  }, [services.length])

  return (
    <div 
      className="relative w-full h-[300px] overflow-hidden"
    >
      <motion.div
        className="absolute flex gap-8"
        animate={{
          x: [-currentIndex * (100 / 3) + '%', -(currentIndex + services.length) * (100 / 3) + '%']
        }}
        transition={{
          duration: 150,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {duplicatedServices.map((service, index) => (
          <motion.div
            key={index}
            className="w-[calc(33.333%-1.5rem)] h-[300px] flex flex-col cursor-pointer bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-lg"
            onClick={() => onServiceClick(index % services.length)}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            {/* Service Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {service.title}
                </h2>
              </div>
              <p className="text-base text-gray-300">
                {service.subtitle}
              </p>
            </div>

            {/* Success Story */}
            <div className="flex-1 p-6">
              <div className="relative h-36 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.successStory.image}
                  alt={service.successStory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {service.successStory.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {service.successStory.description}
                  </p>
                </div>
              </div>
              <div className="text-sm text-white/80 font-medium">
                {service.successStory.metrics}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 