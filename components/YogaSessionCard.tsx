import { theme } from "@/constants/theme";
import { Heart } from "lucide-react-native";
import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface YogaSessionCardProps {
  title: string;
  instructor: string;
  level: string;
  type: string;
  duration?: string;
  imageUrl?: string;
  onPress?: () => void;
}

export default function YogaSessionCard({
  title,
  instructor,
  level,
  type,
  duration,
  imageUrl,
  onPress,
}: YogaSessionCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: imageUrl || "https://via.placeholder.com/400x240" }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        {duration ? (
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        ) : null}
        <Pressable
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            size={20}
            color={
              isFavorite
                ? theme.colors.dark.error
                : theme.colors.dark.on_primary
            }
            fill={isFavorite ? theme.colors.dark.error : "transparent"}
            strokeWidth={2}
          />
        </Pressable>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.instructor}>{instructor}</Text>
        <View style={styles.metaContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{level}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{type}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark.surface,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.md,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.9,
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  image: {
    borderTopLeftRadius: theme.radii.md,
    borderTopRightRadius: theme.radii.md,
  },
  favoriteButton: {
    position: "absolute",
    top: theme.spacing.md,
    right: theme.spacing.md,
    backgroundColor: "rgba(56, 56, 56, 0.8)",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  durationBadge: {
    position: "absolute",
    top: theme.spacing.md,
    right: theme.spacing.md + 48,
    backgroundColor: "rgba(250, 247, 242, 0.85)",
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.radii.full,
  },
  durationText: {
    fontSize: theme.textStyles.label_small.fontSize,
    fontWeight: "600",
    color: theme.colors.dark.background,
  },
  content: {
    padding: theme.spacing.md,
  },
  title: {
    fontSize: theme.textStyles.title_medium.fontSize,
    fontWeight: "600",
    color: theme.colors.dark.primary_text,
    marginBottom: 4,
  },
  instructor: {
    fontSize: theme.textStyles.body_small.fontSize,
    color: theme.colors.dark.secondary_text,
    marginBottom: theme.spacing.sm,
  },
  metaContainer: {
    flexDirection: "row",
    gap: theme.spacing.sm,
  },
  badge: {
    backgroundColor: theme.colors.dark.background,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.radii.sm,
  },
  badgeText: {
    fontSize: theme.textStyles.label_small.fontSize,
    fontWeight: "600",
    color: theme.colors.dark.secondary_text,
  },
});
