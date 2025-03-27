"use client";

import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(8,29,50)]">
      <Hero />
      
      {/* Value Proposition Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business with Digital Marketing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We help businesses grow through strategic digital marketing solutions. 
              Our data-driven approach delivers measurable results.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: '200%', label: 'Average ROI' },
              { number: '1M+', label: 'Leads Generated' },
              { number: '50+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
