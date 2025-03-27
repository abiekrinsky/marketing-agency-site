'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function KeyPoints() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 10%"]  // Start when section is 85% in view, end when section is 10% from top
  })

  // Transform scroll progress for slower, more visible animation
  // Both top and right animations complete together at 0.3
  const topWidth = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"])
  const rightHeight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"])
  // Left and bottom start after first phase completes
  const leftHeight = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "100%"])
  const bottomWidth = useTransform(scrollYProgress, [0.6, 0.9], ["0%", "100%"])

  return (
    <section className="py-20 bg-[rgb(8,29,50)] relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Animated Border Container */}
          <div className="absolute -top-8 -left-8 -right-8 -bottom-8">
            {/* Top Border - Right to Left */}
            <motion.div 
              className="absolute top-0 right-0 h-[2px] bg-red-600 origin-right"
              style={{ width: topWidth }}
            />
            {/* Right Border - Top to Bottom */}
            <motion.div 
              className="absolute top-0 right-0 w-[2px] bg-red-600"
              style={{ height: rightHeight }}
            />
            {/* Left Border - Top to Bottom */}
            <motion.div 
              className="absolute top-0 left-0 w-[2px] bg-red-600 origin-top"
              style={{ height: leftHeight }}
            />
            {/* Bottom Border - Right to Left */}
            <motion.div 
              className="absolute bottom-0 right-0 h-[2px] bg-red-600 origin-right"
              style={{ width: bottomWidth }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
              WHY DIGITAL MATTERS?
            </h2>

            <div className="space-y-16">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex items-start gap-8"
                >
                  <span className="text-6xl text-gray-600 font-bold">1</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">LOCAL DISCOVERY</h3>
                    <p className="text-xl text-gray-300">
                      93% of diners check online menus before eating out. Without a strong digital presence, 
                      you&apos;re invisible to thousands of potential customers searching for restaurants like yours every day.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-start gap-8"
                >
                  <span className="text-6xl text-gray-600 font-bold">2</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">CUSTOMER ENGAGEMENT</h3>
                    <p className="text-xl text-gray-300">
                      Social media and email marketing keep your restaurant top-of-mind, turning one-time visitors 
                      into loyal regulars through engaging content and personalized offers.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-start gap-8"
                >
                  <span className="text-6xl text-gray-600 font-bold">3</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">MEASURABLE GROWTH</h3>
                    <p className="text-xl text-gray-300">
                      Digital marketing provides real-time data on what works. Track reservations, 
                      measure promotion success, and adjust strategies instantly to maximize your ROI.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 