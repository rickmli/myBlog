import Article from "../models/article.model.js";

export const getArticles = async (req, res, next) => {
  const { orderKey = "", des = true } = req.query;
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    next(err);
  }
};

export const createArticle = async (req, res, next) => {
  const { authorID, title, content, image, category, tag } = req.body;

  if (!authorID) return next(400, "Author is required for an article.");
  if (!title) return next(400, "Title is required for an article.");
  if (!content) return next(400, "Content is required for an article.");

  try {
    const newArticle = new Article({
      authorID,
      title,
      content,
      image,
      category,
      tag,
    });

    await newArticle.save();
    const savedArticle = await Article.findById(newArticle._id)
      .populate("category")
      .populate("tag");
    res.status(201).json(savedArticle);
  } catch (err) {
    next(err);
  }
};

export const clearArticles = async (req, res, next) => {
  try {
    await Article.deleteMany();
    res.status(204).json("Articles deleted succesfully.");
  } catch (err) {
    next(err);
  }
};
