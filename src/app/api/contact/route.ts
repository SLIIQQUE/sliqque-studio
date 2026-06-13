/* eslint-disable no-console */
import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(key);
}

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  project: string;
  timeline: string;
  budget: string;
  message: string;
}

function buildEmailHtml(data: ContactFormData): string {
  const field = (label: string, value: string) => `
    <tr>
      <td style="padding:0 0 6px 0;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#f97316;white-space:nowrap;vertical-align:top">${label}</td>
    </tr>
    <tr>
      <td style="padding:0 0 20px 0;font-family:'Syne',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:15px;font-weight:500;color:#ffffff;line-height:1.4">${value || "—"}</td>
    </tr>`;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
  <style>
    .gmail-dark-bg { background-color: #050505 !important; }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#050505;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#050505">
    <tr>
      <td align="center" style="padding:60px 24px 40px">

        <!-- ── Main card ── -->
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#0a0a0a;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.06)">

          <!-- Top accent glow bar -->
          <tr>
            <td style="padding:0;background:linear-gradient(90deg,#f97316,#fb923c,#f97316);height:3px;font-size:0;line-height:0">&nbsp;</td>
          </tr>

          <!-- ── Header ── -->
          <tr>
            <td style="padding:40px 40px 0">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:'Syne',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:22px;font-weight:700;letter-spacing:0;color:#ffffff;text-transform:uppercase">SLIIQQUE</td>
                  <td align="right" style="vertical-align:middle">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:8px;height:8px;border-radius:50%;background-color:#f97316;font-size:0;line-height:0">&nbsp;</td>
                        <td style="width:4px;font-size:0">&nbsp;</td>
                        <td style="width:8px;height:8px;border-radius:50%;background-color:rgba(249,115,22,0.4);font-size:0;line-height:0">&nbsp;</td>
                        <td style="width:4px;font-size:0">&nbsp;</td>
                        <td style="width:8px;height:8px;border-radius:50%;background-color:rgba(249,115,22,0.15);font-size:0;line-height:0">&nbsp;</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:20px 40px 0">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:rgba(255,255,255,0.06);font-size:0;line-height:0">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Badge ── -->
          <tr>
            <td style="padding:24px 40px 0">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:6px 14px;background:rgba(249,115,22,0.1);border-radius:20px;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#f97316">
                    New Project Inquiry
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:6px 40px 0;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;color:rgba(255,255,255,0.5);line-height:1.5">
              ${data.name} reached out via sliiqque.space
            </td>
          </tr>

          <!-- ── Details ── -->
          <tr>
            <td style="padding:28px 40px 0">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${field("Name", data.name)}
                ${field("Email", data.email)}
                ${field("Company", data.company)}
                ${field("Project Type", data.project)}
                ${field("Timeline", data.timeline)}
                ${field("Budget", data.budget)}
              </table>
            </td>
          </tr>

          <!-- ── Message ── -->
          <tr>
            <td style="padding:8px 40px 0">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:3px;background:linear-gradient(180deg,#f97316,rgba(249,115,22,0.2));border-radius:2px;font-size:0;line-height:0">&nbsp;</td>
                  <td style="padding:0 0 0 20px">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:0 0 8px 0;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.3)">What They're Building</td>
                      </tr>
                      <tr>
                        <td style="font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;color:rgba(255,255,255,0.8);line-height:1.7;white-space:pre-wrap">${data.message}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Divider ── -->
          <tr>
            <td style="padding:32px 40px 0">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:rgba(255,255,255,0.06);font-size:0;line-height:0">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="padding:16px 40px 32px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;color:rgba(255,255,255,0.2)">sliiqque.space</td>
                  <td align="right" style="font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;color:rgba(255,255,255,0.2)">
                    <a href="mailto:${data.email}" style="color:rgba(249,115,22,0.6);text-decoration:none;border-bottom:1px solid rgba(249,115,22,0.2)">reply to ${data.name}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <!-- ── Pre-footer spacer ── -->
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">
          <tr>
            <td align="center" style="padding:24px 0 0;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;color:rgba(255,255,255,0.15)">
              SLIIQQUE Studio &middot; AI Agents &middot; Workflow Automation &middot; Web Development
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resend = getResend();

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail =
      process.env.RESEND_TO_EMAIL || "hello@sliiqque.space";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: body.email,
      subject: `New inquiry from ${body.name} — ${body.project || "General"}`,
      html: buildEmailHtml(body),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email hello@sliiqque.space directly." },
      { status: 500 }
    );
  }
}
