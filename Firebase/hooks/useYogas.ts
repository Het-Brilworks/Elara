import { YogaVideo } from "@/types/yoga";
import { useQuery } from "@tanstack/react-query";
import {
  getAllYogaVideos,
  getFeaturedYogaVideos,
  getYogaVideoById,
  getYogaVideosByCategory,
  getYogaVideosByDifficulty,
  getYogaVideosByTrimester,
  getYogaVideosByType,
  searchYogaVideos,
} from "../services/YogaService";

export const YOGA_QUERY_KEY = "yogaVideos";

/**
 * Hook to get all yoga videos
 */
export const useAllYogaVideos = () => {
  return useQuery<YogaVideo[], Error>({
    queryKey: [YOGA_QUERY_KEY],
    queryFn: getAllYogaVideos,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to get a specific yoga video by ID
 */
export const useYogaVideoById = (id: string) => {
  return useQuery<YogaVideo | null, Error>({
    queryKey: [YOGA_QUERY_KEY, id],
    queryFn: () => getYogaVideoById(id),
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: !!id,
  });
};

/**
 * Hook to get yoga videos by trimester
 */
export const useYogaVideosByTrimester = (trimester: string) => {
  return useQuery<YogaVideo[], Error>({
    queryKey: [YOGA_QUERY_KEY, "trimester", trimester],
    queryFn: () => getYogaVideosByTrimester(trimester),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!trimester,
  });
};

/**
 * Hook to get yoga videos by category
 */
export const useYogaVideosByCategory = (category: string) => {
  return useQuery<YogaVideo[], Error>({
    queryKey: [YOGA_QUERY_KEY, "category", category],
    queryFn: () => getYogaVideosByCategory(category),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!category,
  });
};

/**
 * Hook to get yoga videos by difficulty
 */
export const useYogaVideosByDifficulty = (
  difficulty: "beginner" | "intermediate" | "advanced",
) => {
  return useQuery<YogaVideo[], Error>({
    queryKey: [YOGA_QUERY_KEY, "difficulty", difficulty],
    queryFn: () => getYogaVideosByDifficulty(difficulty),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!difficulty,
  });
};

/**
 * Hook to get yoga videos by type
 */
export const useYogaVideosByType = (type: string) => {
  return useQuery<YogaVideo[], Error>({
    queryKey: [YOGA_QUERY_KEY, "type", type],
    queryFn: () => getYogaVideosByType(type),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!type,
  });
};

/**
 * Hook to search yoga videos
 */
export const useSearchYogaVideos = (query: string) => {
  return useQuery<YogaVideo[], Error>({
    queryKey: [YOGA_QUERY_KEY, "search", query],
    queryFn: () => searchYogaVideos(query),
    staleTime: 1000 * 60 * 2, // 2 minutes
    enabled: !!query && query.length > 0,
  });
};

/**
 * Hook to get featured yoga videos
 */
export const useFeaturedYogaVideos = (limit: number = 5) => {
  return useQuery<YogaVideo[], Error>({
    queryKey: [YOGA_QUERY_KEY, "featured", limit],
    queryFn: () => getFeaturedYogaVideos(limit),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
