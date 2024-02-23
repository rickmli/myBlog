import Category from "../models/category.model.js";

export const getCategories = async (req, res, next) => {
  const {} = req.query;
  try {
    const tags = await Category.find();
    res.status(200).json(tags);
  } catch (err) {
    next(err);
  }
};

export const createCategory = async (req, res, next) => {
  const { categoryName } = req.body;
  try {
    const newCategory = new Category({
      categoryName,
    });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    next(err);
  }
};
