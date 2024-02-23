import express from "express";
import {
  clearArticles,
  createArticle,
  getArticles,
} from "../controllers/article.controller.js";

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.delete("/", clearArticles);

export default router;
