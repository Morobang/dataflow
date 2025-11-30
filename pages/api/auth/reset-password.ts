import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

// Example: POST /api/auth/reset-password
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token, newPassword, confirmNewPassword } = req.body;
  if (!token || !newPassword || !confirmNewPassword) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(newPassword)) {
    return res.status(400).json({ error: "Password does not meet requirements" });
  }

  // TODO: Validate token, update password in Supabase
  // Example: await supabase.from('users').update({ password_hash: ... })

  // Hash new password
  const saltRounds = 12;
  const passwordHash = await bcrypt.hash(newPassword, saltRounds);

  // Simulate success response
  return res.status(200).json({ message: "Password has been reset successfully." });
}
