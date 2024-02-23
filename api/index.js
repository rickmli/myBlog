import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import testRoutes from "./routes/test.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("Mongodb is connected."))
  .catch((err) => console.log(err));

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

app.use("/api/test", testRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/post", postRoutes);
// app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});