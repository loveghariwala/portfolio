import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const isEmailConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASS;

    if (!isEmailConfigured) {
      return new Response(
        JSON.stringify({
          error: "Email service not configured. Please add EMAIL_USER and EMAIL_PASS to .env",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name} (PRIORITY DISPATCH)" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `⭐⭐⭐⭐⭐ PRIORITY DISPATCH // ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Dispatch Transmission</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #ffffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #ffffff;">
          
          <div style="max-width: 620px; margin: 30px auto; background: #080314; border: 2px solid #ffffffff; border-radius: 28px; overflow: hidden; box-shadow: 0 0 50px rgba(255, 0, 127, 0.4);">
            
            <!-- GTA VI HEADER BANNER -->
            <div style="background: linear-gradient(135deg, #ff3434ff 0%, #ff7028ff 50%, #ff70cbff 100%); padding: 36px 30px; text-align: center; position: relative;">
              
              <!-- WANTED LEVEL STARS -->
              <div style="background: rgba(4, 1, 10, 0.75); display: inline-block; padding: 6px 18px; border-radius: 20px; margin-bottom: 14px; border: 1px solid rgba(255, 255, 255, 0.6);">
                <span style="color: #ffe600ff; font-size: 14px; letter-spacing: 4px; font-weight: 900;">★ ★ ★ ★ ★</span>
                <span style="color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; margin-left: 6px;">WANTED LEVEL 5</span>
              </div>

              <!-- MAIN TITLE -->
              <h1 style="margin: 0; font-size: 32px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase; color: #ffffff; text-shadow: 0 3px 15px rgba(0, 0, 0, 0.6);">
                PRIORITY DISPATCH
              </h1>
              <p style="margin: 8px 0 0; color: #ffffff; font-weight: 800; letter-spacing: 3px; font-size: 11px; text-transform: uppercase; opacity: 0.95;">
                LEONIDA NODE // PRIORITY CLIENT TRANSMISSION
              </p>
            </div>

            <!-- MAIN BODY -->
            <div style="padding: 36px 30px; background: #060210;">
              
              <!-- SENDER INTEL CARD -->
              <div style="margin-bottom: 24px;">
                <p style="text-transform: uppercase; font-size: 10px; font-weight: 900; color: #ff007f; letter-spacing: 2px; margin: 0 0 8px 4px;">
                  // OPERATOR CLIENT INTEL
                </p>
                <div style="background: #0d0420; padding: 20px; border-radius: 16px; border: 1px solid rgba(255, 0, 127, 0.35); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);">
                  <div style="display: flex; align-items: center; margin-bottom: 6px;">
                    <span style="font-size: 18px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 0.5px;">${name}</span>
                  </div>
                  <div style="color: #00f0ff; font-size: 13px; font-weight: 700; font-family: monospace;">
                    ✉ ${email}
                  </div>
                </div>
              </div>

              <!-- MESSAGE CONTENT CARD -->
              <div style="margin-bottom: 30px;">
                <p style="text-transform: uppercase; font-size: 10px; font-weight: 900; color: #00f0ff; letter-spacing: 2px; margin: 0 0 8px 4px;">
                  // MISSION BRIEFING / MESSAGE CONTENT
                </p>
                <div style="background: #0a031a; padding: 24px; border-radius: 16px; border-left: 5px solid #00f0ff; border-top: 1px solid rgba(255, 255, 255, 0.08); border-right: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                  <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #f1f5f9; font-family: monospace; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- CTA REPLY BUTTON -->
              <div style="text-align: center; margin: 36px 0 10px;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(90deg, #ff007f 0%, #ff5500 100%); color: #ffffff; padding: 18px 40px; border-radius: 14px; text-decoration: none; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; box-shadow: 0 0 25px rgba(255, 0, 127, 0.6); border: 1px solid #ff007f;">
                  ⚡ DIRECT REPLY TO ${name.split(" ")[0].toUpperCase()}
                </a>
              </div>
              
              <p style="text-align: center; margin: 12px 0 0; color: #64748b; font-size: 11px; font-family: monospace;">
                Clicking reply will send an email directly to ${email}
              </p>
            </div>

            <!-- GTA VI FOOTER -->
            <div style="padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1); background: #030008;">
              <p style="margin: 0; font-size: 10px; color: #94a3b8; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">
                VICE CITY OS // LOVE GHARIWALA PORTFOLIO ENGINE v6.0
              </p>
              <p style="margin: 4px 0 0; font-size: 9px; color: #55ff55; font-weight: 700; font-family: monospace; letter-spacing: 1px;">
                STATUS: 100% ENCRYPTED TRANSMISSION
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
