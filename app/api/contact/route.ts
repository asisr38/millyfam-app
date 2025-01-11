import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    // 1. Parse the data sent from the client
    const { name, email, message } = await req.json()
    
    // 2. Create a transporter using your SMTP credentials
    //    (You can use Gmail, your domain's SMTP, or your own server)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465", 10),
      secure: true, // If using port 465, secure=true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 3. Send the email
    const mailOptions = {
      from: `"Millyfam Team" <${process.env.SMTP_USER}>`, // sender address
      to: " millyfam777@gmail.com",                    // your destination email
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: 'Georgia', serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #FEAA03; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Millyfam Contact</h1>
          </div>
          <div style="padding: 20px;">
            <h2 style="color: #4CAF50; font-family: 'Georgia', serif;">New Contact Form Submission</h2>
            <p style="font-family: 'Georgia', serif;"><strong>Name:</strong> ${name}</p>
            <p style="font-family: 'Georgia', serif;"><strong>Email:</strong> ${email}</p>
            <p style="font-family: 'Georgia', serif;"><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-family: 'Georgia', serif;">${message}</p>
          </div>
          <div style="background-color: #f1f1f1; color: #555; padding: 10px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Thank you for reaching out to us!</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    // 4. Send a confirmation email to the sender
    const confirmationMailOptions = {
      from: `"Millyfam Site" <${process.env.SMTP_USER}>`, // sender address
      to: email, // sender's email
      subject: "We Received Your Message",
      html: `
        <div style="font-family: 'Georgia', serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #FEAA03; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Thank You for Contacting Us!</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-family: 'Georgia', serif;">Hi ${name},</p>
            <p style="font-family: 'Georgia', serif;">Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
            <p style="font-family: 'Georgia', serif;">Best regards,</p>
            <p style="font-family: 'Georgia', serif;">The Millyfam Team</p>
          </div>
          <div style="background-color: #f1f1f1; color: #555; padding: 10px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This is an automated message, please do not reply.</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    // 5. Return a success response
    return NextResponse.json({ message: "Email sent successfully." }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
  }
}
