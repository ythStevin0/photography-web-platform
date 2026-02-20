import mongoose from "mongoose";

// ── Profile ──────────────────────────────────────────────
const profileSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true },
    description: { type: String, required: true },
    tagline:     { type: String },
    socials: {
      whatsapp:  String,
      instagram: String,
      linkedin:  String,
    },
  },
  { timestamps: true }
);

// ── Service ───────────────────────────────────────────────
const serviceSchema = new mongoose.Schema(
  {
    title:      { type: String, required: true },
    priceStart: { type: Number, required: true },
    description:{ type: String, required: true },
    iconType:   {
      type: String,
      enum: ["camera", "users", "star", "image"],
      default: "camera",
    },
  },
  { timestamps: true }
);

// ── Portfolio ─────────────────────────────────────────────
const portfolioSchema = new mongoose.Schema(
  {
    title:        { type: String, required: true },
    category:     {
      type: String,
      enum: ["Wedding", "Portrait", "Commercial", "Nature"],
      required: true,
    },
    imageUrl:     { type: String, required: true }, // Cloudinary URL
    cloudinaryId: { type: String },                 // For deletions
    date:         { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Profile   = mongoose.model("Profile",   profileSchema);
export const Service   = mongoose.model("Service",   serviceSchema);
export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
