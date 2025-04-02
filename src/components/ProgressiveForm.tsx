'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  email: string
  name: string
  phone: string
  company: string
}

export default function ProgressiveForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    phone: '',
    company: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Move to next step when current field is filled
    if (value.trim() !== '') {
      if (step < 3) {
        setStep(prev => prev + 1)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Log the form data
      console.log('Form submitted:', formData)
      
      // Create Calendly URL with prefilled name and email
      const calendlyUrl = new URL('https://calendly.com/abiekrinsky/30min')
      calendlyUrl.searchParams.append('name', formData.name)
      calendlyUrl.searchParams.append('email', formData.email)
      
      // Open Calendly with prefilled data
      window.open(calendlyUrl.toString(), '_blank')
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formFields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      value: formData.email
    },
    {
      name: 'name',
      type: 'text',
      placeholder: 'Enter your name',
      value: formData.name
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Enter your phone number',
      value: formData.phone
    },
    {
      name: 'company',
      type: 'text',
      placeholder: 'Enter your company name',
      value: formData.company
    }
  ]

  return (
    <motion.div
      className="relative p-6 rounded-lg backdrop-blur-md"
      initial={false}
      animate={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.07)',
      }}
      style={{
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Let&apos;s Pack Your Store With New Customers</h2>
        
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {formFields.slice(0, step + 1).map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                  mass: 1
                }}
              >
                <input
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all backdrop-blur-sm"
                  required
                  disabled={index < step}
                />
              </motion.div>
            ))}

            {step === 3 && formData.company && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-500 transform transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Your Free Growth Strategy Call 🚀'}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  )
} 