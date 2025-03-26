"use client";

import { motion } from 'framer-motion'
import ScrollProgress from '@/components/ui/ScrollProgress'
import ServiceModule from '@/components/services/ServiceModule'
import ServiceCarousel from '@/components/services/ServiceCarousel'
import { 
  ChartBarIcon, 
  MegaphoneIcon, 
  CodeBracketIcon, 
  RocketLaunchIcon,
  LightBulbIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline'
import { useRef } from 'react'

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
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=100&w=3840",
    successStory: {
      title: "E-commerce Growth Strategy",
      description: "Helped a retail client increase online sales by 200% through comprehensive digital strategy.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=100&w=3840",
      metrics: "200% increase in online sales • 150% ROI • 3x customer acquisition"
    }
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
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=100&w=3840",
    isReversed: true,
    successStory: {
      title: "Social Media Campaign",
      description: "Launched a viral social media campaign that reached 1M+ potential customers.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=100&w=3840",
      metrics: "1M+ reach • 50% engagement rate • 300% follower growth"
    }
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
    successStory: {
      title: "E-commerce Platform",
      description: "Built a custom e-commerce platform that increased conversion rate by 75%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=100&w=3840",
      metrics: "75% higher conversion rate • 2x faster load time • 40% more sales"
    }
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
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=100&w=3840",
    isReversed: true,
    successStory: {
      title: "Brand Transformation",
      description: "Transformed a traditional brand into a modern digital presence.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=100&w=3840",
      metrics: "85% brand recognition • 60% market share increase • 2x brand value"
    }
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
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=100&w=3840",
    successStory: {
      title: "Data-Driven Optimization",
      description: "Implemented analytics that increased marketing efficiency by 120%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=100&w=3840",
      metrics: "120% efficiency increase • 40% cost reduction • 3x ROI"
    }
  }
]

export default function Services() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleServiceClick = (index: number) => {
    const targetRef = serviceRefs.current[index]
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="relative">
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with Digital Excellence
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Our comprehensive suite of digital services helps businesses thrive in the modern digital landscape.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Carousel */}
      <ServiceCarousel
        services={services.map(({ title, subtitle, icon, successStory }) => ({ 
          title, 
          subtitle, 
          icon, 
          successStory 
        }))}
        onServiceClick={handleServiceClick}
      />

      {/* Services Modules */}
      {services.map((service, index) => (
        <div key={service.title} ref={(el) => { serviceRefs.current[index] = el }}>
          <ServiceModule
            {...service}
            index={index}
          />
        </div>
      ))}

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
              Let's create something extraordinary together.
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