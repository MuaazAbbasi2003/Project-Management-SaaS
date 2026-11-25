import sendEmail from "../services/email.service.js";

const result = await sendEmail({
  to: "bcamszh114@gmail.com",
  from: "onboarding@resend.dev",
  subject: "Email Service Test",
  text: "This is a simple text message.",
});

console.log(result.id);
