import meditationData from "../data/meditationAudios.json";
import type {
    MeditationAudio,
    MeditationCategory,
    PregnancyStage
} from "../types/meditation";

/**
 * Get all meditation audios
 */
export const getAllMeditations = (): MeditationAudio[] => {
  return meditationData.meditations as MeditationAudio[];
};

/**
 * Get meditation by ID
 */
export const getMeditationById = (id: string): MeditationAudio | undefined => {
  return meditationData.meditations.find((m) => m.id === id) as
    | MeditationAudio
    | undefined;
};

/**
 * Get meditations by category
 */
export const getMeditationsByCategory = (
  category: string,
): MeditationAudio[] => {
  return meditationData.meditations.filter(
    (m) => m.category === category,
  ) as MeditationAudio[];
};

/**
 * Get meditations by tag
 */
export const getMeditationsByTag = (tag: string): MeditationAudio[] => {
  return meditationData.meditations.filter((m) =>
    m.bestFor.includes(tag),
  ) as MeditationAudio[];
};

/**
 * Get meditations by difficulty
 */
export const getMeditationsByDifficulty = (
  difficulty: string,
): MeditationAudio[] => {
  return meditationData.meditations.filter(
    (m) => m.difficulty === difficulty,
  ) as MeditationAudio[];
};

/**
 * Get meditations by pregnancy stage
 */
export const getMeditationsByPregnancyStage = (
  stage: string,
): MeditationAudio[] => {
  return meditationData.meditations.filter(
    (m) => m.pregnancyStage === stage,
  ) as MeditationAudio[];
};

/**
 * Get all categories
 */
export const getAllCategories = (): MeditationCategory[] => {
  return meditationData.categories as MeditationCategory[];
};

/**
 * Get all pregnancy stages
 */
export const getAllPregnancyStages = (): PregnancyStage[] => {
  return meditationData.pregnancyStages as PregnancyStage[];
};

/**
 * Search meditations by title or description
 */
export const searchMeditations = (query: string): MeditationAudio[] => {
  const lowercaseQuery = query.toLowerCase();
  return meditationData.meditations.filter(
    (m) =>
      m.title.toLowerCase().includes(lowercaseQuery) ||
      m.description.toLowerCase().includes(lowercaseQuery) ||
      m.benefits.some((b) => b.toLowerCase().includes(lowercaseQuery)),
  ) as MeditationAudio[];
};

/**
 * Get meditations by duration range
 */
export const getMeditationsByDuration = (
  minDuration: number,
  maxDuration: number,
): MeditationAudio[] => {
  return meditationData.meditations.filter(
    (m) => m.duration >= minDuration && m.duration <= maxDuration,
  ) as MeditationAudio[];
};

/**
 * Get quick meditations (under 10 minutes)
 */
export const getQuickMeditations = (): MeditationAudio[] => {
  return getMeditationsByDuration(0, 600);
};

/**
 * Get recommended meditations for time of day
 */
export const getRecommendedByTimeOfDay = (): MeditationAudio[] => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    // Morning
    return getMeditationsByTag("morning");
  } else if (hour >= 12 && hour < 17) {
    // Afternoon
    return getMeditationsByTag("midday");
  } else {
    // Evening/Night
    return getMeditationsByTag("bedtime");
  }
};

/**
 * Format duration in seconds to readable text
 */
export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (remainingSeconds === 0) {
    return `${minutes} min`;
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

/**
 * Get audio file path
 */
export const getAudioFilePath = (fileName: string): string => {
  // Decode the URL-encoded filename
  const decodedName = decodeURIComponent(fileName);
  return `../../songs/${decodedName}`;
};

/**
 * Get all available tags
 */
export const getAllTags = (): string[] => {
  return meditationData.tags;
};
