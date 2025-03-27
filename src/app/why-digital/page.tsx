"use client";

import { motion } from 'framer-motion'
import { ChartBarIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function WhyDigital() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Your Business Needs to Be Digital
          </h1>
          <p className="text-xl text-gray-300">
            In today&apos;s digital age, your restaurant&apos;s online presence is just as important as your physical location. Let&apos;s explore why.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <GlobeAltIcon className="w-12 h-12 text-blue-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Being Online Matters</h2>
            <p className="text-gray-700 mb-6">
              Most customers now discover businesses through Google, Instagram, and TikTok.
              Having a strong online presence is no longer optional—it's essential for growth.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• 97% of consumers search online for local businesses</li>
              <li>• 70% of purchase decisions start with an online search</li>
              <li>• Digital presence builds credibility and trust</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <ChartBarIcon className="w-12 h-12 text-blue-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">More Than Just Posting</h2>
            <p className="text-gray-700 mb-6">
              Organic social media is great for engagement but unreliable for reach.
              A strategic approach combines multiple channels for maximum impact.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Targeted advertising reaches ideal customers</li>
              <li>• Data-driven decisions improve ROI</li>
              <li>• Multi-channel approach maximizes visibility</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <UserGroupIcon className="w-12 h-12 text-blue-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Own Your Customer Relationships</h2>
            <p className="text-gray-700 mb-6">
              Email, SMS, and retargeting let you keep in touch with customers
              so they return and spend more.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Build direct communication channels</li>
              <li>• Increase customer lifetime value</li>
              <li>• Create personalized experiences</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Let's create a digital strategy that works for your business.
            Book your free consultation today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Let's Build Your Digital Presence →
          </a>
        </motion.div>
      </section>
    </div>
  )
} 