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
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

export const clearCategories = async (req, res, next) => {
  try {
    await Category.deleteMany();
    res.status(204).json("Categories deleted succesfully.");
  } catch (err) {
    next(err);
  }
};
