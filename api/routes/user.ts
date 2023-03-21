const router = require("express").Router();
import mongoose from "mongoose";
import { UserModel as User } from "../models/User";
import { PasswordResetTokenModel as PasswordResetToken } from "../models/PasswordResetToken";
import { verifyToken } from "../middlewares/verifyToken";
import { IUser } from "../interfaces/IUser";

// router.put(
//   "/updateProfilePicture/:id",
//   verifyToken,
//   async (req: any, res: any) => {
//     const id = req.params.id;
//     const user = await User.findById(id);
//     if (!user) {
//       res.status(404).json({ message: "User not found" });
//     }
//     user.profilePicture = req.body.profilePicture;
//     const updatedUser = await user.save();
//     res.json({ message: "Profile picture updated successfully" });
//   }
// );

router.get("/:id", verifyToken, async (req: any, res: any) => {
  const user: IUser | null = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    const { password, ...other } = user;
    res.status(200).json(other);
  }
});

export { router as userRouter };
