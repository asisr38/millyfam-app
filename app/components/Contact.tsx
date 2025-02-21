"use client"

import { memo, useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, XCircle, Mail, User, MessageSquare } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Control } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Form schema with custom error messages
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

type FormData = z.infer<typeof formSchema>;

// Memoized notification component
const Notification = memo(({ type, message }: { type: string; message: string }) => (
  <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center space-x-2 transition-all duration-300 ${
    type === 'success' ? 'bg-[#27AE60]/90 text-white' : 'bg-red-500/90 text-white'
  }`}>
    {type === 'success' ? (
      <CheckCircle2 className="h-5 w-5" />
    ) : (
      <XCircle className="h-5 w-5" />
    )}
    <p className="text-sm font-medium">{message}</p>
  </div>
));

Notification.displayName = "Notification";

// Memoized form field components
const FormFieldWithIcon = memo(({ 
  control, 
  name, 
  placeholder, 
  type = "text", 
  icon: Icon, 
  disabled,
  isTextArea = false
}: { 
  control: Control<FormData>; 
  name: keyof FormData; 
  placeholder: string; 
  type?: string;
  icon: React.ElementType;
  disabled: boolean;
  isTextArea?: boolean;
}) => (
  <div className="relative group">
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="sr-only">{placeholder}</FormLabel>
          <FormControl>
            <div className="relative">
              {isTextArea ? (
                <Textarea
                  placeholder={placeholder}
                  className="w-full text-sm md:text-base min-h-[120px] rounded-xl bg-background border-input pl-10 focus:border-primary transition-colors duration-200 focus:ring-2 focus:ring-primary/20"
                  disabled={disabled}
                  {...field}
                />
              ) : (
                <Input
                  type={type}
                  placeholder={placeholder}
                  className="w-full text-sm md:text-base rounded-xl bg-background border-input pl-10 focus:border-primary transition-colors duration-200 focus:ring-2 focus:ring-primary/20"
                  disabled={disabled}
                  {...field}
                />
              )}
              <Icon className={`absolute ${isTextArea ? 'top-4' : 'top-1/2 -translate-y-1/2'} left-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200`} />
            </div>
          </FormControl>
          <FormMessage className="text-xs mt-1" />
        </FormItem>
      )}
    />
  </div>
));

FormFieldWithIcon.displayName = "FormFieldWithIcon";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState({ type: '', message: '' })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const { isSubmitting } = form.formState

  const showNotification = useCallback((type: string, message: string) => {
    setPopupMessage({ type, message });
    setShowPopup(true);
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = useCallback(async (values: FormData) => {
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
      showNotification('success', 'Message sent successfully! We will get back to you soon.');
    } catch (error) {
      console.error("Error sending email:", error)
      showNotification('error', 'Failed to send message. Please try again.');
    }
  }, [form, showNotification]);

  return (
    <section id="contact" className="w-full min-h-[30vh] flex items-center justify-center py-10">
      {showPopup && (
        <Notification type={popupMessage.type} message={popupMessage.message} />
      )}
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[600px] space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Have questions? Reach out to us!
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <FormFieldWithIcon
                control={form.control}
                name="name"
                placeholder="Your Name"
                icon={User}
                disabled={isSubmitting}
              />
              <FormFieldWithIcon
                control={form.control}
                name="email"
                placeholder="Your Email"
                type="email"
                icon={Mail}
                disabled={isSubmitting}
              />
              <FormFieldWithIcon
                control={form.control}
                name="message"
                placeholder="Your Message"
                icon={MessageSquare}
                disabled={isSubmitting}
                isTextArea
              />
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

export default memo(Contact);
