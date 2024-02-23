import mongoose from "mongoose";
import defaultAvatar from "../utils/constants.js";

const userSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
