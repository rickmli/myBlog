import express from "express";
import { createTag, getTags } from "../controllers/tag.controller.js";

const router = express.Router();

router.get("/", getTags);
router.post("/", createTag);

export default router;
