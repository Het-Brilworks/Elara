import { useBabyWeekByNumber } from "@/Firebase/hooks/useBabyWeeks";
import { theme } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface BabyWeekCardProps {
  weekNumber: number;
}

/**
 * Example component showing how to display a baby week image
 * Use this in your Baby tab or pregnancy tracker
 */
export default function BabyWeekCard({ weekNumber }: BabyWeekCardProps) {
  const { data: babyWeek, isLoading, error } = useBabyWeekByNumber(weekNumber);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.light.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load baby image</Text>
      </View>
    );
  }

  if (!babyWeek) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Week {weekNumber} not found</Text>
        <Text style={styles.hintText}>
          Make sure to run the upload script first
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.weekLabel}>Week {babyWeek.week}</Text>
        <Text style={styles.subtitle}>Your Baby's Development</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: babyWeek.imageUrl }}
          style={styles.image}
          contentFit="contain"
          transition={200}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {getWeekDescription(babyWeek.week)}
        </Text>
      </View>
    </View>
  );
}

// Helper function to get week descriptions
function getWeekDescription(week: number): string {
  if (week <= 4) {
    return "Your baby is about the size of a poppy seed";
  } else if (week <= 8) {
    return "Your baby is about the size of a raspberry";
  } else if (week <= 12) {
    return "Your baby is about the size of a lime";
  } else if (week <= 16) {
    return "Your baby is about the size of an avocado";
  } else if (week <= 20) {
    return "Your baby is about the size of a banana";
  } else if (week <= 24) {
    return "Your baby is about the size of a papaya";
  } else if (week <= 28) {
    return "Your baby is about the size of a cauliflower";
  } else if (week <= 32) {
    return "Your baby is about the size of a pineapple";
  } else if (week <= 36) {
    return "Your baby is about the size of a honeydew melon";
  } else {
    return "Your baby is almost ready to meet you!";
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: theme.radii.md,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.md,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  header: {
    marginBottom: theme.spacing.md,
  },
  weekLabel: {
    fontSize: 24,
    fontWeight: "700",
    color: theme.colors.light.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBFBFB",
    borderRadius: theme.radii.sm,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  image: {
    width: 200,
    height: 200,
  },
  footer: {
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#FF6B6B",
    textAlign: "center",
    marginBottom: 8,
  },
  hintText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
});
