import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { generateNotificationEmail, generateNotificationEmailText } from "@/app/email-templates/notification-template"
import { generateConfirmationEmail, generateConfirmationEmailText } from "@/app/email-templates/confirmation-template"

export async function POST(req: Request) {
  try {
    // 1. Parse the data sent from the client
    const { name, email, message } = await req.json()
    
    console.log("Contact form submission received from:", email)
    console.log("Will send notification to:", process.env.RECIPIENT_EMAIL)
    if (process.env.CC_EMAIL) console.log("CC to:", process.env.CC_EMAIL)
    if (process.env.BCC_EMAIL) console.log("BCC to:", process.env.BCC_EMAIL)
    
    // Verify environment variables are correctly loaded
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials are missing in environment variables")
      return NextResponse.json({ error: "Email configuration error" }, { status: 500 })
    }
    
    // 2. Create a transporter using your SMTP credentials from .env.local
    console.log("Setting up SMTP transporter with user:", process.env.SMTP_USER)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      debug: true,
    })
    
    // Verify SMTP connection
    try {
      console.log("Verifying SMTP connection...")
      await transporter.verify()
      console.log("SMTP connection verified successfully")
    } catch (verifyError) {
      console.error("SMTP connection verification failed:", verifyError)
      return NextResponse.json({ error: "Failed to connect to email server" }, { status: 500 })
    }

    // 3. Send the email to your recipient
    const mailOptions = {
      from: `"MillyFam Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      cc: process.env.CC_EMAIL || undefined,
      bcc: process.env.BCC_EMAIL || undefined,
      subject: "New Contact Form Submission - MillyFam",
      html: generateNotificationEmail(name, email, message),
      text: generateNotificationEmailText(name, email, message), // Plain text fallback
    }

    let notificationSent = false;
    try {
      console.log("Attempting to send notification email to business...")
      const notificationInfo = await transporter.sendMail(mailOptions)
      console.log("Notification email sent successfully:", notificationInfo.messageId)
      notificationSent = true;
    } catch (notificationError) {
      console.error("Error sending notification email to business:", notificationError)
      // Continue to try sending confirmation email even if notification fails
    }

    // 4. Send a confirmation email to the sender
    const confirmationMailOptions = {
      from: `"MillyFam Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting MillyFam",
      html: generateConfirmationEmail(name),
      text: generateConfirmationEmailText(name), // Plain text fallback
    }

    let confirmationSent = false;
    try {
      console.log("Attempting to send confirmation email to sender...")
      const confirmationInfo = await transporter.sendMail(confirmationMailOptions)
      console.log("Confirmation email sent successfully:", confirmationInfo.messageId)
      confirmationSent = true;
    } catch (confirmationError) {
      console.error("Error sending confirmation email to sender:", confirmationError)
    }

    // 5. Return a response based on what happened
    if (notificationSent && confirmationSent) {
      return NextResponse.json({ message: "Both emails sent successfully." }, { status: 200 })
    } else if (notificationSent) {
      return NextResponse.json({ message: "Notification sent but confirmation failed.", partial: true }, { status: 200 })
    } else if (confirmationSent) {
      return NextResponse.json({ message: "Confirmation sent but notification failed.", partial: true }, { status: 200 })
    } else {
      return NextResponse.json({ error: "Failed to send any emails." }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in contact form API:", error)
    // Log more details about the error
    if (error instanceof Error) {
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }
    // Log environment variables (without exposing sensitive data)
    console.error("Environment check:", {
      hasSmtpUser: !!process.env.SMTP_USER,
      hasSmtpPass: !!process.env.SMTP_PASS,
      hasRecipientEmail: !!process.env.RECIPIENT_EMAIL,
      hasCcEmail: !!process.env.CC_EMAIL,
      hasBccEmail: !!process.env.BCC_EMAIL
    })
    return NextResponse.json({ error: "Failed to process email request." }, { status: 500 })
  }
}
