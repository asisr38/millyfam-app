import { NextResponse } from "next/server";
import { sendEmail, sendConfirmationEmail } from "@/app/api/contact/email";
import { validateContactForm } from "@/app/api/contact/validation";
import { ContactFormValues } from "@/lib/schemas";

export async function sendContactForm(
  url: string,
  { arg }: { arg: ContactFormValues }
) {
  try {
    const validationResult = validateContactForm(arg);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error },
        { status: 400 }
      );
    }

    await Promise.all([sendEmail(arg), sendConfirmationEmail(arg)]);

    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
