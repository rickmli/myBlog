import mongoose from "mongoose";
import { defaultArticleImage } from "../utils/constants";

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
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
