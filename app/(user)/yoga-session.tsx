import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import {
  useIsFavorited,
  useToggleFavorite,
} from "@/Firebase/hooks/useFavorites";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Heart,
  Play,
  Sparkles,
  Star,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YogaSessionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuthState();

  const videoId = (params.videoId as string) || "";
  const title = (params.title as string) || "First Trimester Gentle Stretch";
  const duration = (params.duration as string) || "15 Minutes";
  const type = (params.type as string) || "Gentle";
  const stage = (params.stage as string) || "First Trimester";
  const youtubeUrl = (params.youtubeUrl as string) || "";
  const description =
    (params.description as string) ||
    `Safe, gentle stretches perfect for the ${stage.toLowerCase()}. Helps with morning sickness and fatigue while maintaining flexibility and connection with your body.`;
  const instructor = (params.instructor as string) || "Yoga Instructor";

  // Parse benefits from params or use default
  let benefits: string[] = [];
  try {
    benefits = params.benefits
      ? JSON.parse(params.benefits as string)
      : ["Eases nausea", "Boosts energy", "Gentle movement", "Reduces stress"];
  } catch (error) {
    benefits = [
      "Eases nausea",
      "Boosts energy",
      "Gentle movement",
      "Reduces stress",
    ];
  }

  // Extract YouTube video ID from URL
  const getYoutubeVideoId = (url: string): string => {
    if (!url) return "dQw4w9WgXcQ"; // Default video ID

    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }

    return url; // Assume it's already a video ID
  };

  const youtubeVideoId = getYoutubeVideoId(youtubeUrl);
  const [playing, setPlaying] = useState(false);

  // Favorite functionality
  const isFavorite = useIsFavorited(user?.uid, videoId, "yoga");
  const toggleFavoriteMutation = useToggleFavorite();

  const handleToggleFavorite = () => {
    console.log("Toggle favorite clicked");
    console.log("User ID:", user?.uid);
    console.log("Video ID:", videoId);

    if (!user?.uid) {
      Alert.alert(
        "Not Logged In",
        "Please log in to add videos to your favorites",
      );
      return;
    }

    if (!videoId) {
      Alert.alert(
        "Error",
        "Unable to favorite this video. Video ID is missing.",
      );
      return;
    }

    toggleFavoriteMutation.mutate(
      {
        userId: user.uid,
        itemId: videoId,
        itemType: "yoga",
      },
      {
        onSuccess: (data) => {
          console.log("Favorite toggled successfully:", data);
        },
        onError: (error) => {
          console.error("Error toggling favorite:", error);
          Alert.alert("Error", "Failed to update favorites. Please try again.");
        },
      },
    );
  };

  return (
    <View style={styles.container}>
      {/* Gradient Background Header */}
      <LinearGradient
        colors={["#F5E6EB", "#FFE5F0", "#FFFFFF"]}
        style={styles.gradientBackground}
      />

      {/* Decorative Yoga Elements */}
      <View style={styles.decorativeElements}>
        <View style={[styles.floatingCircle, styles.circle1]} />
        <View style={[styles.floatingCircle, styles.circle2]} />
        <View style={[styles.floatingCircle, styles.circle3]} />
      </View>

      <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.backButtonPressed,
            ]}
          >
            <ArrowLeft size={24} color={theme.colors.light.primary} />
          </Pressable>
          <View style={styles.headerCenter}>
            <View style={styles.sparkleContainer}>
              <Sparkles
                size={18}
                color={theme.colors.light.primary}
                fill={theme.colors.light.primary}
              />
              <Text style={styles.headerTitle}>Yoga Session</Text>
              <Sparkles
                size={18}
                color={theme.colors.light.primary}
                fill={theme.colors.light.primary}
              />
            </View>
          </View>
          <Pressable
            onPress={handleToggleFavorite}
            disabled={
              toggleFavoriteMutation.isPending || !user?.uid || !videoId
            }
            style={({ pressed }) => [
              styles.favoriteButton,
              pressed && styles.backButtonPressed,
              (toggleFavoriteMutation.isPending || !user?.uid || !videoId) &&
                styles.favoriteButtonDisabled,
            ]}
          >
            {toggleFavoriteMutation.isPending ? (
              <ActivityIndicator
                size="small"
                color={theme.colors.light.primary}
              />
            ) : (
              <Heart
                size={24}
                color={isFavorite ? "#FF6B9D" : theme.colors.light.primary}
                fill={isFavorite ? "#FF6B9D" : "transparent"}
              />
            )}
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Video Player with Fun Border */}
          <View style={styles.videoWrapper}>
            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={220}
                videoId={youtubeVideoId}
                play={playing}
                onChangeState={(state: string) => {
                  if (state === "ended") {
                    setPlaying(false);
                  }
                }}
              />
            </View>
            {/* Decorative yoga pose icons around video */}
            {/* <View style={[styles.yogaIcon, { top: -10, left: -10 }]}>
              <Text style={styles.emoji}>🧘‍♀️</Text>
            </View>
            <View style={[styles.yogaIcon, { top: -10, right: -10 }]}>
              <Text style={styles.emoji}>✨</Text>
            </View>
            <View style={[styles.yogaIcon, { bottom: -10, left: 20 }]}>
              <Text style={styles.emoji}>🌸</Text>
            </View>
            <View style={[styles.yogaIcon, { bottom: -10, right: 20 }]}>
              <Text style={styles.emoji}>🌿</Text>
            </View> */}
          </View>

          {/* Info Section with Card Design */}
          <View style={styles.infoCard}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaChip}>
                <Clock size={16} color={theme.colors.light.primary} />
                <Text style={styles.metaText}>{duration}</Text>
              </View>
              <View style={[styles.badge]}>
                <View style={styles.badgeGradient}>
                  <Text style={styles.badgeText}>{type}</Text>
                </View>
              </View>
              <View style={styles.metaChip}>
                <Star size={16} color="#FF9800" fill="#FF9800" />
                <Text style={styles.metaText}>{stage}</Text>
              </View>
            </View>

            <View style={styles.descriptionCard}>
              <Text style={styles.description}>{description}</Text>
            </View>

            {/* Benefits Section with Fun Design */}
            <View style={styles.benefitsSection}>
              <View style={styles.benefitsTitleRow}>
                <Sparkles
                  size={20}
                  color={theme.colors.light.primary}
                  fill={theme.colors.light.primary}
                />
                <Text style={styles.sectionTitle}>Benefits for You</Text>
                <Sparkles
                  size={20}
                  color={theme.colors.light.primary}
                  fill={theme.colors.light.primary}
                />
              </View>
              {benefits.map((benefit, index) => (
                <View key={index} style={styles.benefitItem}>
                  <View style={styles.benefitIconContainer}>
                    <CheckCircle2
                      size={20}
                      color={theme.colors.light.primary}
                    />
                  </View>
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
            </View>

            {/* Fun Motivational Quote */}
            <View style={styles.quoteCard}>
              <Text style={styles.quoteText}>
                "Every yoga practice is a journey of self-discovery" 🧘‍♀️💫
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Action Button with Gradient */}
        <View style={styles.footer}>
          <LinearGradient
            colors={[
              theme.colors.light.primary,
              theme.colors.light.primary_light,
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.completeButton}
          >
            <Pressable
              style={styles.completeButtonInner}
              onPress={() => {
                // Mark as complete logic
                router.back();
              }}
            >
              <View style={styles.playIconContainer}>
                <Play
                  size={16}
                  color={theme.colors.light.primary}
                  fill={theme.colors.light.primary}
                />
              </View>
              <Text style={styles.completeButtonText}>Mark as Complete ✓</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  gradientBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 300,
  },
  decorativeElements: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 300,
  },
  floatingCircle: {
    position: "absolute",
    borderRadius: 1000,
    opacity: 0.1,
  },
  circle1: {
    width: 150,
    height: 150,
    backgroundColor: theme.colors.light.primary,
    top: -50,
    right: -30,
  },
  circle2: {
    width: 100,
    height: 100,
    backgroundColor: theme.colors.light.primary_light,
    top: 100,
    left: -20,
  },
  circle3: {
    width: 80,
    height: 80,
    backgroundColor: theme.colors.light.accent_pink_dark,
    top: 50,
    right: 100,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  backButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  favoriteButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  favoriteButtonDisabled: {
    opacity: 0.5,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
  },
  sparkleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.colors.light.primary_dark,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  videoWrapper: {
    marginHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.lg,
    position: "relative",
  },
  videoContainer: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#000",
    shadowColor: theme.colors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  yogaIcon: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  emoji: {
    fontSize: 20,
  },
  infoCard: {
    marginTop: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
  },
  titleRow: {
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1A1A",
    lineHeight: 34,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
    flexWrap: "wrap",
  },
  metaChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  metaText: {
    fontSize: 14,
    color: "#424242",
    fontWeight: "600",
  },
  badge: {
    borderRadius: 20,
    overflow: "hidden",
  },
  badgeGradient: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme.colors.light.accent_pink,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "700",
    color: theme.colors.light.primary,
  },
  descriptionCard: {
    backgroundColor: theme.colors.light.secondary,
    borderRadius: 16,
    padding: theme.spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.light.primary,
  },
  description: {
    fontSize: 15,
    color: "#424242",
    lineHeight: 24,
  },
  benefitsSection: {
    marginTop: theme.spacing.xl,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: theme.spacing.lg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  benefitsTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: theme.colors.light.primary_dark,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.light.accent_pink,
    padding: theme.spacing.md,
    borderRadius: 12,
  },
  benefitIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  benefitText: {
    fontSize: 15,
    color: theme.colors.light.primary_dark,
    fontWeight: "600",
    flex: 1,
  },
  quoteCard: {
    marginTop: theme.spacing.xl,
    backgroundColor: theme.colors.light.secondary,
    borderRadius: 16,
    padding: theme.spacing.lg,
    borderWidth: 2,
    borderColor: theme.colors.light.accent_pink_dark,
    borderStyle: "dashed",
  },
  quoteText: {
    fontSize: 15,
    fontStyle: "italic",
    color: theme.colors.light.primary_dark,
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "500",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  completeButton: {
    borderRadius: 16,
    shadowColor: theme.colors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  completeButtonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    gap: theme.spacing.sm,
  },
  playIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  completeButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
