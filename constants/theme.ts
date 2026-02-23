export const theme = {
  fonts: {
    primary: "Nunito",
    secondary: "DM Sans",
  },
  colors: {
    light: {
      // Brand Colors - Maroon/Burgundy
      primary: "#7B2F4C",
      on_primary: "#FFFFFF",
      primary_light: "#9D425F",
      primary_dark: "#5A2237",

      // Stage Colors
      stage1: "#FFE5CC", // Fertility - Peach
      stage1_label: "#D4851F",
      stage2: "#D4F5E9", // Prenatal - Mint Green
      stage2_label: "#2E8B6E",
      stage3: "#E5D4F5", // Postnatal - Lavender
      stage3_label: "#7B4FA0",

      // Accent Colors
      accent_pink: "#FFD4E5",
      accent_pink_dark: "#FFB8D4",
      secondary: "#F5E6EB",
      on_secondary: "#FFFFFF",

      // Backgrounds
      background: "#FFFFFF",
      surface: "#FFFFFF",
      surface_variant: "#F8F8F8",

      // Text Colors
      on_surface: "#1A1A1A",
      primary_text: "#1A1A1A",
      secondary_text: "#6B6B6B",
      hint: "#9E9E9E",

      // Status Colors
      error: "#E57373",
      on_error: "#FFFFFF",
      success: "#81C784",
      warning: "#FFB74D",

      // UI Elements
      divider: "#E8E8E8",
      border: "#E0E0E0",
      transparent: "#00000000",

      // Card Backgrounds
      card_fertility: "#FFF5ED",
      card_prenatal: "#F0FBF7",
      card_postnatal: "#F7F0FB",

      // Gradients (for streak/progress indicators)
      gradient_start: "#D9527E",
      gradient_end: "#7B2F4C",
    },
    dark: {
      // Brand Colors - Maroon/Burgundy (adjusted for dark mode)
      primary: "#D9527E",
      on_primary: "#1A1A1A",
      primary_light: "#E86D96",
      primary_dark: "#B33D63",

      // Stage Colors (darker variants)
      stage1: "#4D3A2A",
      stage1_label: "#F5B876",
      stage2: "#2A4D3F",
      stage2_label: "#6FD4B0",
      stage3: "#3F2A4D",
      stage3_label: "#B990D4",

      // Accent Colors
      accent_pink: "#4D2A3A",
      accent_pink_dark: "#6B3A51",
      secondary: "#4A3340",
      on_secondary: "#FFFFFF",

      // Backgrounds
      background: "#121212",
      surface: "#1E1E1E",
      surface_variant: "#2C2C2C",

      // Text Colors
      on_surface: "#E8E8E8",
      primary_text: "#E8E8E8",
      secondary_text: "#B0B0B0",
      hint: "#757575",

      // Status Colors
      error: "#EF9A9A",
      on_error: "#1A1A1A",
      success: "#A5D6A7",
      warning: "#FFCC80",

      // UI Elements
      divider: "#333333",
      border: "#3D3D3D",
      transparent: "#00000000",

      // Card Backgrounds
      card_fertility: "#2A2520",
      card_prenatal: "#202A27",
      card_postnatal: "#27202A",

      // Gradients
      gradient_start: "#D9527E",
      gradient_end: "#A73D63",
    },
  },
  textStyles: {
    headline_large: {
      fontSize: 34,
      fontWeight: "700" as const,
      lineHeight: 44,
    },
    headline_medium: {
      fontSize: 28,
      fontWeight: "600" as const,
      lineHeight: 38,
    },
    title_large: {
      fontSize: 22,
      fontWeight: "600" as const,
      lineHeight: 31,
    },
    title_medium: {
      fontSize: 17,
      fontWeight: "600" as const,
      lineHeight: 24,
    },
    body_large: {
      fontSize: 17,
      fontWeight: "400" as const,
      lineHeight: 27,
    },
    body_medium: {
      fontSize: 15,
      fontWeight: "400" as const,
      lineHeight: 24,
    },
    body_small: {
      fontSize: 13,
      fontWeight: "400" as const,
      lineHeight: 20,
    },
    label_large: {
      fontSize: 15,
      fontWeight: "600" as const,
      lineHeight: 21,
    },
    label_medium: {
      fontSize: 13,
      fontWeight: "600" as const,
      lineHeight: 18,
    },
    label_small: {
      fontSize: 11,
      fontWeight: "600" as const,
      lineHeight: 14,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radii: {
    sm: 12,
    md: 20,
    lg: 32,
    full: 9999,
  },
  shadows: {
    sm: {
      shadowColor: "#7B2F4C",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 2,
    },
    md: {
      shadowColor: "#7B2F4C",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 4,
    },
    lg: {
      shadowColor: "#7B2F4C",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 24,
      elevation: 8,
    },
  },
};

export type Theme = typeof theme;
