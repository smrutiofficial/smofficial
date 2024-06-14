// controllers/userController.js (or wherever your signup function is)
import { User } from '../models/user.model.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { username, email, fullname, avatar, password } = req.body;
  const hashpassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, fullname, avatar, password: hashpassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    next(err)

  }
};
