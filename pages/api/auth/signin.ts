import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

// Example: POST /api/auth/signin
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  // TODO: Fetch user from Supabase (replace with actual DB logic)
  // Example: const user = await supabase.from('users').select('*').eq('email', email).single();
  // Simulate user and password hash for demo
  const user = { email, passwordHash: await bcrypt.hash("DemoPass123", 12), email_verified: true };

  // Check password
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Check email verification
  if (!user.email_verified) {
    return res.status(403).json({ error: "Email not verified" });
  }

  // TODO: Issue JWT/session here
  return res.status(200).json({ message: "Sign in successful" });
}
