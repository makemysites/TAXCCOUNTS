import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, country, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Required fields (name, email, message) are missing." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address format." },
        { status: 400 }
      );
    }

    // ─── Live webhook or email integration notes ──────────────────────────────
    // To make this functional for production, connect this to an email service:
    //
    // E.g., Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Anand Associates Web <hello@anandassociates.com>',
    //   to: 'hello@anandassociates.example.com',
    //   subject: `New Lead: ${name} (${country})`,
    //   text: `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nService: ${service}\nMessage:\n${message}`
    // });
    // ──────────────────────────────────────────────────────────────────────────

    console.log("Contact form submission logged:", {
      name,
      email,
      phone,
      country,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Inquiry successfully recorded." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
