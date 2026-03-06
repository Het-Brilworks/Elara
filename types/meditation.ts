export interface MeditationAudio {
  id: string;
  title: string;
  duration: number; // in seconds
  durationText: string; // formatted display text
  fileName: string;
  audioUrl?: string; // Firebase Storage URL
  coverImage: string; // Image URL
  category: string;
  type: string;
  pregnancyStage: "prenatal" | "perinatal" | "postnatal";
  description: string;
  benefits: string[];
  instructions: string;
  bestFor: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  thumbnailColor: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface MeditationCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface PregnancyStage {
  id: "prenatal" | "perinatal" | "postnatal";
  name: string;
  description: string;
}

export interface MeditationData {
  meditations: MeditationAudio[];
  categories: MeditationCategory[];
  tags: string[];
  pregnancyStages: PregnancyStage[];
}

export type MeditationDifficulty = "beginner" | "intermediate" | "advanced";

export type PregnancyStageType = "prenatal" | "perinatal" | "postnatal";

export type MeditationType =
  | "guided_relaxation"
  | "guided_meditation"
  | "breathing_technique"
  | "breathing_relaxation";

export type MeditationTag =
  | "any_trimester"
  | "third_trimester"
  | "bedtime"
  | "morning"
  | "midday"
  | "anxiety"
  | "stress_relief"
  | "pain_relief"
  | "connection"
  | "labor_prep"
  | "pelvic_floor"
  | "night_waking"
  | "overwhelm"
  | "busy_places"
  | "labor"
  | "anytime";
