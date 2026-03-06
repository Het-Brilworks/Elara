import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import {
  useMeditationFavorites,
  useToggleFavorite,
} from "@/Firebase/hooks/useFavorites";
import {
  useAllMeditations,
  useFeaturedMeditation,
  useMeditationCategories,
} from "@/Firebase/hooks/useMeditations";
import { MeditationAudio } from "@/types/meditation";
import { useRouter } from "expo-router";
import {
  Cloud,
  Compass,
  Heart,
  LayoutGrid,
  Moon,
  Play,
  Search,
  SearchX,
  Sparkles,
  Star,
  Wind,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

// Icon mapping for categories
const iconMap: Record<string, any> = {
  all: LayoutGrid,
  fav: Star,
  wind: Wind,
  moon: Moon,
  brain: Compass,
  sparkles: Cloud,
};

export default function MeditationScreen() {
  const router = useRouter();
  const { user } = useAuthState();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  // Fetch data from Firebase
  const { data: meditations = [], isLoading: meditationsLoading } =
    useAllMeditations();
  const { data: categories = [], isLoading: categoriesLoading } =
    useMeditationCategories();
  const { data: featuredMeditation, isLoading: featuredLoading } =
    useFeaturedMeditation();

  // Fetch favorites
  const { data: favoriteMeditationIds = [] } = useMeditationFavorites(
    user?.uid,
  );
  const toggleFavoriteMutation = useToggleFavorite();

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

  const handleToggleFavorite = (itemId: string, e?: React.TouchEvent | any) => {
    // Prevent navigation when clicking heart
    if (e) {
      e.stopPropagation();
    }

    if (!user?.uid) {
      console.log("User not logged in");
      return;
    }

    toggleFavoriteMutation.mutate({
      userId: user.uid,
      itemId,
      itemType: "meditation",
    });
  };

  const isFavorited = (itemId: string): boolean => {
    return favoriteMeditationIds.includes(itemId);
  };

  // Filter meditations by search query and selected category
  const filteredMeditations = meditations.filter((meditation) => {
    // When searching, only match search terms across all categories
    if (searchQuery) {
      const matchesSearch =
        meditation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        meditation.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        meditation.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        meditation.difficulty.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    }

    // When 'all' category is selected, show ALL meditations regardless of category
    if (selectedCategory === "all") {
      return true;
    }

    // When 'fav' category is selected, show only favorited meditations
    if (selectedCategory === "fav") {
      return favoriteMeditationIds.includes(meditation.id);
    }

    // Otherwise filter by specific category
    return meditation.category === selectedCategory;
  });

  // Debug: Log meditation categories when "all" is selected
  React.useEffect(() => {
    if (selectedCategory === "all" && meditations.length > 0) {
      const categories = meditations.map((m) => m.category);
      const uniqueCategories = [...new Set(categories)];
      console.log("All meditations count:", meditations.length);
      console.log("Unique categories:", uniqueCategories);
      console.log(
        "Category distribution:",
        uniqueCategories
          .map((cat) => `${cat}: ${categories.filter((c) => c === cat).length}`)
          .join(", "),
      );
    }
  }, [selectedCategory, meditations]);

  // Show all meditations when searching or "All" category is selected, otherwise show first 3
  const displayedMeditations =
    searchQuery || selectedCategory === "all"
      ? filteredMeditations
      : filteredMeditations.slice(0, 3);

  // Loading state
  if (meditationsLoading || categoriesLoading) {
    return (
      <SafeAreaView style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={theme.colors.light.primary} />
        <Text style={styles.loadingText}>Loading meditations...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBlobLeft} />
      <View style={styles.headerBlobRight} />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Meditation Hub</Text>
          <Text style={styles.subtitle}>Find your inner peace</Text>
        </View>
        <Pressable
          style={styles.iconButton}
          onPress={() => setShowSearch(!showSearch)}
        >
          <Search size={22} color="#1A1A1A" strokeWidth={2} />
        </Pressable>
      </View>

      {/* Search Bar */}
      {showSearch && (
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#999" strokeWidth={2} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search meditations..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery("")}>
                <Text style={styles.clearButton}>✕</Text>
              </Pressable>
            )}
          </View>
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Featured Section - Hide when searching */}
        {!searchQuery && featuredMeditation && (
          <Pressable
            style={styles.featuredCard}
            onPress={() => navigateToSession(featuredMeditation)}
          >
            <ImageBackground
              source={{ uri: featuredMeditation.coverImage }}
              style={styles.featuredImage}
              imageStyle={styles.featuredImageStyle}
            >
              <View style={styles.featuredBadge}>
                <Text style={styles.featuredBadgeText}>Daily Pick</Text>
              </View>
              <View style={styles.featuredOverlay}>
                <View>
                  <Text style={styles.featuredTitle}>
                    {featuredMeditation.title}
                  </Text>
                  <View style={styles.featuredMeta}>
                    <Text style={styles.featuredMetaText}>
                      {featuredMeditation.type} •{" "}
                      {featuredMeditation.durationText}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.playButton}>
                <Play size={24} color="#FFF" fill="#FFF" />
              </View>
            </ImageBackground>
          </Pressable>
        )}

        {/* Categories - Hide when searching */}
        {!searchQuery && (
          <View style={styles.section}>
            <Text style={styles.categoriessectionTitle}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryList}
            >
              {/* All Category */}
              <Pressable
                style={[
                  styles.categoryCard,
                  { backgroundColor: "#E8F5E9" },
                  selectedCategory === "all" && styles.categorySelected,
                ]}
                onPress={() => setSelectedCategory("all")}
              >
                <LayoutGrid size={24} color="#1A1A1A" strokeWidth={1.5} />
                <Text style={styles.categoryName}>All</Text>
              </Pressable>

              {/* Favorites Category */}
              <Pressable
                style={[
                  styles.categoryCard,
                  { backgroundColor: "#FFF3E0" },
                  selectedCategory === "fav" && styles.categorySelected,
                ]}
                onPress={() => setSelectedCategory("fav")}
              >
                <Star size={24} color="#1A1A1A" strokeWidth={1.5} />
                <Text style={styles.categoryName}>Favorites</Text>
              </Pressable>

              {/* Dynamic Categories from Firebase */}
              {categories.map((cat) => {
                const IconComponent = iconMap[cat.icon] || Wind;
                return (
                  <Pressable
                    key={cat.id}
                    style={[
                      styles.categoryCard,
                      { backgroundColor: cat.color },
                      selectedCategory === cat.id && styles.categorySelected,
                    ]}
                    onPress={() => setSelectedCategory(cat.id)}
                  >
                    <IconComponent
                      size={24}
                      color="#1A1A1A"
                      strokeWidth={1.5}
                    />
                    <Text style={styles.categoryName}>{cat.name}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        )}

        {/* Results Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {searchQuery
                ? `Search Results (${filteredMeditations.length})`
                : selectedCategory === "all"
                  ? `All Sessions (${filteredMeditations.length})`
                  : "Guided Sessions"}
            </Text>
            {!searchQuery && selectedCategory !== "all" && (
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/(user)/meditation-all",
                    params: {
                      category: selectedCategory || "all",
                      categoryName:
                        selectedCategory === "all"
                          ? "All Sessions"
                          : selectedCategory === "fav"
                            ? "Favorites"
                            : categories.find((c) => c.id === selectedCategory)
                                ?.name || "All Sessions",
                    },
                  })
                }
              >
                <Text style={styles.seeAll}>See All</Text>
              </Pressable>
            )}
          </View>

          {displayedMeditations.length === 0 ? (
            <View style={styles.emptyState}>
              <View style={styles.emptyCard}>
                {/* Icon */}
                <View style={styles.emptyIconContainer}>
                  {searchQuery ? (
                    <SearchX
                      size={48}
                      color={theme.colors.light.primary}
                      strokeWidth={1.5}
                    />
                  ) : selectedCategory === "fav" ? (
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
                  {searchQuery
                    ? "No Results Found"
                    : selectedCategory === "fav"
                      ? "No Favorites Yet"
                      : "No Meditations"}
                </Text>

                {/* Description */}
                <Text style={styles.emptyDescription}>
                  {searchQuery
                    ? `We couldn't find any meditations matching "${searchQuery}". Try a different search term.`
                    : selectedCategory === "fav"
                      ? "Start building your collection by tapping the heart icon on your favorite meditations!"
                      : "No meditations found in this category. Check back soon!"}
                </Text>

                {/* Action Button */}
                {(selectedCategory || searchQuery) &&
                  selectedCategory !== "all" && (
                    <Pressable
                      style={({ pressed }) => [
                        styles.resetButton,
                        pressed && styles.resetButtonPressed,
                      ]}
                      onPress={() => {
                        setSelectedCategory("all");
                        setSearchQuery("");
                      }}
                    >
                      <Text style={styles.resetButtonText}>
                        {searchQuery ? "Clear Search" : "Browse All"}
                      </Text>
                    </Pressable>
                  )}
              </View>
            </View>
          ) : (
            displayedMeditations.map((item) => (
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
                <Pressable
                  style={styles.favoriteButton}
                  onPress={(e) => handleToggleFavorite(item.id, e)}
                >
                  <Heart
                    size={20}
                    color={
                      isFavorited(item.id) ? theme.colors.light.primary : "#666"
                    }
                    fill={
                      isFavorited(item.id)
                        ? theme.colors.light.primary
                        : "transparent"
                    }
                    strokeWidth={2}
                  />
                </Pressable>
              </Pressable>
            ))
          )}
        </View>

        <View style={{ height: 100 }} />
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
  headerBlobLeft: {
    position: "absolute",
    left: -40,
    top: 40,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(123, 47, 76, 0.05)",
  },
  headerBlobRight: {
    position: "absolute",
    right: -30,
    top: 80,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(46, 139, 110, 0.05)",
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
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  searchContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1A1A1A",
    padding: 0,
  },
  clearButton: {
    fontSize: 20,
    color: "#999",
    fontWeight: "600",
    paddingHorizontal: 4,
  },
  scrollContent: {
    paddingBottom: 0,
  },
  featuredCard: {
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.md,
    height: 200,
    borderRadius: theme.radii.md,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  featuredImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  featuredImageStyle: {
    borderRadius: theme.radii.md,
  },
  featuredOverlay: {
    padding: theme.spacing.lg,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  featuredBadge: {
    position: "absolute",
    top: theme.spacing.md,
    left: theme.spacing.md,
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    zIndex: 10,
  },
  featuredBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: theme.colors.light.primary,
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 4,
  },
  featuredMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  featuredMetaText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    fontWeight: "500",
  },
  playButton: {
    position: "absolute",
    bottom: theme.spacing.lg,
    right: theme.spacing.lg,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.light.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    marginTop: theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1A1A1A",
    marginHorizontal: theme.spacing.xs,
    marginBottom: theme.spacing.md,
  },
  categoriessectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1A1A1A",
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.light.primary,
  },
  categoryList: {
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  categoryCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  categorySelected: {
    borderWidth: 2,
    borderColor: theme.colors.light.primary,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A1A",
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
    paddingVertical: theme.spacing.xl,
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
    marginBottom: theme.spacing.sm,
  },
  resetButton: {
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
  resetButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  resetButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "600",
  },
  resetFilter: {
    fontSize: 14,
    color: theme.colors.light.primary,
    fontWeight: "600",
  },
});
