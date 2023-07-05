import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import { sendEmail } from "@/lib/utils/emails";
import ContactEmail from "@/emails/template";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, phoneNumber, message } = req.body;
  await sendEmail({
    to: "jezg1992@hotmail.com",
    subject: "Welcome to NextAPI",
    html: render(ContactEmail({ name, email, phoneNumber, message })),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}