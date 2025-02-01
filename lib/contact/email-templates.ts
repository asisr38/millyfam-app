export const adminEmailTemplate = (
  name: string,
  email: string,
  message: string
) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>New Contact Form Submission</title>
  </head>
  <body style="background-color: #f7f7f7; margin: 0 !important; padding: 0 !important;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding: 40px 10px">
          <table border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
              <td align="center" bgcolor="#000000" style="padding: 40px 20px; border-radius: 4px 4px 0 0;">
                <img src="https://drive.usercontent.google.com/download?id=1qmdJE69dxXIASMyA-ez8PZMUsbc9vMUO" alt="Millyfam Logo" width="100" height="100" style="display: block; border: 0;" />
                <h1 style="font-size: 24px; color: #ffffff; font-family: Arial, sans-serif; margin-top: 20px;">New Contact Form Submission</h1>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" style="padding: 20px 10px; border-radius: 0 0 4px 4px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr><td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;"><strong>Name:</strong> ${name}</td></tr>
                  <tr><td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;"><strong>Email:</strong> ${email}</td></tr>
                  <tr><td style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px 0;"><strong>Message:</strong></td></tr>
                  <tr><td style="background-color: #f7f7f7; padding: 20px; border-radius: 4px; font-family: Arial, sans-serif; font-size: 16px;">${message}</td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const userEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Thank You for Contacting Us</title>
  </head>
  <body style="background-color: #f7f7f7; margin: 0 !important; padding: 0 !important;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding: 40px 10px">
          <table border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
              <td align="center" bgcolor="#000000" style="padding: 20px 10px; border-radius: 4px 4px 0 0;">
                <img src="https://drive.usercontent.google.com/download?id=1qmdJE69dxXIASMyA-ez8PZMUsbc9vMUO" alt="Millyfam Logo" width="100" height="100" style="display: block; border: 0;" />
                <h1 style="font-size: 24px; color: #ffffff; font-family: Arial, sans-serif; margin-top: 20px;">Thank You for Contacting Us!</h1>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" style="padding: 40px 20px; border-radius: 0 0 4px 4px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr><td style="font-family: Arial, sans-serif; font-size: 16px; padding-bottom: 20px;">Hi ${name},</td></tr>
                  <tr><td style="font-family: Arial, sans-serif; font-size: 16px; padding-bottom: 20px;">Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</td></tr>
                  <tr><td style="font-family: Arial, sans-serif; font-size: 16px; padding-bottom: 20px;">Best regards,<br>The MillyFam Team</td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
