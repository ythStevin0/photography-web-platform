import type { Profile, Service, PortfolioItem } from "../types";

export const FALLBACK_PROFILE: Profile = {
  name: "Luminari Studio",
  tagline: "Mengabadikan Momen, Menciptakan Kisah",
  description:
    "Kami adalah tim fotografer profesional yang berdedikasi untuk menangkap esensi momen paling berharga Anda dengan sentuhan artistik dan presisi teknis.",
  socials: {
    whatsapp: "6285604867218",
    instagram: "luminaristudio",
    linkedin: "luminari-studio",
  },
};

export const FALLBACK_SERVICES: Service[] = [
  {
    _id: "1",
    title: "Dokumentasi Pernikahan",
    priceStart: 5_000_000,
    description:
      "Cakupan hari penuh menangkap setiap air mata, senyum, dan tawa di hari istimewa Anda.",
    iconType: "users",
  },
  {
    _id: "2",
    title: "Sesi Potret & Personal",
    priceStart: 1_500_000,
    description:
      "Foto profil profesional dan potret artistik, baik di studio maupun lokasi pilihan.",
    iconType: "camera",
  },
  {
    _id: "3",
    title: "Komersial & Branding",
    priceStart: 3_000_000,
    description:
      "Fotografi produk dan branding berkualitas tinggi untuk meningkatkan citra bisnis Anda.",
    iconType: "star",
  },
];

export const FALLBACK_PORTFOLIO: PortfolioItem[] = [
  {
    _id: "101",
    title: "Pernikahan Sarah & John",
    category: "Wedding",
    imageUrl:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    date: "2023-10-15",
  },
  {
    _id: "102",
    title: "Potret Golden Hour",
    category: "Portrait",
    imageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    date: "2023-11-02",
  },
  {
    _id: "103",
    title: "Mode Urban",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    date: "2023-09-20",
  },
  {
    _id: "104",
    title: "Janji di Pegunungan",
    category: "Wedding",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    date: "2023-12-05",
  },
  {
    _id: "105",
    title: "Profil CEO",
    category: "Portrait",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    date: "2024-01-10",
  },
  {
    _id: "106",
    title: "Brand Kopi Lokal",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    date: "2023-08-15",
  },
];
