import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    res.json(newUser);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
