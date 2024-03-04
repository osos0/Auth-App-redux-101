import User from "../schema/user-Model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    res.status(201).json({
      message: "Sign up successful",
    });
  } catch (error) {
    next(error);
  }
};

export default { signUp };
