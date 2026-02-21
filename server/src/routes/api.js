import { Router } from "express";
import { Profile, Service, Portfolio } from "../models/index.js";
import { upload, cloudinary } from "../config/cloudinary.js";

const router = Router();

// ═══════════════════════════════════════════════
//  PUBLIC ROUTES
// ═══════════════════════════════════════════════

/**
 * GET /api/public-data
 * Returns profile, services, and portfolio in one call (used by frontend hook).
 */
router.get("/public-data", async (_req, res) => {
  try {
    const [profile, services, portfolio] = await Promise.all([
      Profile.findOne(),
      Service.find(),
      Portfolio.find().sort({ date: -1 }),
    ]);
    res.json({ profile, services, portfolio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════════
//  ADMIN ROUTES
// ═══════════════════════════════════════════════

/**
 * POST /api/admin/profile
 * Upsert studio profile.
 */
router.post("/admin/profile", async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
    });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/admin/service
 * Create a new service.
 */
router.post("/admin/service", async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * DELETE /api/admin/service/:id
 * Delete a service by ID.
 */
router.delete("/admin/service/:id", async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/admin/portfolio
 * Upload new portfolio item (image goes to Cloudinary).
 */
router.post("/admin/portfolio", upload.single("image"), async (req, res) => {
  try {
    const { title, category, date } = req.body;
    const item = await Portfolio.create({
      title,
      category,
      date:         date || new Date(),
      imageUrl:     req.file.path,
      cloudinaryId: req.file.filename,
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * DELETE /api/admin/portfolio/:id
 * Delete portfolio item + Cloudinary asset.
 */
router.delete("/admin/portfolio/:id", async (req, res) => {
  try {
    const item = await Portfolio.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });

    if (item.cloudinaryId) {
      await cloudinary.uploader.destroy(item.cloudinaryId);
    }
    await item.deleteOne();
    res.json({ message: "Portfolio item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
