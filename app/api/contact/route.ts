import { adminEmailTemplate, userEmailTemplate } from "@/lib/email-templates";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await Promise.all([
      resend.emails.send({
        from: "MillyFam Team <onboarding@resend.dev>",
        to: process.env.RECIPIENT_EMAIL!,
        subject: `New Contact Form Submission from ${name}`,
        html: adminEmailTemplate(name, email, message),
      }),
      resend.emails.send({
        from: "MillyFam Team <onboarding@resend.dev>",
        to: email,
        subject: "Thank you for contacting MillyFam",
        html: userEmailTemplate(name),
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
