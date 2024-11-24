import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../models";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, fcmToken } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      fcmToken,
    });
    res.json({ user });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
