const router = require("express").Router();
import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";
import { UserModel as User } from "../models/User";
import { Document } from "mongoose";
import { PasswordResetTokenModel as PasswordResetToken } from "../models/PasswordResetToken";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { verifyToken } from "../middlewares/verifyToken";
import nodemailer from "nodemailer";

router.post("/register", async (req: any, res: any, next: any) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.password, 8),
  });

  try {
    const savedUser = await user.save();
    res.status(201).json({
      message: "User created successfully",
      token: jwt.sign(
        { id: user._id, admin: user.isAdmin },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
      ),
    });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req: any, res: any, next: any) => {
  try {
    const user: IUser | null = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    console.log(user);

    const validPassword = bcryptjs.compareSync(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(400).json({ message: "Invalid password" });
      return;
    }
    res.status(200).json({
      message: "Login successful",
      token: jwt.sign(
        { id: user._id, admin: user.isAdmin },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
      ),
    });
  } catch (err) {
    next(err);
  }
});

router.post("/resetPassword", async (req: any, res: any) => {
  const user: IUser | null = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const oldToken = await PasswordResetToken.findOne({ user: user._id });
  if (oldToken) {
    await oldToken.delete();
  }

  const token = new PasswordResetToken({
    user: user._id,
    token: crypto.randomBytes(32).toString("hex"),
  });

  await token.save();

  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Ecommerce App 👻" <${process.env.EMAIL}>`, // sender address
    to: user.email, // list of receivers
    subject: "Reset Password ✔", // Subject line
    html: `<h1>Reset Password</h1>
        <p>Click on the link below to reset your password</p>
        <a href="http://localhost:3000/resetPassword/${token.token}">Reset Password</a>`, // html body
  });
});

router.put("/updatePassword/:id", verifyToken, async (req: any, res: any) => {
  const id = req.params.id;

  const user = await User.findById(id);
  const { oldPassword, newPassword } = req.body;

  if (user) {
    bcryptjs.compare(oldPassword, user.password, (err: any, result: any) => {
      if (err) {
        res.status(500).json({ message: err });
      }
      if (result) {
        user.password = bcryptjs.hashSync(newPassword, 8);
        const updatedUser = user.save();
        res.json({ message: "Password updated successfully" });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.put("/resetPassword/:id", async (req: any, res: any) => {
  const id = req.params.id;

  const token = await PasswordResetToken.findOne({ userId: id });

  if (!token) {
    res.status(404).json({ message: "Token not found" });
  } else {
    const isValid = req.body.token === token.token;

    if (!isValid) {
      res.status(400).json({ message: "Invalid token" });
    }

    const user = await User.findById(id);

    if (user) {
      user.password = bcryptjs.hashSync(req.body.password, 8);

      const updatedUser = await user.save();

      res.json({ message: "Password updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
});

export { router as authRouter };
