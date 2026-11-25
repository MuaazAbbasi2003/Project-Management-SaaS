import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, replyTo, subject, text }) => {
  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to,
    replyTo,
    subject,
    text,
  });
  if (error) throw error;
  console.log("sent", data?.id);
  return data;
};

export default sendEmail;
