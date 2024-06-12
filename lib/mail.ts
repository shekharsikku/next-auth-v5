import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.DOMAIN_ORIGIN;
const sender = process.env.RESEND_ORIGIN!;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: sender,
    to: email,
    subject: "2FA Code!",
    html: `<p>Your 2FA Code: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const link = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: sender,
    to: email,
    subject: "Reset Your Password!",
    html: `<p>Click <a href="${link}">here</a> to reset your password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const link = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: sender,
    to: email,
    subject: "Verify Your Email!",
    html: `<p>Click <a href="${link}">here</a> to verify your email.</p>`,
  });
};
