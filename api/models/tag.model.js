import mongoose, { Schema } from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    tagName: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    relatedArticles: {
      type: [{ type: Schema.Types.ObjectId, ref: "Article" }],
      default: [],
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
