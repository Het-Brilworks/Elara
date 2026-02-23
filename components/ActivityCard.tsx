import { theme } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ActivityCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export default function ActivityCard({
  icon: Icon,
  iconColor,
  title,
  subtitle,
  onPress,
}: ActivityCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
        <Icon size={28} color={theme.colors.dark.surface} strokeWidth={2} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.playButton}>
        <View style={styles.playIcon} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.dark.surface,
    borderRadius: theme.radii.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    gap: theme.spacing.md,
  },
  pressed: {
    opacity: 0.7,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: theme.radii.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: theme.textStyles.label_large.fontSize,
    fontWeight: "600",
    color: theme.colors.dark.primary_text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: theme.textStyles.body_small.fontSize,
    color: theme.colors.dark.secondary_text,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.dark.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  playIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderTopWidth: 7,
    borderBottomWidth: 7,
    borderLeftColor: theme.colors.dark.surface,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    marginLeft: 3,
  },
});
