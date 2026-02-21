import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Portfolio Contact API")

# Allow requests from the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/contact")
async def contact(form: ContactForm):
    smtp_user = os.environ.get("EMAIL_SENDER")
    smtp_password = os.environ.get("EMAIL_PASSWORD")
    receiver = os.environ.get("EMAIL_RECEIVER")

    if not smtp_user or not smtp_password or not receiver:
        raise HTTPException(
            status_code=500,
            detail="Email configuration is missing. Check server .env file.",
        )

    # --- Build the email ---
    msg = MIMEMultipart("alternative")
    msg["From"] = f"{form.name} (via Portfolio) <{smtp_user}>"
    msg["To"] = receiver
    msg["Reply-To"] = f"{form.name} <{form.email}>"
    msg["Subject"] = f"[Portfolio] {form.subject}"

    # Plain-text fallback
    plain_body = (
        f"You received a new message from your portfolio contact form.\n\n"
        f"Name:    {form.name}\n"
        f"Email:   {form.email}\n"
        f"Subject: {form.subject}\n\n"
        f"Message:\n{form.message}\n\n"
        f"---\nReply directly to this email to respond to {form.name}."
    )

    # HTML version (nice formatting)
    html_body = f"""
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
                <td style="padding:10px 0;color:#1a1a2e;">{form.name}</td>
              </tr>
              <tr style="background:#f9f9fc;">
                <td style="padding:10px 8px;color:#6b21a8;font-weight:bold;">Email</td>
                <td style="padding:10px 8px;color:#1a1a2e;">
                  <a href="mailto:{form.email}" style="color:#7c3aed;">{form.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6b21a8;font-weight:bold;">Subject</td>
                <td style="padding:10px 0;color:#1a1a2e;">{form.subject}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
            <p style="color:#6b21a8;font-weight:bold;margin:0 0 10px;">Message</p>
            <p style="color:#374151;line-height:1.7;white-space:pre-line;">{form.message}</p>
          </div>
          <div style="background:#f9f9fc;padding:16px 32px;text-align:center;font-size:13px;color:#9ca3af;">
            Reply to this email to respond directly to {form.name}.
          </div>
        </div>
      </body>
    </html>
    """

    msg.attach(MIMEText(plain_body, "plain"))
    msg.attach(MIMEText(html_body, "html"))

    # --- Send via Gmail SMTP ---
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, receiver, msg.as_string())
        return {"success": True, "message": "Message sent successfully!"}
    except smtplib.SMTPAuthenticationError:
        raise HTTPException(
            status_code=500,
            detail="Gmail authentication failed. Check EMAIL_SENDER and EMAIL_PASSWORD in .env.",
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
