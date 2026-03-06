import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useAllMeditations } from "@/Firebase/hooks/useMeditations";
import { MeditationAudio } from "@/types/meditation";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Heart, Play, Sparkles, Star } from "lucide-react-native";
import React from "react";
import {
    ActivityIndicator,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MeditationAllScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const categoryId = params.category as string;
  const categoryName = params.categoryName as string;

  const { data: meditations = [], isLoading } = useAllMeditations();

  const navigateToSession = (meditation: MeditationAudio) => {
    router.push({
      pathname: "/(user)/meditation-session",
      params: {
        id: meditation.id,
        title: meditation.title,
        duration: meditation.durationText,
        image: meditation.coverImage,
        audioUrl: meditation.audioUrl || "",
      },
    });
  };

  // Filter meditations by category
  const filteredMeditations = React.useMemo(() => {
    if (categoryId === "all") {
      // Show ALL meditations regardless of category
      return meditations;
    } else if (categoryId === "fav") {
      // TODO: Implement favorites tracking
      return [];
    } else {
      // Filter by specific category
      return meditations.filter((m) => m.category === categoryId);
    }
  }, [categoryId, meditations]);

  // Debug: Log what's being filtered
  React.useEffect(() => {
    console.log("meditation-all - Category:", categoryId);
    console.log("meditation-all - Total meditations:", meditations.length);
    console.log("meditation-all - Filtered count:", filteredMeditations.length);
  }, [categoryId, meditations.length, filteredMeditations.length]);

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={theme.colors.light.primary} />
        <Text style={styles.loadingText}>Loading meditations...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
          ]}
        >
          <ArrowLeft size={24} color={COLORS.PRIMARY} strokeWidth={2.5} />
        </Pressable>
        <Text style={styles.headerTitle}>{categoryName || "All Sessions"}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Count */}
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            {filteredMeditations.length}{" "}
            {filteredMeditations.length === 1 ? "session" : "sessions"}
          </Text>
        </View>

        {/* Meditations List */}
        {filteredMeditations.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyCard}>
              {/* Icon */}
              <View style={styles.emptyIconContainer}>
                {categoryId === "fav" ? (
                  <>
                    <Star
                      size={48}
                      color="#FFD700"
                      fill="#FFD700"
                      strokeWidth={1.5}
                    />
                    <Sparkles
                      size={20}
                      color="#FFD700"
                      style={styles.sparkleIcon}
                    />
                  </>
                ) : (
                  <Heart
                    size={48}
                    color={theme.colors.light.primary}
                    strokeWidth={1.5}
                  />
                )}
              </View>

              {/* Title */}
              <Text style={styles.emptyTitle}>
                {categoryId === "fav" ? "No Favorites Yet" : "Nothing Here Yet"}
              </Text>

              {/* Description */}
              <Text style={styles.emptyDescription}>
                {categoryId === "fav"
                  ? "Start building your collection by tapping the heart icon on your favorite meditations!"
                  : "No meditations found in this category. Please check back soon for new content!"}
              </Text>

              {/* Action Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.browseButton,
                  pressed && styles.browseButtonPressed,
                ]}
                onPress={() => router.back()}
              >
                <Text style={styles.browseButtonText}>Browse All Sessions</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          filteredMeditations.map((item) => (
            <Pressable
              key={item.id}
              style={styles.sessionItem}
              onPress={() => navigateToSession(item)}
            >
              <ImageBackground
                source={{ uri: item.coverImage }}
                style={styles.sessionImage}
                imageStyle={styles.sessionImageStyle}
              >
                <View
                  style={[
                    styles.playSmall,
                    { backgroundColor: "rgba(255,255,255,0.9)" },
                  ]}
                >
                  <Play
                    size={14}
                    color={theme.colors.light.primary}
                    fill={theme.colors.light.primary}
                  />
                </View>
              </ImageBackground>
              <View style={styles.sessionContent}>
                <Text style={styles.sessionTitleText}>{item.title}</Text>
                <Text style={styles.sessionMetaText}>
                  {item.type} • {item.durationText}
                </Text>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeBadgeText}>{item.difficulty}</Text>
                </View>
              </View>
              <Pressable style={styles.favoriteButton}>
                <Heart size={20} color="#666" />
              </Pressable>
            </Pressable>
          ))
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: theme.spacing.md,
    fontSize: 16,
    color: "#666",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  backButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  headerSpacer: {
    width: 40,
  },
  scrollContent: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  countContainer: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  countText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  sessionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    gap: 16,
  },
  sessionImage: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  sessionImageStyle: {
    borderRadius: 16,
  },
  playSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  sessionContent: {
    flex: 1,
    justifyContent: "center",
  },
  sessionTitleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  sessionMetaText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  typeBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  typeBadgeText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  favoriteButton: {
    padding: 8,
  },
  emptyState: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xl * 2,
    alignItems: "center",
  },
  emptyCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 32,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#F5F5F5",
  },
  emptyIconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  sparkleIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 12,
    textAlign: "center",
  },
  emptyDescription: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
  browseButton: {
    backgroundColor: theme.colors.light.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: theme.colors.light.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  browseButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  browseButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "600",
  },
});
