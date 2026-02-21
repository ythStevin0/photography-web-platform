export interface Profile {
  _id?: string;
  name: string;
  description: string;
  tagline: string;
  socials: {
    whatsapp: string;
    instagram: string;
    linkedin: string;
  };
}

export interface Service {
  _id: string;
  title: string;
  priceStart: number;
  description: string;
  iconType: "camera" | "users" | "star" | "image";
}

export interface PortfolioItem {
  _id: string;
  title: string;
  category: "Wedding" | "Portrait" | "Commercial" | "Nature";
  imageUrl: string;
  date: string;
}

export type CategoryFilter = "All" | PortfolioItem["category"];
