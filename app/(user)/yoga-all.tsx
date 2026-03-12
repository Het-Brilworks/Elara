import YogaSessionCard from "@/components/YogaSessionCard";
import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import { useYogaFavorites } from "@/Firebase/hooks/useFavorites";
import {
    useAllYogaVideos,
    useYogaVideosByTrimester,
} from "@/Firebase/hooks/useYogas";
import { YogaVideo } from "@/types/yoga";
import { getDailyYogaPick } from "@/utils/dailyRecommendations";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React, { useMemo } from "react";
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function YogaAllScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuthState();

  const section = (params.section as string) || "all";
  const trimester = params.trimester as string;

  // Fetch data
  const { data: allVideos, isLoading: isLoadingAll } = useAllYogaVideos();
  const { data: trimesterVideos, isLoading: isLoadingTrimester } =
    useYogaVideosByTrimester(trimester);
  const { data: favoriteIds = [] } = useYogaFavorites(user?.uid);

  // Determine which videos to display
  const { videos, title, subtitle } = useMemo(() => {
    let displayVideos: YogaVideo[] = [];
    let displayTitle = "All Yoga Sessions";
    let displaySubtitle = "Browse all available sessions";

    if (section === "recommended") {
      const dailyPick = allVideos ? getDailyYogaPick(allVideos) : null;
      const otherVideos = allVideos
        ? allVideos.filter((v) => v.id !== dailyPick?.id)
        : [];
      displayVideos = dailyPick ? [dailyPick, ...otherVideos] : otherVideos;
      displayTitle = "Recommended for You";
      displaySubtitle = "Personalized yoga sessions for your journey";
    } else if (section === "favorites") {
      displayVideos = allVideos
        ? allVideos.filter((video) => favoriteIds.includes(video.id))
        : [];
      displayTitle = "Your Favorites";
      displaySubtitle = "Yoga sessions you loved";
    } else if (trimester) {
      displayVideos = trimesterVideos || [];
      const trimesterMap: Record<string, string> = {
        first: "First Trimester",
        second: "Second Trimester",
        third: "Third Trimester",
      };
      displayTitle = trimesterMap[trimester] || "Trimester Sessions";
      displaySubtitle = "Yoga sessions for this stage";
    } else {
      displayVideos = allVideos || [];
    }

    return {
      videos: displayVideos,
      title: displayTitle,
      subtitle: displaySubtitle,
    };
  }, [section, trimester, allVideos, trimesterVideos, favoriteIds]);

  const isLoading = isLoadingAll || isLoadingTrimester;

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
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
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>{subtitle}</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Loading State */}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="large"
              color={theme.colors.light.primary}
            />
            <Text style={styles.loadingText}>Loading yoga sessions...</Text>
          </View>
        )}

        {/* Videos List */}
        {!isLoading && videos.length > 0 && (
          <View style={styles.videosContainer}>
            <Text style={styles.videoCount}>
              {videos.length} session{videos.length !== 1 ? "s" : ""}
            </Text>
            {videos.map((video, index) => (
              <YogaSessionCard
                key={video.id}
                videoId={video.id}
                title={video.title}
                instructor={`with ${video.instructor}`}
                level={video.level}
                type={video.type}
                duration={video.durationText}
                imageUrl={video.thumbnailUrl}
                badge={
                  section === "recommended" && index === 0
                    ? "Daily Pick"
                    : undefined
                }
                onPress={() =>
                  router.push({
                    pathname: "/(user)/yoga-session",
                    params: {
                      videoId: video.id,
                      title: video.title,
                      duration: video.durationText,
                      type: video.type,
                      stage: video.pregnancyStage,
                      youtubeUrl: video.youtubeUrl,
                      description: video.description,
                      instructor: video.instructor,
                      benefits: JSON.stringify(video.benefits),
                    },
                  })
                }
              />
            ))}
          </View>
        )}

        {/* Empty State */}
        {!isLoading && videos.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No yoga sessions found</Text>
            <Text style={styles.emptySubtext}>
              {section === "favorites"
                ? "Start adding sessions to your favorites"
                : "Check back later for new content"}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    gap: theme.spacing.md,
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
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: theme.textStyles.body_medium.fontSize,
    color: "#666",
  },
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.xl * 3,
  },
  loadingText: {
    marginTop: theme.spacing.md,
    fontSize: theme.textStyles.body_medium.fontSize,
    color: "#666",
  },
  videosContainer: {
    paddingHorizontal: theme.spacing.lg,
  },
  videoCount: {
    fontSize: theme.textStyles.body_medium.fontSize,
    fontWeight: "600",
    color: "#666",
    marginBottom: theme.spacing.lg,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.xl * 3,
    paddingHorizontal: theme.spacing.lg,
  },
  emptyText: {
    fontSize: theme.textStyles.title_medium.fontSize,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: theme.spacing.sm,
  },
  emptySubtext: {
    fontSize: theme.textStyles.body_medium.fontSize,
    color: "#666",
    textAlign: "center",
  },
});
