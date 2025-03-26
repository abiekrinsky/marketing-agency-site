"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center pt-20 bg-[rgb(8,29,50)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Looking To Grow Sales? We Are Your Partner For Digital Marketing Fueled Growth
            </motion.h1>
            
            {/* Certification Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-[160px] h-[160px]">
                  <Image
                    src="/images/logos/tiktok-logo.jpeg"
                    alt="TikTok Certified Marketing Professional"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white/80 text-sm">TikTok Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-[160px] h-[160px]">
                  <Image
                    src="/images/logos/ig-logo.jpeg"
                    alt="Meta Certified Marketing Professional"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white/80 text-sm">Meta Certified</span>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Strategic digital solutions that drive growth, engage customers, and build lasting success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Let's Create Something Great
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Digital Strategy</h3>
                  <p className="text-gray-300">Comprehensive plans that align with your business goals</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Social Media</h3>
                  <p className="text-gray-300">Engaging content that builds your brand</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">SEO & Analytics</h3>
                  <p className="text-gray-300">Data-driven optimization for better results</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Content Marketing</h3>
                  <p className="text-gray-300">Compelling stories that resonate with your audience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 