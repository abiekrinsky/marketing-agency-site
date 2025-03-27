"use client";

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import AnimatedIcon from '../ui/AnimatedIcon'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

interface ServiceModuleProps {
  title: string
  description: string
  image: string
  link: string
  gradient: string
  features: string[]
}

export default function ServiceModule({
  title,
  description,
  image,
  link,
  gradient,
  features
}: ServiceModuleProps) {
  return (
    <Link 
      href={link}
      className="group relative block h-[400px] w-full overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-20" />
      <div className={`absolute inset-0 opacity-75 ${gradient}`} />
      
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className="text-lg text-white/90">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
} 