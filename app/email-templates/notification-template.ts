/**
 * Generates HTML content for notification emails sent to the business
 */
export function generateNotificationEmail(name: string, email: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        table { border-collapse: collapse !important; }
        body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
        a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
        div[style*="margin: 16px 0;"] { margin: 0 !important; }
      </style>
    </head>
    <body style="background-color: #f7f7f7; margin: 0 !important; padding: 0 !important;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="center" style="padding: 40px 10px 40px 10px;">
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
              <tr>
                <td align="center" bgcolor="#000000" style="padding: 40px 20px 40px 20px; border-radius: 4px 4px 0px 0px;">
                  <img src="https://drive.usercontent.google.com/download?id=1qmdJE69dxXIASMyA-ez8PZMUsbc9vMUO" alt="MillyFam Logo" width="100" height="100" style="display: block; border: 0px;" />
                  <h1 style="font-size: 24px; color: #ffffff; font-family: Arial, sans-serif; margin-top: 20px;">New Contact Form Submission</h1>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" style="padding: 20px 10px 20px 10px; border-radius: 0px 0px 4px 4px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;">
                        <strong>Name:</strong> ${name}
                      </td>
                    </tr>
                    <tr>
                      <td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;">
                        <strong>Email:</strong> ${email}
                      </td>
                    </tr>
                    <tr>
                      <td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;">
                        <strong>Message:</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #f7f7f7; padding: 20px; border-radius: 4px; font-family: Arial, sans-serif; font-size: 16px;">
                        ${message}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td bgcolor="#000000" style="padding: 20px; border-radius: 0px 0px 4px 4px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" align="center">
                        &copy; ${new Date().getFullYear()} MillyFam. All rights reserved.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

/**
 * Generates plain text content for notification emails (fallback for email clients that don't support HTML)
 */
export function generateNotificationEmailText(name: string, email: string, message: string): string {
  return `
NEW CONTACT FORM SUBMISSION

Name: ${name}
Email: ${email}
Message:
${message}

© ${new Date().getFullYear()} MillyFam. All rights reserved.
  `.trim();
} 