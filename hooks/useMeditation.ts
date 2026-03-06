import { useQuery } from "@tanstack/react-query";
import {
    getAllCategories,
    getAllMeditations,
    getAllPregnancyStages,
    getMeditationById,
    getMeditationsByCategory,
    getMeditationsByDifficulty,
    getMeditationsByPregnancyStage,
    getMeditationsByTag,
    getQuickMeditations,
    getRecommendedByTimeOfDay,
    searchMeditations,
} from "../services/MeditationService";
import type {
    MeditationAudio,
    MeditationCategory,
    PregnancyStage,
} from "../types/meditation";

/**
 * Hook to get all meditations
 */
export const useAllMeditations = () => {
  return useQuery<MeditationAudio[]>({
    queryKey: ["meditations", "all"],
    queryFn: () => getAllMeditations(),
    staleTime: Infinity, // Static data, never stale
  });
};

/**
 * Hook to get a single meditation by ID
 */
export const useMeditation = (id: string | undefined) => {
  return useQuery<MeditationAudio | undefined>({
    queryKey: ["meditation", id],
    queryFn: () => (id ? getMeditationById(id) : undefined),
    enabled: !!id,
    staleTime: Infinity,
  });
};

/**
 * Hook to get meditations by category
 */
export const useMeditationsByCategory = (category: string) => {
  return useQuery<MeditationAudio[]>({
    queryKey: ["meditations", "category", category],
    queryFn: () => getMeditationsByCategory(category),
    staleTime: Infinity,
  });
};

/**
 * Hook to get meditations by tag
 */
export const useMeditationsByTag = (tag: string) => {
  return useQuery<MeditationAudio[]>({
    queryKey: ["meditations", "tag", tag],
    queryFn: () => getMeditationsByTag(tag),
    staleTime: Infinity,
  });
};

/**
 * Hook to get meditations by difficulty
 */
export const useMeditationsByDifficulty = (difficulty: string) => {
  return useQuery<MeditationAudio[]>({
    queryKey: ["meditations", "difficulty", difficulty],
    queryFn: () => getMeditationsByDifficulty(difficulty),
    staleTime: Infinity,
  });
};

/**
 * Hook to get meditations by pregnancy stage
 */
export const useMeditationsByPregnancyStage = (stage: string) => {
  return useQuery<MeditationAudio[]>({
    queryKey: ["meditations", "pregnancyStage", stage],
    queryFn: () => getMeditationsByPregnancyStage(stage),
    staleTime: Infinity,
  });
};

/**
 * Hook to get all categories
 */
export const useCategories = () => {
  return useQuery<MeditationCategory[]>({
    queryKey: ["meditation", "categories"],
    queryFn: () => getAllCategories(),
    staleTime: Infinity,
  });
};

/**
 * Hook to get all pregnancy stages
 */
export const usePregnancyStages = () => {
  return useQuery<PregnancyStage[]>({
    queryKey: ["meditation", "pregnancyStages"],
    queryFn: () => getAllPregnancyStages(),
    staleTime: Infinity,
  });
};

/**
 * Hook to search meditations
 */
export const useSearchMeditations = (query: string) => {
  return useQuery<MeditationAudio[]>({
    queryKey: ["meditations", "search", query],
    queryFn: () => searchMeditations(query),
    enabled: query.length > 0,
    staleTime: Infinity,
  });
};

/**
 * Hook to get quick meditations (under 10 minutes)
 */
export const useQuickMeditations = () => {
  return useQuery<MeditationAudio[]>({
    queryKey: ["meditations", "quick"],
    queryFn: () => getQuickMeditations(),
    staleTime: Infinity,
  });
};

/**
 * Hook to get recommended meditations based on time of day
 */
export const useRecommendedMeditations = () => {
  return useQuery<MeditationAudio[]>({
    queryKey: ["meditations", "recommended"],
    queryFn: () => getRecommendedByTimeOfDay(),
    staleTime: 1000 * 60 * 60, // Refresh every hour
  });
};
