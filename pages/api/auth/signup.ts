import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

// Example: POST /api/auth/signup
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password, firstName, lastName, role } = req.body;
  if (!email || !password || !firstName || !lastName || !role) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ error: "Password does not meet requirements" });
  }

  // Hash password
  const saltRounds = 12;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  // TODO: Save user to Supabase (replace with actual DB logic)
  // Example: await supabase.from('users').insert({ ... })

  // Simulate success response
  return res.status(201).json({ message: "Account created. Verification email sent." });
}
