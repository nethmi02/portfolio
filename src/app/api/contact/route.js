import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return Response.json(
                { detail: 'All fields are required.' },
                { status: 400 }
            );
        }

        const sender = process.env.EMAIL_SENDER;
        const password = process.env.EMAIL_PASSWORD;
        const receiver = process.env.EMAIL_RECEIVER;

        if (!sender || !password || !receiver) {
            return Response.json(
                { detail: 'Email configuration is missing on the server.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: sender,
                pass: password,
            },
        });

        const htmlBody = `
        <html>
          <body style="font-family:Arial,sans-serif;background:#f4f4f7;padding:30px;">
            <div style="max-width:560px;margin:auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
              <div style="background:linear-gradient(135deg,#6b21a8,#7c3aed);padding:28px 32px;">
                <h2 style="color:#fff;margin:0;font-size:22px;">📬 New Portfolio Message</h2>
              </div>
              <div style="padding:28px 32px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;color:#6b21a8;font-weight:bold;width:90px;">Name</td>
                    <td style="padding:10px 0;color:#1a1a2e;">${name}</td>
                  </tr>
                  <tr style="background:#f9f9fc;">
                    <td style="padding:10px 8px;color:#6b21a8;font-weight:bold;">Email</td>
                    <td style="padding:10px 8px;color:#1a1a2e;">
                      <a href="mailto:${email}" style="color:#7c3aed;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;color:#6b21a8;font-weight:bold;">Subject</td>
                    <td style="padding:10px 0;color:#1a1a2e;">${subject}</td>
                  </tr>
                </table>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
                <p style="color:#6b21a8;font-weight:bold;margin:0 0 10px;">Message</p>
                <p style="color:#374151;line-height:1.7;white-space:pre-line;">${message}</p>
              </div>
              <div style="background:#f9f9fc;padding:16px 32px;text-align:center;font-size:13px;color:#9ca3af;">
                Reply to this email to respond directly to ${name}.
              </div>
            </div>
          </body>
        </html>
        `;

        await transporter.sendMail({
            from: sender,
            to: receiver,
            replyTo: `${name} <${email}>`,
            subject: `[Portfolio] ${subject}`,
            html: htmlBody,
            text: `New message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        });

        return Response.json({ success: true, message: 'Message sent successfully!' });

    } catch (err) {
        console.error('Contact form error:', err);
        return Response.json(
            { detail: err.message || 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
