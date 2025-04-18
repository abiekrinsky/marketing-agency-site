"use client";

import { motion } from 'framer-motion'
import ScrollProgress from '@/components/ui/ScrollProgress'
import ServiceModule from '@/components/services/ServiceModule'
import { 
  ChartBarIcon, 
  MegaphoneIcon, 
  CodeBracketIcon,
  LightBulbIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline'
import { useRef } from 'react'
import Image from 'next/image'

const services = [
  {
    title: "Digital Strategy",
    subtitle: "Data-Driven Growth",
    description: "We develop comprehensive digital strategies that align with your business goals and drive measurable results.",
    features: [
      "Market analysis and competitor research",
      "Custom growth strategy development",
      "Performance metrics and KPIs",
      "Regular strategy optimization"
    ],
    icon: <ChartBarIcon />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=100&w=3840",
    link: "/services/digital-strategy",
    gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Digital Marketing",
    subtitle: "Multi-Channel Excellence",
    description: "Our integrated marketing approach ensures your message reaches the right audience across all digital channels.",
    features: [
      "Social media management",
      "Email marketing campaigns",
      "Content marketing strategy",
      "Paid advertising optimization"
    ],
    icon: <MegaphoneIcon />,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=100&w=3840",
    isReversed: true,
    link: "/services/digital-marketing",
    gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Web Development",
    subtitle: "Modern Digital Solutions",
    description: "We create stunning, high-performance websites that convert visitors into customers.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Mobile-first design",
      "Performance optimization"
    ],
    icon: <CodeBracketIcon />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=100&w=3840",
    link: "/services/web-development",
    gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Brand Strategy",
    subtitle: "Stand Out in the Digital Age",
    description: "We help you build a strong, memorable brand that resonates with your target audience.",
    features: [
      "Brand identity development",
      "Visual design systems",
      "Brand voice and messaging",
      "Brand guidelines"
    ],
    icon: <LightBulbIcon />,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=100&w=3840",
    isReversed: true,
    link: "/services/brand-strategy",
    gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Analytics & Reporting",
    subtitle: "Data-Driven Decisions",
    description: "Make informed decisions with our comprehensive analytics and reporting solutions.",
    features: [
      "Performance tracking",
      "Custom reporting dashboards",
      "ROI analysis",
      "Actionable insights"
    ],
    icon: <PresentationChartLineIcon />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=100&w=3840",
    link: "/services/analytics-reporting",
    gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  }
]

export default function Services() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <main className="relative">
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-900 to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                Our Services
              </h1>
              <p className="text-xl text-gray-300">
                Here&apos;s how we can help pack your restaurant with new customers!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] lg:h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=100&w=3840"
                alt="Professional Marketing Team"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} ref={(el) => { serviceRefs.current[index] = el }}>
                <ServiceModule
                  {...service}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8">
              Let&apos;s create something extraordinary together.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 