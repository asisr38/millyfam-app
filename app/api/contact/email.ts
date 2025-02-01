import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const { name, email, message } = data;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.RECIPIENT_EMAIL!,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
}

export async function sendConfirmationEmail(data: EmailData) {
  const { name, email } = data;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Thank you for contacting MillyFam",
    html: `
      <h2>Thank you for reaching out, ${name}!</h2>
      <p>We've received your message and will get back to you shortly.</p>
      <p>Best regards,<br>The MillyFam Team</p>
    `,
  });
}
