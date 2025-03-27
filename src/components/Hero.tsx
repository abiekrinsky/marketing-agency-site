"use client";

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import ContactForm from './ContactForm'
import BouncingHeadshot from './BouncingHeadshot'
import ServiceModules from './ServiceModules'
import KeyPoints from './KeyPoints'

export default function Hero() {
  const { scrollY } = useScroll()
  
  // Create staggered bounce animations for logos
  const logoY = useTransform(scrollY, [0, 100], [0, -20])
  const logoOpacity = useTransform(scrollY, [0, 100], [0.5, 1])

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(8,29,50)]">
      {/* Hero Section */}
      <div className="flex-1 flex items-start pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl pt-[10px]"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Are You A Restaurant Seeking <span className="text-[#1E90FF]">Sales Growth?</span>  
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                You Just Found Your New Partner For Digital Marketing Fueled 
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"><p>🚀 Growth 🚀</p></h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with our proven digital marketing strategies. 
                I&apos;ve delivered measurable results that drive growth and revenue.
              </p>
              
              {/* Certification Badges */}
              <motion.div
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col items-center gap-4 mb-8"
              >
                <div className="flex items-center justify-center gap-8">
                  <motion.div 
                    style={{ y: logoY }}
                    className="relative w-[100px] h-[100px] bg-transparent drop-shadow-lg"
                  >
                    <Image
                      src="/images/logos/tiktok-logo.png"
                      alt="TikTok Certified Marketing Professional"
                      fill
                      className="object-contain"
                      priority
                      sizes="100px"
                      unoptimized
                    />
                  </motion.div>
                  <motion.div 
                    style={{ y: logoY }}
                    className="relative w-[100px] h-[100px] bg-transparent drop-shadow-lg"
                  >
                    <Image
                      src="/images/logos/ig-logo.png"
                      alt="Instagram Certified Marketing Professional"
                      fill
                      className="object-contain"
                      priority
                      sizes="100px"
                      unoptimized
                    />
                  </motion.div>
                  <motion.div 
                    style={{ y: logoY }}
                    className="relative w-[100px] h-[100px] bg-transparent drop-shadow-lg"
                  >
                    <Image
                      src="/images/logos/google-logo.png"
                      alt="Google Certified Marketing Professional"
                      fill
                      className="object-contain"
                      priority
                      sizes="100px"
                      unoptimized
                    />
                  </motion.div>
                </div>
                <motion.h3 
                  style={{ opacity: logoOpacity }}
                  className="text-2xl font-bold text-white/90"
                >
                  Certified Expert
                </motion.h3>
              </motion.div>

              {/* Headshot */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-[300px] h-[300px] mx-auto mb-12"
              >
                <BouncingHeadshot />
              </motion.div>

              {/* Key Points */}
              <KeyPoints />

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-2xl mx-auto w-full"
              >
                <ContactForm />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Modules Section */}
      <div className="relative z-10">
        <ServiceModules />
      </div>

      {/* Final Contact Form */}
      <div className="py-20 bg-[rgb(8,29,50)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
} 