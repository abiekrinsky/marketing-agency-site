"use client";

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import AnimatedIcon from '../ui/AnimatedIcon'
import Link from 'next/link'

interface ServiceModuleProps {
  title: string
  description: string
  image: string
  link: string
  gradient: string
}

export default function ServiceModule({
  title,
  description,
  image,
  link,
  gradient
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
      </div>
    </Link>
  )
} 