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
      from: `"Millyfam Site" <${process.env.SMTP_USER}>`, // sender address
      to: "yourEmail@yourDomain.com",                    // your destination email
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    // 4. Return a success response
    return NextResponse.json({ message: "Email sent successfully." }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
  }
}
