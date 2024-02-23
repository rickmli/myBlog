import express from "express";
import {
  clearCategories,
  createCategory,
  getCategories,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.delete("/", clearCategories);

export default router;
