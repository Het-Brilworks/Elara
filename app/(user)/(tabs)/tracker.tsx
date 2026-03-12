import { theme } from "@/constants/theme";
import { Activity, TrendingUp } from "lucide-react-native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrackerScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Activity
            size={32}
            color={theme.colors.dark.primary}
            strokeWidth={2}
          />
          <Text style={styles.title}>Health Tracker</Text>
        </View>
        <Text style={styles.subtitle}>
          Track your symptoms, mood, and recovery milestones
        </Text>

        <View style={styles.placeholderCard}>
          <TrendingUp
            size={48}
            color={theme.colors.dark.primary}
            strokeWidth={1.5}
          />
          <Text style={styles.placeholderText}>
            Your health tracking data will appear here
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark.background,
  },
  scrollContent: {
    padding: theme.spacing.lg,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
    gap: theme.spacing.md,
  },
  title: {
    ...theme.textStyles.headline_medium,
    color: theme.colors.dark.primary_text,
  },
  subtitle: {
    ...theme.textStyles.body_large,
    color: theme.colors.dark.secondary_text,
    marginBottom: theme.spacing.xl,
  },
  placeholderCard: {
    backgroundColor: theme.colors.dark.surface,
    borderRadius: theme.radii.md,
    padding: theme.spacing.xl * 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(168, 181, 160, 0.2)",
  },
  placeholderText: {
    ...theme.textStyles.body_medium,
    color: theme.colors.dark.hint,
    marginTop: theme.spacing.md,
    textAlign: "center",
  },
});
