import emailjs from '@emailjs/browser'

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Millyfam Team',
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  )
} 