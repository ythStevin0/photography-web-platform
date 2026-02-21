import { useEffect, useState } from "react";
import { fetchPublicData, type PublicData } from "../services/api";
import type { Profile, Service, PortfolioItem } from "../types";
import { FALLBACK_PROFILE, FALLBACK_SERVICES, FALLBACK_PORTFOLIO } from "../constants/fallback";

interface UsePublicDataReturn {
  profile: Profile;
  services: Service[];
  portfolio: PortfolioItem[];
  loading: boolean;
  error: string | null;
}

export function usePublicData(): UsePublicDataReturn {
  const [data, setData] = useState<PublicData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPublicData()
      .then(setData)
      .catch((err) => {
        console.warn("API unavailable – using fallback data.", err.message);
        setError("Backend tidak terhubung. Menampilkan data demo.");
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    profile:   data?.profile   ?? FALLBACK_PROFILE,
    services:  data?.services  ?? FALLBACK_SERVICES,
    portfolio: data?.portfolio ?? FALLBACK_PORTFOLIO,
    loading,
    error,
  };
}
