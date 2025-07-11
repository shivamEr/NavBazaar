
const nodemailer = require('nodemailer');

const { 
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE
} = require('../mailTrap/emailTemplates')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure:true,
  host:"smtp.gmail.com",
  port:465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS_KEY // Use the 16-digit password
  },
});

const sender = process.env.EMAIL;
// console.log(sender)

const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const info = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Just One Step Away! Confirm Your Email Address",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    });
    console.log("Email sent successfully", info.messageId);
    return info;
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

const sendWelcomeEmail = async (email, name) => {
  try {
    const info = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Welcome to NavBazaar — Let’s Get Started!",
      html: WELCOME_EMAIL_TEMPLATE.replace("{userName}",name)
    });

    console.log("Welcome email sent successfully", info.messageId);
    return info;
  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const info = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Forgot Your Password? Let’s Fix That",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });

    console.log("Password reset email sent successfully", info.messageId);
    return info;
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

const sendResetSuccessEmail = async (email) => {
  try {
    const info = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Your NavBazaar Password Has Been Reset",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Password reset success email sent successfully", info.messageId);
    return info;
  } catch (error) {
    console.error(`Error sending password reset success email`, error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};

module.exports = {sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendResetSuccessEmail}