import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, service, date, message } = await req.json();

  if (!name || !email || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Forever Peng Hair <onboarding@resend.dev>",
      to: "numofrancis@gmail.com",
      replyTo: email,
      subject: `New Booking Request — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0a0a0a;">
          <div style="background: #0a0a0a; padding: 32px 40px;">
            <h1 style="color: #ff5a1f; font-size: 20px; font-weight: 700; margin: 0; letter-spacing: 0.1em; text-transform: uppercase;">
              Forever Peng Hair
            </h1>
            <p style="color: #666; font-size: 12px; margin: 6px 0 0; letter-spacing: 0.2em; text-transform: uppercase;">
              New Booking Request
            </p>
          </div>

          <div style="padding: 40px; background: #f9f9f7; border: 1px solid #e8e8e3;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3; width: 140px;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #787872;">Name</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <strong style="font-size: 14px;">${name}</strong>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #787872;">Email</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <a href="mailto:${email}" style="color: #ff5a1f; font-size: 14px;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #787872;">Phone</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <span style="font-size: 14px;">${phone || "—"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #787872;">Service</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <strong style="font-size: 14px; color: #ff5a1f;">${service}</strong>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #787872;">Preferred Date</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e3;">
                  <span style="font-size: 14px;">${date || "—"}</span>
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0;" valign="top">
                  <span style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #787872;">Notes</span>
                </td>
                <td style="padding: 12px 0;">
                  <span style="font-size: 14px; line-height: 1.6;">${message}</span>
                </td>
              </tr>
              ` : ""}
            </table>
          </div>

          <div style="padding: 24px 40px; background: #fff3ee; border: 1px solid #e8e8e3; border-top: 2px solid #ff5a1f;">
            <p style="margin: 0; font-size: 12px; color: #787872; line-height: 1.6;">
              Reply directly to this email to contact <strong>${name}</strong> — reply-to is set to their address.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
