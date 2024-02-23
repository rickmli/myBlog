import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
