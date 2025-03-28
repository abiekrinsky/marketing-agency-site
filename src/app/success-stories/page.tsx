"use client";

import { motion } from 'framer-motion'
import CaseStudy from '../../components/success-stories/CaseStudy'

export default function SuccessStories() {
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
            Success Stories
          </h1>
          <p className="text-xl text-gray-700">
            Discover how we&apos;ve helped businesses achieve remarkable growth through digital marketing.
          </p>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 gap-12">
          <CaseStudy
            title="Local Café Grew 3x with Online Orders"
            description="Before digital marketing, this café relied solely on foot traffic. Now, 40% of their revenue comes from online customers."
            metrics={[
              { label: 'Revenue Growth', value: '300%' },
              { label: 'Online Orders', value: '40%' },
              { label: 'New Customers', value: '500+' }
            ]}
            image="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80"
            testimonial={{
              quote: "Working with Abie transformed our business. We went from struggling to keep up with competitors to becoming the go-to café in our area.",
              author: "Sarah Johnson",
              role: "Owner, The Daily Grind Café"
            }}
            index={0}
          />

          <CaseStudy
            title="Family-Owned Restaurant Increased Reservations by 50%"
            description="By implementing targeted digital promotions and a new online booking system, this restaurant filled their slow nights with bookings."
            metrics={[
              { label: 'Reservation Increase', value: '50%' },
              { label: 'Table Turnover', value: '+25%' },
              { label: 'Revenue Growth', value: '45%' }
            ]}
            image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
            testimonial={{
              quote: "The strategies Abie implemented helped us reach a whole new customer base we didn't know existed. Our slow nights are now some of our busiest!",
              author: "Michael Chen",
              role: "Owner, Chen's Family Restaurant"
            }}
            index={1}
          />

          <CaseStudy
            title="Boutique Retail Store Doubles Online Sales"
            description="Through strategic social media marketing and email campaigns, this boutique expanded their reach beyond their local market."
            metrics={[
              { label: 'Online Sales', value: '+200%' },
              { label: 'Social Followers', value: '10K+' },
              { label: 'Email List', value: '5K+' }
            ]}
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
            testimonial={{
              quote: "Abie's expertise in digital marketing helped us navigate the online retail space with confidence. Our online presence has become a major revenue stream.",
              author: "Lisa Rodriguez",
              role: "Owner, Style & Grace Boutique"
            }}
            index={2}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            We&apos;ve helped businesses achieve remarkable growth through digital marketing.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Let&apos;s Create Your Success Story →
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
} 