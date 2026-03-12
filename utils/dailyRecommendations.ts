import { MeditationAudio } from "@/types/meditation";
import { YogaVideo } from "@/types/yoga";

/**
 * Get a stable index based on the current date
 * This ensures the same recommendation is shown for the entire day
 * @returns A number between 0 and the array length
 */
export const getDailyIndex = (arrayLength: number): number => {
  if (arrayLength === 0) return 0;

  // Get current date without time
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  // Create a simple hash from the date string
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    const char = dateString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Return a positive index
  return Math.abs(hash) % arrayLength;
};

/**
 * Get today's recommended meditation based on the current date
 * Uses a deterministic algorithm to select a meditation that remains the same throughout the day
 * @param meditations - Array of all available meditations
 * @returns The recommended meditation for today
 */
export const getTodaysRecommendedMeditation = (
  meditations: MeditationAudio[],
): MeditationAudio | null => {
  if (!meditations || meditations.length === 0) return null;

  // Filter for prenatal stage meditations suitable for daily practice
  const suitableMeditations = meditations.filter(
    (meditation) =>
      meditation.pregnancyStage === "prenatal" &&
      meditation.difficulty === "beginner",
  );

  // If no suitable meditations found, use all meditations
  const pool =
    suitableMeditations.length > 0 ? suitableMeditations : meditations;

  const index = getDailyIndex(pool.length);
  return pool[index];
};

/**
 * Get today's recommended yoga video based on the current date
 * Uses a deterministic algorithm to select a yoga video that remains the same throughout the day
 * @param yogaVideos - Array of all available yoga videos
 * @returns The recommended yoga video for today
 */
export const getTodaysRecommendedYoga = (
  yogaVideos: YogaVideo[],
): YogaVideo | null => {
  if (!yogaVideos || yogaVideos.length === 0) return null;

  // Filter for active videos suitable for all trimesters
  const suitableVideos = yogaVideos.filter(
    (video) =>
      video.isActive &&
      video.pregnancyStage === "all_trimesters" &&
      (video.difficulty === "beginner" || video.level === "Beginner"),
  );

  // If no suitable videos found, use all active videos
  const pool =
    suitableVideos.length > 0
      ? suitableVideos
      : yogaVideos.filter((v) => v.isActive !== false);

  const index = getDailyIndex(pool.length);
  return pool[index];
};

/**
 * Get daily meditation pick based on date
 * Different from recommended - this picks a featured/highlighted meditation
 * @param meditations - Array of all available meditations
 * @returns The daily pick meditation
 */
export const getDailyMeditationPick = (
  meditations: MeditationAudio[],
): MeditationAudio | null => {
  if (!meditations || meditations.length === 0) return null;

  // Use a different seed for daily pick to ensure it's different from recommended
  const today = new Date();
  const dateString = `pick-${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    const char = dateString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  const index = Math.abs(hash) % meditations.length;
  return meditations[index];
};

/**
 * Get daily yoga pick based on date
 * Different from recommended - this picks a featured/highlighted yoga session
 * @param yogaVideos - Array of all available yoga videos
 * @returns The daily pick yoga video
 */
export const getDailyYogaPick = (yogaVideos: YogaVideo[]): YogaVideo | null => {
  if (!yogaVideos || yogaVideos.length === 0) return null;

  // Use a different seed for daily pick to ensure it's different from recommended
  const today = new Date();
  const dateString = `yogapick-${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    const char = dateString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  const activeVideos = yogaVideos.filter((v) => v.isActive !== false);
  const pool = activeVideos.length > 0 ? activeVideos : yogaVideos;

  const index = Math.abs(hash) % pool.length;
  return pool[index];
};

/**
 * Get recommended meditation based on pregnancy week
 * Tailors recommendations based on the user's pregnancy stage
 * @param meditations - Array of all available meditations
 * @param pregnancyWeek - Current pregnancy week (1-42)
 * @returns Meditation suitable for the current pregnancy week
 */
export const getRecommendedMeditationByWeek = (
  meditations: MeditationAudio[],
  pregnancyWeek: number,
): MeditationAudio | null => {
  if (!meditations || meditations.length === 0) return null;

  // Determine trimester based on week
  let trimester: "first" | "second" | "third";
  if (pregnancyWeek <= 13) {
    trimester = "first";
  } else if (pregnancyWeek <= 26) {
    trimester = "second";
  } else {
    trimester = "third";
  }

  // Filter meditations suitable for current trimester
  const suitableMeditations = meditations.filter(
    (meditation) =>
      meditation.pregnancyStage === "prenatal" &&
      meditation.bestFor?.includes("any_trimester"),
  );

  const pool =
    suitableMeditations.length > 0 ? suitableMeditations : meditations;
  const index = getDailyIndex(pool.length);
  return pool[index];
};

/**
 * Get recommended yoga based on pregnancy week
 * Tailors recommendations based on the user's pregnancy stage
 * @param yogaVideos - Array of all available yoga videos
 * @param pregnancyWeek - Current pregnancy week (1-42)
 * @returns Yoga video suitable for the current pregnancy week
 */
export const getRecommendedYogaByWeek = (
  yogaVideos: YogaVideo[],
  pregnancyWeek: number,
): YogaVideo | null => {
  if (!yogaVideos || yogaVideos.length === 0) return null;

  // Determine trimester based on week
  let trimester: "first" | "second" | "third";
  if (pregnancyWeek <= 13) {
    trimester = "first";
  } else if (pregnancyWeek <= 26) {
    trimester = "second";
  } else {
    trimester = "third";
  }

  // Filter yoga videos suitable for current trimester
  const suitableVideos = yogaVideos.filter(
    (video) =>
      video.isActive !== false &&
      (video.pregnancyStage === "all_trimesters" ||
        video.trimester?.includes(trimester)),
  );

  const pool =
    suitableVideos.length > 0
      ? suitableVideos
      : yogaVideos.filter((v) => v.isActive !== false);

  const index = getDailyIndex(pool.length);
  return pool[index];
};

/**
 * Format duration in seconds to readable string
 * @param seconds - Duration in seconds
 * @returns Formatted string like "20 min" or "1h 30min"
 */
export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return minutes > 0 ? `${hours}h ${minutes}min` : `${hours}h`;
  }

  return `${minutes} min`;
};
