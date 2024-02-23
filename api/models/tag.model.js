import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    tagName: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true }
);

tagSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = this.tagName
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "-");
  }
  next();
});

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
