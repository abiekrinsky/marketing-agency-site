'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const modules = [
  {
    title: "Our Services",
    description: "Discover our comprehensive digital marketing solutions tailored for restaurants.",
    image: "/images/services/marketing.jpg",
    link: "/services",
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    title: "Case Studies",
    description: "See how we've helped restaurants achieve remarkable growth.",
    image: "/images/services/analytics.jpg",
    link: "/case-studies",
    gradient: "from-green-600/20 to-blue-600/20"
  },
  {
    title: "About Us",
    description: "Learn about our expertise and commitment to restaurant success.",
    image: "/images/services/strategy.jpg",
    link: "/about",
    gradient: "from-purple-600/20 to-pink-600/20"
  }
]

export default function ServiceModules() {
  return (
    <section className="py-20 bg-[rgb(8,29,50)]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Explore Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={module.link}>
                <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="relative h-64">
                    <Image
                      src={module.image}
                      alt={module.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{module.title}</h3>
                    <p className="text-gray-300">{module.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 