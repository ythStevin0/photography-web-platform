import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import apiRouter    from "./routes/api.js";
import errorHandler from "./middleware/errorHandler.js";

const app  = express();
const PORT = process.env.PORT ?? 5000;

// ── Middleware ────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────
app.use("/api", apiRouter);

// ── Health check ──────────────────────────────
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// ── Error Handler ─────────────────────────────
app.use(errorHandler);

// ── Database + Server ─────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅  MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀  Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌  MongoDB connection failed:", err.message);
    process.exit(1);
  });
