import mongoose from "mongoose";
import defaultAvatar from "../utils/constants.js";

const commentSchema = new mongoose.Schema(
  {
    authorID: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default User;
