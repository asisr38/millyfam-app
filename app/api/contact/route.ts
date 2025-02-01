import { contactFormSchema, ContactFormValues } from "@/lib/schemas";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or your SMTP settings
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactForm(
  url: string,
  { arg }: { arg: ContactFormValues }
) {
  try {
    const result = contactFormSchema.safeParse(arg);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    await Promise.all([
      // Admin notification
      transporter.sendMail({
        from: `"MillyFam Team" <${process.env.SMTP_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="background-color: #f7f7f7; padding: 20px;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px;">
              ${message}
            </div>
          </div>
        `,
      }),
      // User confirmation
      transporter.sendMail({
        from: `"MillyFam Team" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank you for contacting MillyFam",
        html: `
          <div style="background-color: #f7f7f7; padding: 20px;">
            <h2>Thank you for reaching out, ${name}!</h2>
            <p>We've received your message and will get back to you shortly.</p>
            <p>Best regards,<br>The MillyFam Team</p>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({
      message: "Email sent successfully.",
      status: "success",
    });
  } catch (err) {
    console.error("Email error:", err);
    const message = err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json(
      { error: message, status: "error" },
      { status: 500 }
    );
  }
}
