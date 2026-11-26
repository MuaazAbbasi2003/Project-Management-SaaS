function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
const generateVerificationEmail = ({ fullName, verificationUrl }) => {
  const greeting = fullName ? `Welcome, ${escapeHtml(fullName)}!` : "Welcome!";

  return `<body style="margin:0; padding:16px; font-family:'Segoe UI', Arial, sans-serif; background:#ffffff;">

  <div style="max-width:600px; margin:0 auto; border-radius:16px; overflow:hidden; border:1px solid #e2e8f0;">

    <!-- Header -->
    <div style="background:#172554; color:#ffffff; text-align:center; padding:18px;">
      <h1 style="margin:0; font-size:24px;">ProjectFlow</h1>
      <p style="margin:4px 0 0; font-size:13px; color:#cbd5e1;">PROJECT MANAGEMENT</p>
    </div>

    <!-- Body -->
    <div style="padding:20px 8px;">
      <h2 style="margin:0 0 20px; font-size:23px; color:#0f172a;">Verify your email address</h2>

      <p style="font-size:18px; color:#334155;">
        ${greeting} We're excited to have you on board. Please verify your email address to get started.
      </p>

      <a href="${verificationUrl}" style="display:block; background:#2563eb; color:#ffffff; text-align:center; text-decoration:none; font-weight:bold; font-size:18px; padding:18px; border-radius:14px;">
        Verify my email address
      </a>

      <p style="font-size:13px; color:#64748b;">This verification link expires in 20 minutes.</p>

      <hr style="border:none; border-top:2px solid #cbd5e1; margin:24px 0;">

      <p style="font-size:13px; color:#475569; margin-bottom:0;">
        If you didn't create an account, you can safely ignore this email.
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f1f5f9; text-align:center; padding:16px; font-size:14px; color:#64748b;">
      &copy; 2026 ProjectFlow. All rights reserved.
    </div>

  </div>
</body>
  `;
};

export default generateVerificationEmail;
