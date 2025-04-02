"use client";

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import BouncingHeadshot from './BouncingHeadshot'
import ServiceModules from './ServiceModules'
import KeyPoints from './KeyPoints'
import ProgressiveForm from './ProgressiveForm'

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
              className="text-center w-full max-w-4xl pt-[10px]"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Want to Boost Your Restaurant&apos;s Sales?
              </h1>

              {/* Certification Badges */}
              <div className="w-full flex flex-col items-center mb-8">
                <motion.div
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col items-center gap-4"
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
              </div>

              {/* Headshot */}
              <div className="w-full flex flex-col items-center mb-8">
                <div className="w-[300px] flex justify-center">
                  <BouncingHeadshot />
                </div>
                <a 
                  href="https://www.linkedin.com/in/abrahamkrinsky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Connect with a TikTok & Meta Veteran</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                You Just Found Your New Partner For Digital Marketing Fueled Growth
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with our proven digital marketing strategies. 
                I&apos;ve delivered measurable results that drive growth and revenue.
              </p>

              {/* Progressive Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-2xl mx-auto w-full mb-8"
              >
                <ProgressiveForm />
              </motion.div>

              {/* Key Points */}
              <KeyPoints />
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
            <ProgressiveForm />
          </div>
        </div>
      </div>
    </div>
  )
} 