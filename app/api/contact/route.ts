import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await Promise.all([
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.RECIPIENT_EMAIL!,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Thank you for contacting MillyFam",
        html: `<h2>Thank you for reaching out, ${name}!</h2>`,
      }),
    ]);

    return NextResponse.json({ message: "Email sent successfully." });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
