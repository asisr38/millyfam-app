import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    // Check if required environment variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ smtpAvailable: false }, { status: 200 });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    
    // If verification succeeds, SMTP is available
    return NextResponse.json({ smtpAvailable: true }, { status: 200 });
  } catch (error) {
    console.error("SMTP service check failed:", error);
    return NextResponse.json({ smtpAvailable: false }, { status: 200 });
  }
} 