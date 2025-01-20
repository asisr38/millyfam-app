"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, XCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState({ type: '', message: '' })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setFormData({ name: "", email: "", message: "" })
      setPopupMessage({ 
        type: 'success', 
        message: 'Message sent successfully! We will get back to you soon.' 
      })
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 5000) // Hide after 5 seconds
    } catch (error) {
      console.error("Error sending email:", error)
      setPopupMessage({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      })
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full min-h-[50vh] flex items-center justify-center py-10 bg-zinc-900">
      {showPopup && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center space-x-2 transition-all duration-300 ${
          popupMessage.type === 'success' ? 'bg-[#27AE60]/90 text-white' : 'bg-red-500/90 text-white'
        }`}>
          {popupMessage.type === 'success' ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <XCircle className="h-5 w-5" />
          )}
          <p className="text-sm font-medium">{popupMessage.message}</p>
        </div>
      )}
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[600px] space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-200">
              Have questions? Reach out to us!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <Input
              className="w-full text-sm md:text-base rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isSubmitting}
            />
            <Input
              className="w-full text-sm md:text-base rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isSubmitting}
            />
            <Textarea
              className="w-full text-sm md:text-base min-h-[120px] rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="w-full gradient-primary text-black font-bold py-3 px-4 rounded-xl text-sm md:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
