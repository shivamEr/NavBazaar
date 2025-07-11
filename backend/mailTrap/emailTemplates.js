const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Email</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body style="margin: 0; padding: 0; background-color: #f0f2f5; font-family: 'Inter', sans-serif; color: #333;">
  <table align="center" width="100%" style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
    <tr style="background: linear-gradient(90deg, #1A73E8, #4FC3F7);">
      <td style="padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">NavBazaar</h1>
        <p style="color: #e0f7fa; margin: 4px 0 0;">Email Verification</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <p>Hi there,</p>
        <p>Thank you for signing up on NavBazaar! Please use the following verification code to complete your registration:</p>
        <div style="text-align: center; margin: 24px 0;">
          <span style="font-size: 32px; font-weight: 600; letter-spacing: 4px; color: #1A73E8;">{verificationCode}</span>
        </div>
        <p>This code is valid for <strong>15 minutes</strong>. If you didn’t request this, you can safely ignore this email.</p>
        <p>Warm regards,<br/>Team NavBazaar</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 16px; background-color: #fafafa; font-size: 12px; color: #888;">
        <p>This is an automated message. Please do not reply to this email.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Password</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body style="margin: 0; padding: 0; background-color: #f0f2f5; font-family: 'Inter', sans-serif; color: #333;">
  <table align="center" width="100%" style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
    <tr style="background: linear-gradient(90deg, #1A73E8, #4FC3F7);">
      <td style="padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">NavBazaar</h1>
        <p style="color: #e0f7fa; margin: 4px 0 0;">Password Reset</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <p>Hi,</p>
        <p>We received a request to reset your password. If this was not you, feel free to ignore this email.</p>
        <p>Click the button below to reset your password:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="{resetURL}" style="background-color: #1A73E8; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">Reset Password</a>
        </div>
        <p>This link will expire in <strong>1 hour</strong>.</p>
        <p>Best regards,<br/>Team NavBazaar</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 16px; background-color: #fafafa; font-size: 12px; color: #888;">
        <p>This is an automated message. Please do not reply to this email.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset Successful</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body style="margin: 0; padding: 0; background-color: #f0f2f5; font-family: 'Inter', sans-serif; color: #333;">
  <table align="center" width="100%" style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
    <tr style="background: linear-gradient(90deg, #1A73E8, #4FC3F7);">
      <td style="padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">NavBazaar</h1>
        <p style="color: #e0f7fa; margin: 4px 0 0;">Password Reset Successful</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <p>Hello,</p>
        <p>This is a confirmation that your password has been changed successfully.</p>
        <div style="text-align: center; margin: 30px 0;">
          <div style="background-color: #1A73E8; color: white; width: 60px; height: 60px; line-height: 60px; border-radius: 50%; display: inline-block; font-size: 30px;">
            ✓
          </div>
        </div>
        <p>If you didn’t perform this action, please contact our support team immediately.</p>
        <p>Security Tips:</p>
        <ul>
          <li>Use a strong, unique password</li>
          <li>Enable two-factor authentication</li>
          <li>Don’t reuse passwords across multiple sites</li>
        </ul>
        <p>Thanks for being with us,<br/>Team NavBazaar</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 16px; background-color: #fafafa; font-size: 12px; color: #888;">
        <p>This is an automated message. Please do not reply to this email.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to NavBazaar</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body style="margin: 0; padding: 0; background-color: #f0f2f5; font-family: 'Inter', sans-serif; color: #333;">
  <table align="center" width="100%" style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
    <tr style="background: linear-gradient(90deg, #1A73E8, #4FC3F7);">
      <td style="padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Welcome to NavBazaar</h1>
        <p style="color: #e0f7fa; margin: 4px 0 0;">Let’s make shopping smarter!</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <p>Hi {userName},</p>
        <p>We're thrilled to have you on board! 🎉</p>
        <p>NavBazaar is your one-stop destination for discovering top deals, the latest products, and a seamless shopping experience.</p>
        <p>Here’s what you can do next:</p>
        <ul>
          <li>🛍 Explore our curated collections</li>
          <li>🔔 Get personalized product recommendations</li>
          <li>🚀 Track your orders in real-time</li>
        </ul>
        <p>We're here to make your shopping journey effortless and enjoyable.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.navbazaar.in" style="background-color: #1A73E8; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">Start Shopping</a>
        </div>
        <p>Thank you for joining us!<br/>– Team NavBazaar</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 16px; background-color: #fafafa; font-size: 12px; color: #888;">
        <p>Need help? Visit our <a href="https://www.navbazaar.in/help" style="color: #1A73E8; text-decoration: none;">Help Center</a></p>
        <p>This is an automated message. Please do not reply to this email.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

module.exports = {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE
};
