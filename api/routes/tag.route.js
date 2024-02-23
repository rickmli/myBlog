import express from "express";
import {
  clearTags,
  createTag,
  getTags,
} from "../controllers/tag.controller.js";

const router = express.Router();

router.get("/", getTags);
router.post("/", createTag);
router.delete("/", clearTags);

export default router;
