import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    // 1. Parse the data sent from the client
    const { name, email, message } = await req.json()
    
    // 2. Create a transporter using your SMTP credentials
    //    (You can use Gmail, your domain's SMTP, or your own server)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 3. Send the email
    const mailOptions = {
      from: `"Millyfam Team" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.RECIPIENT_EMAIL,                    // your destination email
      subject: "New Contact Form Submission",
      html: `
       <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { -ms-interpolation-mode: bicubic; }
          img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
          table { border-collapse: collapse !important; }
          body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
          a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
          div[style*="margin: 16px 0;"] { margin: 0 !important; }
        </style>
      </head>
      <body style="background-color: #f7f7f7; margin: 0 !important; padding: 0 !important;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style="padding: 40px 10px 40px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
                <tr>
                  <td align="center" bgcolor="#000000" style="padding: 40px 20px 40px 20px; border-radius: 4px 4px 0px 0px;">
                    <img src="https://drive.usercontent.google.com/download?id=1qmdJE69dxXIASMyA-ez8PZMUsbc9vMUO" alt="Millyfam Logo" width="100" height="100" style="display: block; border: 0px;" />
                    <h1 style="font-size: 24px; color: #ffffff; font-family: Arial, sans-serif; margin-top: 20px;">New Contact Form Submission</h1>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#ffffff" style="padding: 20px 10px 20px 10px; border-radius: 0px 0px 4px 4px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;">
                          <strong>Name:</strong> ${name}
                        </td>
                      </tr>
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;">
                          <strong>Email:</strong> ${email}
                        </td>
                      </tr>
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;">
                          <strong>Message:</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #f7f7f7; padding: 20px; border-radius: 4px; font-family: Arial, sans-serif; font-size: 16px;">
                          ${message}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#000000" style="padding: 20px; border-radius: 0px 0px 4px 4px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" align="center">
                          &copy; 2023 Millyfam. All rights reserved.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `,
    }

    await transporter.sendMail(mailOptions)

    // 4. Send a confirmation email to the sender
    const confirmationMailOptions = {
      from: `"Millyfam Contact Us" <${process.env.SMTP_USER}>`, // sender address
      to: email, // sender's email
      subject: "We Received Your Message",
      html: `
        <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
        <style>
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { -ms-interpolation-mode: bicubic; }
          img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
          table { border-collapse: collapse !important; }
          body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
          a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
          div[style*="margin: 16px 0;"] { margin: 0 !important; }
        </style>
      </head>
      <body style="background-color: #f7f7f7; margin: 0 !important; padding: 0 !important;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style="padding: 40px 10px 40px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
                <tr>
                  <td align="center" bgcolor="#000000" style="padding: 20px 10px 20px 10px; border-radius: 4px 4px 0px 0px;">
                    <img src="https://drive.usercontent.google.com/download?id=1qmdJE69dxXIASMyA-ez8PZMUsbc9vMUO" alt="Millyfam Logo" width="100" height="100" style="display: block; border: 0px;" />
                    <h1 style="font-size: 24px; color: #ffffff; font-family: Arial, sans-serif; margin-top: 20px;">Thank You for Contacting Us!</h1>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#ffffff" style="padding: 40px 20px 40px 20px; border-radius: 0px 0px 4px 4px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 16px; padding-bottom: 20px;">
                          Hi ${name},
                        </td>
                      </tr>
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 16px; padding-bottom: 20px;">
                          Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
                        </td>
                      </tr>
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 16px; padding-bottom: 20px;">
                          Best regards,<br>
                          The Millyfam Team
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#000000" style="padding: 20px; border-radius: 0px 0px 4px 4px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" align="center">
                          This is an automated message, please do not reply.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
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
