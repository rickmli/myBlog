import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
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

categorySchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = this.categoryName
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "-");
  }
  next();
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
