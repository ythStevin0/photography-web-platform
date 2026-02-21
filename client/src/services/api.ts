import axios from "axios";
import type { Profile, Service, PortfolioItem } from "../types";

const api = axios.create({
  baseURL: "/api",
  timeout: 10_000,
});

// ────────── Public data ──────────

export interface PublicData {
  profile: Profile;
  services: Service[];
  portfolio: PortfolioItem[];
}

export const fetchPublicData = (): Promise<PublicData> =>
  api.get<PublicData>("/public-data").then((r) => r.data);

// ────────── Admin – Portfolio ──────────

export const uploadPortfolioItem = (formData: FormData) =>
  api
    .post<PortfolioItem>("/admin/portfolio", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((r) => r.data);

// ────────── Admin – Service ──────────

export const createService = (data: Omit<Service, "_id">) =>
  api.post<Service>("/admin/service", data).then((r) => r.data);

// ────────── Admin – Profile ──────────

export const upsertProfile = (data: Partial<Profile>) =>
  api.post<Profile>("/admin/profile", data).then((r) => r.data);
