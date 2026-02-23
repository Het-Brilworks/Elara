import { theme } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface QuickStatCardProps {
  label: string;
  value: string;
}

export default function QuickStatCard({ label, value }: QuickStatCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark.surface,
    borderRadius: theme.radii.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm + 6,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  label: {
    fontSize: theme.textStyles.body_small.fontSize,
    color: theme.colors.dark.secondary_text,
    marginBottom: 6,
  },
  value: {
    fontSize: theme.textStyles.title_large.fontSize,
    fontWeight: "700",
    color: theme.colors.dark.primary_text,
  },
});
