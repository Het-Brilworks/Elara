import { MeditationAudio, MeditationCategory } from "@/types/meditation";
import { useQuery } from "@tanstack/react-query";
import {
    getAllCategories,
    getAllMeditations,
    getFeaturedMeditation,
    getMeditationById,
    getMeditationMetadata,
    getMeditationsByCategory,
    getMeditationsByDifficulty,
    getMeditationsByPregnancyStage,
    searchMeditations,
} from "../services/MeditationService";

export const MEDITATION_QUERY_KEY = "meditations";
export const MEDITATION_CATEGORIES_QUERY_KEY = "meditationCategories";
export const MEDITATION_METADATA_QUERY_KEY = "meditationMetadata";

/**
 * Hook to get all meditations
 */
export const useAllMeditations = () => {
  return useQuery<MeditationAudio[], Error>({
    queryKey: [MEDITATION_QUERY_KEY],
    queryFn: getAllMeditations,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to get a specific meditation by ID
 */
export const useMeditationById = (id: string) => {
  return useQuery<MeditationAudio | null, Error>({
    queryKey: [MEDITATION_QUERY_KEY, id],
    queryFn: () => getMeditationById(id),
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: !!id,
  });
};

/**
 * Hook to get meditations by category
 */
export const useMeditationsByCategory = (category: string) => {
  return useQuery<MeditationAudio[], Error>({
    queryKey: [MEDITATION_QUERY_KEY, "category", category],
    queryFn: () => getMeditationsByCategory(category),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!category,
  });
};

/**
 * Hook to get meditations by pregnancy stage
 */
export const useMeditationsByPregnancyStage = (
  stage: "prenatal" | "perinatal" | "postnatal",
) => {
  return useQuery<MeditationAudio[], Error>({
    queryKey: [MEDITATION_QUERY_KEY, "stage", stage],
    queryFn: () => getMeditationsByPregnancyStage(stage),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!stage,
  });
};

/**
 * Hook to get meditations by difficulty
 */
export const useMeditationsByDifficulty = (
  difficulty: "beginner" | "intermediate" | "advanced",
) => {
  return useQuery<MeditationAudio[], Error>({
    queryKey: [MEDITATION_QUERY_KEY, "difficulty", difficulty],
    queryFn: () => getMeditationsByDifficulty(difficulty),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!difficulty,
  });
};

/**
 * Hook to get all meditation categories
 */
export const useMeditationCategories = () => {
  return useQuery<MeditationCategory[], Error>({
    queryKey: [MEDITATION_CATEGORIES_QUERY_KEY],
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

/**
 * Hook to get meditation metadata (tags, pregnancy stages)
 */
export const useMeditationMetadata = () => {
  return useQuery<
    { tags: string[]; pregnancyStages: any[]; lastUpdated?: any },
    Error
  >({
    queryKey: [MEDITATION_METADATA_QUERY_KEY],
    queryFn: getMeditationMetadata,
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

/**
 * Hook to search meditations
 */
export const useSearchMeditations = (query: string) => {
  return useQuery<MeditationAudio[], Error>({
    queryKey: [MEDITATION_QUERY_KEY, "search", query],
    queryFn: () => searchMeditations(query),
    staleTime: 1000 * 60 * 2, // 2 minutes
    enabled: query.length >= 2, // Only search when query is at least 2 characters
  });
};

/**
 * Hook to get featured meditation
 */
export const useFeaturedMeditation = () => {
  return useQuery<MeditationAudio | null, Error>({
    queryKey: [MEDITATION_QUERY_KEY, "featured"],
    queryFn: getFeaturedMeditation,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
