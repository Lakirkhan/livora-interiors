import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, mobile, email, property_type, bhk_type, budget, location, message } = body;

    // Save to Supabase
    try {
      const supabase = createServiceClient();
      await supabase.from("leads").insert([
        { full_name, mobile, email, property_type, bhk_type, budget, location, message },
      ]);
    } catch (dbErr) {
      console.error("Supabase error:", dbErr);
    }

    // Send emails via Resend (only if API key is configured)
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "your_resend_api_key") {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Owner notification
        await resend.emails.send({
          from: "FS Interior <noreply@fsinterior.in>",
          to: [process.env.OWNER_EMAIL || "owner@fsinterior.in"],
          subject: `🏠 New Lead: ${full_name} – ${bhk_type}`,
          html: `
            <div style="font-family: Georgia, serif; background: #0d0d0d; color: #f5f5f0; padding: 40px; border-radius: 12px; border: 1px solid #d4a017;">
              <h1 style="color: #d4a017; font-size: 28px; margin-bottom: 8px;">New Consultation Request</h1>
              <p style="color: #999; margin-bottom: 32px;">A potential client has submitted a consultation form.</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999; width: 40%;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #333; font-weight: 600;">${full_name}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999;">Mobile</td><td style="padding: 12px 0; border-bottom: 1px solid #333;">${mobile}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #333;">${email}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999;">Property</td><td style="padding: 12px 0; border-bottom: 1px solid #333;">${property_type} – ${bhk_type}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999;">Budget</td><td style="padding: 12px 0; border-bottom: 1px solid #333;">${budget}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999;">Location</td><td style="padding: 12px 0; border-bottom: 1px solid #333;">${location}</td></tr>
                ${message ? `<tr><td style="padding: 12px 0; color: #999; vertical-align: top;">Message</td><td style="padding: 12px 0;">${message}</td></tr>` : ""}
              </table>
              <div style="margin-top: 32px; padding: 20px; background: #1a1a1a; border-radius: 8px; border-left: 4px solid #d4a017;">
                <p style="margin: 0; color: #d4a017; font-weight: 600;">Action Required</p>
                <p style="margin-top: 8px; font-size: 14px; color: #999;">Call ${full_name} at <strong style="color: #f5f5f0;">${mobile}</strong> within 24 hours.</p>
              </div>
            </div>`,
        });

        // Customer confirmation
        if (email) {
          await resend.emails.send({
            from: "FS Interior <noreply@fsinterior.in>",
            to: [email],
            subject: "Your Consultation Request is Confirmed – FS Interior",
            html: `
              <div style="font-family: Georgia, serif; background: #0d0d0d; color: #f5f5f0; padding: 40px; border-radius: 12px; border: 1px solid #d4a017;">
                <h1 style="color: #d4a017; font-size: 28px; margin-bottom: 8px;">Thank You, ${full_name}!</h1>
                <p style="color: #999; margin-bottom: 24px; font-size: 16px; line-height: 1.7;">
                  We've received your consultation request. Our team will contact you within <strong style="color: #f5f5f0;">24 hours</strong>.
                </p>
                <div style="padding: 24px; background: #1a1a1a; border-radius: 8px; margin: 24px 0; border: 1px solid #333;">
                  <p style="color: #d4a017; font-weight: 600; margin-bottom: 12px;">Your Request Summary</p>
                  <p style="color: #ccc; margin: 4px 0;">Property: ${property_type} – ${bhk_type}</p>
                  <p style="color: #ccc; margin: 4px 0;">Budget: ${budget}</p>
                  <p style="color: #ccc; margin: 4px 0;">Location: ${location}</p>
                </div>
                <p style="color: #999; font-size: 14px;">WhatsApp: <strong style="color: #d4a017;">+91 98765 43210</strong></p>
                <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #333; text-align: center;">
                  <p style="color: #666; font-size: 12px;">FS Interior | Ahmedabad, Gujarat</p>
                </div>
              </div>`,
          });
        }
      } catch (emailErr) {
        console.error("Email error:", emailErr);
      }
    }

    return NextResponse.json({ success: true, message: "Consultation request submitted successfully." });
  } catch (error) {
    console.error("Submit lead error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
