import { NextApiRequest, NextApiResponse } from "next";

// Example: POST /api/auth/forgot-password
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Missing email" });
  }

  // TODO: Generate password reset token, save to DB, send email
  // Example: await supabase.from('password_reset_tokens').insert({ ... })
  // Example: send email with reset link

  // Simulate success response
  return res.status(200).json({ message: "Password reset link sent to email." });
}
