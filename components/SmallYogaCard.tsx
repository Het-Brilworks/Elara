import { theme } from "@/constants/theme";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface SmallYogaCardProps {
  title: string;
  duration: string;
  type: string;
  imageUrl?: string;
  onPress?: () => void;
}

export default function SmallYogaCard({
  title,
  duration,
  type,
  imageUrl,
  onPress,
}: SmallYogaCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: imageUrl || "https://via.placeholder.com/180x120" }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.meta}>
          {duration} • {type}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: "#FFF",
    borderRadius: theme.radii.sm,
    marginRight: theme.spacing.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  pressed: {
    opacity: 0.9,
  },
  imageBackground: {
    width: "100%",
    height: 100,
  },
  image: {
    borderTopLeftRadius: theme.radii.sm,
    borderTopRightRadius: theme.radii.sm,
  },
  content: {
    padding: theme.spacing.sm,
  },
  title: {
    fontSize: theme.textStyles.label_medium.fontSize,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  meta: {
    fontSize: theme.textStyles.label_small.fontSize,
    color: "#666",
  },
});
