import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import {
  Cloud,
  Compass,
  Heart,
  Mic,
  Moon,
  Play,
  Search,
  Wind
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const categories = [
  { id: '1', name: 'Calm', icon: Wind, color: '#E0F2F1' },
  { id: '2', name: 'Sleep', icon: Moon, color: '#E8EAF6' },
  { id: '3', name: 'Anxiety', icon: Cloud, color: '#FFF3E0' },
  { id: '4', name: 'Focus', icon: Compass, color: '#F3E5F5' },
];

const featuredMeditation = {
  title: "Morning Clarity",
  duration: "10 min",
  instructor: "Sarah Jenkins",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
  type: "Guided"
};

const meditations = [
  {
    id: '1',
    title: "Deep Breathing Focus",
    duration: "5 min",
    instructor: "Michael Chen",
    type: "Technique",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400"
  },
  {
    id: '2',
    title: "Pre-Sleep Relaxation",
    duration: "15 min",
    instructor: "Elena Rae",
    type: "Sleep",
    image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?w=400"
  },
  {
    id: '3',
    title: "Mindful Awareness",
    duration: "12 min",
    instructor: "Sarah Jenkins",
    type: "Guided",
    image: "https://images.unsplash.com/photo-1447433589675-4aaa56a4010a?w=400"
  }
];

export default function MeditationScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('1');

  const navigateToSession = (meditation: any) => {
    router.push({
      pathname: "/(user)/meditation-session",
      params: {
        title: meditation.title,
        instructor: meditation.instructor,
        duration: meditation.duration,
        image: meditation.image
      }
    });
  };

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
        <Pressable style={styles.iconButton}>
          <Search size={22} color="#1A1A1A" strokeWidth={2} />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Featured Section */}
        <Pressable
          style={styles.featuredCard}
          onPress={() => navigateToSession(featuredMeditation)}
        >
          <ImageBackground
            source={{ uri: featuredMeditation.image }}
            style={styles.featuredImage}
            imageStyle={styles.featuredImageStyle}
          >
            <View style={styles.featuredOverlay}>
              <View style={styles.featuredBadge}>
                <Text style={styles.featuredBadgeText}>Daily Pick</Text>
              </View>
              <View>
                <Text style={styles.featuredTitle}>{featuredMeditation.title}</Text>
                <View style={styles.featuredMeta}>
                  <Text style={styles.featuredMetaText}>{featuredMeditation.instructor} • {featuredMeditation.duration}</Text>
                </View>
              </View>
              <View style={styles.playButton}>
                <Play size={24} color="#FFF" fill="#FFF" />
              </View>
            </View>
          </ImageBackground>
        </Pressable>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          >
            {categories.map((cat) => (
              <Pressable
                key={cat.id}
                style={[
                  styles.categoryCard,
                  { backgroundColor: cat.color },
                  selectedCategory === cat.id && styles.categorySelected
                ]}
                onPress={() => setSelectedCategory(cat.id)}
              >
                <cat.icon size={24} color="#1A1A1A" strokeWidth={1.5} />
                <Text style={styles.categoryName}>{cat.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Popular Sessions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Guided Sessions</Text>
            <Pressable>
              <Text style={styles.seeAll}>See All</Text>
            </Pressable>
          </View>

          {meditations.map((item) => (
            <Pressable
              key={item.id}
              style={styles.sessionItem}
              onPress={() => navigateToSession(item)}
            >
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.sessionImage}
                imageStyle={styles.sessionImageStyle}
              >
                <View style={[styles.playSmall, { backgroundColor: 'rgba(255,255,255,0.9)' }]}>
                  <Play size={14} color={theme.colors.light.primary} fill={theme.colors.light.primary} />
                </View>
              </ImageBackground>
              <View style={styles.sessionContent}>
                <Text style={styles.sessionTitleText}>{item.title}</Text>
                <Text style={styles.sessionMetaText}>{item.instructor} • {item.duration}</Text>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeBadgeText}>{item.type}</Text>
                </View>
              </View>
              <Pressable style={styles.favoriteButton}>
                <Heart size={20} color="#666" />
              </Pressable>
            </Pressable>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Quick Access Fab */}
      <Pressable style={styles.fab}>
        <Mic size={24} color="#FFF" strokeWidth={2} />
        <Text style={styles.fabText}>Voice Guide</Text>
      </Pressable>
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
  scrollContent: {
    paddingBottom: theme.spacing.lg,
  },
  featuredCard: {
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.md,
    height: 200,
    borderRadius: theme.radii.md,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  featuredImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  featuredImageStyle: {
    borderRadius: theme.radii.md,
  },
  featuredOverlay: {
    padding: theme.spacing.lg,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featuredBadge: {
    position: 'absolute',
    top: theme.spacing.md,
    left: theme.spacing.lg,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  featuredBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.light.primary,
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 4,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredMetaText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  categorySelected: {
    borderWidth: 2,
    borderColor: theme.colors.light.primary,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  sessionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    gap: 16,
  },
  sessionImage: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessionImageStyle: {
    borderRadius: 16,
  },
  playSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  sessionContent: {
    flex: 1,
    justifyContent: 'center',
  },
  sessionTitleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  sessionMetaText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  typeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  typeBadgeText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  favoriteButton: {
    padding: 8,
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
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
});
