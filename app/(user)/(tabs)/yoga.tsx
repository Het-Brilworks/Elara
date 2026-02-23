import FilterChip from "@/components/FilterChip";
import SmallYogaCard from "@/components/SmallYogaCard";
import YogaSessionCard from "@/components/YogaSessionCard";
import { theme } from "@/constants/theme";
import { Infinity, Leaf, MessageCircle, Search } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function YogaScreen() {
  const [selectedFilter, setSelectedFilter] = useState("all");

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
          <Search
            size={24}
            color={theme.colors.dark.primary_text}
            strokeWidth={2}
          />
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

        {/* Recommended for You */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended for You</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <YogaSessionCard
            title="Morning Energy Flow"
            instructor="with Sarah Jenkins"
            level="Beginner"
            type="Vinyasa"
            imageUrl="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
          />
          <YogaSessionCard
            title="Pelvic Floor Strength"
            instructor="with Dr. Amara"
            level="All Levels"
            type="Therapeutic"
            duration="15 min"
            imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400"
          />
        </View>

        {/* Second Trimester Focus */}
        <View style={styles.section}>
          <View style={styles.specialSection}>
            <View style={styles.specialHeader}>
              <View style={styles.specialIconContainer}>
                <Leaf
                  size={20}
                  color={theme.colors.dark.surface}
                  strokeWidth={2}
                />
              </View>
              <View>
                <Text style={styles.specialTitle}>Second Trimester Focus</Text>
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
              <SmallYogaCard
                title="Back Pain Relief"
                duration="12 min"
                type="Gentle"
                imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200"
              />
              <SmallYogaCard
                title="Mindful Connection"
                duration="18 min"
                type="Slow"
                imageUrl="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=200"
              />
              <SmallYogaCard
                title="Hip Opening Flow"
                duration="15 min"
                type="Gentle"
                imageUrl="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=200"
              />
            </ScrollView>
          </View>
        </View>

        {/* More Sessions */}
        <View style={styles.section}>
          <YogaSessionCard
            title="Evening Restorative"
            instructor="with Elena Rae"
            level="Intermediate"
            type="Hatha"
            duration="30 min"
            imageUrl="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400"
          />
        </View>

        {/* Bottom spacing for FAB */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Floating Action Button */}
      <Pressable style={styles.fab}>
        <MessageCircle
          size={24}
          color={theme.colors.dark.surface}
          strokeWidth={2}
        />
        <Text style={styles.fabText}>Ask Expert</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark.background,
  },
  headerBlobLeft: {
    position: "absolute",
    left: -40,
    top: 40,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(140, 153, 133, 0.25)",
  },
  headerBlobRight: {
    position: "absolute",
    right: -30,
    top: 80,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(176, 137, 137, 0.2)",
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
    color: theme.colors.dark.primary_text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: theme.textStyles.body_medium.fontSize,
    color: theme.colors.dark.secondary_text,
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.dark.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.06)",
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
    color: theme.colors.dark.primary_text,
  },
  seeAll: {
    fontSize: theme.textStyles.label_medium.fontSize,
    fontWeight: "600",
    color: theme.colors.dark.primary,
  },
  specialSection: {
    backgroundColor: theme.colors.dark.surface,
    borderRadius: theme.radii.md,
    padding: theme.spacing.lg,
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
    backgroundColor: theme.colors.dark.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  specialTitle: {
    fontSize: theme.textStyles.title_medium.fontSize,
    fontWeight: "600",
    color: theme.colors.dark.primary_text,
    marginBottom: 2,
  },
  specialSubtitle: {
    fontSize: theme.textStyles.body_small.fontSize,
    color: theme.colors.dark.secondary_text,
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
    backgroundColor: theme.colors.dark.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radii.full,
    gap: theme.spacing.sm,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabText: {
    fontSize: theme.textStyles.label_large.fontSize,
    fontWeight: "600",
    color: theme.colors.dark.on_primary,
  },
});
