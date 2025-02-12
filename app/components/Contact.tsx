"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, XCircle, Mail, User, MessageSquare } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState({ type: '', message: '' })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      form.reset()
      setPopupMessage({ 
        type: 'success', 
        message: 'Message sent successfully! We will get back to you soon.' 
      })
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 5000)
    } catch (error) {
      console.error("Error sending email:", error)
      setPopupMessage({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      })
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 5000)
    }
  }

  return (
    <section id="contact" className="w-full min-h-[30vh] flex items-center justify-center py-10 bg-zinc-900">
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div className="relative group">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Your Name"
                            className="w-full text-sm md:text-base rounded-xl bg-zinc-800/50 border-zinc-700 pl-10 focus:border-primary transition-colors duration-200 focus:ring-2 focus:ring-primary/20"
                            disabled={isSubmitting}
                            {...field}
                          />
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 group-focus-within:text-primary transition-colors duration-200" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="relative group">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className="w-full text-sm md:text-base rounded-xl bg-zinc-800/50 border-zinc-700 pl-10 focus:border-primary transition-colors duration-200 focus:ring-2 focus:ring-primary/20"
                            disabled={isSubmitting}
                            {...field}
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 group-focus-within:text-primary transition-colors duration-200" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="relative group">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Message</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            placeholder="Your Message"
                            className="w-full text-sm md:text-base min-h-[120px] rounded-xl bg-zinc-800/50 border-zinc-700 pl-10 focus:border-primary transition-colors duration-200 focus:ring-2 focus:ring-primary/20"
                            disabled={isSubmitting}
                            {...field}
                          />
                          <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-zinc-400 group-focus-within:text-primary transition-colors duration-200" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full gradient-primary text-black font-bold py-3 px-4 rounded-xl text-sm md:text-base hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-primary/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
