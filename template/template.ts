export const contactEmailTemplate = (
  email: string,
  message: string
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Message</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f6fa;
            color: #0f1729;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border: 1px solid #e2e8f0;
          }
          .header {
            background-color: #0f1729;
            padding: 32px 40px;
            text-align: center;
          }
          .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.025em;
          }
          .content {
            padding: 40px;
          }
          .field {
            margin-bottom: 24px;
          }
          .field-label {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #65758c;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .field-value {
            font-size: 16px;
            color: #0f1729;
            background-color: #f8fafc;
            padding: 16px;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            line-height: 1.6;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #f8fafc;
            padding: 24px 40px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          .footer p {
            margin: 0;
            font-size: 14px;
            color: #65758c;
          }
          .link {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Portfolio Message</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${email}" class="link">${email}</a></div>
            </div>
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value" style="font-family: 'JetBrains Mono', monospace, sans-serif;">${message}</div>
            </div>
          </div>
          <div class="footer">
            <p>Sent from your portfolio contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
