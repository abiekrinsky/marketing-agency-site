"use client";

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

interface ServiceModuleProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  image: string
  link: string
  gradient: string
}

export default function ServiceModule({
  title,
  description,
  features,
  icon,
  image,
  link,
  gradient
}: ServiceModuleProps) {
  return (
    <Link href={link} className="group relative overflow-hidden rounded-2xl">
      <div className={`absolute inset-0 ${gradient} opacity-0 transition-opacity group-hover:opacity-100 z-10`} />
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
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