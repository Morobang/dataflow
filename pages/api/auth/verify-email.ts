import { NextApiRequest, NextApiResponse } from "next";

// Example: POST /api/auth/verify-email
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: "Missing verification token" });
  }

  // TODO: Validate token, mark user as verified in Supabase
  // Example: await supabase.from('users').update({ email_verified: true })

  // Simulate success response
  return res.status(200).json({ message: "Email verified successfully." });
}
