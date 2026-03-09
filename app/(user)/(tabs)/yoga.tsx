import FilterChip from "@/components/FilterChip";
import SmallYogaCard from "@/components/SmallYogaCard";
import YogaSessionCard from "@/components/YogaSessionCard";
import { theme } from "@/constants/theme";
import {
  useAllYogaVideos,
  useYogaVideosByTrimester,
} from "@/Firebase/hooks/useYogas";
import { useRouter } from "expo-router";
import { Infinity, Leaf, Search } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function YogaScreen() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Fetch yoga videos based on filter
  const { data: allVideos, isLoading: isLoadingAll } = useAllYogaVideos();
  const { data: firstTrimesterVideos, isLoading: isLoadingT1 } =
    useYogaVideosByTrimester("first");
  const { data: secondTrimesterVideos, isLoading: isLoadingT2 } =
    useYogaVideosByTrimester("second");
  const { data: thirdTrimesterVideos, isLoading: isLoadingT3 } =
    useYogaVideosByTrimester("third");

  // Get filtered videos based on selected filter
  const displayedVideos = useMemo(() => {
    switch (selectedFilter) {
      case "t1":
        return firstTrimesterVideos || [];
      case "t2":
        return secondTrimesterVideos || [];
      case "t3":
        return thirdTrimesterVideos || [];
      default:
        return allVideos || [];
    }
  }, [
    selectedFilter,
    allVideos,
    firstTrimesterVideos,
    secondTrimesterVideos,
    thirdTrimesterVideos,
  ]);

  const isLoading = isLoadingAll || isLoadingT1 || isLoadingT2 || isLoadingT3;

  // Get recommended videos (first 2)
  const recommendedVideos = useMemo(
    () => displayedVideos.slice(0, 2),
    [displayedVideos],
  );

  // Get second trimester videos for special section
  const secondTrimesterSpecial = useMemo(
    () => secondTrimesterVideos?.slice(0, 3) || [],
    [secondTrimesterVideos],
  );

  // Get more sessions (skip first 2)
  const moreVideos = useMemo(() => displayedVideos.slice(2), [displayedVideos]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBlobLeft} />
      <View style={styles.headerBlobRight} />
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Yoga Library</Text>
          <Text style={styles.subtitle}>Find your flow for today</Text>
        </View>
        <Pressable style={styles.searchButton}>
          <Search size={24} color="#1A1A1A" strokeWidth={2} />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterContainer}
          contentContainerStyle={styles.filterContent}
        >
          <FilterChip
            label="All Stages"
            icon={Infinity}
            selected={selectedFilter === "all"}
            onPress={() => setSelectedFilter("all")}
          />
          <FilterChip
            label="Trimester 1"
            selected={selectedFilter === "t1"}
            onPress={() => setSelectedFilter("t1")}
          />
          <FilterChip
            label="Trimester 2"
            selected={selectedFilter === "t2"}
            onPress={() => setSelectedFilter("t2")}
          />
          <FilterChip
            label="Trimester 3"
            selected={selectedFilter === "t3"}
            onPress={() => setSelectedFilter("t3")}
          />
        </ScrollView>

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

        {/* Recommended for You */}
        {!isLoading && recommendedVideos.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recommended for You</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
            {recommendedVideos.map((video) => (
              <YogaSessionCard
                key={video.id}
                title={video.title}
                instructor={`with ${video.instructor}`}
                level={video.level}
                type={video.type}
                duration={video.durationText}
                imageUrl={video.thumbnailUrl}
                onPress={() =>
                  router.push({
                    pathname: "/(user)/yoga-session",
                    params: {
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

        {/* Second Trimester Focus */}
        {!isLoading && secondTrimesterSpecial.length > 0 && (
          <View style={styles.section}>
            <View style={styles.specialSection}>
              <View style={styles.specialHeader}>
                <View style={styles.specialIconContainer}>
                  <Leaf size={20} color="#FFF" strokeWidth={2} />
                </View>
                <View>
                  <Text style={styles.specialTitle}>
                    Second Trimester Focus
                  </Text>
                  <Text style={styles.specialSubtitle}>
                    Safe movements for weeks 14-27
                  </Text>
                </View>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
              >
                {secondTrimesterSpecial.map((video) => (
                  <SmallYogaCard
                    key={video.id}
                    title={video.title}
                    duration={video.durationText}
                    type={video.type}
                    imageUrl={video.thumbnailUrl}
                    onPress={() =>
                      router.push({
                        pathname: "/(user)/yoga-session",
                        params: {
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
              </ScrollView>
            </View>
          </View>
        )}

        {/* More Sessions */}
        {!isLoading && moreVideos.length > 0 && (
          <View style={styles.section}>
            {moreVideos.map((video) => (
              <YogaSessionCard
                key={video.id}
                title={video.title}
                instructor={`with ${video.instructor}`}
                level={video.level}
                type={video.type}
                duration={video.durationText}
                imageUrl={video.thumbnailUrl}
                onPress={() =>
                  router.push({
                    pathname: "/(user)/yoga-session",
                    params: {
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
        {!isLoading && displayedVideos.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No yoga sessions found</Text>
            <Text style={styles.emptySubtext}>
              Try selecting a different filter
            </Text>
          </View>
        )}

        {/* Bottom spacing for FAB */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Floating Action Button */}
      {/* <Pressable style={styles.fab}>
        <MessageCircle size={24} color="#FFF" strokeWidth={2} />
        <Text style={styles.fabText}>Ask Expert</Text>
      </Pressable> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  headerBlobLeft: {
    position: "absolute",
    left: -40,
    top: 40,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(168, 181, 160, 0.08)",
  },
  headerBlobRight: {
    position: "absolute",
    right: -30,
    top: 80,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(176, 137, 137, 0.08)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  title: {
    fontSize: theme.textStyles.headline_medium.fontSize,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: theme.textStyles.body_medium.fontSize,
    color: "#666",
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  scrollContent: {
    paddingBottom: theme.spacing.lg,
  },
  filterContainer: {
    marginBottom: theme.spacing.lg,
  },
  filterContent: {
    paddingHorizontal: theme.spacing.lg,
  },
  section: {
    marginBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.textStyles.title_large.fontSize,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  seeAll: {
    fontSize: theme.textStyles.label_medium.fontSize,
    fontWeight: "600",
    color: theme.colors.light.primary,
  },
  specialSection: {
    backgroundColor: "#FFF",
    borderRadius: theme.radii.md,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  specialHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  specialIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.light.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  specialTitle: {
    fontSize: theme.textStyles.title_medium.fontSize,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 2,
  },
  specialSubtitle: {
    fontSize: theme.textStyles.body_small.fontSize,
    color: "#666",
  },
  horizontalScroll: {
    marginHorizontal: -theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing.lg,
    right: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.light.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radii.full,
    gap: theme.spacing.sm,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  fabText: {
    fontSize: theme.textStyles.label_large.fontSize,
    fontWeight: "600",
    color: "#FFF",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.xl * 2,
  },
  loadingText: {
    marginTop: theme.spacing.md,
    fontSize: theme.textStyles.body_medium.fontSize,
    color: "#666",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.xl * 2,
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
