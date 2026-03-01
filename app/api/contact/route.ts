import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, org, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "IntelliPharmiCA Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `New inquiry from ${name}${org ? ` — ${org}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganization: ${org || "N/A"}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
