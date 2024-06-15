// controllers/userController.js (or wherever your signup function is)
import { User } from '../models/user.model.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { errorHandler } from "../middlewares/error.middleware.js";

export const signup = async (req, res, next) => {
  const { username, email, avatar, password } = req.body;
  const hashpassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, avatar, password: hashpassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    next(err)

  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      const error = new Error('User not found');
      error.status = 401;
      return next(error);
    }
    
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      const error = new Error('Invalid credentials');
      error.status = 401;
      return next(error);
    }
    
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};