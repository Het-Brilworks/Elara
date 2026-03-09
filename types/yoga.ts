export interface YogaVideo {
  id: string;
  title: string;
  duration: number; // in seconds
  durationText: string; // formatted display text
  youtubeUrl: string;
  thumbnailUrl: string;
  instructor: string;
  level: string;
  type: string;
  category: string;
  pregnancyStage: "all_trimesters" | "first" | "second" | "third";
  trimester: string[];
  description: string;
  benefits: string[];
  instructions: string;
  bestFor: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  isActive: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface YogaCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export type YogaDifficulty = "beginner" | "intermediate" | "advanced";

export type YogaTrimester = "first" | "second" | "third" | "all_trimesters";

export type YogaType =
  | "Gentle"
  | "Vinyasa"
  | "Therapeutic"
  | "Restorative"
  | "Prenatal";
