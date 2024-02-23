import mongoose from "mongoose";
import { defaultArticleImage } from "../utils/constants.js";

const { Schema } = mongoose;
const articleSchema = new mongoose.Schema(
  {
    authorID: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: defaultArticleImage,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: "uncategorised",
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      default: "untagged",
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

articleSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = this.title
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "-");
  }
  next();
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
