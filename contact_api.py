import os
import resend
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Portfolio Contact API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
    api_key = os.environ.get("RESEND_API_KEY")
    receiver = os.environ.get("EMAIL_RECEIVER")

    if not api_key or not receiver:
        raise HTTPException(
            status_code=500,
            detail="Email configuration is missing. Check server environment variables.",
        )

    resend.api_key = api_key

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

    plain_body = (
        f"New message from your portfolio contact form.\n\n"
        f"Name:    {form.name}\n"
        f"Email:   {form.email}\n"
        f"Subject: {form.subject}\n\n"
        f"Message:\n{form.message}"
    )

    try:
        params = {
            "from": f"{form.name} (via Portfolio) <onboarding@resend.dev>",
            "to": [receiver],
            "reply_to": f"{form.name} <{form.email}>",
            "subject": f"[Portfolio] {form.subject}",
            "html": html_body,
            "text": plain_body,
        }
        resend.Emails.send(params)
        return {"success": True, "message": "Message sent successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
