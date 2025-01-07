'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Millyfam Team',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full min-h-[40vh] flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-24 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[600px] space-y-6 md:space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-200">Have questions? Reach out to us!</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <Input 
              className="w-full text-sm md:text-base rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary" 
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              disabled={isSubmitting}
            />
            <Input 
              className="w-full text-sm md:text-base rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary" 
              type="email" 
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={isSubmitting}
            />
            <Textarea 
              className="w-full text-sm md:text-base min-h-[120px] md:min-h-[150px] rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary" 
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              className="w-full gradient-primary text-black hover:opacity-90 font-bold py-3 px-4 rounded-xl text-sm md:text-base transition-all duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

