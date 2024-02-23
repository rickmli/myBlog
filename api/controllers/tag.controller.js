import Tag from "../models/tag.model.js";

export const getTags = async (req, res, next) => {
  const {} = req.query;
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (err) {
    next(err);
  }
};

export const createTag = async (req, res, next) => {
  const { tagName } = req.body;
  try {
    const newTag = new Tag({
      tagName,
    });
    const savedTag = await newTag.save();
    res.status(201).json(savedTag);
  } catch (err) {
    next(err);
  }
};
