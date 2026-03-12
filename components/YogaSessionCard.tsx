import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import {
    useIsFavorited,
    useToggleFavorite,
} from "@/Firebase/hooks/useFavorites";
import { Heart } from "lucide-react-native";
import React from "react";
import {
    ActivityIndicator,
    Alert,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

interface YogaSessionCardProps {
  videoId: string;
  title: string;
  instructor: string;
  level: string;
  type: string;
  duration?: string;
  imageUrl?: string;
  onPress?: () => void;
  badge?: string;
}

export default function YogaSessionCard({
  videoId,
  title,
  instructor,
  level,
  type,
  duration,
  imageUrl,
  onPress,
  badge,
}: YogaSessionCardProps) {
  const { user } = useAuthState();
  const isFavorite = useIsFavorited(user?.uid, videoId, "yoga");
  const toggleFavoriteMutation = useToggleFavorite();

  const handleToggleFavorite = (e: any) => {
    e.stopPropagation(); // Prevent card press when clicking heart

    if (!user?.uid) {
      Alert.alert(
        "Not Logged In",
        "Please log in to add videos to your favorites",
      );
      return;
    }

    if (!videoId) {
      Alert.alert("Error", "Unable to favorite this video");
      return;
    }

    toggleFavoriteMutation.mutate({
      userId: user.uid,
      itemId: videoId,
      itemType: "yoga",
    });
  };

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
        {badge ? (
          <View style={styles.dailyPickBadge}>
            <Text style={styles.dailyPickText}>{badge}</Text>
          </View>
        ) : null}
        {duration ? (
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        ) : null}
        <Pressable
          style={styles.favoriteButton}
          onPress={handleToggleFavorite}
          disabled={toggleFavoriteMutation.isPending}
        >
          {toggleFavoriteMutation.isPending ? (
            <ActivityIndicator
              size="small"
              color={theme.colors.light.primary}
            />
          ) : (
            <Heart
              size={20}
              color={isFavorite ? "#FF6B9D" : "#666"}
              fill={isFavorite ? "#FF6B9D" : "transparent"}
              strokeWidth={2}
            />
          )}
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
    backgroundColor: "#FFF",
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F0F0F0",
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
    backgroundColor: "rgba(255, 255, 255, 0.9)",
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
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.radii.full,
  },
  dailyPickBadge: {
    position: "absolute",
    top: theme.spacing.md,
    left: theme.spacing.md,
    backgroundColor: theme.colors.light.primary,
    paddingHorizontal: theme.spacing.sm + 2,
    paddingVertical: 6,
    borderRadius: theme.radii.full,
  },
  dailyPickText: {
    fontSize: theme.textStyles.label_small.fontSize,
    fontWeight: "700",
    color: "#FFF",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  durationText: {
    fontSize: theme.textStyles.label_small.fontSize,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  content: {
    padding: theme.spacing.md,
  },
  title: {
    fontSize: theme.textStyles.title_medium.fontSize,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  instructor: {
    fontSize: theme.textStyles.body_small.fontSize,
    color: "#666",
    marginBottom: theme.spacing.sm,
  },
  metaContainer: {
    flexDirection: "row",
    gap: theme.spacing.sm,
  },
  badge: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.radii.sm,
  },
  badgeText: {
    fontSize: theme.textStyles.label_small.fontSize,
    fontWeight: "600",
    color: "#666",
  },
});
