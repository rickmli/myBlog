import express from "express";
import {
  clearUsers,
  createUser,
  getUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/", clearUsers);

export default router;
