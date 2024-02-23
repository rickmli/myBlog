import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
  const {} = req.query;

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  const { username, password, email, avatar } = req.body;

  if (!username) return next(400, "Username is required.");
  if (!password) return next(400, "Password is required.");

  try {
    const newUser = new User({
      username,
      password,
      email,
      avatar,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    next(err);
  }
};

export const clearUsers = async (req, res, next) => {
  try {
    await User.deleteMany();
    res.status(204).json("Users deleted succesfully.");
  } catch (err) {
    next(err);
  }
};
