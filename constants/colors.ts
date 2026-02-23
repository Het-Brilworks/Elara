/**
 * Color Constants for Elara App
 * Based on the maternal wellness journey design system
 */

// Primary Brand Colors
export const COLORS = {
  // Brand Identity - Maroon/Burgundy
  PRIMARY: "#7B2F4C",
  PRIMARY_LIGHT: "#9D425F",
  PRIMARY_DARK: "#5A2237",
  ON_PRIMARY: "#FFFFFF",

  // Journey Stage Colors
  FERTILITY: {
    background: "#FFE5CC", // Peach background
    card: "#FFF5ED", // Lighter card background
    label: "#D4851F", // Label/badge color
    text: "#8B5315", // Text on fertility background
  },

  PRENATAL: {
    background: "#D4F5E9", // Mint green background
    card: "#F0FBF7", // Lighter card background
    label: "#2E8B6E", // Label/badge color
    text: "#1E5F4D", // Text on prenatal background
  },

  POSTNATAL: {
    background: "#E5D4F5", // Lavender background
    card: "#F7F0FB", // Lighter card background
    label: "#7B4FA0", // Label/badge color
    text: "#5A3876", // Text on postnatal background
  },

  // Accent Colors
  PINK: "#FFD4E5",
  PINK_DARK: "#FFB8D4",
  ROSE: "#F5E6EB",

  // Backgrounds
  WHITE: "#FFFFFF",
  BACKGROUND: "#FFFFFF",
  SURFACE: "#F8F8F8",

  // Text Colors
  TEXT_PRIMARY: "#1A1A1A",
  TEXT_SECONDARY: "#6B6B6B",
  TEXT_HINT: "#9E9E9E",
  TEXT_DISABLED: "#BDBDBD",

  // Status Colors
  SUCCESS: "#81C784",
  ERROR: "#E57373",
  WARNING: "#FFB74D",
  INFO: "#64B5F6",

  // UI Elements
  BORDER: "#E0E0E0",
  DIVIDER: "#E8E8E8",
  OVERLAY: "rgba(0, 0, 0, 0.5)",
  TRANSPARENT: "transparent",

  // Gradients
  GRADIENT: {
    primary: ["#D9527E", "#7B2F4C"],
    fertility: ["#FFE5CC", "#FFD4B8"],
    prenatal: ["#D4F5E9", "#B8EBD6"],
    postnatal: ["#E5D4F5", "#D4B8EB"],
  },
} as const;

// Filter/Chip States
export const CHIP_COLORS = {
  SELECTED: {
    background: COLORS.PRIMARY,
    text: COLORS.ON_PRIMARY,
  },
  UNSELECTED: {
    background: COLORS.PINK,
    text: COLORS.PRIMARY,
  },
  DISABLED: {
    background: COLORS.SURFACE,
    text: COLORS.TEXT_DISABLED,
  },
} as const;

// Button Colors
export const BUTTON_COLORS = {
  PRIMARY: {
    background: COLORS.PRIMARY,
    text: COLORS.ON_PRIMARY,
    ripple: COLORS.PRIMARY_LIGHT,
  },
  SECONDARY: {
    background: COLORS.PINK,
    text: COLORS.PRIMARY,
    ripple: COLORS.PINK_DARK,
  },
  OUTLINE: {
    background: COLORS.TRANSPARENT,
    text: COLORS.PRIMARY,
    border: COLORS.PRIMARY,
  },
  TEXT: {
    background: COLORS.TRANSPARENT,
    text: COLORS.PRIMARY,
    ripple: COLORS.PINK,
  },
} as const;

// Card Colors by Stage
export const STAGE_CARDS = {
  1: {
    background: COLORS.FERTILITY.background,
    card: COLORS.FERTILITY.card,
    label: COLORS.FERTILITY.label,
    labelText: COLORS.FERTILITY.text,
  },
  2: {
    background: COLORS.PRENATAL.background,
    card: COLORS.PRENATAL.card,
    label: COLORS.PRENATAL.label,
    labelText: COLORS.PRENATAL.text,
  },
  3: {
    background: COLORS.POSTNATAL.background,
    card: COLORS.POSTNATAL.card,
    label: COLORS.POSTNATAL.label,
    labelText: COLORS.POSTNATAL.text,
  },
} as const;

// Mood/Emotion Colors
export const MOOD_COLORS = {
  JOYFUL: "#FFC107",
  ANGRY: "#FF5252",
  LAZY: "#64B5F6",
  HAPPY: "#FFD54F",
  CALM: "#81C784",
  ANXIOUS: "#FF8A65",
} as const;

// Streak/Progress Colors
export const PROGRESS_COLORS = {
  ACTIVE: COLORS.PRIMARY,
  INACTIVE: COLORS.PINK,
  COMPLETE: COLORS.SUCCESS,
  INCOMPLETE: COLORS.SURFACE,
} as const;

// Opacity Helpers
export const withOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Export type for TypeScript
export type ColorKey = keyof typeof COLORS;
export type StageNumber = 1 | 2 | 3;
